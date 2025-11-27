export const siteConfig = {
  name: "Dilshan Travelscape",
  description: "Premium vehicle rentals and guided tours in Sri Lanka",
  phone: "+94 77 123 4567",
  email: "info@dilshantravelscape.com",
  address: "123 Main Street, Colombo, Sri Lanka",
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
    title: "Guided Tours",
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
    description: "A comprehensive Sri Lanka tour showcasing the island’s most iconic and breathtaking destinations.",
    longDescription: "Experience a 6-day Sri Lanka tour covering Galle Fort, Nuwara Eliya, and the island’s most scenic destinations. Enjoy culture, nature, mountains, and unforgettable travel experiences. Perfect Sri Lanka holiday package for all travelers.",
    duration: "6 days / 5 nights",
    price: "1 person: $350 | 2 persons: $450",
    priceFrom: 350,
    groupSize: "1-6 people",
    difficulty: "Easy",
    season: "Year-round",
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
    title: "Kandy Cultural Tour",
    subtitle: "Heritage & Tradition",
    description: "Discover the cultural heart of Sri Lanka",
    longDescription: "Immerse yourself in Sri Lanka's rich cultural heritage with this intimate 2-day tour of Kandy, the last royal capital. Experience ancient temples, traditional arts, and stunning botanical gardens.",
    duration: "2 days / 1 night",
    price: "$120",
    priceFrom: 120,
    groupSize: "1-6 people",
    difficulty: "Easy",
    season: "Year-round",
    image: "/images/ella.jpg",
    gallery: [
      "/images/ella.jpg",
      "/images/galle.jpg",
      "/images/ella.jpg"
    ],
    highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Traditional Dance Show"],
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
    title: "Southern Coast Explorer",
    subtitle: "Beaches & History",
    description: "Beach paradise and historic Galle Fort",
    longDescription: "Discover the enchanting southern coast of Sri Lanka, where pristine beaches meet colonial history. This 3-day journey combines relaxation with cultural exploration.",
    duration: "3 days / 2 nights",
    price: "$180",
    priceFrom: 180,
    groupSize: "1-8 people",
    difficulty: "Easy",
    season: "November - April (best)",
    image: "/images/galle.jpg",
    gallery: [
      "/images/galle.jpg",
      "/images/ella.jpg",
      "/images/galle.jpg"
    ],
    highlights: ["Galle Fort", "Unawatuna Beach", "Stilt Fishermen", "Turtle Hatchery"],
    inclusions: [
      "2 nights beach accommodation",
      "All meals",
      "Professional guide",
      "Transportation",
      "Turtle hatchery visit",
      "Galle Fort guided tour"
    ],
    exclusions: [
      "Water sports activities",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Galle Fort Discovery",
        description: "Explore the UNESCO World Heritage Galle Fort and its colonial architecture.",
        activities: ["Galle Fort tour", "Dutch Reformed Church", "Lighthouse visit", "Rampart walk"],
        accommodation: "Galle Heritage Villa",
        meals: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Beach & Wildlife",
        description: "Relax at beautiful beaches and visit the turtle conservation project.",
        activities: ["Unawatuna Beach", "Turtle hatchery", "Stilt fishermen", "Snorkeling (optional)"],
        accommodation: "Beach Resort",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Coastal Exploration",
        description: "Final coastal exploration and departure.",
        activities: ["Mirissa Beach", "Coconut Tree Hill", "Local market visit"],
        accommodation: "N/A",
        meals: "Breakfast, Lunch"
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
    comment: "Excellent service! The driver was professional and the vehicle was spotless. Highly recommended!",
    image: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Marco Silva",
    country: "Italy",
    rating: 5,
    comment: "Amazing tour experience. Our guide was knowledgeable and showed us hidden gems of Sri Lanka.",
    image: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Emily Chen",
    country: "Singapore",
    rating: 5,
    comment: "Perfect for families! Safe, comfortable, and the kids loved every moment of the tour.",
    image: "/images/testimonial3.jpg"
  }
];