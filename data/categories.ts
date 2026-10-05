export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
  /**
   * Optional list of underlying guide categorySlug/subcategorySlug values this
   * category aggregates. When present, guide matching uses this array instead
   * of a single exact `categorySlug === slug` check. Existing categories that
   * omit this keep their original single-slug matching behavior unchanged.
   */
  matchSlugs?: string[];
}

export const categories: Category[] = [
  {
    slug: "tents-shelter",
    name: "Tents & Shelter",
    description: "Tents, tarps, canopies and screen rooms.",
    shortDescription: "Tents, tarps, canopies and screen rooms.",
    icon: "Tent",
    color: "brand",
    subcategories: ["tents-shelter"],
    matchSlugs: ["tents-shelter"],
  },
  {
    slug: "sleep-gear",
    name: "Sleep Gear",
    description: "Sleeping bags, pads, cots and camp pillows.",
    shortDescription: "Sleeping bags, pads, cots and camp pillows.",
    icon: "Tent",
    color: "brand",
    subcategories: ["sleep-gear"],
    matchSlugs: ["sleep-gear"],
  },
  {
    slug: "camp-kitchen",
    name: "Camp Kitchen",
    description: "Stoves, cookware, coolers and coffee gear.",
    shortDescription: "Stoves, cookware, coolers and coffee gear.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-kitchen"],
    matchSlugs: ["camp-kitchen"],
  },
  {
    slug: "camp-power",
    name: "Camp Power",
    description: "Power stations, generators, solar and power banks.",
    shortDescription: "Power stations, generators, solar and power banks.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-power"],
    matchSlugs: ["camp-power"],
  },
  {
    slug: "camp-furniture",
    name: "Camp Furniture",
    description: "Chairs, tables, stools and hammocks.",
    shortDescription: "Chairs, tables, stools and hammocks.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-furniture"],
    matchSlugs: ["camp-furniture"],
  },
  {
    slug: "campsite-gear",
    name: "Campsite Gear",
    description: "Lanterns, headlamps, GPS and campsite essentials.",
    shortDescription: "Lanterns, headlamps, GPS and campsite essentials.",
    icon: "Tent",
    color: "brand",
    subcategories: ["campsite-gear"],
    matchSlugs: ["campsite-gear"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
