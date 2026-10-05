export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

export const authors: Author[] = [
  {
    slug: "dannycamping-editors",
    name: "Danny's Camping Editors",
    role: "Editorial team",
    isPerson: false,
    bio: "The Danny's Camping editorial team researches camping gear using published specifications, included hardware, compatibility details and warranty terms.",
    longBio:
      "Danny's Camping publishes buying guides for tents and shelter, sleep gear, camp kitchen, camp power, camp furniture and campsite gear, for car campers, families, backpackers and overlanders.\n\nOur comparisons are based on published specifications, included hardware, compatibility details and warranty terms. We do not claim hands-on testing unless a guide says so explicitly.",
    expertise: ["Tents and shelter", "Sleep systems", "Camp kitchen gear", "Portable camp power"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare published specifications, compatibility, warranty terms and buyer-feedback patterns, and state trade-offs plainly.",
      independence: "Affiliate commissions never decide which products we recommend or how they are ranked.",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
