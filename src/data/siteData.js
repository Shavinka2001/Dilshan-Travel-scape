export const siteConfig = {
  name: "Dilshan Travelscape",
  description: "Premium vehicle rentals and guided tours in Sri Lanka",
  phone: "+94 77 123 4567",
  email: "dilshantravelscape.com",
  address: "Welewaththa,Hiriketiya,Dickwella,Sri Lanka",
  social: {
    facebook: "https://facebook.com/dilshantravelscape",
    instagram: "https://instagram.com/dilshantravelscape",
    whatsapp: "https://wa.me/94771234567"
  }
};

export const services = [
  {
    id: 1,
    title: "Vehicle Rentals",
    description: "Premium cars, vans, and buses for comfortable travel",
    icon: "🚗",
    features: ["Air-conditioned vehicles", "Professional drivers", "GPS tracking", "24/7 support"]
  },
  {
    id: 2,
    title: "Round Tours",
    description: "Explore Sri Lanka's beauty with experienced local guides",
    icon: "🗺️",
    features: ["Local expertise", "Customized itineraries", "Cultural insights", "Photography spots"]
  },
  {
    id: 3,
    title: "Airport Transfers",
    description: "Reliable pickup and drop-off services",
    icon: "✈️",
    features: ["Flight tracking", "Meet & greet", "Luggage assistance", "Fixed rates"]
  }
];

export const packages = [
  {
    id: 1,
    title: "Sri Lanka Highlights – 6 Days",
    subtitle: "The Ultimate Sri Lankan Adventure",
    description: "A comprehensive Sri Lanka tour showcasing the island's most iconic and breathtaking destinations.",
    longDescription: "Experience a 6-day Sri Lanka tour covering Galle Fort, Nuwara Eliya, and the island's most scenic destinations. Enjoy culture, nature, mountains, and unforgettable travel experiences. Perfect Sri Lanka holiday package for all travelers.",
    duration: "6 days / 5 nights",
    price: "1 person: $350 | 2 persons: $450",
    priceFrom: 350,
    groupSize: "1-6 people",
    difficulty: "Easy",
    season: "Year-round",
    // SEO Optimization
    seo: {
      metaTitle: "Sri Lanka 6 Day Tour Package | Highlights of Ceylon | Dilshan Travelscape",
      metaDescription: "Explore Sri Lanka's best in 6 days! Visit Galle Fort, Ella, Yala Safari, Nuwara Eliya, Kandy & Sigiriya. Complete tour package with accommodation, transport & guide. Book now!",
      keywords: ["Sri Lanka tour", "6 day Sri Lanka package", "Galle Fort tour", "Ella Nine Arch Bridge", "Yala Safari", "Nuwara Eliya", "Kandy Temple of Tooth", "Sigiriya Rock", "Sri Lanka holidays", "Ceylon tour package"],
      canonicalUrl: "/tours/1",
      ogTitle: "Ultimate 6-Day Sri Lanka Adventure | Cultural & Nature Tour",
      ogDescription: "Discover Sri Lanka's iconic destinations: Galle Fort, Ella, Yala National Park, hill country & ancient kingdoms. Professional guide, comfortable transport included.",
      ogImage: "/images/ninearch.jpg",
      twitterTitle: "6-Day Sri Lanka Highlights Tour | From $350",
      twitterDescription: "Experience the best of Sri Lanka in 6 days. Beaches, mountains, wildlife & culture. Book your Ceylon adventure today!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Sri Lanka Highlights 6 Days",
        "description": "A comprehensive 6-day tour covering Sri Lanka's most iconic destinations including Galle Fort, Ella, Yala National Park, Nuwara Eliya, Kandy, and Sigiriya.",
        "touristType": ["Cultural Tourist", "Nature Tourist", "Adventure Tourist"],
        "duration": "P6D",
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": 6
        },
        "offers": {
          "@type": "Offer",
          "price": "350",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "provider": {
          "@type": "TravelAgency",
          "name": "Dilshan Travelscape"
        }
      }
    },
    slug: "sri-lanka-highlights-6-days",
    image: "/images/ninearch.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/hiriketiya.jpg",
      "/images/nuwaraeliya.jpg",
      "/images/sigiriya.jpg"
    ],
    highlights: ["Galle Fort", "Mirissa", "Hiriketiya", "Yala", "Ella", "Nuwara Eliya", "Kandy", "Sigiriya"],
    inclusions: [
    
      "Air-conditioned transportation",
      "Entrance fees to all attractions",
      "Safari at Yala National Park",
      "Traditional cultural show in Kandy",
      "Airport transfers"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Galle Exploration",
        description: "Discover the beauty and history of Sri Lanka’s southern coast with our Galle Exploration Tour. Visit the famous Galle Fort, walk through its charming streets, and enjoy stunning views of the Indian Ocean. Explore colonial architecture, local shops, museums, and beautiful beaches—all in one relaxing and memorable experience.This tour is perfect for travelers looking to enjoy heritage, culture, and coastal scenery in Galle. Join us and experience one of Sri Lanka’s top travel destinations",
        activities: ["Visit the Lighthouse & Ramparts", "Walk through Galle Fort", "Capture stunning photography spots around the fort and coast"],
        // accommodation: "Galle Heritage Hotel",
        // meals: "Dinner"
      },
      {
        day: 2,
        title: "Southern Coast Adventure",
        description: "Visit Mirissa and Hiriketiya beaches. Optional whale watching tour (seasonal).",
        activities: ["Mirissa Beach", "Whale watching (optional)", "Hiriketiya surfing spot", "Stilt fishermen"],
        accommodation: "Beach Resort",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Yala Safari Experience",
        description: "Early morning safari at Yala National Park to spot leopards, elephants, and exotic birds.",
        activities: ["Morning safari", "Wildlife photography", "Afternoon safari"],
        accommodation: "Safari Lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Hill Country Journey",
        description: "Travel to Ella through scenic mountain roads. Visit Nine Arch Bridge and Little Adam's Peak.",
        activities: ["Nine Arch Bridge", "Little Adam's Peak hike", "Tea plantation visit"],
        accommodation: "Mountain View Hotel",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Nuwara Eliya & Kandy",
        description: "Explore Nuwara Eliya's colonial charm, then travel to Kandy, the cultural capital.",
        activities: ["Tea factory tour", "Gregory Lake", "Temple of the Tooth", "Cultural dance show"],
        accommodation: "Kandy City Hotel",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Sigiriya & Departure",
        description: "Visit the magnificent Sigiriya Rock Fortress before departure.",
        activities: ["Sigiriya Rock climb", "Sigiriya Museum", "Airport transfer"],
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ]
  },
  {
    id: 2,
    title: "Sri Lanka 9-Day Cultural & Nature Tour",
    subtitle: "Explore Sri Lanka's Best Cultural Sites, Hill Country, Wildlife, and Beaches in 9 Days",
    description: "A Complete 9-Day Journey Through Sri Lanka's Top Highlights",
    longDescription: "Explore Sri Lanka in 9 days—Sigiriya, Kandy, Ella, Yala Safari, and southern beaches. A perfect mix of culture, nature, and adventure.",
    duration: "9 days / 8 night",
    price: "$120",
    priceFrom: 120,
    groupSize: "1-6 people",
    difficulty: "Easy",
    season: "Year-round",
    // SEO Optimization
    seo: {
      metaTitle: "9 Day Sri Lanka Cultural & Nature Tour | Complete Island Experience",
      metaDescription: "Comprehensive 9-day Sri Lanka tour covering cultural sites, hill country, wildlife & beaches. Sigiriya, Kandy, Ella, Yala Safari included. From $120 per person.",
      keywords: ["9 day Sri Lanka tour", "Sri Lanka cultural tour", "Ceylon nature tour", "Sigiriya Kandy Ella tour", "Sri Lanka wildlife safari", "complete Sri Lanka package", "budget Sri Lanka tour", "extended Sri Lanka holiday"],
      canonicalUrl: "/tours/2",
      ogTitle: "Complete 9-Day Sri Lanka Cultural & Nature Experience",
      ogDescription: "Experience all of Sri Lanka in 9 days! Ancient kingdoms, tea plantations, wildlife safaris, and pristine beaches. Perfect for culture and nature lovers.",
      ogImage: "/images/ella.jpg",
      twitterTitle: "9-Day Complete Sri Lanka Tour | Culture + Nature",
      twitterDescription: "Ancient sites, hill country, wildlife & beaches in one amazing 9-day Sri Lanka adventure. Book your extended Ceylon tour!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Sri Lanka 9-Day Cultural & Nature Tour",
        "description": "A comprehensive 9-day journey through Sri Lanka's cultural heritage sites, stunning hill country, diverse wildlife, and beautiful beaches.",
        "touristType": ["Cultural Tourist", "Nature Tourist", "Wildlife Tourist"],
        "duration": "P9D",
        "offers": {
          "@type": "Offer",
          "price": "120",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    slug: "sri-lanka-9-day-cultural-nature-tour",
    image: "/images/ella.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/galle.jpg",
      "/images/ella.jpg"
    ],
    highlights: ["", "Royal Botanical Gardens", "Kandy Lake", "Traditional Dance Show"],
    inclusions: [
      "1 night accommodation",
      "All meals",
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Cultural dance show tickets"
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kandy Arrival & City Tour",
        description: "Explore Kandy's main attractions including the sacred Temple of the Tooth.",
        activities: ["Temple of the Tooth", "Kandy Lake walk", "City market visit", "Traditional dance show"],
        accommodation: "Kandy Heritage Hotel",
        meals: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Botanical Gardens & Departure",
        description: "Visit the world-famous Royal Botanical Gardens before departure.",
        activities: ["Royal Botanical Gardens", "Spice garden tour", "Local handicraft shopping"],
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
      }
    ]
  },
  {
    id: 3,
    title: "South Coast Highlights – Day 1",
    subtitle: "Whale Watching and South Coast Highlights – Mirissa to Galle",
    description: "Experience Mirissa whale watching, a Madu River safari, and explore Galle Fort on this exciting Day 1 South Coast tour. Adventure, nature, and history in one day.",
    longDescription: "Kick off your Sri Lanka journey with an unforgettable Day 1 tour. Enjoy Mirissa whale watching, take a scenic Madu River safari, and explore the historic Galle Fort. A perfect blend of adventure, nature, and culture on Sri Lanka's stunning south coast.",
    duration: "1 day",
    price: "$90",
    priceFrom: 90,
    groupSize: "2 people",
    difficulty: "Easy",
    season: "November - April (best)",
    // SEO Optimization
    seo: {
      metaTitle: "Mirissa Whale Watching & Galle Fort Day Tour | South Coast Sri Lanka",
      metaDescription: "Full day south coast tour: Mirissa whale watching, turtle hatchery, Madu River safari & Galle Fort. Perfect day trip from Colombo. Book your Sri Lanka coastal adventure!",
      keywords: ["Mirissa whale watching", "Galle Fort tour", "South coast Sri Lanka", "Madu River safari", "turtle hatchery Koggala", "Sri Lanka day tour", "whale watching Sri Lanka", "coastal tour Sri Lanka", "UNESCO Galle Fort"],
      canonicalUrl: "/tours/3",
      ogTitle: "Ultimate South Coast Day Tour | Whales, Turtles & Historic Galle",
      ogDescription: "Experience the best of Sri Lanka's south coast in one day! Whale watching in Mirissa, turtle conservation, river safari & UNESCO World Heritage Galle Fort.",
      ogImage: "/images/galle.jpg",
      twitterTitle: "South Coast Sri Lanka Day Tour | Whales & History",
      twitterDescription: "Mirissa whale watching + Madu River safari + Galle Fort exploration. Perfect south coast adventure in Sri Lanka!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "South Coast Highlights Day Tour",
        "description": "A comprehensive day tour of Sri Lanka's south coast featuring whale watching in Mirissa, turtle hatchery visit, Madu River safari, and historic Galle Fort exploration.",
        "touristType": ["Wildlife Tourist", "Cultural Tourist", "Adventure Tourist"],
        "duration": "P1D",
        "timeOfYear": "November to April",
        "offers": {
          "@type": "Offer",
          "price": "90",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "includesAttraction": [
          {
            "@type": "TouristAttraction",
            "name": "Mirissa Whale Watching"
          },
          {
            "@type": "TouristAttraction",
            "name": "Galle Fort"
          },
          {
            "@type": "TouristAttraction",
            "name": "Madu River"
          }
        ]
      }
    },
    slug: "south-coast-highlights-day-tour",
    image: "/images/galle.jpg",
    gallery: [
      "/images/galle.jpg",
      "/images/ella.jpg",
      "/images/galle.jpg"
    ],
    highlights: ["whale watching","Turtle Hatchery", "Madu River", "Galle Fort"],
    inclusions: [
      "Air-conditioned transportation with professional driver",
      "Express way tolls and parking fees",
      "Complimentary bottled water throughout the tour",
      "Passenger travel insurance coverage",
      "Turtle hatchery visit and conservation experience",
      "Hotel pickup and drop-off service",
     
    ],
    exclusions: [
      "Entrance tickets to attractions (we can arrange tickets upon request)",
      "Personal expenses and shopping",
      "Alcoholic beverages and premium drinks",
      "Meals and refreshments (lunch can be arranged)",
    ],
    itinerary: [
      {
        day: 1,
        title: "South Coast Discovery Adventure",
        description: "Experience the ultimate south coast adventure with whale watching, wildlife encounters, and cultural exploration in one unforgettable day.",
        schedule: [
          {
            time: "Morning",
            period: "05:00 - 12:00",
            activity: "Whale Watching in Mirissa",
            description: "Departure from your hotel followed by an exciting whale watching expedition in Mirissa Bay. Spot blue whales, sperm whales, and dolphins in their natural habitat.",
            highlights: ["Hotel pickup", "Whale watching boat tour", "Marine wildlife spotting", "Photography opportunities"]
          },
          {
            time: "Afternoon",
            period: "12:30 - 14:30",
            activity: "Lunch & Turtle Hatchery in Koggala",
            description: "Enjoy a delicious Sri Lankan lunch followed by a visit to the turtle hatchery where you can learn about conservation efforts and witness baby turtles.",
            highlights: ["Traditional Sri Lankan lunch", "Turtle conservation center", "Baby turtle release (seasonal)", "Educational experience"]
          },
          {
            time: "Evening",
            period: "14:30 - 18:00",
            activity: "Madu River Boat Safari & Fish Therapy",
            description: "Explore the enchanting Madu River ecosystem on a traditional boat safari, followed by a relaxing fish therapy session.",
            highlights: ["Mangrove forest exploration", "Cinnamon island visit", "Fish therapy experience", "Sunset river cruise"]
          },
          {
            time: "Night",
            period: "18:30 - 21:30",
            activity: "Galle Fort Evening Walk",
            description: "End your day with a magical evening exploration of the historic Galle Fort, beautifully illuminated against the night sky. After capturing stunning sunset views and exploring the colonial architecture, we'll safely transport you back to your hotel or onward to your next destination.",
            highlights: ["UNESCO World Heritage site", "Colonial architecture", "Lighthouse sunset views", "Evening photography", "Safe return transport", "Drop-off at hotel or next destination"]
          }
        ],
        duration: "Full day (approximately 12 hours)",
        pickupTime: "04:00 AM (varies by location)",
        pickupDetails: "Flexible pickup times based on your hotel location. We'll confirm exact timing when you book."
      }
    ]
  },
  {
    id: 4,
    title: "Ella & Yala Adventure – Day 2",
    subtitle: "Hill Country Beauty and Wildlife Safari – Nine Arch Bridge to Yala",
    description: "Experience Sri Lanka's ultimate 2-day adventure combining wildlife safari, scenic train journey, and hill country exploration. From Yala's leopards to Ella's Nine Arch Bridge and Ceylon tea plantations.",
    longDescription: "Embark on an unforgettable 2-day Sri Lanka adventure starting with early morning Yala safari to spot leopards and elephants, followed by temple visits and a scenic journey to Ella. Day 2 features the world's most beautiful train ride, iconic Nine Arch Bridge, Little Adam's Peak hiking, and Ceylon tea factory experience.",
    duration: "2 days / 1 night",
    // price: "$180 per person",
    // priceFrom: 180,
    groupSize: "2-6 people",
    difficulty: "Moderate",
    season: "Year-round (best February - June)",
    // SEO Optimization
    seo: {
      metaTitle: "2-Day Ella & Yala Adventure | Train Ride, Safari & Hill Country | Sri Lanka",
      metaDescription: "Epic 2-day Sri Lanka adventure: Yala safari, scenic train ride Ella-Nanu Oya, Nine Arch Bridge, Little Adam's Peak & Ceylon tea factory. Wildlife + mountains in one package!",
      keywords: ["2 day Ella Yala tour", "Sri Lanka train ride", "Ella Nine Arch Bridge", "Yala safari leopards", "Little Adam's Peak", "Ceylon tea factory", "Kirinda temple", "Tissamaharama temple", "Sri Lanka hill country", "scenic train journey", "wildlife safari Sri Lanka"],
      canonicalUrl: "/tours/4",
      ogTitle: "Ultimate 2-Day Ella & Yala Adventure | Train, Safari & Mountains",
      ogDescription: "Experience Sri Lanka's best in 2 days! Yala wildlife safari, world's most scenic train ride, Nine Arch Bridge, mountain peaks & ancient temples. Complete adventure package!",
      ogImage: "/images/ella.jpg",
      twitterTitle: "2-Day Ella & Yala Adventure | Train + Safari",
      twitterDescription: "Yala safari + scenic train ride + Nine Arch Bridge + Little Adam's Peak = Ultimate 2-day Sri Lanka adventure!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Ella & Yala Adventure Day Tour",
        "description": "A comprehensive day tour combining Sri Lanka's stunning hill country attractions in Ella with an exciting wildlife safari in Yala National Park.",
        "touristType": ["Nature Tourist", "Wildlife Tourist", "Adventure Tourist", "Photography Tourist"],
        "duration": "P2D",
        "timeOfYear": "Year-round",
        "offers": {
          "@type": "Offer",
          "price": "180",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "includesAttraction": [
          {
            "@type": "TouristAttraction",
            "name": "Yala National Park"
          },
          {
            "@type": "TouristAttraction",
            "name": "Nine Arch Bridge Ella"
          },
          {
            "@type": "TouristAttraction",
            "name": "Little Adam's Peak"
          },
          {
            "@type": "TouristAttraction",
            "name": "Ella to Nanu Oya Train"
          },
          {
            "@type": "TouristAttraction",
            "name": "Ceylon Tea Factory"
          },
          {
            "@type": "TouristAttraction",
            "name": "Kirinda Temple"
          }
        ]
      }
    },
    slug: "ella-yala-adventure-day-tour",
    image: "/images/ella.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/ninearch.jpg",
      "/images/yala-safari.jpg",
      "/images/little-adams-peak.jpg"
    ],
    highlights: ["Yala Safari (Leopards & Elephants)", "Scenic Train Ride (Ella-Nanu Oya)", "Nine Arch Bridge", "Little Adam's Peak", "Ceylon Tea Factory", "Kirinda & Tissa Temples", "Mountain Views", "Wildlife Photography"],
    inclusions: [
      "Air-conditioned transportation with professional driver",
      "1 night accommodation in Ella with mountain views",
      "Scenic train tickets (Ella to Nanu Oya)",
      "Yala National Park safari with experienced guide",
      "Professional English-speaking guide throughout",
      "Express way tolls and parking fees",
      "Complimentary bottled water throughout the tour",
      "Passenger travel insurance coverage",
      "Hotel pickup and drop-off service",
      "All meals as specified in itinerary",
      "Ceylon tea factory tour and tasting",
      "Temple entrance fees (Kirinda & Tissa)"
    ],
    exclusions: [
      "Yala National Park entrance fees (we can arrange upon request)",
      "Personal expenses and shopping",
      "Alcoholic beverages and premium drinks",
      "Dinner on Day 1 and lunch on Day 2",
      "Tips and gratuities for guide and driver",
      "Optional activities and additional excursions",
      "Travel insurance (basic coverage included)",
      "Additional accommodation beyond specified"
    ],
    itinerary: [
      {
        day: 1,
        title: "Yala Safari & Coastal Temples Adventure",
        description: "Begin your 2-day adventure with an early morning wildlife safari at Yala National Park, followed by spiritual temple visits and pristine beach exploration before heading to the scenic hill country of Ella.",
        schedule: [
          {
            time: "Early Morning",
            period: "04:30 - 12:00",
            activity: "Yala National Park Safari",
            description: "Departure from your hotel at 4:30 AM for an incredible wildlife safari experience at Yala National Park. Spot leopards, elephants, sloth bears, and over 200 bird species in their natural habitat during the prime wildlife viewing hours.",
            highlights: ["Hotel pickup at 4:30 AM", "Prime time wildlife safari", "Leopard and elephant spotting", "Professional safari guide", "Wildlife photography opportunities", "Breakfast in the wild"]
          },
          {
            time: "Afternoon",
            period: "12:00 - 13:00",
            activity: "Traditional Sri Lankan Lunch",
            description: "Enjoy a delicious traditional Sri Lankan lunch at a local restaurant, featuring authentic flavors and fresh ingredients to refuel after your exciting safari adventure.",
            highlights: ["Authentic Sri Lankan cuisine", "Fresh local ingredients", "Cultural dining experience", "Rest and refreshment"]
          },
          {
            time: "Afternoon",
            period: "13:00 - 15:00",
            activity: "Kirinda Temple & Beach",
            description: "Visit the sacred Kirinda Temple with its stunning ocean views and ancient Buddhist significance, followed by relaxation at the pristine Kirinda Beach with its golden sands and crystal-clear waters.",
            highlights: ["Ancient Buddhist temple", "Ocean cliff views", "Spiritual experience", "Pristine beach relaxation", "Photography opportunities", "Local history insights"]
          },
          {
            time: "Afternoon",
            period: "15:00 - 17:00",
            activity: "Tissa Temple Visit",
            description: "Explore the historic Tissa Temple (Tissamaharama Raja Maha Vihara), one of Sri Lanka's most important ancient Buddhist sites, with its impressive dagobas and rich archaeological heritage.",
            highlights: ["Ancient Buddhist architecture", "Historical significance", "Peaceful meditation", "Cultural insights", "Archaeological wonders", "Spiritual atmosphere"]
          },
          {
            time: "Evening",
            period: "17:00 - 20:00",
            activity: "Journey to Ella",
            description: "Scenic drive through changing landscapes from the dry zone to the lush hill country, arriving at your hotel in Ella for overnight accommodation with stunning mountain views.",
            highlights: ["Scenic mountain drive", "Landscape photography", "Check-in at Ella hotel", "Mountain views", "Evening rest"]
          }
        ],
        duration: "Full day with overnight in Ella",
        pickupTime: "04:30 AM (varies by location)",
        pickupDetails: "Early morning pickup for optimal wildlife viewing. We'll confirm exact timing when you book."
      },
      {
        day: 2,
        title: "Ella Hill Country & Train Experience",
        description: "Experience the magic of Sri Lanka's hill country with a scenic train journey, iconic bridges, mountain peaks, and world-famous Ceylon tea plantations before your departure or onward journey.",
        schedule: [
          {
            time: "Morning",
            period: "07:00 - 09:30",
            activity: "Scenic Train Ride (Ella to Nanu Oya)",
            description: "Embark on one of the world's most beautiful train journeys from Ella to Nanu Oya, passing through emerald tea plantations, misty mountains, and cascading waterfalls. This iconic route offers breathtaking panoramic views.",
            highlights: ["World's most scenic train ride", "Tea plantation views", "Mountain vistas", "Waterfall sightings", "Photography opportunities", "Cultural experience"]
          },
          {
            time: "Morning",
            period: "09:30 - 11:30",
            activity: "Nine Arch Bridge & Train Spotting",
            description: "Visit the world-famous Nine Arch Bridge, an architectural marvel built entirely of stone, brick, and cement without any steel. Perfect for photography and train spotting as trains pass through this iconic bridge.",
            highlights: ["Iconic Nine Arch Bridge", "Architectural marvel", "Train spotting", "Photography paradise", "Local interactions", "Historical significance"]
          },
          {
            time: "Late Morning",
            period: "11:30 - 13:30",
            activity: "Little Adam's Peak Hiking",
            description: "Conquer Little Adam's Peak, a relatively easy hike offering 360-degree panoramic views of the surrounding tea plantations, valleys, and mountains. Perfect for all fitness levels with rewarding summit views.",
            highlights: ["Panoramic mountain views", "Tea plantation vistas", "Easy hiking trail", "Summit achievement", "Photography opportunities", "Fresh mountain air"]
          },
          {
            time: "Afternoon",
            period: "13:30 - 15:30",
            activity: "Ceylon Tea Factory Experience",
            description: "Discover the secrets of world-renowned Ceylon tea at a traditional tea factory. Learn about the tea-making process from leaf to cup, enjoy fresh tea tasting, and purchase premium teas directly from the source.",
            highlights: ["Tea production process", "Factory tour", "Fresh tea tasting", "Premium tea shopping", "Cultural insights", "Educational experience"]
          },
          {
            time: "Afternoon",
            period: "15:30 - 18:00",
            activity: "Ella Departure",
            description: "Departure from Ella with drop-off at your hotel or onward transportation to your next destination. Safe and comfortable journey with memories of an incredible 2-day hill country and wildlife adventure.",
            highlights: ["Hotel drop-off", "Onward destination transfer", "Safe transportation", "Trip memories", "Professional service", "Flexible departure"]
          }
        ],
        duration: "Full day departure",
        pickupTime: "07:00 AM from Ella hotel",
        pickupDetails: "Pickup from your Ella accommodation. We'll coordinate timing based on your onward travel plans."
      }
    ]
  },
  {
    id: 5,
    title: "Cultural & Scenic Adventure – Day 2",
    subtitle: "Ancient Temples, Historic Cities & Mountain Landscapes – Kandy to Sigiriya",
    description: "Immerse yourself in Sri Lanka's rich cultural heritage and stunning mountain scenery. From Kandy's sacred temples to Sigiriya's ancient rock fortress and scenic hill country landscapes.",
    longDescription: "Embark on a captivating 2-day cultural and scenic journey through Sri Lanka's most iconic heritage sites. Experience the spiritual heart of Kandy with its sacred Temple of the Tooth, explore the magnificent Sigiriya Rock Fortress, and enjoy breathtaking mountain landscapes with traditional villages and spice gardens.",
    duration: "2 days / 1 night",
    price: "$150 per person",
    priceFrom: 150,
    groupSize: "2-8 people",
    difficulty: "Easy to Moderate",
    season: "Year-round",
    // SEO Optimization
    seo: {
      metaTitle: "2-Day Cultural & Scenic Sri Lanka Tour | Kandy, Sigiriya & Hill Country",
      metaDescription: "Explore Sri Lanka's cultural treasures in 2 days: Temple of the Tooth Kandy, Sigiriya Rock Fortress, spice gardens & scenic mountain landscapes. Perfect cultural adventure package!",
      keywords: ["Cultural Sri Lanka tour", "Kandy Temple of Tooth", "Sigiriya Rock Fortress", "2 day cultural tour", "Sri Lanka heritage sites", "Buddhist temples Sri Lanka", "hill country scenery", "spice garden tour", "traditional villages Sri Lanka", "ancient kingdoms tour"],
      canonicalUrl: "/tours/5",
      ogTitle: "Ultimate Cultural & Scenic Sri Lanka Adventure | Temples & Ancient Fortresses",
      ogDescription: "Discover Sri Lanka's cultural heart in 2 days! Sacred temples, ancient rock fortresses, mountain scenery & traditional villages. Complete heritage experience!",
      ogImage: "/images/sigiriya.jpg",
      twitterTitle: "2-Day Cultural Sri Lanka Tour | Kandy + Sigiriya",
      twitterDescription: "Temple of the Tooth + Sigiriya Rock + Hill Country = Perfect cultural adventure in Sri Lanka!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Cultural & Scenic Adventure Tour",
        "description": "A comprehensive 2-day cultural tour exploring Sri Lanka's most significant Buddhist temples, ancient rock fortresses, and scenic mountain landscapes.",
        "touristType": ["Cultural Tourist", "Heritage Tourist", "Nature Tourist", "Photography Tourist"],
        "duration": "P2D",
        "timeOfYear": "Year-round",
        "offers": {
          "@type": "Offer",
          "price": "150",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "includesAttraction": [
          {
            "@type": "TouristAttraction",
            "name": "Temple of the Tooth Kandy"
          },
          {
            "@type": "TouristAttraction",
            "name": "Sigiriya Rock Fortress"
          },
          {
            "@type": "TouristAttraction",
            "name": "Dambulla Cave Temple"
          },
          {
            "@type": "TouristAttraction",
            "name": "Spice Garden Matale"
          },
          {
            "@type": "TouristAttraction",
            "name": "Royal Botanical Gardens"
          }
        ]
      }
    },
    slug: "cultural-scenic-adventure-tour",
    image: "/images/sigiriya.jpg",
    gallery: [
      "/images/sigiriya.jpg",
      "/images/kandy-temple.jpg",
      "/images/dambulla.jpg",
      "/images/botanical-gardens.jpg"
    ],
    highlights: ["Temple of the Tooth Kandy", "Sigiriya Rock Fortress", "Dambulla Cave Temple", "Royal Botanical Gardens", "Spice Garden Experience", "Traditional Dance Show", "Mountain Scenery", "Cultural Insights"],
    inclusions: [
      "Air-conditioned transportation with professional driver",
      "1 night accommodation with breakfast",
      "Professional English-speaking cultural guide",
      "Temple of the Tooth guided tour",
      "Sigiriya Rock Fortress entrance and guide",
      "Dambulla Cave Temple visit",
      "Royal Botanical Gardens entry",
      "Traditional cultural dance show",
      "Spice garden tour and demonstration",
      "Express way tolls and parking fees",
      "Complimentary bottled water throughout",
      "Passenger travel insurance coverage",
      "Hotel pickup and drop-off service"
    ],
    exclusions: [
      "Additional entrance fees not mentioned",
      "Personal expenses and shopping",
      "Alcoholic beverages and premium drinks",
      "Lunch and dinner (can be arranged upon request)",
      "Tips and gratuities for guide and driver",
      "Optional activities and excursions",
      "Additional accommodation beyond specified",
      "Travel insurance beyond basic coverage"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kandy Cultural Immersion",
        description: "Discover the spiritual and cultural heart of Sri Lanka in the historic city of Kandy, exploring sacred temples, royal gardens, and experiencing traditional arts.",
        schedule: [
          {
            time: "Morning",
            period: "08:00 - 10:30",
            activity: "Temple of the Tooth Relic",
            description: "Begin your cultural journey at Sri Lanka's most sacred Buddhist temple, housing the tooth relic of Lord Buddha. Experience morning prayers and learn about Buddhist traditions and Sri Lankan religious practices.",
            highlights: ["Sacred tooth relic viewing", "Buddhist prayer ceremonies", "Temple architecture", "Religious significance", "Photography opportunities", "Spiritual experience"]
          },
          {
            time: "Late Morning",
            period: "10:30 - 12:30",
            activity: "Royal Botanical Gardens Peradeniya",
            description: "Explore one of the world's finest tropical botanical gardens, featuring over 4,000 species of plants, giant bamboo groves, orchid houses, and the famous avenue of royal palms.",
            highlights: ["Tropical plant species", "Orchid collection", "Giant bamboo grove", "Royal palm avenue", "Spice trees", "Scenic walkways"]
          },
          {
            time: "Afternoon",
            period: "13:00 - 15:00",
            activity: "Kandy City & Lake Tour",
            description: "Discover Kandy's colonial architecture, bustling markets, and the scenic Kandy Lake. Visit local craftsmen and explore the city's rich history as the last kingdom of Sri Lanka.",
            highlights: ["Kandy Lake walkway", "Colonial architecture", "Local markets", "Traditional crafts", "City viewpoints", "Historical insights"]
          },
          {
            time: "Evening",
            period: "18:00 - 20:00",
            activity: "Traditional Cultural Dance Show",
            description: "Experience the vibrant traditional arts of Sri Lanka with an authentic cultural dance performance featuring Kandyan dancers, fire dancers, and traditional music.",
            highlights: ["Kandyan traditional dances", "Fire walking performance", "Traditional costumes", "Live drumming", "Cultural storytelling", "Photography allowed"]
          }
        ],
        duration: "Full day with overnight in Kandy area",
        pickupTime: "08:00 AM (varies by location)",
        pickupDetails: "Pickup from your hotel in Kandy or surrounding areas. We'll confirm exact timing upon booking."
      },
      {
        day: 2,
        title: "Ancient Kingdoms & Scenic Landscapes",
        description: "Journey through Sri Lanka's ancient heritage visiting the magnificent Sigiriya Rock Fortress and Dambulla Cave Temple, with scenic mountain drives and spice garden experiences.",
        schedule: [
          {
            time: "Early Morning",
            period: "06:30 - 10:00",
            activity: "Sigiriya Rock Fortress Climb",
            description: "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site and ancient royal citadel. Marvel at the famous frescoes, mirror wall, and panoramic views from the summit.",
            highlights: ["Ancient rock fortress", "Famous Sigiriya frescoes", "Mirror wall inscriptions", "Royal palace ruins", "Panoramic summit views", "UNESCO World Heritage site"]
          },
          {
            time: "Morning",
            period: "10:30 - 12:00",
            activity: "Dambulla Cave Temple",
            description: "Explore the magnificent Dambulla Cave Temple complex, featuring five caves with over 150 Buddha statues and ancient paintings dating back 2,000 years.",
            highlights: ["Ancient cave paintings", "150+ Buddha statues", "Religious significance", "Rock temple architecture", "Historical artifacts", "Spiritual atmosphere"]
          },
          {
            time: "Afternoon",
            period: "13:00 - 14:30",
            activity: "Matale Spice Garden Experience",
            description: "Discover Sri Lanka's famous spices at a traditional spice garden. Learn about cultivation, processing, and medicinal uses of cinnamon, cardamom, pepper, and other aromatic spices.",
            highlights: ["Spice cultivation tour", "Traditional processing methods", "Ayurvedic medicine insights", "Fresh spice tasting", "Spice shopping opportunity", "Cultural education"]
          },
          {
            time: "Late Afternoon",
            period: "15:00 - 17:00",
            activity: "Scenic Mountain Drive & Departure",
            description: "Enjoy a scenic drive through Sri Lanka's beautiful hill country landscapes, traditional villages, and tea plantations before departure to your next destination.",
            highlights: ["Mountain scenery", "Traditional villages", "Tea plantation views", "Landscape photography", "Cultural observations", "Safe return journey"]
          }
        ],
        duration: "Full day departure",
        pickupTime: "06:30 AM from accommodation",
        pickupDetails: "Early morning pickup for optimal Sigiriya climbing conditions. Flexible drop-off arrangements available."
      }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    comment: "Absolutely incredible experience! Dilshan Travelscape exceeded all our expectations. Our driver was not only professional but also shared fascinating stories about Sri Lankan culture. The vehicle was immaculate and air-conditioned, which was perfect for the tropical weather. We felt safe throughout our journey and the attention to detail was remarkable. Would definitely book again!",
    image: "/images/clients/sarah-johnson.svg",
    tour: "Sri Lanka Highlights - 6 Days",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Marco Silva",
    country: "Italy",
    rating: 5,
    comment: "What an amazing adventure! Our guide was incredibly knowledgeable about local history and took us to some breathtaking hidden gems that aren't in typical tourist guides. The Sigiriya climb was challenging but so worth it, and the sunset views from Ella were unforgettable. Dilshan Travelscape really knows how to create magical moments. Grazie mille!",
    image: "/images/clients/marco-silva.svg",
    tour: "Southern Coast Explorer",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Chen",
    country: "Singapore",
    rating: 5,
    comment: "Perfect family vacation! Traveling with two young children can be stressful, but Dilshan Travelscape made everything so smooth and enjoyable. The driver was patient with our many stops, the vehicle had child-friendly features, and our guide was fantastic at engaging the kids with fun facts about elephants and wildlife. The Yala safari was the highlight - we saw leopards! Our children are still talking about this trip months later.",
    image: "/images/clients/emily-chen.svg",
    tour: "Sri Lanka Highlights - 6 Days",
    date: "January 2024"
  },
  {
    id: 4,
    name: "James Williams",
    country: "United Kingdom",
    rating: 5,
    comment: "Exceptional service from start to finish! The online booking was straightforward, communication was excellent, and the actual tour exceeded our expectations. Our driver arrived punctually every morning, the vehicle was always clean and comfortable, and the itinerary was perfectly paced. The tea plantation visit in Nuwara Eliya was educational and the fresh mountain air was refreshing. Brilliant value for money!",
    image: "/images/clients/james-williams.svg",
    tour: "Kandy Cultural Tour",
    date: "April 2024"
  },
  {
    id: 5,
    name: "Priya Patel",
    country: "India",
    rating: 5,
    comment: "Incredible hospitality and authentic cultural experience! As someone of Sri Lankan heritage, I was looking for a tour that would connect me with my roots. Dilshan Travelscape delivered beautifully - from the Temple of the Tooth visit to the traditional dance performance in Kandy. Our guide shared wonderful stories about local traditions and even helped us find my grandfather's childhood village. This was more than a tour; it was a journey of discovery!",
    image: "/images/clients/priya-patel.svg",
    tour: "Kandy Cultural Tour",
    date: "December 2023"
  },
  {
    id: 6,
    name: "David Thompson",
    country: "Canada",
    rating: 5,
    comment: "Outstanding adventure for photographers! I'm a professional photographer and needed someone who understood the best lighting conditions and unique angles. Dilshan Travelscape went above and beyond - early morning departures for golden hour shots, patient waiting while I captured the perfect frame, and insider knowledge of the most photogenic spots. The Nine Arch Bridge photos turned out spectacular! Their expertise made all the difference.",
    image: "/images/clients/david-thompson.svg",
    tour: "Sri Lanka Highlights - 6 Days",
    date: "November 2023"
  }
];