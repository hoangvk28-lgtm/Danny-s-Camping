export const guideSlug = "best-lightweight-mummy-sleeping-bags";
export const guideTitle = "2 Best Lightweight Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Lightweight Mummy Sleeping Bags in 2026";
export const metaDescription = "Best lightweight mummy sleeping bags: a 2.87 lb ripstop backpacking mummy and a wearable mummy with arm zippers, compared on weight, range and fit.";
export const mainKeyword = "best lightweight mummy sleeping bags";
export const introParagraphs = [
  "Few mummy bags on Amazon print an honest weight, and only two listings here pair a mummy cut with a stated weight and temperature range. This is a short guide, and one of its two picks is lightweight only by the standards of a wearable camp bag.",
  "The first is a ripstop nylon backpacking mummy that states 2.87 lb, and the second is a 4.4 lb wearable bag you can walk around in. Read the verdicts to decide whether you value low weight or camp convenience."
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
    "id": "best-lightweight-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Nature Link Lightweight Mummy Sleeping Bag 2.87lbs",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319F9kyHxgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D12GY1RL?tag=dannycamping-20",
    "description": "Nature Link prints 2.87 lb for this mummy and gives a comfortable range of 42 to 55F. The shell is 20D ripstop nylon that is water repellent and the lining is 20D nylon, with 300 g/m2 imitation silk cotton insulation inside.\n\nAt 2.87 lb it carries a pound and a half less than the Sportneer, and the 86.6 by 29.5 inch cut fits regular to tall sleepers. A roomy foot box has added insulation, and the whole bag is machine washable.\n\nIt is a good match for hikers after a long, light mummy in mild weather. Fishing and bushcraft trips suit it too.",
    "specs": [
      "2.87 lb, 20D ripstop nylon",
      "42 to 55F comfort range",
      "86.6 x 29.5 inch cut"
    ],
    "pros": [
      "Weight and range both printed",
      "Insulated foot box",
      "Machine washable",
      "Fits regular to tall sleepers"
    ],
    "cons": [
      "Range starts at 42F",
      "Imitation silk cotton fill, not down"
    ],
    "bestFor": "Mild-weather backpacking",
    "take": "A 2.87 lb ripstop nylon mummy with a printed 42 to 55F range and an extra-insulated foot box.",
    "catch": "The 42F low end suits spring through early fall only."
  },
  {
    "id": "best-lightweight-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Wearable Mummy",
    "name": "Sportneer Wearable Sleeping Bag for Adults & Kids",
    "price": "$35.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ulkFGKoHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJ2HRCSG?tag=dannycamping-20",
    "description": "Sportneer shapes its mummy so you can wear it, with zippers at the arms and thermal hollow fiber fill rated for 32 to 65F. The page lists 4.4 lb and a compressed 15.7 by 9.5 inch sack, plus an adjustable hood.\n\nIt carries a pound and a half more than the Nature Link and reaches a lower 32F end of its range. Arm zippers let you free your hands for cooking or reading, so you can walk around camp in it.\n\nIt suits car campers who want a warm layer at the campsite more than the lightest pack. The sack makes it easy to stow.",
    "specs": [
      "Wearable, arm zippers",
      "32 to 65F, hollow fiber",
      "4.4 lb, 15.7 x 9.5 in"
    ],
    "pros": [
      "Arm zippers free your hands",
      "Weight and pack size printed",
      "Colder end of range, 32F",
      "Adjustable hood, snap zipper"
    ],
    "cons": [
      "4.4 lb is heavy for hiking",
      "Bulkier than a standard mummy"
    ],
    "bestFor": "Camp-chair comfort",
    "take": "A wearable mummy with arm zippers, 32 to 65F range, 4.4 lb and a printed pack size.",
    "catch": "At 4.4 lb it is heavy for hiking, so it fits car camps better."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "We compared the weights each listing prints."
  },
  {
    "title": "Temperature range",
    "description": "We read the ranges and compared the cold ends."
  },
  {
    "title": "Fit",
    "description": "We looked at stated dimensions."
  },
  {
    "title": "Fabrics",
    "description": "We compared shells, linings and fill."
  },
  {
    "title": "Use case",
    "description": "We judged each bag for hiking versus camp use."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpacking in mild weather",
          "Nature Link 2.87 lb",
          "2.87 lb, 42 to 55F"
        ],
        [
          "Car camping on cool nights",
          "Sportneer Wearable",
          "32 to 65F and arm zippers"
        ],
        [
          "Tall sleeper",
          "Nature Link 2.87 lb",
          "86.6 inch length"
        ],
        [
          "Camp chair warmth",
          "Sportneer Wearable",
          "Walkable with arm zippers"
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
          "$20 to $30",
          "Nature Link 2.87 lb"
        ],
        [
          "$30 to $40",
          "Sportneer Wearable"
        ]
      ]
    }
  },
  {
    "subheading": "Standard Mummy vs Wearable Mummy",
    "cards": [
      {
        "label": "Standard Mummy",
        "text": "The Nature Link 2.87 lb is a plain, light mummy for sleeping and hiking."
      },
      {
        "label": "Wearable Mummy",
        "text": "The Sportneer Wearable has arm zippers for movement and weighs 4.4 lb."
      }
    ],
    "note": "Choose the Nature Link 2.87 lb for hiking, and the Sportneer Wearable for car camps."
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
          "Lower price",
          "Nature Link 2.87 lb"
        ],
        [
          "Slightly higher price",
          "Sportneer Wearable"
        ]
      ]
    }
  },
  {
    "subheading": "Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed weight and a ripstop shell."
      },
      {
        "label": "In this comparison",
        "text": "The Nature Link 2.87 lb prints 2.87 lb and a 20D ripstop shell."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sportneer Wearable only if you want arm zippers and a colder range."
      },
      {
        "label": "Save if",
        "text": "Save with the Nature Link 2.87 lb for lighter carry and a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Printed weight",
    "explanation": "A mummy bought for lightness has to print its weight. Nature Link lists 2.87 lb and Sportneer 4.4 lb. Prefer listings that give a number."
  },
  {
    "criterion": "Range low end",
    "explanation": "The low end shows how far into the cold you can go. The Nature Link lists 42F and the Sportneer 32F. Match it to your coldest night."
  },
  {
    "criterion": "Shell fabric",
    "explanation": "A 20D ripstop shell is light and resists tears. The Nature Link uses 20D ripstop nylon. Check shell denier on the listing."
  },
  {
    "criterion": "Cut and length",
    "explanation": "Mummy cuts save weight but squeeze. The Nature Link is 86.6 by 29.5 inches. Compare to your height and shoulders."
  },
  {
    "criterion": "Wearable design",
    "explanation": "Arm zippers let you move around camp. The Sportneer has them at the cost of weight. Choose it for camp use."
  }
];

export const faq = [
  {
    "q": "Are there truly lightweight mummy bags on Amazon?",
    "a": "Some, but few print a weight. Check for a number and a ripstop shell."
  },
  {
    "q": "What mistake do buyers make with light mummy bags?",
    "a": "They ignore the temperature range. Check the low end."
  },
  {
    "q": "Is the Sportneer worth it over the Nature Link?",
    "a": "For car camps, yes. For hiking, the Nature Link is lighter."
  },
  {
    "q": "How do I zip a mummy bag?",
    "a": "Pull the hood snug and zip from the inside. Keep fabric clear of the zipper."
  },
  {
    "q": "How do I wash it?",
    "a": "Machine wash gently where allowed. Dry completely before storing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
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
  }
];
