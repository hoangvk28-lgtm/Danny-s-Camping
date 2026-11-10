/**
 * One-shot IndexNow submitter for EVERY guide URL on the site.
 *
 * Why this exists: all guide articles are noindex now (lib/seo.ts +
 * the silo [slug] routes) and have been removed from the sitemap. Bing and
 * Yandex only drop a page once they re-crawl it and see the noindex tag, and
 * without a sitemap entry that re-crawl can take months. Pinging every guide
 * URL once makes them re-fetch and de-index far sooner.
 *
 * RUN THIS ONLY AFTER THE NOINDEX BUILD IS LIVE IN PRODUCTION. Pinging before
 * deploy just makes the crawlers re-fetch pages that still say "index, follow"
 * and refresh them in the index, which is the opposite of what you want.
 *
 * Usage:
 *   node scripts/indexnow-all-guides.mjs              # dry run, prints what would be sent
 *   node scripts/indexnow-all-guides.mjs --confirm     # actually submit
 *   node scripts/indexnow-all-guides.mjs --confirm --limit=500
 *
 * IndexNow allows 10,000 URLs/day per host; this site has ~1,600 guides, so a
 * single run fits comfortably. Batches of 1,000 per request keep each POST small.
 */
import { readFileSync } from "fs";

const HOST = "www.dannycamping.com";
const KEY = "3ab9628a5cf24654a12eca699958db28";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const BATCH_SIZE = 1000;

const args = process.argv.slice(2);
const confirmed = args.includes("--confirm");
const limitArg = args.find((a) => a.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity;

// Mirror lib/migrated-silos.ts: a guide's canonical URL is /<silo>/<slug>, and
// every subcategorySlug in data/guides.ts maps to a silo of the same name. If a
// guide ever has a subcategorySlug that is not a silo, fall back to /guide/<slug>.
const SILOS = new Set([
  "tents-shelter",
  "sleep-gear",
  "camp-kitchen",
  "camp-power",
  "camp-furniture",
  "campsite-gear",
  "packs-hiking",
  "clothing-footwear",
]);

const registry = readFileSync("data/guides.ts", "utf8");
const entries = [
  ...registry.matchAll(/slug: "([^"]+)",\s*categorySlug: "([^"]+)",\s*subcategorySlug: "([^"]+)"/g),
].map(([, slug, categorySlug, subcategorySlug]) => ({ slug, categorySlug, subcategorySlug }));

if (entries.length === 0) {
  console.error("Parsed 0 guides out of data/guides.ts - the registry shape changed. Aborting.");
  process.exit(1);
}

const urlList = [
  ...new Set(
    entries.map(({ slug, categorySlug, subcategorySlug }) => {
      const silo = SILOS.has(subcategorySlug) ? subcategorySlug : SILOS.has(categorySlug) ? categorySlug : "guide";
      return `https://${HOST}/${silo}/${slug}`;
    })
  ),
].slice(0, limit);

console.log(`Parsed ${entries.length} guide(s) from the registry.`);
console.log(`Prepared ${urlList.length} URL(s). Sample:`);
for (const u of urlList.slice(0, 5)) console.log(`  ${u}`);
console.log(`  ... (${Math.max(0, urlList.length - 5)} more)`);

if (!confirmed) {
  console.log("\nDry run. Nothing was sent. Re-run with --confirm to submit,");
  console.log("and only once the noindex build is live on production.");
  process.exit(0);
}

let sent = 0;
for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
  const batch = urlList.slice(i, i + BATCH_SIZE);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`FAILED batch ${i / BATCH_SIZE + 1} -- HTTP ${res.status}: ${body}`);
    console.error(`${sent} URL(s) were accepted before this failure.`);
    process.exit(1);
  }
  sent += batch.length;
  console.log(`OK batch ${i / BATCH_SIZE + 1} -- HTTP ${res.status}, ${batch.length} URL(s) (${sent}/${urlList.length})`);
}

console.log(`\nDone. ${sent} URL(s) submitted to Bing + Yandex.`);
