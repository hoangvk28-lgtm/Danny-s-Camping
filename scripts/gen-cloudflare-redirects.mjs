#!/usr/bin/env node
/**
 * Generates public/_redirects, the Cloudflare redirect map that sends every
 * buying guide and informational article on dannycamping.com to its
 * counterpart on rvgearlab.com.
 *
 * Why this exists: the article content moved to RV Gear Lab. This site is now a
 * static export (no Node server, see next.config.ts), so next.config's
 * redirects() does nothing and Cloudflare reads public/_redirects instead.
 *
 * Mapping strategy, in the order Cloudflare applies rules (first match wins):
 *   1. The 23 singular-slug aliases this site used to redirect in next.config
 *      (scripts/.slug-aliases.json), sent straight to the article's final URL.
 *   2. An explicit rule per slug whose silo differs between the two sites, or
 *      that RV Gear Lab does not have at all (MANUAL_TARGETS below).
 *   3. One wildcard rule per shared silo, for the articles that kept both their
 *      slug and their silo. These land on the final URL with no extra hop.
 *   4. A wildcard for the legacy /guide/<slug> form, pointing at RV Gear Lab's
 *      own /guide/<slug>, which self-canonicalizes to the right silo. A single
 *      wildcard cannot know each slug's silo, and these URLs already went
 *      through an internal redirect on this site, so this is not a regression.
 *
 * Usage: node scripts/gen-cloudflare-redirects.mjs [path-to-rvgearlab-checkout]
 */
import fs from "fs";
import path from "path";

const HERE = path.join(import.meta.dirname, "..");
const RV = process.argv[2] ?? path.join(HERE, "..", "RVGearLab");
const TARGET_ORIGIN = "https://www.rvgearlab.com";

// Silos this site uses. RV Gear Lab has all eight under the same names, so an
// article that kept its slug and its silo is covered by a wildcard.
const SHARED_SILOS = [
  "tents-shelter",
  "sleep-gear",
  "camp-kitchen",
  "camp-power",
  "camp-furniture",
  "campsite-gear",
  "packs-hiking",
  "clothing-footwear",
];

// Silos that only exist on RV Gear Lab. A slug that moved into one of these
// needs an explicit rule.
const RV_ONLY_SILOS = [
  "power-electrical",
  "water-plumbing",
  "towing-leveling",
  "rv-care",
  "interior-comfort",
  "camping-travel",
];

const ALL_RV_SILOS = new Set([...SHARED_SILOS, ...RV_ONLY_SILOS]);

// Slugs RV Gear Lab never published. Each maps to the closest guide it does
// have, chosen by hand: the same product at the nearest spec tier, or the
// generic guide covering the same product with the qualifier dropped.
const MANUAL_TARGETS = {
  // Nearest spec tier RV Gear Lab publishes.
  "best-9000-watt-portable-generators": "best-9500-watt-portable-generators",
  "best-350w-portable-solar-panels": "best-300w-portable-solar-panels",
  "best-30000mah-solar-power-banks": "best-26800mah-solar-power-banks",
  "best-42800mah-solar-power-banks": "best-38800mah-solar-power-banks",
  "best-5-person-ultralight-tents": "best-4-person-ultralight-tents",
  "best-15-degree-rectangular-sleeping-bags": "best-10-degree-rectangular-sleeping-bags",
  "best-50-degree-down-sleeping-bags": "best-30-degree-down-sleeping-bags",
  "best-900-fill-down-sleeping-bags": "best-800-fill-down-sleeping-bags",
  // Same temperature rating, nearest bag style.
  "best-50-degree-mummy-sleeping-bags": "best-50-degree-backpacking-sleeping-bags",
  // Qualifier dropped: RV Gear Lab covers the product, not this cut of it.
  "best-truck-tents-for-ford-maverick": "best-truck-tents",
  "best-mens-backpacking-sleeping-bags": "best-backpacking-sleeping-bags",
  "best-mens-camping-sleeping-bags": "best-camping-sleeping-bags",
  "best-mens-synthetic-sleeping-bags": "best-synthetic-sleeping-bags",
  "best-water-purification-tablets-for-survival": "best-water-purification-tablets",
  // A two-person mummy bag is a double bag; RV Gear Lab files it that way.
  "best-2-person-mummy-sleeping-bags": "best-double-sleeping-bags",
  "best-double-mummy-sleeping-bags": "best-double-sleeping-bags",

  // Targets of this site's singular-slug aliases that RV Gear Lab also lacks.
  "best-4-season-tents": "best-4-season-camping-tents",
  "best-base-layers": "best-base-layers-for-cold-weather",
  "best-camping-cots": "best-camping-cots-for-adults",
  "best-down-jackets": "best-down-jackets-under-200",
  "best-fleece-jackets": "best-fleece-jackets-for-winter",
  "best-softshell-jackets": "best-softshell-jacket-under-100",
  "best-sun-shirts": "best-sun-shirts-for-hot-weather",
  "best-ultralight-tents": "best-ultralight-backpacking-tents",

  // No single article is a fair match: RV Gear Lab publishes only gendered cuts
  // of "sun hats", and nothing at all on locator beacons. A value starting with
  // "/" is used as a literal path, so these land on the silo hub that covers the
  // product rather than on an article about the wrong variant.
  "best-sun-hats": "/clothing-footwear",
  "best-personal-locator-beacons": "/packs-hiking",
};

// ─── Parsing ─────────────────────────────────────────────────────────────────
// Both registries are hand-maintained TypeScript literals, so they are read with
// a regex rather than imported: importing would mean compiling the whole 50k-line
// module (and, on this side, pulling in files this build no longer ships).

/** slug -> silo, from a data/guides.ts buying-guide registry. */
function readGuideRegistry(file) {
  const text = fs.readFileSync(file, "utf8");
  const re = /slug:\s*"([^"]+)",\s*\n\s*categorySlug:\s*"([^"]*)",\s*\n\s*subcategorySlug:\s*"([^"]*)"/g;
  const out = new Map();
  for (const [, slug, cat, sub] of text.matchAll(re)) {
    const silo = ALL_RV_SILOS.has(sub) ? sub : ALL_RV_SILOS.has(cat) ? cat : null;
    if (silo) out.set(slug, silo);
  }
  return out;
}

/** slug -> silo, from an informational-guides registry (JSON-style keys). */
function readInformationalRegistry(file) {
  if (!fs.existsSync(file)) return new Map();
  const text = fs.readFileSync(file, "utf8");
  const re = /"slug":\s*"([^"]+)",\s*\n\s*"silo":\s*"([^"]+)"/g;
  return new Map([...text.matchAll(re)].map(([, slug, silo]) => [slug, silo]));
}

function merge(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) out.set(k, v);
  return out;
}

const here = merge(
  readGuideRegistry(path.join(HERE, "data", "guides.ts")),
  readInformationalRegistry(path.join(HERE, "data", "informational-guides.ts")),
  readInformationalRegistry(path.join(HERE, "data", "informational-guides.generated.ts")),
);
const rv = merge(
  readGuideRegistry(path.join(RV, "data", "guides.ts")),
  readInformationalRegistry(path.join(RV, "data", "informational-guides.ts")),
  readInformationalRegistry(path.join(RV, "data", "informational-guides.camping.generated.ts")),
);

if (rv.size === 0) {
  console.error(`No RV Gear Lab registry found under ${RV}. Pass its path as the first argument.`);
  process.exit(1);
}

/** Singular-slug aliases this site used to redirect in next.config.ts. */
const aliasFile = path.join(HERE, "scripts", ".slug-aliases.json");
const aliases = fs.existsSync(aliasFile) ? JSON.parse(fs.readFileSync(aliasFile, "utf8")) : {};

// ─── Build the rule list ─────────────────────────────────────────────────────

/**
 * The article's final URL on RV Gear Lab as a path, or null if unresolvable.
 * A MANUAL_TARGETS value starting with "/" is a literal path (a silo hub),
 * used where no single article is a fair match.
 */
function resolve(slug) {
  const direct = rv.get(slug);
  if (direct) return { path: `/${direct}/${slug}`, exact: true };
  const fallback = MANUAL_TARGETS[slug];
  if (!fallback) return null;
  if (fallback.startsWith("/")) return { path: fallback, exact: false };
  const silo = rv.get(fallback);
  return silo ? { path: `/${silo}/${fallback}`, exact: false } : null;
}

const explicit = [];
const stats = { wildcard: 0, moved: 0, manual: 0, alias: 0, unresolved: [] };

for (const [slug, hereSilo] of [...here].sort(([a], [b]) => (a < b ? -1 : 1))) {
  const target = resolve(slug);
  if (!target) {
    stats.unresolved.push(slug);
    continue;
  }
  if (target.exact && target.path === `/${hereSilo}/${slug}`) {
    // Covered by the silo wildcard below; no explicit rule needed.
    stats.wildcard++;
    continue;
  }
  if (target.exact) stats.moved++;
  else stats.manual++;

  const to = `${TARGET_ORIGIN}${target.path}`;
  // Both URL forms this site served the article at.
  explicit.push(`/${hereSilo}/${slug} ${to} 301`);
  explicit.push(`/guide/${slug} ${to} 301`);
}

const aliasRules = [];
for (const [from, canonical] of Object.entries(aliases).sort(([a], [b]) => (a < b ? -1 : 1))) {
  const target = resolve(canonical);
  if (!target) {
    stats.unresolved.push(`${from} (alias of ${canonical})`);
    continue;
  }
  stats.alias++;
  // The alias was served at the site root and under every silo prefix.
  const to = `${TARGET_ORIGIN}${target.path}`;
  aliasRules.push(`/${from} ${to} 301`);
  aliasRules.push(`/guide/${from} ${to} 301`);
  for (const s of SHARED_SILOS) {
    aliasRules.push(`/${s}/${from} ${to} 301`);
  }
}

const lines = [
  "# Cloudflare redirect map. GENERATED FILE - do not edit by hand.",
  "# Regenerate with: node scripts/gen-cloudflare-redirects.mjs [path-to-rvgearlab-checkout]",
  "#",
  "# Every buying guide and informational article that used to live on this site",
  "# now lives on rvgearlab.com. Cloudflare applies the FIRST matching rule, so",
  "# the per-slug rules below must stay ahead of the wildcards.",
  "",
  `# Singular-slug aliases (${stats.alias}) that next.config.ts used to redirect, sent`,
  "# straight to the article's final URL instead of through a second hop.",
  ...aliasRules,
  "",
  `# Articles whose silo changed on RV Gear Lab (${stats.moved}), plus ${stats.manual} that`,
  "# RV Gear Lab never published and are sent to their closest equivalent.",
  ...explicit,
  "",
  "# Keep this site's own silo hub pages reachable at their canonical path.",
  ...SHARED_SILOS.map((s) => `/${s}/ /${s} 301`),
  "",
  "# The guide index moved too; there is no per-article index here any more.",
  `/guide ${TARGET_ORIGIN}/guide 301`,
  `/guide/all ${TARGET_ORIGIN}/guide 301`,
  "",
  `# Everything else in a shared silo kept its slug and its silo (${stats.wildcard} articles).`,
  ...SHARED_SILOS.map((s) => `/${s}/* ${TARGET_ORIGIN}/${s}/:splat 301`),
  "",
  "# Legacy /guide/<slug> form. RV Gear Lab redirects it to the article's silo.",
  `/guide/* ${TARGET_ORIGIN}/guide/:splat 301`,
  "",
];

const outFile = path.join(HERE, "public", "_redirects");
fs.writeFileSync(outFile, lines.join("\n"));

const staticCount = aliasRules.length + explicit.length + SHARED_SILOS.length + 2;
console.log(`Wrote ${outFile}`);
console.log(`  articles mapped       : ${stats.wildcard + stats.moved + stats.manual}`);
console.log(`    via silo wildcard   : ${stats.wildcard}`);
console.log(`    moved to a new silo : ${stats.moved}`);
console.log(`    hand-mapped         : ${stats.manual}`);
console.log(`  singular-slug aliases : ${stats.alias}`);
console.log(`  static rules          : ${staticCount} (Cloudflare limit 2000)`);
console.log(`  wildcard rules        : ${SHARED_SILOS.length + 1} (Cloudflare limit 100)`);
if (stats.unresolved.length) {
  console.error(`\nUNRESOLVED (${stats.unresolved.length}) - add to MANUAL_TARGETS:`);
  for (const s of stats.unresolved) console.error(`  ${s}`);
  process.exit(1);
}
