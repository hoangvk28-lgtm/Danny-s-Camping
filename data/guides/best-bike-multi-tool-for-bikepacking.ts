export const guideSlug = "best-bike-multi-tool-for-bikepacking";
export const guideTitle = "3 Best Bike Multi Tool For Bikepacking in 2026";
export const metaTitle = "Best Bike Multi Tool For Bikepacking in 2026";
export const metaDescription = "Best bike multi-tools for bikepacking: three 12 to 19 function tools with chain breakers, compared on tool count, weight and size for a frame bag.";
export const mainKeyword = "best bike multi tool for bikepacking";
export const introParagraphs = [
  "On a bikepacking trip, a multi-tool replaces a repair shop. You carry it in a frame bag or a seat pack and expect it to handle a loose bolt, a bent derailleur hanger or a snapped chain days from town.",
  "Three tools cover that job here, from a 19 function Crankbrothers to a lighter 12 function tool. They are ordered by tool coverage, build and how they pack with the rest of a repair kit."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-bike-multi-tool-for-bikepacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Crankbrothers Multi Tool M 19 Matte Black Red",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413rT0t3CnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0768NKHZ9?tag=dannycamping-20",
    "description": "The Crankbrothers M19 packs hex wrenches in seven sizes from 2 to 8, 8 and 10 mm open wrenches, four spoke wrenches, Philips and flat screwdrivers and Torx T10 and T25 bits. The chain tool works with 8 to 12 speed chains.\n\nIt is the most complete tool in the group, adding Torx bits and side grips designed for gloved hands. It weighs 175 grams and is only 89 mm long.\n\nIt fits bikepackers who want one tool for everything on a multi-day trip. The slim shape fits in a frame bag or seat pack.",
    "specs": [
      "19 tools, 89 mm, 175 g",
      "Chain tool for 8 to 12 speed",
      "Lifetime warranty, side grips"
    ],
    "pros": [
      "19 tools including spoke wrenches",
      "Chain tool fits 8 to 12 speed",
      "Side grips for gloved hands",
      "Lifetime warranty"
    ],
    "cons": [
      "Highest price of the three",
      "Priced well above the NIPNSCI"
    ],
    "bestFor": "Multi-day bikepacking",
    "take": "The most complete tool for long trips. Handles bolts, spokes and chains.",
    "catch": "It weighs more than lighter tools."
  },
  {
    "id": "best-bike-multi-tool-for-bikepacking-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "Vibrelli Bike Multi Tool V19",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41G-YSTPWfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CW3CJRRV?tag=dannycamping-20",
    "description": "The Vibrelli V19 has 19 precision tools including hex 2 to 8, a universal chain breaker, M7 and M9 spoke wrenches and open wrenches. It measures 3 by 2 inches, weighs 6.5 oz, meets MIL-STD 810G and comes with a carry case.\n\nIt matches the M19 on tool count at a lower price and adds a carry case that keeps tools from rattling in a frame bag. Hardened Cr-V steel gives strength.\n\nIt fits bikepackers who want 19 tools without the premium price. The lifetime manufacturer warranty adds peace of mind.",
    "specs": [
      "19 tools, 3 by 2 inches, 6.5 oz",
      "MIL-STD 810G, Cr-V steel",
      "Carry case, lifetime warranty"
    ],
    "pros": [
      "19 tools at a lower price",
      "Carry case included",
      "Hardened Cr-V steel",
      "Lifetime manufacturer warranty"
    ],
    "cons": [
      "Wider body than the M19",
      "Carry case adds bulk"
    ],
    "bestFor": "Value-minded bikepackers",
    "take": "The same tool count as the top pick for less. A solid choice for tours.",
    "catch": "The carry case adds bulk."
  },
  {
    "id": "best-bike-multi-tool-for-bikepacking-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "NIPNSCI Multi-Tool for Road and Mountain Bikes",
    "price": "$12.51",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41y9e3l65hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1773WYQ?tag=dannycamping-20",
    "description": "The NIPNSCI has 12 tools including hex 2 to 8, a universal chain breaker, a Phillips and flat screwdriver and a Torx T25. It measures 3 by 1.6 inches, weighs 6 oz and uses corrosion-resistant carbon steel with non-slip side grips.\n\nIt is the smallest and lowest priced pick, with a chain tool that handles 8 to 12 speed chains. It skips spoke wrenches, which the other two include.\n\nIt fits weekend bikepackers and riders who want a minimal tool. The non-slip grips help in wet weather.",
    "specs": [
      "12 tools, 3 by 1.6 inches",
      "Chain breaker, 8 to 12 speed",
      "Carbon steel, non-slip grips"
    ],
    "pros": [
      "Slim at 3 by 1.6 inches",
      "Light at 6 oz",
      "Chain tool for 8 to 12 speed",
      "Carbon steel resists corrosion"
    ],
    "cons": [
      "No spoke wrench",
      "Only 12 tools"
    ],
    "bestFor": "Short trips",
    "take": "The lightest and cheapest tool here. Enough for weekend trips.",
    "catch": "It has no spoke wrench."
  }
];

export const howWeEvaluated = [
  {
    "title": "Tool coverage",
    "description": "Hex, chain, spoke."
  },
  {
    "title": "Weight",
    "description": "Ounces."
  },
  {
    "title": "Size",
    "description": "Inches."
  },
  {
    "title": "Chain tool",
    "description": "Speed fit."
  },
  {
    "title": "Warranty",
    "description": "Years."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Multi-day tours",
          "Crankbrothers M19",
          "19 tools and lifetime warranty"
        ],
        [
          "Value and carry case",
          "Vibrelli V19",
          "19 tools for less"
        ],
        [
          "Weekend trips",
          "NIPNSCI 12-in-1",
          "12 tools, 6 oz"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "$10 to $20",
          "NIPNSCI 12-in-1"
        ],
        [
          "$20 to $30",
          "Vibrelli V19"
        ],
        [
          "$30 to $40",
          "Crankbrothers M19"
        ]
      ]
    }
  },
  {
    "subheading": "19 Tools vs 12 Tools",
    "cards": [
      {
        "label": "19 Tools",
        "text": "Spoke wrenches and extra bits for remote trips. Crankbrothers M19 and Vibrelli V19."
      },
      {
        "label": "12 Tools",
        "text": "Lighter and cheaper but fewer functions. NIPNSCI 12-in-1."
      }
    ],
    "note": "Most bikepackers should choose Vibrelli V19 or Crankbrothers M19."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Best build",
          "Crankbrothers M19"
        ],
        [
          "Carry case",
          "Vibrelli V19"
        ],
        [
          "Lowest weight",
          "NIPNSCI 12-in-1"
        ],
        [
          "Spoke wrench",
          "Vibrelli V19"
        ]
      ]
    }
  },
  {
    "subheading": "For Remote Bikepacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A chain tool, spoke wrenches and a warranty."
      },
      {
        "label": "In this comparison",
        "text": "Crankbrothers M19 and Vibrelli V19 both include spoke wrenches and chain tools."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Crankbrothers M19 for a lifetime warranty and grips."
      },
      {
        "label": "Save if",
        "text": "Save with NIPNSCI 12-in-1 for short trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tools that matter on a tour",
    "explanation": "Hex wrenches in 2 to 8 mm cover most bolts, and a chain tool saves a trip. A spoke wrench helps with wheels. Check the list of tools, not just the count."
  },
  {
    "criterion": "Chain tool compatibility",
    "explanation": "A chain breaker should fit your chain speed, such as 8 to 12 speed. A mismatched tool can damage the chain. Check the speed range."
  },
  {
    "criterion": "Weight and size",
    "explanation": "Under 200 g is easy to carry, and a slim profile fits a frame bag. Heavy tools add up with spares. Check weight and dimensions."
  },
  {
    "criterion": "Grip and leverage",
    "explanation": "Side grips help in gloves or wet hands. Short tools lack leverage on stuck bolts. Check for grips."
  },
  {
    "criterion": "Steel and corrosion",
    "explanation": "Cr-V and carbon steel resist wear, and finish matters in wet weather. Rusted bits can seize in a bolt head far from a shop. Check the steel type."
  },
  {
    "criterion": "Warranty",
    "explanation": "A lifetime warranty covers defects. A cheap tool that rounds off a bolt can strand you. Check warranty terms before buying."
  }
];

export const faq = [
  {
    "q": "What should a bikepacking multi-tool include?",
    "a": "Hex keys, a chain tool and screwdrivers are the basics. A spoke wrench is a bonus."
  },
  {
    "q": "Is a 19-function tool worth it?",
    "a": "On remote trips, yes. Crankbrothers M19 covers spokes and chains."
  },
  {
    "q": "Can I fix a chain with a multi-tool?",
    "a": "Yes, if it has a chain breaker. Carry a spare link too."
  },
  {
    "q": "Where do I carry the tool?",
    "a": "In a frame bag or seat pack. Vibrelli V19 includes a carry case to stop rattling."
  },
  {
    "q": "How do I maintain a multi-tool?",
    "a": "Wipe it dry after wet rides. Add a drop of oil to the moving parts."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Bike Multi Tool",
    "href": "/campsite-gear/best-bike-multi-tool"
  },
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  }
];
