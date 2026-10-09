export const guideSlug = "best-budget-down-sleeping-bags";
export const guideTitle = "3 Best Budget Down Sleeping Bags in 2026";
export const metaTitle = "Best Budget Down Sleeping Bags in 2026";
export const metaDescription = "Best budget down sleeping bags under about $90 compared on down amount, listed weight, size and an important label mix-up on one popular listing.";
export const mainKeyword = "best budget down sleeping bags";
export const introParagraphs = [
  "Budget down bags are scarce, and only two true down lines pass here. A third popular listing has down in its title but names a synthetic fill in its details, so it is included with a clear warning.",
  "Variants of each line were collapsed. The ranking weighs named down, listed weight and size, shape and any printed ratings."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "QEZER Ultralight Down Sleeping Bag for Adults",
    "price": "$72.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aHNV-6VbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09WY2SDW8?tag=dannycamping-20",
    "description": "The QEZER is a mummy bag with 9.17 oz of 600 fill power duck down, an 84.65 by 32.28 inch size and a stated weight of 1.3 lb. It packs to 9.84 by 5.51 inches in its own compression bag and has 400T tear-resistant nylon shells.\n\nIt lists a roomier length than the short CW295 and prints both weight and pack size. Its price sits at the same level as the Naturehike.\n\nIt suits backpackers who want a light down bag for warm weather. The listing says it suits warm weather.",
    "specs": [
      "9.17 oz of 600FP down",
      "1.3 lb, 9.84 x 5.51 in pack",
      "84.65 x 32.28 inch mummy"
    ],
    "pros": [
      "Real down at 600 fill power",
      "1.3 lb with stated pack size",
      "Wide trapezoidal footbox",
      "400T tear-resistant nylon"
    ],
    "cons": [
      "Warm-weather bag only",
      "No temperature rating printed"
    ],
    "bestFor": "Warm-weather light backpacking",
    "take": "Named down, stated weight and pack size, all at a budget price.",
    "catch": "The listing calls it suited to warm weather, so it is not a cold bag."
  },
  {
    "id": "best-budget-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Down Channels",
    "name": "Naturehike Ultralight Backpacking RDS Down Sleeping Bag for Adults",
    "price": "$71.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51unIgsLyDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4CD1T13?tag=dannycamping-20",
    "description": "The Naturehike is an ultralight RDS down bag with 295 g of duck down in an individual-channel design, a 20D 400T water-repellent nylon shell, and a CW295 weight of 1.3 lb. The CW295 is a short size at 74.8 by 28.3 inches, and the CWM400 is a medium at 78.74 by 31.5 inches.\n\nIt is slightly cheaper than the QEZER and uses independent channels that hold the down in place. It is shorter, so size matters.\n\nIt suits shorter hikers who want a true ultralight down bag at a low price. Check the size chart before ordering.",
    "specs": [
      "295 g of duck down",
      "CW295 1.3 lb",
      "Individual down channels"
    ],
    "pros": [
      "Ultralight at 1.3 lb",
      "Individual channels hold down in place",
      "Water-repellent nylon shell",
      "Stows to 4.7 x 10.2 inches"
    ],
    "cons": [
      "CW295 is a short size",
      "No temperature rating printed"
    ],
    "bestFor": "Shorter ultralight hikers",
    "take": "The lightest, smallest down pack here, for shorter hikers.",
    "catch": "The short CW295 may not fit taller sleepers, so check the size chart."
  },
  {
    "id": "best-budget-down-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Value Warmth",
    "name": "Kelty Mistral Down Sleeping Bag",
    "price": "$89.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312fDAc6daL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT2DY1ZV?tag=dannycamping-20",
    "description": "The Kelty Mistral is a 3 season bag in 20 degree, Long, Women's and 40 degree versions, with an offset quilt pattern and recycled 68D taffeta polyester. The title says 550 fill power down-filled, while the features name Kelty's Cloudloft synthetic insulation.\n\nIt is the only bag here with a stated 20 degree option, and its named fill is a synthetic that handles damp. The 20 degree Long version costs a bit more than the QEZER.\n\nIt suits budget campers who want a cold-class option and accept a mixed label. Ask the seller to clarify the fill first.",
    "specs": [
      "Cloudloft synthetic per features",
      "20 or 40 degree versions",
      "Offset quilt pattern"
    ],
    "pros": [
      "Offered with a 20 degree rating",
      "Offset quilt pattern removes cold spots",
      "Recycled 68D polyester shell",
      "Long and Women's sizes"
    ],
    "cons": [
      "Title says down, features say synthetic",
      "Weight is not stated"
    ],
    "bestFor": "Budget three-season camping",
    "take": "A warm budget bag with a confusing label.",
    "catch": "The listing mixes down and synthetic language, so confirm the fill before relying on it."
  }
];

export const howWeEvaluated = [
  {
    "title": "True down named",
    "description": "Which listings state real down."
  },
  {
    "title": "Stated weight",
    "description": "Weights and pack size."
  },
  {
    "title": "Size",
    "description": "Length and width."
  },
  {
    "title": "Rating",
    "description": "Printed ratings."
  },
  {
    "title": "Label clarity",
    "description": "Title versus feature mismatch."
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
    "subheading": "By Hiker",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Light warm-weather hiking",
          "QEZER 600FP Ultralight Down",
          "1.3 lb, stated pack."
        ],
        [
          "Shorter ultralight",
          "Naturehike CW295 Down",
          "295 g, channels."
        ],
        [
          "Cold-class budget",
          "Kelty Mistral 20F",
          "20 degree option."
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
          "$70 to $80",
          "Naturehike CW295 Down"
        ],
        [
          "$70 to $80",
          "QEZER 600FP Ultralight Down"
        ],
        [
          "$80 to $90",
          "Kelty Mistral 20F"
        ]
      ]
    }
  },
  {
    "subheading": "True Down vs Synthetic Fill",
    "cards": [
      {
        "label": "True down",
        "text": "Lighter, packs small. The QEZER 600FP Ultralight Down and Naturehike CW295 Down name duck down."
      },
      {
        "label": "Synthetic",
        "text": "Heavier, handles damp. The Kelty Mistral 20F names Cloudloft synthetic."
      }
    ],
    "note": "Choose the QEZER 600FP Ultralight Down for true down."
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
          "Near $70",
          "Naturehike CW295 Down"
        ],
        [
          "Near $72",
          "QEZER 600FP Ultralight Down"
        ],
        [
          "Near $80 to $90",
          "Kelty Mistral 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Light Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight under 1.5 lb and named down."
      },
      {
        "label": "In this comparison",
        "text": "The QEZER 600FP Ultralight Down and Naturehike CW295 Down both list 1.3 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Mistral 20F only if you need a stated 20 degree option."
      },
      {
        "label": "Save if",
        "text": "Save with the Naturehike CW295 Down for true down at the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check the fill label",
    "explanation": "A title that says down is not proof of down. The Kelty Mistral title says down-filled while its features name Cloudloft synthetic insulation. Read the feature bullets before buying."
  },
  {
    "criterion": "Down amount",
    "explanation": "Down warmth depends on amount and fill power. The QEZER lists 9.17 oz at 600FP and the Naturehike 295 g. Check both numbers."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "Light down bags save carry weight. The QEZER and Naturehike both list 1.3 lb. Compare packed sizes too."
  },
  {
    "criterion": "Short sizes",
    "explanation": "Some budget down bags come short. The Naturehike CW295 is 74.8 inches. Compare to your height."
  },
  {
    "criterion": "Temperature figures",
    "explanation": "Budget down bags often print no rating. The Kelty Mistral prints 20 and 40 degree options. Treat unrated bags as warm-weather only."
  }
];

export const faq = [
  {
    "q": "Can down cost under $90?",
    "a": "Yes, with limits. The QEZER 600FP Ultralight Down lists 9.17 oz of 600FP duck down. Expect warm-weather use."
  },
  {
    "q": "Is the Kelty Mistral down?",
    "a": "The title says down-filled, but its features name Cloudloft synthetic. Ask the seller before buying."
  },
  {
    "q": "Which is the lightest?",
    "a": "The QEZER 600FP Ultralight Down and Naturehike CW295 Down both list 1.3 lb. The Naturehike stows smaller."
  },
  {
    "q": "How do I care for budget down?",
    "a": "Keep it dry, store it loose and wash it with a down cleaner. Avoid compressing it for months."
  },
  {
    "q": "Is a short size a problem?",
    "a": "For taller hikers, yes. The Naturehike CW295 Down is 74.8 inches long. Check the CWM400 medium."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Back Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-back-sleepers"
  }
];
