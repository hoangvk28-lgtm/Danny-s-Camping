export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "Camping Guides",
    href: "/guide",
    children: [
      { label: "Tents & Shelter", href: "/tents-shelter", description: "Tents, tarps and canopies" },
      { label: "Sleep Gear", href: "/sleep-gear", description: "Sleeping bags, pads and cots" },
      { label: "Camp Kitchen", href: "/camp-kitchen", description: "Stoves, coolers and camp cooking" },
      { label: "Camp Power", href: "/camp-power", description: "Power stations, generators and solar" },
      { label: "Camp Furniture", href: "/camp-furniture", description: "Chairs, tables and campsite comfort" },
      { label: "Campsite Gear", href: "/campsite-gear", description: "Lighting, navigation and campsite essentials" },
      { label: "Packs & Hiking", href: "/packs-hiking", description: "Backpacks, navigation and trail gear" },
      { label: "Clothing & Footwear", href: "/clothing-footwear", description: "Jackets, layers, boots and socks" },
    ],
  },
  { label: "How We Review", href: "/how-we-review" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  categories: [
    { label: "Tents & Shelter", href: "/tents-shelter" },
    { label: "Sleep Gear", href: "/sleep-gear" },
    { label: "Camp Kitchen", href: "/camp-kitchen" },
    { label: "Camp Power", href: "/camp-power" },
    { label: "Camp Furniture", href: "/camp-furniture" },
    { label: "Campsite Gear", href: "/campsite-gear" },
    { label: "Packs & Hiking", href: "/packs-hiking" },
    { label: "Clothing & Footwear", href: "/clothing-footwear" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// ── Danny's Camping editorial navigation ──────────────────────────────────
// Primary departments are topical. Reviews / Buying Guides / Deals are content
// formats and live in the secondary nav only.
export const departmentNav: { label: string; href: string; description: string }[] = [
  { label: "Tents & Shelter", href: "/tents-shelter", description: "Tents, tarps and canopies" },
  { label: "Sleep Gear", href: "/sleep-gear", description: "Sleeping bags, pads and cots" },
  { label: "Camp Kitchen", href: "/camp-kitchen", description: "Stoves, coolers and camp cooking" },
  { label: "Camp Power", href: "/camp-power", description: "Power stations, generators and solar" },
  { label: "Camp Furniture", href: "/camp-furniture", description: "Chairs, tables and campsite comfort" },
  { label: "Campsite Gear", href: "/campsite-gear", description: "Lighting, navigation and campsite essentials" },
];

export const secondaryNav: { label: string; href: string }[] = [
  { label: "All Guides", href: "/guide" },
];

export const companyNav: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Editorial Policy", href: "/how-we-review#editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/privacy-policy#terms" },
];
