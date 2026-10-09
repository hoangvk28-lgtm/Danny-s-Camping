export const guideSlug = "best-800-lumens-rechargeable-lanterns";
export const guideTitle = "2 Best 800 Lumens Rechargeable Lanterns in 2026";
export const metaTitle = "Best 800 Lumens Rechargeable Lanterns in 2026";
export const metaDescription = "Two rechargeable camping lanterns that state 800 lumens compared on lumen steps, battery, water rating and weight for tents and camp tables.";
export const mainKeyword = "best 800 lumens rechargeable lanterns";
export const introParagraphs = [
  "Only two rechargeable lanterns clearly state an 800 lumen rating, so this guide is short by design. They take different approaches, one a classic area lantern and the other a 4-in-1 that also works as a flashlight.",
  "They were compared on how the 800 lumens is delivered, battery capacity, charge time, water rating and weight. If you need more choice, the 1000 lumen guide covers a wider field."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-800-lumens-rechargeable-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AlpsWolf Camping Lantern Rechargeable",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417M-0uu0yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08YF4VY7P?tag=dannycamping-20",
    "description": "The AlpsWolf lists 800 lumens, a 3600mAh battery that fully charges in about 3 hours, and an IP65 rating. It works as a lantern, flashlight, spotlight and red strobe, and weighs 0.8 pounds.\n\nIt carries a higher water rating than the Coleman, which lists IPX4, and it costs much less. The 1640 ft range claimed for the spotlight adds a use the Coleman does not.\n\nIt suits campers who want one pack-friendly light that works as lantern and torch. A strap is included in the box.",
    "specs": [
      "800 lumens, 3600mAh, 0.8 lb",
      "4-in-1 lantern and spotlight",
      "IP65, 3 hour charge"
    ],
    "pros": [
      "IP65 water and dust rating",
      "Weighs only 0.8 pounds",
      "Lantern, torch and red strobe",
      "Fast three hour charge"
    ],
    "cons": [
      "Smaller battery than the Coleman",
      "Torch-style body, not a classic lantern"
    ],
    "bestFor": "Light carry with torch use",
    "take": "A light, tough 4-in-1 for less money. The better pick for most campers.",
    "catch": "Its hybrid torch body is not a classic table lantern."
  },
  {
    "id": "best-800-lumens-rechargeable-lanterns-2",
    "rank": 2,
    "badge": "Best Brand",
    "name": "Coleman Classic Rechargeable 800L LED Lantern",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31b-Z8N5EdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HN1BXRG?tag=dannycamping-20",
    "description": "The Coleman Classic has a built-in 4800mAh lithium-ion battery with level indicators. It steps through 100, 300 and 800 lumens, and carries IPX4 water resistance with 1 meter impact resistance.\n\nIt has a larger battery than the AlpsWolf and clear lumen steps for planning runtime. A recognised camp brand sits behind it.\n\nIt suits families who want a classic lantern look with simple three-step control. The level indicators show charge at a glance.",
    "specs": [
      "Up to 800 lumens, 4800mAh",
      "100, 300 and 800 lumen steps",
      "IPX4, 1 m impact resistant"
    ],
    "pros": [
      "Larger 4800mAh battery",
      "Three clear lumen steps",
      "Impact resistant to 1 meter",
      "Battery level indicators"
    ],
    "cons": [
      "Priciest lantern in the guide",
      "IPX4 is lower than the AlpsWolf"
    ],
    "bestFor": "Classic family lantern",
    "take": "A traditional lantern with a bigger battery and clear steps. Pick it for family camps and brand trust.",
    "catch": "It costs much more than the AlpsWolf."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated 800 lumens",
    "description": "We checked which listings state 800 lumens as their peak."
  },
  {
    "title": "Battery and charging",
    "description": "Capacity and charge time were compared."
  },
  {
    "title": "Beam and use",
    "description": "Area lantern versus torch use was compared."
  },
  {
    "title": "Weight and weather",
    "description": "Weight and IP rating were compared."
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
          "Light carry and torch use",
          "AlpsWolf 800LM",
          "0.8 lb with lantern and spotlight modes."
        ],
        [
          "Table lighting for a family",
          "Coleman 800L",
          "Three steps and a larger battery."
        ],
        [
          "Wet weather",
          "AlpsWolf 800LM",
          "IP65 rating."
        ],
        [
          "Brand-name lantern",
          "Coleman 800L",
          "Established camp brand."
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
          "AlpsWolf 800LM"
        ],
        [
          "$50 to $60",
          "Coleman 800L"
        ]
      ]
    }
  },
  {
    "subheading": "Hybrid Torch vs Classic Lantern",
    "cards": [
      {
        "label": "Hybrid",
        "text": "The AlpsWolf 800LM is a 4-in-1 that also throws a spotlight beam."
      },
      {
        "label": "Classic",
        "text": "The Coleman 800L spreads light around a table in a traditional lantern shape."
      }
    ],
    "note": "Choose the AlpsWolf 800LM for hikers and the Coleman 800L for family camp tables."
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
          "Lower cost",
          "AlpsWolf 800LM"
        ],
        [
          "Premium brand",
          "Coleman 800L"
        ]
      ]
    }
  },
  {
    "subheading": "For Family Camp Tables Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A clear lumen step, a battery indicator and even area light."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman 800L lists 100, 300 and 800 lumen steps and level indicators."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman 800L for a bigger battery and a known brand."
      },
      {
        "label": "Save if",
        "text": "Save with the AlpsWolf 800LM, which has a better water rating and lower weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "800 lumens in practice",
    "explanation": "800 lumens fills a tent and lights a table. Most tasks need less. Look for lower steps."
  },
  {
    "criterion": "Lumen steps",
    "explanation": "Fixed steps such as 100, 300 and 800 make runtime easy to plan. Each step trades brightness for hours. Check how many steps the listing names."
  },
  {
    "criterion": "Battery capacity",
    "explanation": "mAh sets runtime. A 4800mAh pack outlasts 3600mAh at the same output. Compare the figures."
  },
  {
    "criterion": "Beam type",
    "explanation": "A lantern spreads light 360 degrees while a spotlight throws a beam. Pick by use. Look for beam wording."
  },
  {
    "criterion": "Weight",
    "explanation": "A 0.8 pound light is easy to pack, while a heavier lantern earns its space only at a car camp. Weight adds up with the rest of the gear. Check weight on the listing."
  },
  {
    "criterion": "Water rating",
    "explanation": "IP65 is dust and jets, IPX4 splashes. Choose by exposure. Read the IP number."
  }
];

export const faq = [
  {
    "q": "Is 800 lumens enough for camping?",
    "a": "Yes for a tent or table. For a full campsite you may want more."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Buying by lumens alone. Battery and steps matter."
  },
  {
    "q": "Is the Coleman worth it over the AlpsWolf?",
    "a": "Choose it for brand and battery. Otherwise the AlpsWolf 800LM costs less."
  },
  {
    "q": "How do I charge it?",
    "a": "Use the USB cable and a power source. Check the manual for time."
  },
  {
    "q": "How do I care for it?",
    "a": "Keep it dry and charged. Store it cool."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
