export const guideSlug = "best-2-person-double-sleeping-bags";
export const guideTitle = "3 Best 2 Person Double Sleeping Bags in 2026";
export const metaTitle = "Best 2 Person Double Sleeping Bags in 2026";
export const metaDescription = "Three queen-size double sleeping bags for two campers: AGEMORE, MEREZA and ShinHye, compared on size, pillows and temperature claims.";
export const mainKeyword = "best 2 person double sleeping bags";
export const introParagraphs = [
  "Three listings qualify as clear two-person double bags in this group: AGEMORE, MEREZA and ShinHye. All three are queen-size rectangular bags with flannel or cotton lining that open flat or split for single use.",
  "Because the list is short, the guide spends more time on how to choose between them: bag dimensions, included pillows and how honestly each listing states its temperature range."
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
    "id": "best-2-person-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag for Camping",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jCUckGCZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRGTSVJL?tag=dannycamping-20",
    "description": "AGEMORE lines this queen-size double with brushed flannel and wraps it in a 210T high-count water-resistant polyester shell. The listing says it was engineered to compress tightly and puff up in use, with a 32 to 59F range.\n\nIt can serve as one extra-large bag or split into two singles because zippers run on both sides. That flexibility, plus the stated range, sets it ahead of the MEREZA, which prints no temperature figure.\n\nA good pick for couples who want a versatile bag for car camping, RV trips and cabin stays. Fold it into the compression sack to save trunk space.",
    "specs": [
      "Flannel interior, 210T shell",
      "32 to 59F design range",
      "Splits into two singles"
    ],
    "pros": [
      "States a clear temperature range",
      "Splits into singles",
      "Water-resistant shell",
      "Compresses tightly"
    ],
    "cons": [
      "No weight printed",
      "Costs more than ShinHye"
    ],
    "bestFor": "Versatile couples",
    "take": "A flannel double with a printed temperature range and a splitting design.",
    "catch": "No weight is printed, and it costs more than the ShinHye."
  },
  {
    "id": "best-2-person-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Softness",
    "name": "MEREZA Flannel Double Sleeping Bag for Adults Cold Weather",
    "price": "$65.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cAQdvba1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1ZTPVC8?tag=dannycamping-20",
    "description": "MEREZA makes this XL queen double from 100% flannel, with OEKO-TEX certified materials and a pillow in the box. The listing says it is large enough for two and suits camping, road trips and sleepovers.\n\nWhere the AGEMORE emphasizes range, this one emphasizes fabric. The OEKO-TEX note matters to buyers with sensitive skin, and the flannel feels soft against the body.\n\nChoose it for couples who care about material feel and certifications. It also suits indoor guests.",
    "specs": [
      "Queen XL double, 100% flannel",
      "OEKO-TEX certified materials",
      "Pillow included"
    ],
    "pros": [
      "OEKO-TEX certified fabrics",
      "Very soft flannel",
      "Pillow included",
      "Large enough for two"
    ],
    "cons": [
      "No temperature figures printed",
      "Bulky for one sleeper"
    ],
    "bestFor": "Sensitive-skin sleepers",
    "take": "A soft flannel double with certified materials and a pillow.",
    "catch": "The listing prints no temperature figures, so check the full product page."
  },
  {
    "id": "best-2-person-double-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "ShinHye Double Sleeping Bag for Adults with 2 Pillows",
    "price": "$47.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41m4pkcR39L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFZ2ZS1B?tag=dannycamping-20",
    "description": "ShinHye sizes this double at 92 x 62 inches, larger than a queen mattress, and compresses it to 17 x 13 inches. The listing adds a Velcro tail at the bottom to block wind, two flannel pillows and a hollow cotton fill.\n\nIt is the widest of the three and the lowest in price. The windproof bottom tail answers a common draft problem in double bags, which neither the AGEMORE nor the MEREZA addresses.\n\nA fit for budget campers who want the largest cut. Open both zippers and it becomes a blanket.",
    "specs": [
      "92 x 62 inch, hollow cotton",
      "Compresses to 17 x 13 in",
      "Velcro windproof bottom tail"
    ],
    "pros": [
      "Widest and longest of the three",
      "Windproof Velcro bottom tail",
      "Two pillows included",
      "Opens into a flat blanket"
    ],
    "cons": [
      "No temperature rating printed",
      "Hollow cotton fill is heavy"
    ],
    "bestFor": "Budget family camping",
    "take": "The widest, lowest-cost double, with pillows and a windproof tail.",
    "catch": "The listing prints no temperature range, so test it on a mild night."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated temperature",
    "description": "We noted which listing prints a range."
  },
  {
    "title": "Size",
    "description": "We compared stated dimensions."
  },
  {
    "title": "Extras",
    "description": "We counted pillows and certifications."
  },
  {
    "title": "Draft design",
    "description": "We looked at bottom and zipper draft features."
  },
  {
    "title": "Price",
    "description": "We compared relative price."
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
          "Clear temperature range",
          "AGEMORE Cotton Flannel Double",
          "32 to 59F stated"
        ],
        [
          "Soft certified fabric",
          "MEREZA Flannel Double",
          "OEKO-TEX certified"
        ],
        [
          "Largest cut at the lowest price",
          "ShinHye Flannel Double 92x62",
          "92 x 62 inches"
        ],
        [
          "Draft-free bottom",
          "ShinHye Flannel Double 92x62",
          "Velcro windproof tail"
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
          "$40 to $50",
          "ShinHye Flannel Double 92x62"
        ],
        [
          "$60 to $70",
          "MEREZA Flannel Double"
        ],
        [
          "$60 to $70",
          "AGEMORE Cotton Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Stated Range vs Soft Fabric",
    "cards": [
      {
        "label": "Stated range",
        "text": "The AGEMORE Cotton Flannel Double prints 32 to 59F."
      },
      {
        "label": "Fabric focus",
        "text": "The MEREZA Flannel Double stresses 100% flannel and OEKO-TEX."
      }
    ],
    "note": "Choose the AGEMORE Cotton Flannel Double for planning and the MEREZA Flannel Double for feel."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "ShinHye Flannel Double 92x62"
        ],
        [
          "Mid price, certified",
          "MEREZA Flannel Double"
        ],
        [
          "Highest price, stated range",
          "AGEMORE Cotton Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Couples Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A queen-plus width and splitting zippers."
      },
      {
        "label": "In this comparison",
        "text": "The ShinHye Flannel Double 92x62 lists 62 inches, and the AGEMORE Cotton Flannel Double lists two-sided zippers."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AGEMORE Cotton Flannel Double for the stated range."
      },
      {
        "label": "Save if",
        "text": "Save with the ShinHye Flannel Double 92x62."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Temperature claims",
    "explanation": "Doubles with a printed range help you plan. One without a figure asks you to guess. Check the full product page."
  },
  {
    "criterion": "Dimensions",
    "explanation": "A queen mattress is about 60 x 80 inches. A double bag should exceed that. Check both width and length."
  },
  {
    "criterion": "Pillows",
    "explanation": "Included pillows save money and vary in quality. A double usually needs two, so a single pillow still leaves you shopping. Check how many come in the box."
  },
  {
    "criterion": "Draft control",
    "explanation": "The bottom of a double often has a gap. A Velcro tail or zipper closes it. Look for it in the listing."
  },
  {
    "criterion": "Lining",
    "explanation": "Flannel feels warm but holds damp. Polyester dries faster. Check the lining named."
  }
];

export const faq = [
  {
    "q": "Are double bags warm enough for cold nights?",
    "a": "Check the printed range. Two sleepers add heat. Add a pad."
  },
  {
    "q": "What mistake do couples make?",
    "a": "They skip a wide pad. The bag then lies on cold ground."
  },
  {
    "q": "Is a double worth it over singles?",
    "a": "A double shares warmth and costs less. Singles seal better."
  },
  {
    "q": "How do I use it as a blanket?",
    "a": "Open both zippers fully and spread it flat. Use a sheet underneath."
  },
  {
    "q": "How do I wash it?",
    "a": "Use a large machine on gentle. Dry fully. Avoid heat."
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
