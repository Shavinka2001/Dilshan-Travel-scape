export const siteConfig = {
  name: "Dilshan Travelscape",
  description: "Premium vehicle rentals, guided tours, and all-island airport transfer services across Sri Lanka. Professional chauffeur services, luxury fleet, and comprehensive travel solutions.",
  phone: "+94 77 819 7348",
  email: "dilshantravelscape@gmail.com",
  address: "Welewaththa,Hiriketiya,Dickwella,Sri Lanka",
  coordinates: {
    lat: 5.9738,
    lng: 80.7675
  },
  googleMaps: {
    placeId: "ChIJyY4DzBeB4joRaJ5EaLYt3AU",
    businessId: "dilshan-travelscape",
    reviewUrl: "https://maps.app.goo.gl/5TBKMjZd8vyhvjic9"
  },
  social: {
    facebook: "https://facebook.com/dilshantravelscape",
    instagram: "https://instagram.com/dilshantravelscape",
    whatsapp: "https://wa.me/94778197348",
    googleMyBusiness: "https://maps.app.goo.gl/5TBKMjZd8vyhvjic9"
  }
};

export const services = [
    {
    id: 1,
    title: "Round Tours",
    description: "Explore Sri Lanka's beauty with experienced local guides",
    icon: "🗺️",
    features: ["Local expertise", "Customized itineraries", "Cultural insights", "Photography spots"]
  },
  {
    id: 2,
    title: "Vehicle & scooter Rentals",
    description: "Premium cars,scooters, vans, and buses for comfortable travel",
    icon: "🚗",
    features: ["Air-conditioned vehicles", "Professional drivers", "GPS tracking", "24/7 support"]
  },

  {
    id: 3,
    title: "All Island Airport Pickup & Drop Service",
    description: "Comprehensive island-wide airport transfers and premium hire services covering all major airports and destinations across Sri Lanka",
    icon: "✈️",
    features: [
      "All major airports coverage (Colombo, Mattala)",
      "Island-wide pickup & drop service",
      "Professional chauffeur service",
      "Flight tracking & monitoring",
      "VIP meet & greet service",
      "Luxury vehicle fleet",
      "24/7 availability",
      "Luggage assistance & care",
      "Fixed transparent pricing",
      "Multi-destination transfers",
      "Group transportation solutions",
      "Executive & corporate services"
    ]
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
    priceFrom: 360,
    groupSize: "1-6 people",
    difficulty: "Easy",
    season: "Year-round",
    // SEO Optimizatio
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
        activities: ["Mirissa Beach", "Whale watching (optional)", "Hiriketiya surfing spot", "Blue beach Island visit"],
        accommodation: "N/A",
        meals: "N/A"
      },
      {
        day: 3,
        title: "Yala Safari Experience",
        description: "Early morning safari at Yala National Park to spot leopards, elephants, and exotic birds.",
        activities: ["Morning safari", "Wildlife photography", "Sithullpawwa temple","Kirinda beach visit","Tissa lake visit"],
        accommodation: "N/A",
        meals: "N/A"
      },
      {
        day: 4,
        title: "Hill Country Journey",
        description: "Travel to Ella through scenic mountain roads. Visit Nine Arch Bridge and Little Adam's Peak.",
        activities: ["Nine Arch Bridge", "Little Adam's Peak hike", "Tea plantation visit","Ella rock climb","Ravana falls","Train ride experience"],
        accommodation: "N/A",
        meals: "N/A"
      },
      {
        day: 5,
        title: "Nuwara Eliya & Kandy",
        description: "Explore Nuwara Eliya's colonial charm, then travel to Kandy, the cultural capital.",
        activities: ["Tea factory & state tour", "Gregory Lake", "Temple of the Tooth", "Post Office visit","Ambuluwawa Temple"],
        accommodation: "N/A",
        meals: "N/A"
      },
      {
        day: 6,
        title: "Sigiriya & Departure",
        description: "Visit the magnificent Sigiriya Rock Fortress before departure.",
        activities: ["Sigiriya Rock climb", "Sigiriya Museum","Spice & Hearbal garden","Dambulla Cave Temple ", "Airport transfer"],
        accommodation: "N/A",
        meals: "N/A"
      }
    ]
  },
  {
    id: 2,
    title: "Sri Lanka 9-Day Cultural & Nature Tour",
    subtitle: "Complete Island Experience: Ancient Kingdoms, Hill Country, Wildlife & Beaches",
    description: "The ultimate 9-day Sri Lanka tour—explore ancient cities, cultural landmarks, hill-country landscapes, wildlife safaris, and pristine beaches in one perfect adventure.",
    longDescription: "Discover Sri Lanka in 9 unforgettable days—explore ancient cities, iconic cultural sites, lush hill country, exciting wildlife safaris, and pristine southern beaches. The perfect all-in-one Sri Lanka tour experience.",
    duration: "9 days / 8 nights",
    price: "2 persons: $700 | 4 persons: $1000",
    priceFrom: 700,
    groupSize: "1-6 people",
    difficulty: "Easy to Moderate",
    season: "Year-round (best: December - March, June - September)",
    // SEO Optimization
    seo: {
      metaTitle: "Ultimate 9-Day Sri Lanka Cultural & Nature Tour | Complete Island Experience 2024",
      metaDescription: "Complete 9-day Sri Lanka tour: Colombo, Anuradhapura, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala Safari, beaches. 2 persons $700 | 4 persons $1000. Book your Ceylon adventure!",
      keywords: ["9 day Sri Lanka tour", "complete Sri Lanka package", "Colombo Sigiriya Kandy tour", "Ella Yala safari package", "Sri Lanka cultural heritage tour", "Ceylon nature wildlife tour", "extended Sri Lanka holiday", "comprehensive island tour", "ancient cities hill country beaches"],
      canonicalUrl: "/tours/2",
      ogTitle: "Ultimate 9-Day Sri Lanka Experience | Culture, Nature & Wildlife Tour",
      ogDescription: "Complete Sri Lanka in 9 days! Ancient kingdoms, UNESCO sites, hill country, wildlife safaris, pristine beaches. Professional guide, comfortable transport included.",
      ogImage: "/images/ella.jpg",
      twitterTitle: "Complete 9-Day Sri Lanka Adventure | All Highlights Tour",
      twitterDescription: "Ancient cities + hill country + wildlife + beaches = Ultimate 9-day Sri Lanka experience. From $350 per person. Book your complete Ceylon adventure today!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Sri Lanka 9-Day Cultural & Nature Tour",
        "description": "A comprehensive 9-day journey covering Sri Lanka's complete highlights: ancient kingdoms, cultural sites, hill country, wildlife safaris, and beautiful beaches.",
        "touristType": ["Cultural Tourist", "Nature Tourist", "Wildlife Tourist", "Adventure Tourist"],
        "duration": "P9D",
        "offers": {
          "@type": "Offer",
          "price": "350",
          "priceCurrency": "USD", 
          "availability": "https://schema.org/InStock",
          "priceSpecification": [
            {
              "@type": "UnitPriceSpecification",
              "price": "700",
              "priceCurrency": "USD",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": "2",
                "unitText": "persons"
              }
            },
            {
              "@type": "UnitPriceSpecification", 
              "price": "1000",
              "priceCurrency": "USD",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": "4", 
                "unitText": "persons"
              }
            }
          ]
        }
      }
    },
    slug: "sri-lanka-9-day-cultural-nature-tour",
    image: "/images/ella.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/galle.jpg",
      "/images/nuwaraeliya.jpg",
      "/images/sigiriya.jpg"
    ],
    highlights: [
      "Gangaramaya Temple & Colombo City Tour", 
      "Ancient Anuradhapura & Wilpattu Safari", 
      "Sigiriya Lion Rock & Dambulla Cave Temple",
      "Temple of the Tooth & Kandy Cultural Show",
      "Nuwara Eliya Tea Country & Scenic Train Ride", 
      "Ella Nine Arch Bridge & Little Adam's Peak",
      "Yala National Park Safari", 
      "Southern Beaches & Surfing",
      "Historic Galle Fort & Madu River Safari"
    ],
    inclusions: [
      "8 nights accommodation (hotels/guesthouses)",
      "All transportation in air-conditioned vehicle",
      "Professional English-speaking guide/driver", 
      "All entrance fees to attractions",
      "Safari fees (Wilpattu & Yala National Parks)",
      "Train tickets (scenic hill country route)",
      "Traditional cultural show in Kandy",
      "Airport pickup and drop-off",
      "Bottled water throughout the tour",
      "Government taxes and service charges"
    ],
    exclusions: [
      "International flights",
      "Travel insurance (recommended)",
      "Meals (lunch & dinner - can be arranged)",
      "Personal expenses and shopping",
      "Alcoholic beverages",
      "Camera fees at some attractions",
      "Tips and gratuities",
      "Optional activities (surfing lessons, etc.)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Colombo Discovery & Journey to Anuradhapura",
        description: "Begin your Sri Lankan adventure with a comprehensive Colombo city tour, exploring the capital's rich blend of colonial architecture, modern attractions, and cultural landmarks. After lunch, journey to the ancient kingdom of Anuradhapura.",
        activities: [
          "Gangaramaya Temple - iconic Buddhist temple with museum",
          "Independence Square - colonial memorial and park", 
          "Lotus Tower - modern architectural marvel (exterior)",
          "Jami Ul-Alfar Red Mosque - stunning Indo-Saracenic architecture",
          "National Gem Museum - precious stones exhibition",
          "Baddegama Wetland - bird watching and nature walk",
          "Galle Face Green - oceanfront promenade",
          "Dutch Period Museum - colonial history exhibits"
        ],
        accommodation: "N/A",
        meals: "N/A",
        travelTime: "3 hours Colombo to Anuradhapura",
        highlights: "Experience Colombo's cultural diversity and historical significance"
      },
      {
        day: 2,
        title: "Ancient Anuradhapura & Wilpattu Safari Adventure", 
        description: "Discover Sri Lanka's first ancient capital and oldest national park. Explore sacred Buddhist sites dating back over 2,000 years, then embark on an exciting safari to spot leopards and elephants.",
        activities: [
          "Wilpattu National Park Safari - leopards, elephants, sloth bears",
          "Ruwanwelisaya Stupa - magnificent ancient Buddhist monument", 
          "Jaya Sri Maha Bodhi - sacred Bo tree (over 2,300 years old)",
          "Kuttam Pokuna (Twin Ponds) - ancient bathing tanks",
          "Archaeological Museum - artifacts and history",
          "Abhayagiri Monastery - monastic complex ruins",
          "Moonstone carvings - exquisite ancient art"
        ],
        accommodation: "N/A", 
        meals: "N/A",
        travelTime: "2 hours Anuradhapura to Sigiriya",
        highlights: "Ancient Buddhist heritage and wildlife safari in one day"
      },
      {
        day: 3,
        title: "Sigiriya Lion Rock & Cultural Triangle Wonders",
        description: "Climb the magnificent Sigiriya Lion Rock fortress, explore ancient Dambulla Cave Temple, and visit a traditional spice garden. Experience Sri Lanka's cultural triangle at its finest.",
        activities: [
          "Sigiriya Lion Rock Fortress - UNESCO World Heritage climb",
          "Pidurangala Rock - alternative viewpoint and sunset spot",
          "Dambulla Cave Temple - five cave temples with ancient murals", 
          "Spice & Herbal Garden - traditional medicine and spices",
          "Sigiriya Museum - archaeological exhibits and history",
          "Local village visit - authentic rural experience",
          "Traditional craft demonstrations"
        ],
        accommodation: "N/A",
        meals: "N/A", 
        travelTime: "2.5 hours Sigiriya to Kandy",
        highlights: "Iconic Lion Rock climb and ancient cave art masterpieces"
      },
      {
        day: 4,
        title: "Kandy Cultural Immersion & Hill Country Journey",
        description: "Explore the last kingdom of Sri Lanka, visit the sacred Temple of the Tooth, enjoy panoramic viewpoints, and experience traditional cultural performances before heading to the hill country.",
        activities: [
          "Temple of the Tooth (Sri Dalada Maligawa) - most sacred Buddhist site",
          "Kandy Lake - scenic walk around the historic lake",
          "Bahirawakanda Viewpoint - panoramic Kandy city views",
          "Ambuluwawa Tower - multi-religious harmony symbol", 
          "Nelligala Buddhist Temple - hilltop meditation center",
          "Traditional Kandyan dance show - cultural performance",
          "Royal Botanical Gardens Peradeniya - tropical flora",
          "Gem museum and workshop visit"
        ],
        accommodation: "N/A",
        meals: "N/A",
        travelTime: "2.5 hours Kandy to Nuwara Eliya", 
        highlights: "Sacred Temple of the Tooth and vibrant cultural performances"
      },
      {
        day: 5,
        title: "Nuwara Eliya Tea Country & Scenic Train Experience",
        description: "Discover 'Little England' in the heart of Sri Lanka's tea country. Visit tea plantations, enjoy colonial architecture, and experience one of the world's most scenic train rides.",
        activities: [
          "Gregory Lake & Park - boating and leisure activities",
          "Sita Amman Temple (Seetha Eliya) - Hindu temple with Ramayana connection",
          "Tea factory and plantation tour - Ceylon tea production process",
          "Hakgala Botanical Gardens - cool climate flora",
          "Nuwara Eliya town tour - colonial architecture and post office",
          "Galway's Land National Park - montane forest",
          "Devon & St. Clair Falls - twin waterfalls",
          "Scenic train ride preparation (Nanu Oya to Ella)"
        ],
        accommodation: "N/A", 
        meals: "N/A",
        travelTime: "3 hours by train (most scenic route in Sri Lanka)",
        highlights: "World-famous tea plantations and breathtaking mountain scenery"
      },
      {
        day: 6,
        title: "Ella Adventures & Mountain Peaks",
        description: "Experience the magical beauty of Ella with iconic landmarks, adventurous hikes, and stunning viewpoints. Enjoy the famous train ride and explore mountain peaks.",
        activities: [
          "Scenic train ride (Nanu Oya to Ella) - world's most beautiful train journey", 
          "Nine Arch Bridge - iconic railway bridge and photo spot",
          "Demodara Railway Loop - engineering marvel spiral",
          "Flying Ravana Mega Zipline - adventure activity (optional)",
          "Ravana Falls - picturesque waterfall and swimming spot",
          "Little Adam's Peak - easy hiking with panoramic views",
          "Ella Rock hike - challenging trek with spectacular summit views", 
          "Tea plantation visit - authentic tea estate experience"
        ],
        accommodation: "N/A",
        meals: "N/A", 
        travelTime: "4 hours Ella to Tissamaharama",
        highlights: "Iconic Nine Arch Bridge and spectacular mountain hiking"
      },
      {
        day: 7,
        title: "Yala Safari & Ancient Temples Discovery",
        description: "Embark on an exciting wildlife safari in Yala National Park, famous for leopards and elephants. Explore ancient temples and enjoy boat safari experiences.",
        activities: [
          "Yala National Park Safari - leopards, elephants, crocodiles, birds",
          "Tissa Lake boat safari - evening wildlife and bird watching", 
          "Kataragama Temple - multi-religious pilgrimage site",
          "Sithulpawwa Rock Temple - ancient forest monastery",
          "Kirinda Beach - pristine coastal beauty",
          "Bundala National Park (optional) - migratory birds sanctuary", 
          "Local fishing village visit - authentic coastal culture",
          "Sunset photography at Yala"
        ],
        accommodation: "N/A",
        meals: "N/A",
        travelTime: "2 hours Tissamaharama to Hiriketiya", 
        highlights: "World-class wildlife safari and pristine southern beaches"
      },
      {
        day: 8,
        title: "Southern Coast Beaches & Water Adventures",
        description: "Relax and enjoy Sri Lanka's stunning southern coastline with surfing, beach activities, and scenic coastal exploration. Experience the laid-back beach culture.",
        activities: [
          "Surfing lessons at Hiriketiya Beach - perfect waves for beginners",
          "Turtle Beach Balapitiya - turtle watching and conservation center",
          "Blue Whale Point - whale watching viewpoint", 
          "Mirissa Coconut Tree Hill - iconic Instagram spot and sunset views",
          "Beach relaxation and swimming - pristine tropical beaches",
          "Coconut palm climbing demonstration - local tradition",
          "Fishing boat excursion - traditional stilt fishing (seasonal)",
          "Beachside seafood dining experience"
        ],
        accommodation: "N/A",
        meals: "N/A",
        travelTime: "1 hour Hiriketiya to Galle",
        highlights: "Perfect surfing waves and stunning tropical beach experiences"
      },
      {
        day: 9,
        title: "Galle Fort Heritage & Madu River Safari - Departure",
        description: "Conclude your Sri Lankan adventure with a heritage walk through historic Galle Fort, river safari experience, and cultural activities before departure.",
        activities: [
          "Galle Fort UNESCO World Heritage Site - complete walking tour",
          "Maritime Archaeological Museum - colonial naval history", 
          "Madu River boat safari - mangrove ecosystem and biodiversity",
          "Fish therapy spa experience - natural foot treatment by doctor fish",
          "Traditional puppet museum - cultural art forms",
          "Dutch Reformed Church - colonial religious architecture",
          "Galle Lighthouse - historic landmark and ocean views", 
          "Last-minute souvenir shopping at Galle Fort"
        ],
        departure: "N/A",
        meals: "N/A",
        travelTime: "2 hours Galle to Colombo Airport", 
        highlights: "Historic Galle Fort exploration and unique river safari experience"
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
      "/images/turtel.jpg",
      "/images/whale watching.jpg"
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
      "/images/yala(1).jpg",
      "/images/ellatrain.jpg",
      "/images/littleadems peak.jpg"
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
    subtitle: "Hill Country Trains, Ancient Temples & Rock Fortresses – Ella to Sigiriya",
    description: "Experience Sri Lanka's ultimate cultural and scenic adventure combining hill country train rides, mountain hikes, tea estates, ancient temples, and UNESCO World Heritage sites. From Ella's mountain beauty to Sigiriya's ancient wonders.",
    longDescription: "Embark on an unforgettable 2-day cultural and scenic journey starting with Ella's breathtaking landscapes, world-famous train rides, Little Adam's Peak hiking, and tea plantation experiences, followed by ancient temple explorations, elephant encounters, and culminating with the magnificent Sigiriya Rock Fortress climb.",
    duration: "2 days / 1 night",
    price: "1 person: $250 | 2 persons: $350",
    priceFrom: 250,
    groupSize: "2-8 people",
    difficulty: "Easy to Moderate",
    season: "Year-round (best March - September)",
    // SEO Optimization
    seo: {
      metaTitle: "2-Day Ella Train & Sigiriya Cultural Tour | Hill Country to Ancient Kingdoms Sri Lanka",
      metaDescription: "Epic 2-day Sri Lanka adventure: Ella scenic train ride, Little Adam's Peak hike, Nuwara Eliya tea estates, Temple of Tooth Kandy, Pinnawala elephants & Sigiriya Rock Fortress. Complete cultural experience!",
      keywords: ["Ella train ride Sri Lanka", "Nanu Oya to Ella train", "Little Adam's Peak hike", "Nuwara Eliya post office", "Ceylon tea factory tour", "Ambuluwawa tower", "Temple of Tooth Kandy", "Pinnawala elephant orphanage", "Sigiriya Rock Fortress", "Pidurangala Rock", "Dambulla cave temple", "2 day cultural tour", "hill country train journey", "ancient kingdoms Sri Lanka"],
      canonicalUrl: "/tours/5",
      ogTitle: "Ultimate Ella Train & Sigiriya Adventure | 2-Day Cultural Sri Lanka Tour",
      ogDescription: "Experience the best of Sri Lanka in 2 days! Scenic train rides, mountain hikes, tea estates, ancient temples & rock fortresses. From hill country beauty to ancient kingdoms.",
      ogImage: "/images/ella.jpg",
      twitterTitle: "2-Day Ella & Sigiriya Cultural Tour | Train + Temples",
      twitterDescription: "Scenic train ride + Little Adam's Peak + Sigiriya Rock + Temple of Tooth = Ultimate Sri Lanka cultural adventure!",
      structuredData: {
        "@type": "TouristTrip",
        "name": "Cultural & Scenic Adventure Day Tour",
        "description": "A comprehensive 2-day tour combining Sri Lanka's most scenic hill country attractions with ancient cultural heritage sites, featuring train rides, mountain hikes, tea estates, and UNESCO World Heritage temples.",
        "touristType": ["Cultural Tourist", "Heritage Tourist", "Nature Tourist", "Adventure Tourist", "Photography Tourist"],
        "duration": "P2D",
        "timeOfYear": "Year-round",
        "offers": {
          "@type": "Offer",
          "price": "250",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "includesAttraction": [
          {
            "@type": "TouristAttraction",
            "name": "Nanu Oya to Ella Train"
          },
          {
            "@type": "TouristAttraction",
            "name": "Little Adam's Peak"
          },
          {
            "@type": "TouristAttraction",
            "name": "Nuwara Eliya Post Office"
          },
          {
            "@type": "TouristAttraction",
            "name": "Ceylon Tea Factory"
          },
          {
            "@type": "TouristAttraction",
            "name": "Ambuluwawa Tower"
          },
          {
            "@type": "TouristAttraction",
            "name": "Temple of the Tooth Kandy"
          },
          {
            "@type": "TouristAttraction",
            "name": "Pinnawala Elephant Orphanage"
          },
          {
            "@type": "TouristAttraction",
            "name": "Sigiriya Rock Fortress"
          },
          {
            "@type": "TouristAttraction",
            "name": "Pidurangala Rock"
          },
          {
            "@type": "TouristAttraction",
            "name": "Dambulla Cave Temple"
          }
        ]
      }
    },
    slug: "cultural-scenic-adventure-tour",
    image: "/images/ella.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/sigiriya.jpg",
      "/images/nuwaraeliya.jpg",
      "/images/kandy-temple.jpg"
    ],
    highlights: ["Scenic Train Ride (Nanu Oya-Ella)", "Little Adam's Peak Hike", "Nine Arch Bridge", "Nuwara Eliya Colonial Architecture", "Ceylon Tea Factory Experience", "Ambuluwawa Multi-Religious Centre", "Temple of the Tooth Kandy", "Pinnawala Elephant Orphanage", "Sigiriya Rock Fortress", "Pidurangala Rock Sunset", "Dambulla Cave Temple"],
    inclusions: [
      "Air-conditioned transportation with professional driver",
      "1 night accommodation in Kandy/Pinnawala area",
      "Scenic train tickets (Nanu Oya to Ella)",
      "Professional English-speaking cultural guide throughout",
      "Temple of the Tooth guided tour",
      "Pinnawala Elephant Orphanage entrance",
      "Sigiriya Rock Fortress entrance and guide",
      "Pidurangala Rock climbing guide",
      "Dambulla Cave Temple visit",
      "Ceylon tea factory tour and tasting",
      "Ambuluwawa tower entrance",
      "Express way tolls and parking fees",
      "Complimentary bottled water throughout tour",
      "Passenger travel insurance coverage",
      "Hotel pickup and drop-off service"
    ],
    exclusions: [
      "Additional entrance fees not mentioned in inclusions",
      "Personal expenses and shopping",
      "Alcoholic beverages and premium drinks",
      "Meals (breakfast, lunch, dinner can be arranged)",
      "Tips and gratuities for guide and driver",
      "Optional activities and additional excursions",
      "Additional accommodation beyond specified night",
      "Travel insurance beyond basic coverage included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Hill Country Train Journey & Cultural Exploration",
        description: "Begin your adventure in the beautiful hill country of Ella, experience the world's most scenic train journey, explore colonial Nuwara Eliya, visit tea estates, and journey to the cultural heart of Kandy with its sacred temples.",
        schedule: [
          {
            time: "Early Morning",
            period: "06:00 - 06:30",
            activity: "Departure from Ella",
            description: "Early morning departure from your accommodation in Ella to begin this incredible 2-day cultural and scenic adventure through Sri Lanka's most beautiful landscapes and heritage sites.",
            highlights: ["Early morning pickup", "Scenic mountain views", "Fresh mountain air", "Photography opportunities", "Comfortable transportation", "Professional guide introduction"]
          },
          {
            time: "Morning",
            period: "06:30 - 08:00",
            activity: "Scenic Train Ride (Nanu Oya to Ella)",
            description: "Experience one of the world's most beautiful train journeys through emerald tea plantations, misty mountains, and cascading waterfalls. This iconic route offers breathtaking panoramic views of Sri Lanka's hill country.",
            highlights: ["World's most scenic train ride", "Tea plantation vistas", "Mountain panoramas", "Waterfall sightings", "Colonial railway heritage", "Photography paradise"]
          },
          {
            time: "Morning",
            period: "08:00 - 09:00",
            activity: "Traditional Sri Lankan Breakfast",
            description: "Enjoy a hearty traditional Sri Lankan breakfast featuring hoppers, string hoppers, coconut sambol, and Ceylon tea, providing the perfect fuel for your mountain hiking adventure.",
            highlights: ["Authentic Sri Lankan breakfast", "Fresh local ingredients", "Ceylon tea tasting", "Cultural dining experience", "Energy for hiking", "Local hospitality"]
          },
          {
            time: "Morning",
            period: "09:00 - 11:30",
            activity: "Little Adam's Peak Hiking",
            description: "Conquer Little Adam's Peak, a relatively easy hike offering spectacular 360-degree panoramic views of the surrounding tea plantations, valleys, and mountain ranges. Perfect for all fitness levels with incredibly rewarding summit views.",
            highlights: ["360-degree mountain panoramas", "Tea plantation bird's eye views", "Easy hiking trail", "Summit achievement", "Breathtaking photography", "Fresh mountain air"]
          },
          {
            time: "Late Morning",
            period: "11:30 - 14:00",
            activity: "Nuwara Eliya & Historic Post Office",
            description: "Explore Nuwara Eliya, known as 'Little England,' with its colonial architecture, perfectly manicured gardens, and the famous historic post office. Experience the cool climate and British colonial charm of this hill station.",
            highlights: ["Colonial British architecture", "Historic post office visit", "Little England atmosphere", "Cool mountain climate", "Victorian-era buildings", "Scenic town exploration"]
          },
          {
            time: "Afternoon",
            period: "14:00 - 15:00",
            activity: "Ceylon Tea Factory Experience",
            description: "Discover the secrets of world-renowned Ceylon tea at a traditional tea factory. Learn about the complete tea-making process from leaf to cup, enjoy fresh tea tastings, and purchase premium teas directly from the source.",
            highlights: ["Tea production process tour", "Factory machinery demonstrations", "Fresh Ceylon tea tasting", "Premium tea shopping", "Educational experience", "Cultural insights"]
          },
          {
            time: "Afternoon",
            period: "15:00 - 16:00",
            activity: "Ambuluwawa Multi-Religious Centre",
            description: "Visit the unique Ambuluwawa Tower and Multi-Religious Centre, offering panoramic views of the surrounding mountains and representing the harmony of different religions in Sri Lanka.",
            highlights: ["Multi-religious harmony", "Panoramic mountain views", "Unique tower architecture", "Spiritual significance", "Photography opportunities", "Cultural tolerance message"]
          },
          {
            time: "Evening",
            period: "16:00 - 18:00",
            activity: "Temple of the Tooth Kandy",
            description: "Visit Sri Lanka's most sacred Buddhist temple in Kandy, housing the tooth relic of Lord Buddha. Experience evening prayers, learn about Buddhist traditions, and explore the beautiful temple complex.",
            highlights: ["Sacred tooth relic viewing", "Evening prayer ceremonies", "Buddhist temple architecture", "Religious significance", "Cultural immersion", "Spiritual experience"]
          },
          {
            time: "Evening",
            period: "18:00 - 20:00",
            activity: "Journey to Pinnawala",
            description: "Scenic evening drive to Pinnawala area for overnight accommodation, passing through beautiful countryside and traditional villages.",
            highlights: ["Scenic countryside drive", "Traditional village views", "Evening landscape photography", "Comfortable accommodation", "Rural Sri Lanka experience", "Peaceful overnight stay"]
          }
        ],
        duration: "Full day with overnight in Pinnawala area",
        pickupTime: "06:00 AM from Ella accommodation",
        pickupDetails: "Early morning pickup from your hotel in Ella. We'll confirm exact timing based on train schedules and your accommodation location."
      },
      {
        day: 2,
        title: "Ancient Kingdoms & UNESCO World Heritage Sites",
        description: "Experience Sri Lanka's ancient heritage with elephant encounters, magnificent rock fortresses, and sacred cave temples. Journey through 2,000 years of history from Pinnawala to the ancient kingdoms of Sigiriya and Dambulla.",
        schedule: [
          {
            time: "Early Morning",
            period: "06:00 - 08:30",
            activity: "Departure & Journey to Sigiriya",
            description: "Early morning departure from your accommodation with a scenic drive through changing landscapes from the hill country to the cultural triangle, arriving at the magnificent Sigiriya Rock Fortress for optimal climbing conditions.",
            highlights: ["Early departure for best weather", "Landscape transition views", "Comfortable air-conditioned transport", "Professional guide commentary", "Photography opportunities", "Optimal climbing timing"]
          },
          {
            time: "Morning",
            period: "08:30 - 12:00",
            activity: "Sigiriya Rock Fortress Climb",
            description: "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site and ancient royal citadel rising 200 meters above the jungle. Marvel at the world-famous frescoes, ancient mirror wall inscriptions, and breathtaking panoramic views from the summit palace ruins.",
            highlights: ["UNESCO World Heritage site", "Ancient royal citadel", "Famous Sigiriya frescoes", "Mirror wall inscriptions", "Royal palace ruins", "Panoramic jungle views"]
          },
          {
            time: "Afternoon",
            period: "12:00 - 14:00",
            activity: "Traditional Sri Lankan Lunch",
            description: "Enjoy a delicious traditional Sri Lankan lunch featuring rice and curry with multiple vegetable and meat dishes, providing authentic flavors and much-needed energy after the Sigiriya climb.",
            highlights: ["Authentic rice and curry", "Multiple curry varieties", "Fresh local ingredients", "Cultural dining experience", "Rest and refreshment", "Traditional hospitality"]
          },
          {
            time: "Afternoon",
            period: "14:00 - 16:00",
            activity: "Pidurangala Rock Climbing",
            description: "Climb the less crowded but equally spectacular Pidurangala Rock, offering unique views of Sigiriya Rock Fortress and surrounding landscapes. This adventure provides perfect photography angles of the famous rock fortress.",
            highlights: ["Unique Sigiriya views", "Less crowded experience", "Adventure rock climbing", "Photography paradise", "Jungle panoramas", "Alternative perspective"]
          },
          {
            time: "Late Afternoon",
            period: "16:00 - 17:30",
            activity: "Dambulla Cave Temple Complex",
            description: "Explore the magnificent Dambulla Cave Temple complex, a UNESCO World Heritage site featuring five caves with over 150 Buddha statues and ancient paintings dating back 2,000 years. Experience the spiritual atmosphere of this sacred pilgrimage site.",
            highlights: ["UNESCO World Heritage site", "2,000-year-old cave paintings", "150+ Buddha statues", "Religious pilgrimage site", "Ancient art treasures", "Spiritual atmosphere"]
          },
          {
            time: "Evening",
            period: "17:30 - 20:00",
            activity: "Departure to Next Destination",
            description: "Comfortable departure from the cultural triangle with drop-off at your hotel or onward transportation to your next destination. Safe journey with memories of an incredible 2-day cultural and scenic adventure through Sri Lanka's most beautiful and historically significant locations.",
            highlights: ["Hotel drop-off service", "Onward destination transfer", "Safe comfortable transport", "Trip memories discussion", "Professional service", "Flexible departure arrangements"]
          }
        ],
        duration: "Full day departure",
        pickupTime: "06:00 AM from Pinnawala accommodation",
        pickupDetails: "Early morning pickup for optimal Sigiriya climbing conditions and weather. Flexible drop-off arrangements to your next destination."
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