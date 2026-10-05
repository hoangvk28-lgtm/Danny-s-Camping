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
    slug: "danny-walker",
    name: "Danny Walker",
    role: "Founder & Lead Editor at Danny\u2019s Camping",
    isPerson: true,
    avatarUrl: "/images/authors/danny-walker.webp",
    bio: "Danny covers camping gear, campsite setup, outdoor power, sleep systems, and practical camping advice, with a focus on helping campers make better gear decisions.",
    longBio:
      "Danny Walker runs Danny\u2019s Camping, which continues the spirit of the original Danny\u2019s Camping Guide: practical gear advice, buying guides and camping know-how for car campers, families, backpackers and overlanders.\n\nHis guides compare products on campsite fit, verified specifications, setup requirements, weight, durability and real trade-offs. He has not personally tested every product listed; where hands-on testing is not available, recommendations are based on verified manufacturer specifications, product documentation, use-case fit and comparative research, and each guide says which.",
    expertise: ["Tents and shelter", "Sleep systems", "Camp kitchen gear", "Portable camp power", "Camp furniture", "Campsite setup"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare verified specifications, campsite fit, setup, weight, durability and real trade-offs, and say plainly what each pick does not do well.",
      independence: "Commission rates never decide which products are recommended or how they are ranked.",
    },
  },
  {
    slug: "dannycamping-editors",
    name: "Danny's Camping Editors",
    role: "Editorial team",
    isPerson: false,
    bio: "The Danny\u2019s Camping editorial desk, led by Danny Walker.",
    longBio: "Guides credited to the Danny\u2019s Camping editorial desk are edited by Danny Walker.",
    expertise: [],
    credentials: [],
    social: [],
    editorial: { process: "", independence: "" },
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
