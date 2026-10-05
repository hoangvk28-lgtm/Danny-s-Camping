// ── Homepage presentation mapping (Danny's Camping) ───────────────────────
// PRESENTATION CONFIG ONLY. Every entry references an EXISTING guide or
// product by slug — nothing here creates records or content. Missing slugs are
// skipped at render time, and a guide is never shown twice on the page.
//
// FALLBACK NOTE: "mostRead" is an editorial selection, not analytics-driven —
// replace with real pageview ranking once a data source exists.

export type ArticleFormat = "Buying Guide" | "Review" | "Explainer" | "Ideas" | "How-To";

export interface HomepageArticleRef {
  slug: string;
  /** Optional eyebrow override; otherwise derived from the guide. */
  format?: ArticleFormat;
}

export const homepageEditorial = {
  /** First slug that exists wins. */
  featured: {
    candidates: ["best-portable-power-stations-for-camping", "best-portable-power-station-for-camping", "best-solar-generators-for-camping"],
    eyebrow: "Featured Guide",
    headline: "The Best Power Stations for Camping",
    dek: "We compare battery capacity, inverter output, ports and solar charging so you can match a power station to the gear you actually run at camp, from phones and lanterns to a CPAP or a small fridge.",
    byline: "Danny's Camping Editors",
  },
  latest: [
    { slug: "best-camping-chairs", format: "Buying Guide" },
    { slug: "best-zero-gravity-chair-for-camping", format: "Buying Guide" },
    { slug: "best-projectors-for-camping", format: "Buying Guide" },
  ] as HomepageArticleRef[],
  mostRead: [
    { slug: "best-quietest-portable-generator-for-camping" },
    { slug: "best-power-banks-for-camping" },
    { slug: "best-camping-chairs-with-lumbar-support" },
    { slug: "best-hammock-camping-chairs" },
    { slug: "best-12v-car-coffee-warmers" },
  ] as HomepageArticleRef[],
  departments: [
    {
      id: "camp-power",
      title: "Camp Power",
      href: "/camp-power",
      topics: ["Power Stations", "Quiet Generators", "Solar Generators", "Power Banks"],
      articles: [
        { slug: "best-portable-power-stations-for-camping", format: "Buying Guide" },
        { slug: "best-quiet-generators-for-camping" },
        { slug: "best-solar-generator-kit-for-camping" },
        { slug: "best-small-portable-generator-for-camping" },
        { slug: "best-portable-power-station-for-cpap-camping" },
      ] as HomepageArticleRef[],
    },
    {
      id: "camp-furniture",
      title: "Camp Furniture",
      href: "/camp-furniture",
      topics: ["Camping Chairs", "Zero Gravity Chairs", "Stools", "Hammock Chairs"],
      articles: [
        { slug: "best-camping-chairs", format: "Buying Guide" },
        { slug: "best-padded-camping-chairs" },
        { slug: "best-swivel-camping-chairs" },
        { slug: "best-mesh-camping-chairs" },
        { slug: "best-tripod-camping-stools" },
      ] as HomepageArticleRef[],
    },
    {
      id: "camp-kitchen",
      title: "Camp Kitchen",
      href: "/camp-kitchen",
      topics: ["Stoves", "Coolers", "Coffee", "Cookware"],
      articles: [
        { slug: "best-12v-car-coffee-warmers" },
      ] as HomepageArticleRef[],
    },
  ],
  workspaceIdeas: {
    title: "Campsite Comfort",
    href: "/camp-furniture",
    articles: [
      { slug: "best-zero-gravity-chair-for-camping", format: "Buying Guide" },
      { slug: "best-camping-chairs-400-lb-capacity" },
      { slug: "best-extra-wide-zero-gravity-chair" },
      { slug: "best-projectors-for-camping" },
    ] as HomepageArticleRef[],
  },
  workBetter: {
    title: "Off-Grid Power",
    href: "/camp-power",
    articles: [
      { slug: "best-solar-generators-for-camping" },
      { slug: "best-portable-solar-generator-for-camping" },
      { slug: "best-power-banks-for-camping" },
      { slug: "best-mini-portable-generator-for-camping" },
    ] as HomepageArticleRef[],
  },
  /** Product-level picks are added once review pages exist. */
  editorsPicksFallback: [] as { slug: string; useCase: string }[],
};

export const shoppingCategories = [
  { icon: "tent", label: "Tents & Shelter", note: "Tents, tarps, canopies", href: "/tents-shelter" },
  { icon: "flame", label: "Sleep Gear", note: "Bags, pads, cots", href: "/sleep-gear" },
  { icon: "drop", label: "Camp Kitchen", note: "Stoves, coolers, coffee", href: "/camp-kitchen" },
  { icon: "battery", label: "Camp Power", note: "Power stations, solar", href: "/camp-power" },
  { icon: "hitch", label: "Camp Furniture", note: "Chairs, tables, hammocks", href: "/camp-furniture" },
  { icon: "wrench", label: "Campsite Gear", note: "Lanterns, headlamps, GPS", href: "/campsite-gear" },
] as const;

export type CategoryIconName = (typeof shoppingCategories)[number]["icon"];
