// Topic-first top-level sections for Danny's Camping. Each is a real route
// (e.g. /power-electrical) that lists its guides and hosts /<section>/<slug> pages.

export interface Silo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
}

export const silos: Silo[] = [
  { slug: "tents-shelter", name: "Tents & Shelter", tagline: "Tents, tarps and canopies",
    description: "Guides to backpacking and family tents, tarps, canopies and screen rooms, compared on real floor size, weather ratings, setup time and packed weight." },
  { slug: "sleep-gear", name: "Sleep Gear", tagline: "Sleeping bags, pads and cots",
    description: "Guides to sleeping bags, sleeping pads, air mattresses, cots and camp pillows, matched to temperature ratings, R-values and how you actually camp." },
  { slug: "camp-kitchen", name: "Camp Kitchen", tagline: "Stoves, coolers and camp cooking",
    description: "Guides to camp stoves, cookware, coolers, coffee makers and water gear for cooking well at the campsite or the trailhead." },
  { slug: "camp-power", name: "Camp Power", tagline: "Power stations, generators and solar",
    description: "Guides to portable power stations, quiet generators, solar panels and power banks sized to the devices you run off-grid." },
  { slug: "camp-furniture", name: "Camp Furniture", tagline: "Chairs, tables and campsite comfort",
    description: "Guides to camping chairs, zero gravity loungers, stools, tables and hammocks chosen for weight capacity, packed size and comfort." },
  { slug: "campsite-gear", name: "Campsite Gear", tagline: "Lighting, navigation and campsite essentials",
    description: "Guides to lanterns, headlamps, GPS units, projectors and the campsite essentials that make a weekend outdoors easier." },
  { slug: "packs-hiking", name: "Packs & Hiking", tagline: "Backpacks, navigation and trail gear",
    description: "Guides to backpacking and day packs, trekking poles, GPS units, hiking watches and the trail gear that gets you to camp and back." },
  { slug: "clothing-footwear", name: "Clothing & Footwear", tagline: "Jackets, layers, boots and socks",
    description: "Guides to rain jackets, insulated layers, base layers, hiking boots, trail shoes and socks, compared on warmth, weather protection, fit and weight." },
];

// Kept for compatibility with components that expect aggregate hubs.
export const departmentHubs: Silo[] = [];

export function getSiloBySlug(slug: string): Silo | undefined {
  return silos.find((s) => s.slug === slug) ?? departmentHubs.find((s) => s.slug === slug);
}
