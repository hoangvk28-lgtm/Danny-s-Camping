export const guideSlug = "best-12-person-dome-tents";
export const guideTitle = "2 Best 12 Person Dome Tents in 2026";
export const metaTitle = "Best 12 Person Dome Tents in 2026";
export const metaDescription = "Best 12-person dome tents compared on listed capacity, setup, floor space and weather build, for large groups choosing between a classic dome and a clear dome.";
export const mainKeyword = "best 12 person dome tents";
export const introParagraphs = [
  "True twelve-person domes barely exist. One listing from Coleman is sold as an 8 or 12 person dome, and the only other is a clear bubble dome whose title gives a size but no person count.",
  "With two picks, this guide says plainly which one states 12 and which one only gives a footprint. They were compared on floor size, setup and weather build."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-12-person-dome-tents-1",
    "rank": 1,
    "badge": "Best Stated 12-Person Dome",
    "name": "Coleman Skydome XL 8/12 Person Camping Tent",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31OSuBCOezL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D96KVD1F?tag=dannycamping-20",
    "description": "The Coleman Skydome XL is sold as an 8 or 12 person dome tent with pre-attached poles and an under five minute setup with two people. The extended interior fits four queen airbeds and adds a room divider, two doors and nearly vertical walls for headroom.\n\nIt is the only pick that names 12 and the only one with a divider. The VEVOR is a clear shelter at a lower price.\n\nIt suits large families who want a classic dome with weather features. The WeatherTec system adds a tub-like floor, welded corners and inverted seams.",
    "specs": [
      "8 or 12 person dome",
      "Fits four queen airbeds",
      "WeatherTec welded corners"
    ],
    "pros": [
      "Names 12 person capacity",
      "Fits four queen airbeds",
      "Divider and two doors",
      "Pre-attached poles"
    ],
    "cons": [
      "Higher price than the VEVOR",
      "Twelve is a maximum"
    ],
    "bestFor": "Big family camping",
    "take": "The only true 12-person dome, with a divider and a proven weather system.",
    "catch": "Real comfort is closer to six."
  },
  {
    "id": "best-12-person-dome-tents-2",
    "rank": 2,
    "badge": "Best Clear Shelter",
    "name": "VEVOR Pop up Bubble Tent",
    "price": "$197.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51wl+7VU5qL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSCKGZBT?tag=dannycamping-20",
    "description": "The VEVOR bubble dome is a pop-up clear tent measuring 12 by 11.1 feet with 540 degree panoramic panels. It has upgraded TPU panels, 300D Oxford, steel-wire and fiberglass support, heat-sealed bonding and dual roll-up windows.\n\nIt costs about 40 percent less than the Coleman and gives a panoramic view. The listing gives a size, not a person count.\n\nIt suits groups who want a clear social space at the campsite. It deploys in minutes.",
    "specs": [
      "12x11.1 ft clear dome",
      "540 degree panorama",
      "300D Oxford, TPU panels"
    ],
    "pros": [
      "Panoramic 540 degree view",
      "Pop-up setup",
      "Heat-sealed and double-stitched",
      "Roll-up windows"
    ],
    "cons": [
      "No person count in the listing",
      "Clear panels heat up in sun"
    ],
    "bestFor": "Social clear shelter",
    "take": "A clear pop-up dome for a large group, sized rather than rated.",
    "catch": "It is better as a lounge than a bedroom."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Stated or implied."
  },
  {
    "title": "Floor size",
    "description": "Length and width."
  },
  {
    "title": "Setup",
    "description": "Time and poles."
  },
  {
    "title": "Weather build",
    "description": "Seams and floor."
  },
  {
    "title": "Privacy",
    "description": "Walls and dividers."
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
    "subheading": "By Group Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Sleeping a big family",
          "Coleman Skydome XL 8/12",
          "Fits four queens."
        ],
        [
          "Social clear space",
          "VEVOR Bubble Dome 12x11",
          "540 degree view."
        ],
        [
          "Privacy",
          "Coleman Skydome XL 8/12",
          "Room divider."
        ],
        [
          "Lower price",
          "VEVOR Bubble Dome 12x11",
          "About 40% less."
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
          "$190 to $200",
          "VEVOR Bubble Dome 12x11"
        ],
        [
          "$320 to $330",
          "Coleman Skydome XL 8/12"
        ]
      ]
    }
  },
  {
    "subheading": "Classic vs Clear",
    "cards": [
      {
        "label": "Classic",
        "text": "Fabric walls give privacy and a divider. The Coleman Skydome XL 8/12 is the example."
      },
      {
        "label": "Clear",
        "text": "Clear panels give a view. The VEVOR Bubble Dome 12x11 is clear."
      }
    ],
    "note": "Take the Coleman Skydome XL 8/12 for sleeping."
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
          "About $200",
          "VEVOR Bubble Dome 12x11"
        ],
        [
          "About $330",
          "Coleman Skydome XL 8/12"
        ],
        [
          "Under $250",
          "VEVOR Bubble Dome 12x11"
        ],
        [
          "Weather",
          "Coleman Skydome XL 8/12"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Families Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named capacity of 12, four queen airbeds and a room divider."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Skydome XL 8/12 states 12 and fits four queens."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman Skydome XL 8/12 for the stated capacity and divider."
      },
      {
        "label": "Save if",
        "text": "Save with the VEVOR Bubble Dome 12x11 if you want a clear lounge."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check what is stated",
    "explanation": "Only one listing states 12. The other gives a footprint. A footprint of 12 by 11 feet holds many but is not rated."
  },
  {
    "criterion": "Think about dividers",
    "explanation": "Dividers give private rooms. Clear domes give none. Read the listing."
  },
  {
    "criterion": "Compare weather builds",
    "explanation": "Welded corners and inverted seams keep floors dry. Heat-sealed panels also help. Look at the build."
  },
  {
    "criterion": "Plan for heat",
    "explanation": "Clear domes warm quickly in sun. Ventilation matters. Read the windows."
  },
  {
    "criterion": "Check setup",
    "explanation": "Pre-attached poles save time. Pop-up bubbles go up in minutes. Choose based on your site."
  }
];

export const faq = [
  {
    "q": "Are there other 12-person domes?",
    "a": "Only these two qualify here. The Coleman names 12, and the VEVOR names a size."
  },
  {
    "q": "What is the common mistake?",
    "a": "Reading capacity as comfort. Plan for six."
  },
  {
    "q": "Is a clear dome good for sleeping?",
    "a": "It gives little privacy and gets warm. It suits lounging."
  },
  {
    "q": "How do I pitch the Coleman?",
    "a": "Two people extend the pre-attached poles and stake. It takes under five minutes."
  },
  {
    "q": "How do I dry a clear dome?",
    "a": "Wipe the panels, air dry and fold loosely. Avoid creases. Store flat."
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
