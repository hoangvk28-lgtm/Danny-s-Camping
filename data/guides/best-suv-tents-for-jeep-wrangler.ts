export const guideSlug = "best-suv-tents-for-jeep-wrangler";
export const guideTitle = "2 Best Suv Tents For Jeep Wrangler in 2026";
export const metaTitle = "Best Suv Tents For Jeep Wrangler in 2026";
export const metaDescription = "Best SUV tents for the Jeep Wrangler: a Wrangler-titled arch hatch tent and a 8x8 universal SUV tent compared on size, build and setup.";
export const mainKeyword = "best suv tents for jeep wrangler";
export const introParagraphs = [
  "Only two SUV tents are worth listing for the Wrangler, and they sit at opposite ends of the price scale. One is titled for 1997 to 2020 Wranglers, and the other is a universal 8 by 8 foot SUV tent.",
  "Check your model year and the rear opening style before you order, since a Wrangler's rear gate differs from a typical hatchback. The guide is short on purpose, with few listings that target this exact model."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-suv-tents-for-jeep-wrangler-1",
    "rank": 1,
    "badge": "Best Named Fit",
    "name": "SUV Camping Tent for Jeep Wrangler 1997-2020",
    "price": "$358.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eP6NG28mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHWR9ZMK?tag=dannycamping-20",
    "description": "The OYZUOAU is titled for the Jeep Wrangler 1997 to 2020 and is an arch-style rear tent with water-resistant fabric and a removable rainfly. It has two side doors and one front door, and it can attach to the vehicle or stand on its own.\n\nIt is the only pick that names the Wrangler. The VEVOR is a universal tent with a bigger stated capacity and a much lower price.\n\nIt suits Wrangler owners who want a rear annex with three entries. The foldable frame packs for travel.",
    "specs": [
      "Titled for Wrangler 1997 to 2020",
      "Arch frame, removable rainfly",
      "Three doors"
    ],
    "pros": [
      "Names the Wrangler and its years",
      "Three doors for airflow and access",
      "Removable rainfly",
      "Works attached or stand-alone"
    ],
    "cons": [
      "Costs about four times the VEVOR",
      "Water-resistant, not rated waterproof"
    ],
    "bestFor": "Wrangler owners wanting a named fit",
    "take": "The Wrangler-titled arch tent with three doors.",
    "catch": "The listing calls the fabric water-resistant, so expect light rain only."
  },
  {
    "id": "best-suv-tents-for-jeep-wrangler-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "VEVOR SUV Camping Tent",
    "price": "$88.11",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VVVPqg99L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5JGHMQY?tag=dannycamping-20",
    "description": "The VEVOR is an 8 by 8 foot SUV tent that attaches to a hatchback or stands on its own, with a PU2000mm double layer and 9mm fiberglass poles. It has a skylight, high-density mesh windows and a 120g sewn PE floor, and the listing says it holds 6 to 8 people.\n\nIt is the cheapest option here by a wide margin and has a stated waterproof rating. It does not name the Wrangler.\n\nIt suits budget campers who want a large attached shelter. A carry bag is included.",
    "specs": [
      "8x8 ft, PU2000mm double layer",
      "9mm fiberglass poles",
      "Skylight, 120g PE floor"
    ],
    "pros": [
      "Lowest price by far",
      "PU2000mm rating stated",
      "Skylight and mesh windows",
      "Stands alone or attaches"
    ],
    "cons": [
      "Does not name the Wrangler",
      "Universal sleeve may seal loosely"
    ],
    "bestFor": "Budget Wrangler campers",
    "take": "A big, cheap universal tent with a stated waterproof rating.",
    "catch": "Check how the sleeve fits your Wrangler's gate."
  }
];

export const howWeEvaluated = [
  {
    "title": "Named fit",
    "description": "Wrangler mention."
  },
  {
    "title": "Price",
    "description": "Spread."
  },
  {
    "title": "Waterproofing",
    "description": "Stated numbers."
  },
  {
    "title": "Setup",
    "description": "Arch or poles."
  },
  {
    "title": "Attachment",
    "description": "Sleeve style."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Named fit",
          "OYZUOAU Wrangler Arch Tent",
          "Titled for Wrangler."
        ],
        [
          "Lowest price",
          "VEVOR 8x8 SUV Tent",
          "PU2000mm."
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
          "$80 to $90",
          "VEVOR 8x8 SUV Tent"
        ],
        [
          "$350 to $360",
          "OYZUOAU Wrangler Arch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Fitted vs Universal",
    "cards": [
      {
        "label": "Fitted",
        "text": "Names the Wrangler. The OYZUOAU Wrangler Arch Tent."
      },
      {
        "label": "Universal",
        "text": "Cheaper and bigger. The VEVOR 8x8 SUV Tent."
      }
    ],
    "note": "Choose the VEVOR 8x8 SUV Tent for value and the OYZUOAU Wrangler Arch Tent for fit."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Low price",
          "VEVOR 8x8 SUV Tent"
        ],
        [
          "Higher price, named",
          "OYZUOAU Wrangler Arch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Wrangler Owners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A year range that includes yours and a clean seal at the gate."
      },
      {
        "label": "In this comparison",
        "text": "The OYZUOAU Wrangler Arch Tent lists 1997 to 2020."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OYZUOAU Wrangler Arch Tent for a named fit."
      },
      {
        "label": "Save if",
        "text": "Save with the VEVOR 8x8 SUV Tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rear opening shape",
    "explanation": "A Wrangler's rear gate differs from a hatchback, so a universal sleeve may not seal cleanly. Look at the opening on your own vehicle. Check how the listing describes the attachment."
  },
  {
    "criterion": "Model-year range",
    "explanation": "A fitted tent states years, and the OYZUOAU lists 1997 to 2020. A later Wrangler may differ in the gate. Compare your year with the title."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "PU2000mm is a stated rating and water-resistant is not. A rainfly helps in both cases. Look for the PU figure in the title or bullets."
  },
  {
    "criterion": "Stand-alone use",
    "explanation": "A tent that stands alone can serve at camp when the Jeep leaves. This adds flexibility. Look for stand-alone wording on the listing."
  },
  {
    "criterion": "Capacity claim",
    "explanation": "A 6 to 8 person claim describes the footprint, and real comfort is lower. Check the floor size. Compare it with your group."
  }
];

export const faq = [
  {
    "q": "Is there an SUV tent for the Wrangler?",
    "a": "One, the OYZUOAU Wrangler Arch Tent, names it. The VEVOR 8x8 SUV Tent is universal. Check your year and gate."
  },
  {
    "q": "What is the common mistake?",
    "a": "Assuming a hatch tent seals on a Wrangler gate. Look at the opening. The VEVOR 8x8 SUV Tent may need extra straps."
  },
  {
    "q": "Is the named tent worth four times the price?",
    "a": "For fit, maybe. The OYZUOAU Wrangler Arch Tent names your Jeep. The VEVOR 8x8 SUV Tent gives more room for less."
  },
  {
    "q": "How do I set up the arch tent?",
    "a": "Unfold it, place the frame and attach it to the rear opening. The OYZUOAU Wrangler Arch Tent has a removable rainfly. Stake the base."
  },
  {
    "q": "How do I care for these tents?",
    "a": "Dry them before packing and wipe the zippers. Keep the VEVOR 8x8 SUV Tent poles together. Check seams each season."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
