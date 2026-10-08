export const guideSlug = "best-5-person-rooftop-tents";
export const guideTitle = "2 Best 5 Person Rooftop Tents in 2026";
export const metaTitle = "Best 5 Person Rooftop Tents in 2026";
export const metaDescription = "Best 5-person rooftop tent options compared on listed sleeper count, shell type and season, with an honest note that few listings target five.";
export const mainKeyword = "best 5 person rooftop tents";
export const introParagraphs = [
  "Few rooftop tent listings target five sleepers, and only two do here. One is a soft shell sold as 4 to 5 person, and the other is a very expensive side-open hard shell titled 5 person.",
  "Both ask a lot of a roof, so check your rack's dynamic load rating before you order. A ground dome tent is a different product class and is left out."
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
    "id": "best-5-person-rooftop-tents-1",
    "rank": 1,
    "badge": "Best Soft Shell for Large Groups",
    "name": "Basecamp 190 Soft Shell Rooftop Tent 4",
    "price": "$1566.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411Yz68lLnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2GHG4PV?tag=dannycamping-20",
    "description": "The Kermode Basecamp 190 is a soft shell rooftop tent sold as 4 to 5 person, and the listing describes it as a three-season design for spring, summer and autumn. It is the more affordable of the two by a wide margin, and it sleeps up to five.\n\nIt costs roughly a quarter of the BVWBCR and carries a four-to-five capacity. A soft shell also tends to fold flatter than a hard shell.\n\nIt suits families who camp in warm months and want the most sleepers for the money. The three-season build handles spring through autumn.",
    "specs": [
      "Soft shell, 4 to 5 person",
      "Three-season build",
      "Kermode Overlanding"
    ],
    "pros": [
      "Sold for four to five people",
      "Costs about a quarter of the other pick",
      "Three-season rating",
      "Soft shell folds flatter"
    ],
    "cons": [
      "Not for winter camping",
      "Listing text names a Basecamp 240"
    ],
    "bestFor": "Warm-season family camping",
    "take": "The affordable large-capacity soft shell.",
    "catch": "Check the exact model and size, since the text mentions a 240."
  },
  {
    "id": "best-5-person-rooftop-tents-2",
    "rank": 2,
    "badge": "Best Four-Season",
    "name": "Heavy Duty Four-Season Manufacturer Side Open Large Size Family Outdoor Camping Car Roof Top Tent",
    "price": "$5810.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418J7Uz282L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHYXBDST?tag=dannycamping-20",
    "description": "The BVWBCR is a side-open hard shell titled 5 person and described as four-season, with an ABS panels on an aluminum frame, plus a built-in air conditioner duct hole. The listing is a heavy-duty family design.\n\nIt is the only four-season option here, and it costs several times more than the Kermode. It also carries the most weight on a roof.\n\nIt suits families who camp year-round and want a hard shell. The side-open layout eases entry.",
    "specs": [
      "Side-open hard shell, 5 person",
      "Four-season build",
      "AC duct hole"
    ],
    "pros": [
      "Titled for five people",
      "Four-season rating",
      "Air conditioner duct hole",
      "ABS and aluminum build"
    ],
    "cons": [
      "Very high price",
      "Its bullet text mentions space for 2 to 3"
    ],
    "bestFor": "Year-round family camping",
    "take": "The four-season five-person shell, at a premium.",
    "catch": "Ask the seller about real sleeping size and weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Sleeper claim."
  },
  {
    "title": "Season",
    "description": "Three or four."
  },
  {
    "title": "Shell",
    "description": "Soft or hard."
  },
  {
    "title": "Price",
    "description": "Spread."
  },
  {
    "title": "Rack load",
    "description": "Dynamic rating."
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
    "subheading": "By Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Warm months",
          "Kermode Basecamp 190",
          "Three-season."
        ],
        [
          "Year-round",
          "BVWBCR 5-Person Hard Shell",
          "Four-season."
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
          "$1560 to $1570",
          "Kermode Basecamp 190"
        ],
        [
          "Around $5810",
          "BVWBCR 5-Person Hard Shell"
        ]
      ]
    }
  },
  {
    "subheading": "Soft Shell vs Hard Shell",
    "cards": [
      {
        "label": "Soft shell",
        "text": "Costs less and folds flatter. The Kermode Basecamp 190."
      },
      {
        "label": "Hard shell",
        "text": "Resists weather. The BVWBCR 5-Person Hard Shell."
      }
    ],
    "note": "Choose the Kermode Basecamp 190 for warm months."
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
          "Kermode Basecamp 190"
        ],
        [
          "Premium",
          "BVWBCR 5-Person Hard Shell"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Families Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A real sleeping size and the rack's dynamic load rating."
      },
      {
        "label": "In this comparison",
        "text": "The Kermode Basecamp 190 is sold as 4 to 5 person and the BVWBCR 5-Person Hard Shell is titled 5 person."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BVWBCR 5-Person Hard Shell for a four-season hard shell."
      },
      {
        "label": "Save if",
        "text": "Save with the Kermode Basecamp 190."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rack dynamic load",
    "explanation": "A five-person tent is heavy, and your rack has a limit while driving. Your rack manual lists it. Compare it with the tent weight the seller supplies."
  },
  {
    "criterion": "Capacity wording",
    "explanation": "A 5 person title may hide a smaller figure in the feature list. Read the sleeping size. Ask the seller if the numbers disagree."
  },
  {
    "criterion": "Season rating",
    "explanation": "Three-season tents suit spring to autumn, and four-season tents suit winter. Using a three-season shell in snow risks leaks and wind damage. Look for the rating in the title or feature list."
  },
  {
    "criterion": "Soft or hard shell",
    "explanation": "Soft shells fold flatter and cost less, and hard shells resist weather. Compare them for your climate. Read the shell description."
  },
  {
    "criterion": "Total cost per sleeper",
    "explanation": "A premium shell costs a great deal. Compare the price per sleeper before deciding. Add the prices."
  }
];

export const faq = [
  {
    "q": "Are there five-person rooftop tents?",
    "a": "A few. The Kermode Basecamp 190 is sold as 4 to 5 person. Check the size before you buy."
  },
  {
    "q": "What is the common mistake?",
    "a": "Trusting the title. The BVWBCR 5-Person Hard Shell mentions space for 2 to 3 in its bullets. Ask the seller."
  },
  {
    "q": "Is the premium worth it?",
    "a": "For winter, yes. The BVWBCR 5-Person Hard Shell is four-season. For warm months the Kermode Basecamp 190 costs far less."
  },
  {
    "q": "How do I mount it?",
    "a": "Bolt it to strong crossbars and tighten evenly. The Kermode Basecamp 190 needs a high-rated rack. Recheck after a drive."
  },
  {
    "q": "How do I store it?",
    "a": "Dry before closing and wipe the seals. Keep the Kermode Basecamp 190 fabric clean. Check zippers each season."
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
