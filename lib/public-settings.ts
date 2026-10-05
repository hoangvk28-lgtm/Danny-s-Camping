import { isSupabaseConfigured } from "@/lib/supabase/server";
import type {
  HomepageSettings,
  GlobalSettings,
  AffiliateSettings,
  FooterSettings,
} from "@/lib/site-settings-store";

// ── Defaults - match current hardcoded website copy ──────────────────────────

export const DEFAULT_HOMEPAGE_SETTINGS: HomepageSettings = {
  hero: {
    eyebrow: "Camping Gear Guides",
    headline: "Camp smarter. Pack lighter",
    headlineAccent: "with less guesswork.",
    subtitle:
      "Straight-talking comparisons for tents, sleep gear, camp kitchens, camp power, furniture and campsite essentials.",
    primaryCtaText: "Explore Camping Guides",
    primaryCtaHref: "/guide",
    secondaryCtaText: "How We Review",
    secondaryCtaHref: "/how-we-review",
    searchPlaceholder: "What are you shopping for? Camping chairs, power stations, generators…",
    badgeText: "Independent recommendations. Clear trade-offs. No paid rankings.",
    heroImageUrl: "",
    heroImageAlt: "",
    featuredProductSlugs: [],
  },
  trustBar: {
    items: [
      { number: "270", unit: "buying guides", label: "Across six camping sections", description: "Coverage for tents, sleep, kitchen, power, furniture and campsite gear." },
      { number: "6", unit: "departments", label: "Organized around real jobs", description: "Practical recommendations built around trip type, group size, power needs and packed size." },
      { number: "5", unit: "comparison criteria", label: "Applied consistently", description: "Job fit, build quality, ease of use, compatibility and documentation." },
      { number: "1–10", unit: "score scale", label: "Consistent across all products", description: "The same rubric for every product we evaluate - so scores are genuinely comparable across guides." },
    ],
  },
  featuredGuideSlug: "best-portable-power-stations-for-camping",
  sections: {
    guides: {
      title: "Popular Guides",
      description: "Useful product comparisons for real campsites, with clear trade-offs and no paid rankings.",
      limit: 6,
      featuredSlugs: [
        "best-portable-power-stations-for-camping",
        "best-camping-chairs",
        "best-zero-gravity-chair-for-camping",
        "best-quiet-generators-for-camping",
        "best-solar-generators-for-camping",
        "best-projectors-for-camping",
      ],
    },
    deals: {
      title: "Editor Picks",
      description: "Products worth checking right now, curated by value score.",
    },
    categories: {
      title: "Shop by Camp Section",
      description: "Shelter, sleep, kitchen, power, furniture and campsite gear - find the right gear for your trip.",
    },
  },
  newsletter: {
    enabled: true,
    eyebrow: "Seasonal Notes",
    title: "One useful camping tip every week.",
    description:
      "Seasonal jobs, useful tools and a product worth seeing - no spam, paid rankings or fluff.",
    inputPlaceholder: "you@example.com",
    buttonText: "Notify me",
    disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
  },
};

export const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  siteName: "Danny's Camping",
  siteTagline: "Camp smarter. Pack lighter.",
  header: {
    logoText: "Danny's Camping",
    showDealsButton: false,
    dealsButtonText: "All Guides",
  },
};

export const DEFAULT_AFFILIATE_SETTINGS: AffiliateSettings = {
  disclosureShort:
    "Danny's Camping earns a small commission on qualifying Amazon purchases at no extra cost to you.",
  disclosureFull:
    "Danny's Camping is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our editorial opinions are independent and are never influenced by affiliate relationships.",
  disclosureBannerText:
    "We may earn a commission when you buy through Amazon links. Our recommendations are based on published specifications, compatibility, included components and clear comparison criteria.",
  amazonTag: "dannycamping-20", // TODO: replace with the real Amazon Associates tag once approved for this domain
};

export const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  description:
    "Straight-talking camping guides for choosing the right gear the first time.",
  copyrightText: "Danny's Camping. All rights reserved.",
  showAffiliateDisclosure: true,
};

// ── Public helpers with fallback ──────────────────────────────────────────────

async function safeFetch<T>(fetcher: () => Promise<T | null>, fallback: T): Promise<T> {
  if (!isSupabaseConfigured()) return fallback;
  try {
    const result = await fetcher();
    return result ?? fallback;
  } catch (e) {
    console.warn("[public-settings] Supabase error:", (e as Error).message);
    return fallback;
  }
}

export async function getPublicHomepageSettings(): Promise<HomepageSettings> {
  const { getHomepageSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getHomepageSettings, DEFAULT_HOMEPAGE_SETTINGS);
}

export async function getPublicGlobalSettings(): Promise<GlobalSettings> {
  const { getGlobalSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getGlobalSettings, DEFAULT_GLOBAL_SETTINGS);
}

export async function getPublicAffiliateSettings(): Promise<AffiliateSettings> {
  const { getAffiliateSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getAffiliateSettings, DEFAULT_AFFILIATE_SETTINGS);
}

export async function getPublicFooterSettings(): Promise<FooterSettings> {
  const { getFooterSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getFooterSettings, DEFAULT_FOOTER_SETTINGS);
}
