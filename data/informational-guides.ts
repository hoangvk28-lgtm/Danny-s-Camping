
export type InformationalSilo = "tents-shelter" | "sleep-gear" | "camp-kitchen" | "camp-power" | "camp-furniture" | "campsite-gear" | "packs-hiking" | "clothing-footwear";

export interface InformationalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InformationalGuide {
  slug: string;
  silo: InformationalSilo;
  title: string;
  metaTitle: string;
  description: string;
  dek: string;
  directAnswer: string;
  readTime: string;
  lastUpdated: string;
  keyTakeaways: string[];
  sections: InformationalSection[];
  faq: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  related: { title: string; href: string }[];
  /** Full long-form Markdown stored under public/content/informational. */
  contentFile?: string;
  /** Original editorial diagram used for social sharing and in-article context. */
  heroImage?: string;
}


export const informationalGuides: InformationalGuide[] = [
];

export function getInformationalGuide(slug: string) {
  return informationalGuides.find((guide) => guide.slug === slug);
}

export function getInformationalGuidesBySilo(silo: string) {
  return informationalGuides.filter((guide) => guide.silo === silo);
}
