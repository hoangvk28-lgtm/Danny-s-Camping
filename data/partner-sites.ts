/**
 * Partner / network sites.
 *
 * Danny's Camping no longer publishes new commercial content: the catalogue was
 * moved to other properties and every guide article here is noindex (see
 * lib/seo.ts and the silo [slug] routes). The site is kept live as a link asset,
 * so these outbound links are editorial and deliberately dofollow - no
 * rel="nofollow" / rel="sponsored", and no paid-placement language.
 *
 * `tier: "primary"` sites get the extra placements (homepage network section and
 * the silo hub rails) on top of the site-wide footer row; `tier: "standard"`
 * sites appear in the footer only. Order inside each tier is the display order.
 */

export type PartnerTier = "primary" | "standard";

export interface PartnerSite {
  /** Bare host, used as the React key. Always the www host. */
  host: string;
  /** Absolute URL, always https + www. */
  url: string;
  /** Anchor text. Keep these varied - never a single repeated exact-match anchor. */
  label: string;
  /** One line of context shown next to the link on the richer placements. */
  blurb: string;
  tier: PartnerTier;
}

export const partnerSites: PartnerSite[] = [
  {
    host: "www.rvgearlab.com",
    url: "https://www.rvgearlab.com",
    label: "RV Gear Lab",
    blurb: "Road-trip and RV gear guides, compared on real specs.",
    tier: "primary",
  },
  {
    host: "www.theofficejournal.com",
    url: "https://www.theofficejournal.com",
    label: "The Office Journal",
    blurb: "Desks, chairs and office kit for people who work from home.",
    tier: "primary",
  },
  {
    host: "www.worthrated.com",
    url: "https://www.worthrated.com",
    label: "Worth Rated",
    blurb: "Everyday product comparisons, ranked on what actually matters.",
    tier: "primary",
  },
  {
    host: "www.deskfinds.com",
    url: "https://www.deskfinds.com",
    label: "Desk Finds",
    blurb: "Desk setups, accessories and workspace upgrades worth the money.",
    tier: "primary",
  },
  {
    host: "www.machinefanatic.com",
    url: "https://www.machinefanatic.com",
    label: "Machine Fanatic",
    blurb: "Tools, machines and workshop gear explained in plain English.",
    tier: "primary",
  },
  {
    host: "www.primeareviews.com",
    url: "https://www.primeareviews.com",
    label: "Primea Reviews",
    blurb: "Buying guides across the categories people shop most.",
    tier: "primary",
  },
  {
    host: "www.thepcjournal.com",
    url: "https://www.thepcjournal.com",
    label: "The PC Journal",
    blurb: "PC components, peripherals and build advice.",
    tier: "standard",
  },
  {
    host: "www.workcocoon.com",
    url: "https://www.workcocoon.com",
    label: "Work Cocoon",
    blurb: "Home-office comfort, ergonomics and quiet-space ideas.",
    tier: "standard",
  },
  {
    host: "www.gardeningisezee.com",
    url: "https://www.gardeningisezee.com",
    label: "Gardening Is EZ",
    blurb: "Practical gardening gear and grow-your-own guides.",
    tier: "standard",
  },
  {
    host: "www.adulttricyclespro.com",
    url: "https://www.adulttricyclespro.com",
    label: "Adult Tricycles Pro",
    blurb: "Adult trikes and stable-ride cycling gear.",
    tier: "standard",
  },
];

export const primaryPartnerSites = partnerSites.filter((s) => s.tier === "primary");

/**
 * The single highest-priority destination. It is pinned onto every placement
 * that shows fewer sites than the full list, so it never rotates out.
 */
export const PINNED_PARTNER_HOST = "www.rvgearlab.com";

/**
 * Rotate the primary list so different hub pages lead with a different site,
 * instead of every page on the site repeating the same link order. The pinned
 * site is always included, in first position.
 */
export function rotatedPrimaryPartners(seed: string, count = 3): PartnerSite[] {
  const list = primaryPartnerSites;
  if (list.length === 0 || count <= 0) return [];

  const pinned = list.find((s) => s.host === PINNED_PARTNER_HOST);
  const rest = pinned ? list.filter((s) => s.host !== pinned.host) : list;

  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;

  const slots = pinned ? count - 1 : count;
  const rotated =
    rest.length === 0
      ? []
      : Array.from({ length: Math.min(slots, rest.length) }, (_, i) => rest[(hash % rest.length + i) % rest.length]);

  return pinned ? [pinned, ...rotated] : rotated;
}
