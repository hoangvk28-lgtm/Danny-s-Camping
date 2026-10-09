export const guideSlug = "best-solar-power-banks-for-backpacking";
export const guideTitle = "2 Best Solar Power Banks For Backpacking in 2026";
export const metaTitle = "Best Solar Power Banks For Backpacking in 2026";
export const metaDescription = "Best solar power banks for backpacking: two light, rugged picks compared on weight, capacity, wireless charging and fast USB-C.";
export const mainKeyword = "best solar power banks for backpacking";
export const introParagraphs = [
  "Few solar banks suit backpacking, because most are bulky bricks with capacity that runs well beyond what a hiker needs. This guide covers the two that stay compact, a 10000mAh bank and a 20000mAh bank, and says plainly that the choice is short.",
  "Both were compared on stated capacity, USB-C output, wireless charging, protection rating and built-in cables. Because the solar panel on any bank this size is a trickle, the real test is how well each pulls its weight on the trail."
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
    "id": "best-solar-power-banks-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLAVOR Solar Power Bank 10",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5115fTyYQrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PHZ9DWD?tag=dannycamping-20",
    "description": "The BLAVOR lists 10000mAh with a 20W USB-C port, and the listing quotes 65 percent on an iPhone 15 in 30 minutes. Qi wireless charging, an IPX5 rating and a lithium-cobalt battery said to have 50 percent more cycles than normal lithium-polymer, and a flame-retardant ABS and PC case.\n\nIt is the smaller and lighter pick, described as the smallest solar charger in its range. It holds half the ERRBBIC's cell and charges faster over the USB-C port.\n\nIt suits a backpacker who counts every ounce and wants a quick phone top-up. IPX5 protection handles splashes on the trail.",
    "specs": [
      "10000mAh, 20W USB-C",
      "IPX5, dustproof",
      "Qi wireless charging"
    ],
    "pros": [
      "Smallest and lightest solar bank listed",
      "20W USB-C fast charge",
      "IPX5 water and dust protection",
      "Lithium-cobalt cells for more cycles"
    ],
    "cons": [
      "10000mAh gives only about two phone charges",
      "Panel is tiny"
    ],
    "bestFor": "Ultralight trail use",
    "take": "The ounce-saver for hikers. Fast USB-C and a rugged shell in a small body.",
    "catch": "Capacity covers only a couple of phone charges on longer trips."
  },
  {
    "id": "best-solar-power-banks-for-backpacking-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "Solar Charger Power Bank 20000mAh",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+rn1PO2NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H153HTD2?tag=dannycamping-20",
    "description": "The ERRBBIC lists 20000mAh described as a solid-state battery, with 15W fast charging, wireless charging and three built-in cables for six devices. A solar panel serves as a safety net for emergencies.\n\nIt carries twice the cell of the BLAVOR and has built-in cables, which the BLAVOR lacks. The 15W port charges a phone to 60 percent in 30 minutes, a little slower than the BLAVOR's 20W port.\n\nIt suits a backpacker on a four- or five-day trip who needs several phone charges. The wireless pad charges earbuds and a watch without extra cables.",
    "specs": [
      "20000mAh, 15W fast charge",
      "3 built-in cables, 6 devices",
      "Wireless pad, solar panel"
    ],
    "pros": [
      "Twice the capacity of the BLAVOR",
      "Three built-in cables",
      "Wireless charging pad",
      "Phone to 60 percent in 30 minutes"
    ],
    "cons": [
      "Heavier than the BLAVOR",
      "15W is slower than 20W"
    ],
    "bestFor": "Multi-day trips",
    "take": "More charges on longer hikes with cables built in.",
    "catch": "More weight in the pack for the extra cell."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and size",
    "description": "Pack weight decides trail value."
  },
  {
    "title": "Capacity",
    "description": "Stated mAh was compared against trip length."
  },
  {
    "title": "Charging speed",
    "description": "USB-C wattage and wireless pads were compared."
  },
  {
    "title": "Protection",
    "description": "IP ratings and shells were compared."
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
          "Weekend, one phone",
          "BLAVOR 10000mAh Compact",
          "Lightest and fastest."
        ],
        [
          "Four- to five-day trip",
          "ERRBBIC 20000mAh Wireless",
          "Twice the cell."
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
          "ERRBBIC 20000mAh Wireless"
        ],
        [
          "$20 to $30",
          "BLAVOR 10000mAh Compact"
        ]
      ]
    }
  },
  {
    "subheading": "Light vs high capacity",
    "cards": [
      {
        "label": "Light",
        "text": "Smaller and faster over USB-C. The BLAVOR 10000mAh Compact fits here."
      },
      {
        "label": "High capacity",
        "text": "More charges and built-in cables. The ERRBBIC 20000mAh Wireless fits here."
      }
    ],
    "note": "Most backpackers on short trips should choose the BLAVOR 10000mAh Compact."
  },
  {
    "subheading": "By Extra",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Built-in cables",
          "ERRBBIC 20000mAh Wireless"
        ],
        [
          "IPX5 rating",
          "BLAVOR 10000mAh Compact"
        ],
        [
          "20W fast port",
          "BLAVOR 10000mAh Compact"
        ]
      ]
    }
  },
  {
    "subheading": "For Thru-Hike Resupply Stops Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A fast USB-C port and a low weight."
      },
      {
        "label": "In this comparison",
        "text": "The BLAVOR 10000mAh Compact lists 20W and the lightest body."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ERRBBIC 20000mAh Wireless if the trip runs longer than a weekend."
      },
      {
        "label": "Save if",
        "text": "Save weight with the BLAVOR 10000mAh Compact on short trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Ounces versus charges",
    "explanation": "Every extra thousand mAh adds weight to a pack. A 10000mAh bank gives about two phone charges and a 20000mAh bank about four. Match capacity to trip days and phone use."
  },
  {
    "criterion": "Solar on the trail",
    "explanation": "A panel on a bank sits in a pack or strapped on the outside. It gives a trickle in direct sun and nothing in the shade. Count on a wall charge before the trail."
  },
  {
    "criterion": "Rain and dust",
    "explanation": "IPX5 resists water jets but does not cover immersion. Pack it in a dry bag in heavy rain. Look for the IP rating."
  },
  {
    "criterion": "Wireless versus cable",
    "explanation": "Wireless pads waste power and charge slowly. Use a cable on the trail and keep wireless for the tent. Check which cables are built in."
  },
  {
    "criterion": "Cold weather",
    "explanation": "Lithium cells lose capacity in the cold. Keep the bank inside a jacket or sleeping bag. Check the listing for operating range."
  }
];

export const faq = [
  {
    "q": "Is a solar power bank good for backpacking?",
    "a": "As a bank, yes. The panel is a trickle. Carry it for the cell, not the panel."
  },
  {
    "q": "How many phone charges do I need?",
    "a": "Roughly one per day. A weekend fits 10000mAh and a week needs more. Add a spare if you use GPS."
  },
  {
    "q": "Can I fly with these?",
    "a": "Both are under common carry-on limits. Pack them in hand luggage. Check airline rules."
  },
  {
    "q": "How do I use the solar panel?",
    "a": "Strap the bank to the outside of the pack in direct sun. It adds a trickle. Do not rely on it."
  },
  {
    "q": "How do I keep it dry?",
    "a": "Use a dry bag or the pack's rain cover. Keep the port cover closed. Dry the bank before charging."
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
