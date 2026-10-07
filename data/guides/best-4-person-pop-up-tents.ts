export const guideSlug = "best-4-person-pop-up-tents";
export const guideTitle = "3 Best 4 Person Pop Up Tents in 2026";
export const metaTitle = "Best 4 Person Pop Up Tents in 2026";
export const metaDescription = "Best 4 person pop up tents compared on floor size, vestibule, skylight and setup method, for families who want a no-pole pitch.";
export const mainKeyword = "best 4 person pop up tents";
export const introParagraphs = [
  "Four people in a pop-up tent is a snug fit, since listings for this size usually say four in sleeping bags or two to three with gear. The extra value lies with the touches that keep the space usable: a vestibule, a skylight or a taller roof.",
  "Three pop-up tents earn a place here, so each gets a longer look. They differ on floor shape, ceiling height and the way the doors and fabric layers work."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-4-person-pop-up-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Happy Travel 2/4 Person Camping Tent",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GBUS7cyLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C61RH243?tag=dannycamping-20",
    "description": "The Happy Travel 2/4 person tent measures 94.5 by 94.5 by 55 inches when unfolded and, according to the listing, is enough for 3 to 4 people. It pitches with a hydraulic system in about a minute and has two large zipped doors with inner mesh and outer nylon.\n\nIt has the squarest floor of the three, while the Londtren Tent and Rivenlo Tent are 9.2 and 9.5 ft by 6.6 ft rectangles. Sturdy fiberglass poles and zippers that close tightly are named.\n\nIt suits families who want a roomy square floor and a simple pitch. The inner mesh with an outer nylon layer gives privacy options.",
    "specs": [
      "94.5 x 94.5 x 55 in",
      "Hydraulic system, about 1 minute",
      "Two doors, mesh and nylon"
    ],
    "pros": [
      "Roomy square floor for 3 to 4",
      "Two large zipped doors",
      "Pitches within a minute",
      "Inner mesh plus outer nylon layers"
    ],
    "cons": [
      "No waterproof number stated",
      "Page sells 2 and 4 person sizes"
    ],
    "bestFor": "Families wanting a square floor",
    "take": "The roomiest square floor of the three, for a moderate price.",
    "catch": "The page covers 2 and 4 person sizes, so pick the 4."
  },
  {
    "id": "best-4-person-pop-up-tents-2",
    "rank": 2,
    "badge": "Best Vestibule Tent",
    "name": "Pop Up Tents for Camping 4 Person Waterproof Popup Tent Camping Easy Up Camping Tents Instant Four Person Tent",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H4FEDq0aS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08RYX59PY?tag=dannycamping-20",
    "description": "The Londtren 4 Person tent has a 9.2 by 6.6 ft floor and a 4.3 ft center height, with mesh doors at both ends and a vestibule for shoes and wet clothes. The listing counts three or four sleepers in bags, or two or three once gear comes in.\n\nCompared with the Happy Travel Tent it has a smaller floor and adds a vestibule. It is made of 190T polyester with a 110G PE groundsheet, and it is the highest priced of the three.\n\nIt suits campers who want a muddy-boots area and a green, low-profile pitch. The mesh doors give two entries.",
    "specs": [
      "9.2 x 6.6 ft floor",
      "Vestibule, mesh doors",
      "190T polyester, 110G floor"
    ],
    "pros": [
      "Vestibule keeps muddy gear out",
      "Mesh doors front and back",
      "190T polyester body",
      "Sleeps three or four in bags"
    ],
    "cons": [
      "Only 4.3 feet tall",
      "Highest price of the three"
    ],
    "bestFor": "Families who need a shoe porch",
    "take": "A vestibule and double mesh doors for muddy trips.",
    "catch": "Capacity drops to two or three with gear."
  },
  {
    "id": "best-4-person-pop-up-tents-3",
    "rank": 3,
    "badge": "Best Skylight and Value",
    "name": "4 Person Easy Pop Up Tent",
    "price": "$69.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i8mZje6dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJRPRNXY?tag=dannycamping-20",
    "description": "The Rivenlo is a 2 to 4 person pop-up with a 9.5 ft by 6.6 ft floor and a 4.3 ft ridge, plus an overhead skylight and a removable waterproof rainfly. Four mesh windows and two doors provide cross ventilation, and a closable outer layer helps in cold weather.\n\nIt costs the least of the three and gives the skylight neither of the others offers. Its floor matches the Londtren Tent within a few inches.\n\nIt suits budget families who want a view of the sky. The removable fly makes it flexible in warm weather.",
    "specs": [
      "9.5 by 6.6 ft floor",
      "Skylight, removable rainfly",
      "4 mesh windows, 2 doors"
    ],
    "pros": [
      "Overhead skylight for stargazing",
      "Lowest price of the three",
      "Removable waterproof rainfly",
      "Sleeps four in bags"
    ],
    "cons": [
      "No vestibule",
      "2 to 3 people with gear"
    ],
    "bestFor": "Budget families who like the stars",
    "take": "The lowest price with a skylight and a rainfly.",
    "catch": "It lacks a vestibule, so shoes come inside."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor shape",
    "description": "Square or rectangular floor and the stated size."
  },
  {
    "title": "Entries and porch",
    "description": "Door count and vestibule features."
  },
  {
    "title": "Light and view",
    "description": "Skylight and mesh windows."
  },
  {
    "title": "Weather",
    "description": "Rainfly and fabric details."
  },
  {
    "title": "Price",
    "description": "Cost relative to features."
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
    "subheading": "By Family Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Big square floor",
          "Happy Travel Tent",
          "94.5 x 94.5 inches."
        ],
        [
          "Muddy-boots area",
          "Londtren Tent",
          "Vestibule."
        ],
        [
          "Stargazing on a budget",
          "Rivenlo Tent",
          "Skylight at the lowest price."
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
          "$60 to $70",
          "Rivenlo Tent"
        ],
        [
          "$70 to $80",
          "Happy Travel Tent"
        ],
        [
          "$80 to $90",
          "Londtren Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Square Floor vs Rectangle",
    "cards": [
      {
        "label": "Square",
        "text": "Square floors are easier for air beds. The Happy Travel Tent has one."
      },
      {
        "label": "Rectangle",
        "text": "Rectangles are narrower at 6.6 ft. The Londtren Tent and Rivenlo Tent use this."
      }
    ],
    "note": "Choose the Happy Travel Tent for space, and a rectangle for value."
  },
  {
    "subheading": "Features",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Vestibule",
          "Londtren Tent"
        ],
        [
          "Skylight",
          "Rivenlo Tent"
        ],
        [
          "Two big doors",
          "Happy Travel Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Weekend Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A removable rainfly and a vestibule."
      },
      {
        "label": "In this comparison",
        "text": "The Rivenlo Tent has a removable waterproof rainfly, and the Londtren Tent has a vestibule."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Happy Travel Tent for floor space."
      },
      {
        "label": "Save if",
        "text": "Save with the Rivenlo Tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real capacity",
    "explanation": "These three listings say four in bags, and two or three with gear. A family of four with luggage needs a larger tent. Compare to your gear volume."
  },
  {
    "criterion": "Floor shape",
    "explanation": "A square 94.5 inch floor is easier to arrange than a 6.6 ft wide rectangle. Beds fit better in a square. Check the dimensions."
  },
  {
    "criterion": "Vestibule",
    "explanation": "A vestibule keeps muddy shoes out of the sleeping area. Without one, gear comes inside. Check the listing."
  },
  {
    "criterion": "Skylight",
    "explanation": "A skylight adds a view but can heat the tent in sun. A rainfly covers it. Look for a removable fly."
  },
  {
    "criterion": "Setup mechanism",
    "explanation": "Hydraulic and spring pop-ups both open quickly. Folding back needs practice. Read the folding instructions."
  }
];

export const faq = [
  {
    "q": "How many people fit in a 4 person pop-up tent?",
    "a": "About four in sleeping bags, or two to three with gear. The listings say so. Size up for comfort."
  },
  {
    "q": "Do pop-up tents come with a rainfly?",
    "a": "The Rivenlo Tent has a removable waterproof rainfly. Check the others. A rainfly adds weather cover."
  },
  {
    "q": "Is the Happy Travel worth the extra cost?",
    "a": "If you want a square floor, yes. It costs more than the Rivenlo Tent. For a skylight, choose the Rivenlo Tent."
  },
  {
    "q": "How do I set up a hydraulic pop-up?",
    "a": "Lift the top, press the mechanism down and click the bottom joints. The Happy Travel Tent takes about a minute. Stake it afterward."
  },
  {
    "q": "Can I fit an air mattress?",
    "a": "A queen is a tight fit in a 6.6 ft width. The Happy Travel Tent is wider. Measure first."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
