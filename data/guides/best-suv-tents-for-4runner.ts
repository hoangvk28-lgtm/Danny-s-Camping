export const guideSlug = "best-suv-tents-for-4runner";
export const guideTitle = "2 Best Suv Tents For 4runner in 2026";
export const metaTitle = "Best Suv Tents For 4runner in 2026";
export const metaDescription = "Best SUV tents for the Toyota 4Runner: a 4Runner-titled hatch tent and a dome tent that lists it, compared on size, setup and weather build.";
export const mainKeyword = "best suv tents for 4runner";
export const introParagraphs = [
  "Only two SUV tents here name the Toyota 4Runner, and they take different approaches. One is a fitted hatch tent for a long model-year range, and the other is a large dome that attaches to many SUVs.",
  "Check your model year against the listed range and look at the rear opening before ordering. The picks differ in size, sleeping capacity and how much of the 4Runner's cargo area they connect to."
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
    "id": "best-suv-tents-for-4runner-1",
    "rank": 1,
    "badge": "Best Fitted Hatch Tent",
    "name": "MWKHZIL SUV Tent for Camping for Toyota 4Runner 1984",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UpLGHbTOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHXH3HSZ?tag=dannycamping-20",
    "description": "The MWKHZIL is titled for the Toyota 4Runner 1984 to present and wraps around the open rear hatch so you can step between the cargo area and the tent. It uses waterproof-coated Oxford fabric, large openings for airflow and a foldable build.\n\nIt is the only pick whose title names the 4Runner and gives a model-year range. The Trekway dome is far larger and costs about half as much.\n\nIt suits 4Runner owners who want a custom-fit rear annex for changing and gear storage. The compact folded size travels easily.",
    "specs": [
      "Titled for 4Runner 1984 to present",
      "Oxford with waterproof coating",
      "Rear hatch attachment"
    ],
    "pros": [
      "Names the 4Runner and its model years",
      "Connects directly to the cargo area",
      "Large openings for airflow",
      "Folds compact for travel"
    ],
    "cons": [
      "Costs about twice the Trekway",
      "No waterproof rating number listed"
    ],
    "bestFor": "4Runner owners wanting a fitted annex",
    "take": "The custom-fit hatch tent for a 4Runner's rear opening.",
    "catch": "Capacity and size are not stated, so check dimensions."
  },
  {
    "id": "best-suv-tents-for-4runner-2",
    "rank": 2,
    "badge": "Best for Big Groups",
    "name": "SUV Dome Tent",
    "price": "$161.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51gcTcji70L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078LHVXFX?tag=dannycamping-20",
    "description": "The Trekway is a 9 by 9 foot dome that lists the 4Runner among its compatible SUVs and sleeps up to 5 adults plus 2 more in the vehicle. It has nearly 7 feet of stand-up height, a 6 by 4 foot awning and a free rainfly.\n\nIt sleeps far more people than the MWKHZIL at roughly half the price. It also works without a vehicle for picnics and campsites.\n\nIt suits families who want a roomy dome tied to their 4Runner. The stand-up height makes changing easy.",
    "specs": [
      "9x9 ft, sleeps up to 5",
      "Nearly 7 ft stand-up height",
      "6x4 ft awning, free rainfly"
    ],
    "pros": [
      "Sleeps five adults plus two in the SUV",
      "Stand-up height inside",
      "Awning and rainfly included",
      "Works with or without a vehicle"
    ],
    "cons": [
      "Generic fit across many SUVs",
      "Larger setup takes more time"
    ],
    "bestFor": "4Runner families",
    "take": "The big-group dome that connects to a 4Runner or stands alone.",
    "catch": "It is a generic sleeve, so check how it seals around your hatch."
  }
];

export const howWeEvaluated = [
  {
    "title": "Named fit",
    "description": "4Runner mention."
  },
  {
    "title": "Capacity",
    "description": "Sleepers."
  },
  {
    "title": "Setup",
    "description": "Hatch or dome."
  },
  {
    "title": "Weather",
    "description": "Fabric."
  },
  {
    "title": "Price",
    "description": "Spread."
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
    "subheading": "By Camp Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Custom-fit rear annex",
          "MWKHZIL 4Runner Hatch Tent",
          "Named for 4Runner."
        ],
        [
          "Family dome with awning",
          "Trekway SUV Dome Tent",
          "9x9 ft, sleeps five."
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
          "$160 to $170",
          "Trekway SUV Dome Tent"
        ],
        [
          "$320 to $330",
          "MWKHZIL 4Runner Hatch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Hatch Annex vs Dome",
    "cards": [
      {
        "label": "Hatch annex",
        "text": "Wraps the rear opening and stays compact. The MWKHZIL 4Runner Hatch Tent."
      },
      {
        "label": "Dome",
        "text": "Larger and stands free. The Trekway SUV Dome Tent."
      }
    ],
    "note": "Choose the Trekway SUV Dome Tent for groups and the MWKHZIL 4Runner Hatch Tent for a tidy fit."
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
          "Lower price",
          "Trekway SUV Dome Tent"
        ],
        [
          "Higher price, named fit",
          "MWKHZIL 4Runner Hatch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For 4Runner Owners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A model-year range that includes your truck."
      },
      {
        "label": "In this comparison",
        "text": "The MWKHZIL 4Runner Hatch Tent lists 1984 to present and the Trekway SUV Dome Tent names the 4Runner."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MWKHZIL 4Runner Hatch Tent for a fitted annex."
      },
      {
        "label": "Save if",
        "text": "Save with the Trekway SUV Dome Tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Model-year range",
    "explanation": "A fitted tent lists model years, and a 4Runner generation can change the hatch shape. Compare your year with the listing's range. Look for dates in the title."
  },
  {
    "criterion": "Hatch fit",
    "explanation": "A 4Runner has a rear gate and window, and a tent must wrap the opening cleanly. A sleeve that does not seal lets wind and bugs in. Look for how the attachment is described."
  },
  {
    "criterion": "Capacity and footprint",
    "explanation": "A 9 by 9 foot dome is far larger than a hatch annex. Pick based on how many people sleep outside the vehicle. Compare the listed floor size."
  },
  {
    "criterion": "Weather rating",
    "explanation": "A waterproof coating number shows how much rain the fabric resists, and a listing with no figure leaves you guessing. A rainfly adds cover where the fabric alone is only water-resistant. Look for a PU number or a rainfly mention."
  },
  {
    "criterion": "Setup time",
    "explanation": "A dome takes longer to pitch than a hatch annex. Plan for your arrival time. Check the pole count and any stated setup time."
  }
];

export const faq = [
  {
    "q": "Is there a tent made for the 4Runner?",
    "a": "Yes, the MWKHZIL 4Runner Hatch Tent is titled for it. The Trekway SUV Dome Tent lists it as compatible. Check your year range."
  },
  {
    "q": "What is the common mistake?",
    "a": "Assuming any SUV tent seals. A generic sleeve may leave gaps. Check how the Trekway SUV Dome Tent attaches."
  },
  {
    "q": "Is the fitted tent worth twice the price?",
    "a": "For a snug rear annex, yes. The MWKHZIL 4Runner Hatch Tent connects to the cargo area. For groups the dome gives more room."
  },
  {
    "q": "How do I set up a hatch tent?",
    "a": "Open the rear hatch, drape the tent around it and secure the straps. The MWKHZIL 4Runner Hatch Tent folds back into its bag. Stake the base on windy days."
  },
  {
    "q": "How do I care for these tents?",
    "a": "Dry them before packing so the coating stays sound. Wipe zippers and check poles on the Trekway SUV Dome Tent. Store loosely."
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
