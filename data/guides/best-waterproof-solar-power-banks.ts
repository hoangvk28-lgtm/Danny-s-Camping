export const guideSlug = "best-waterproof-solar-power-banks";
export const guideTitle = "2 Best Waterproof Solar Power Banks in 2026";
export const metaTitle = "Best Waterproof Solar Power Banks in 2026";
export const metaDescription = "Waterproof solar power banks for camping: one IPX5-rated compact bank and one 20000mAh unit with a waterproof shell, compared side by side.";
export const mainKeyword = "best waterproof solar power banks";
export const introParagraphs = [
  "Few solar banks give a real water-protection claim, so this guide covers the two that do. One lists an IPX5 rating, and the other describes a waterproof, dustproof and shockproof ABS and PC shell without naming a rating.",
  "The two were compared on the water claim each listing makes, capacity, charging speed and built-in cables. The difference between a tested rating and a plain claim is the main thing to weigh."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-waterproof-solar-power-banks-1",
    "rank": 1,
    "badge": "Best Rated Protection",
    "name": "BLAVOR Solar Power Bank 10",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ojDGHzXCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07T2NRK8G?tag=dannycamping-20",
    "description": "The BLAVOR lists IPX5 waterproof, dustproof and shockproof protection with a waterproof silicone seal, a 10000mAh pack, a 20W USB-C port and Qi wireless charging. The case is flame-retardant ABS and PC.\n\nIt is the only pick that names an IP rating, where the GULLVEN gives a general waterproof claim. It holds half the GULLVEN's cell.\n\nIt suits a camper who wants the clearest water-protection claim in a pocket bank. A quick USB-C refill is the main draw.",
    "specs": [
      "10000mAh, IPX5",
      "20W USB-C, Qi wireless",
      "Flame-retardant ABS and PC"
    ],
    "pros": [
      "IPX5 rating is named",
      "20W USB-C charges quickly",
      "Qi wireless included",
      "Silicone seal on the case"
    ],
    "cons": [
      "Only 10000mAh",
      "IPX5 does not cover submersion"
    ],
    "bestFor": "Splash-prone camps",
    "take": "The only bank here with a named IP rating.",
    "catch": "IPX5 handles jets, not submersion."
  },
  {
    "id": "best-waterproof-solar-power-banks-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "GULLVEN Solar Power Bank 20000mAh",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OBE7wxHhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVMH91MK?tag=dannycamping-20",
    "description": "The GULLVEN lists a 20000mAh lithium-polymer cell with UL, CE, FCC, RoHS and UN38.3 certification, and three built-in output cables (Type-C, Lightning, Micro USB) plus a USB-A input cable. Its ABS and PC shell is described as waterproof, dustproof and shockproof, with a camping light and SOS flashlight.\n\nIt holds twice the cell of the BLAVOR and adds built-in cables and a light. It names no IP rating.\n\nIt suits a camper who wants capacity and cables with a water-resistant shell for a lower price. The camping light helps with night errands.",
    "specs": [
      "20000mAh, certified UN38.3",
      "3 built-in output cables",
      "Camping light and SOS"
    ],
    "pros": [
      "Twice the capacity of the BLAVOR",
      "Three built-in output cables",
      "UL, CE, FCC, RoHS certifications",
      "Camping light with SOS"
    ],
    "cons": [
      "No IP rating named",
      "No fast-charge wattage listed"
    ],
    "bestFor": "Capacity with cables",
    "take": "A bigger bank with built-in cables and a light. Treat the water claim as splash protection only.",
    "catch": "Without a rating, keep it out of heavy rain."
  }
];

export const howWeEvaluated = [
  {
    "title": "Water claim",
    "description": "Named IP ratings counted ahead of general claims."
  },
  {
    "title": "Capacity",
    "description": "Stated mAh was compared."
  },
  {
    "title": "Charging speed",
    "description": "USB-C wattage was compared."
  },
  {
    "title": "Cables",
    "description": "Built-in cables were noted."
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
    "subheading": "By Weather",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Rain and splashes",
          "BLAVOR 10000mAh IPX5",
          "Named IPX5 rating."
        ],
        [
          "Mostly dry, bigger cell",
          "GULLVEN 20000mAh Waterproof",
          "20000mAh with cables."
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
          "GULLVEN 20000mAh Waterproof"
        ],
        [
          "$20 to $30",
          "BLAVOR 10000mAh IPX5"
        ]
      ]
    }
  },
  {
    "subheading": "Rated vs claimed",
    "cards": [
      {
        "label": "Rated",
        "text": "A named IP rating is testable. The BLAVOR 10000mAh IPX5 fits here."
      },
      {
        "label": "Claimed",
        "text": "A general waterproof claim gives no test. The GULLVEN 20000mAh Waterproof fits here."
      }
    ],
    "note": "Choose the BLAVOR 10000mAh IPX5 for wet trips."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Clearest water claim",
          "BLAVOR 10000mAh IPX5"
        ],
        [
          "Most capacity",
          "GULLVEN 20000mAh Waterproof"
        ],
        [
          "Built-in cables",
          "GULLVEN 20000mAh Waterproof"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named IP rating and closed ports."
      },
      {
        "label": "In this comparison",
        "text": "The BLAVOR 10000mAh IPX5 names IPX5."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLAVOR 10000mAh IPX5 for the rating."
      },
      {
        "label": "Save if",
        "text": "Save with the GULLVEN 20000mAh Waterproof for capacity."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "IP rating versus a claim",
    "explanation": "IPX5 is a tested rating for water jets, while a waterproof label has no stated test. This matters when rain hits the bank. Look for the IP number."
  },
  {
    "criterion": "What IPX5 does not cover",
    "explanation": "IPX5 does not mean the bank survives being dropped in water. Do not submerge it. Keep it in a dry bag in heavy rain."
  },
  {
    "criterion": "Port covers",
    "explanation": "Ports are the weak spot of any waterproof bank. Keep covers closed. Check the listing mentions covers."
  },
  {
    "criterion": "Solar panel and water",
    "explanation": "The panel sits on the surface and can collect water. Wipe the bank dry before charging. Dry ports before use."
  },
  {
    "criterion": "Capacity versus protection",
    "explanation": "A bigger bank with a loose claim is not as protected as a smaller rated bank. This matters because a loose claim can fail in sustained rain. Choose by the conditions you expect."
  }
];

export const faq = [
  {
    "q": "Is IPX5 waterproof enough for camping?",
    "a": "For rain, yes. It does not cover submersion. Use a dry bag."
  },
  {
    "q": "Can I leave it in the rain?",
    "a": "Not for long. The panel and ports can collect water. Bring it in."
  },
  {
    "q": "What does the GULLVEN claim?",
    "a": "It says waterproof without a rating. Treat it as splash resistant."
  },
  {
    "q": "How do I dry it?",
    "a": "Wipe the case and dry the ports before charging. Do not charge when wet."
  },
  {
    "q": "Does solar charge in rain?",
    "a": "Very little. Plan on a wall charge before the trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
