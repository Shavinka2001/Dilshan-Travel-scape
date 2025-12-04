'use client';

import { FaMapMarkerAlt, FaClock, FaStar, FaCamera, FaMountain, FaWater, FaTree, FaUmbrellaBeach } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Comprehensive destinations data
const destinations = [
  {
    id: 1,
    name: "Colombo",
    category: "Urban & Culture",
    description: "Sri Lanka's vibrant commercial capital blending colonial charm with modern sophistication.",
    highlights: ["Gangaramaya Temple", "Independence Square", "Galle Face Green", "Pettah Market"],
    duration: "1-2 Days",
    bestTime: "Year-round",
    difficulty: "Easy",
    icon: "🏛️",
    image: "/images/colombo(1).jpg",
    color: "from-blue-500/10 to-blue-600/20",
    features: ["Historical Sites", "Shopping", "Fine Dining", "Museums"]
  },
  {
    id: 2,
    name: "Kandy",
    category: "Cultural Heritage",
    description: "The sacred city and last royal capital, home to the Temple of the Sacred Tooth Relic.",
    highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Cultural Performances"],
    duration: "2-3 Days", 
    bestTime: "December - April",
    difficulty: "Moderate",
    icon: "🏯",
    image: "/images/kandy.jpg",
    color: "from-purple-500/10 to-purple-600/20",
    features: ["UNESCO Site", "Cultural Shows", "Botanical Gardens", "Lake Views"]
  },
  {
    id: 3,
    name: "Galle & Southern Coast",
    category: "Coastal & Historic",
    description: "Historic Dutch fort city with pristine beaches and coastal charm.",
    highlights: ["Galle Fort", "Unawatuna Beach", "Stilt Fishermen", "Turtle Hatchery"],
    duration: "2-4 Days",
    bestTime: "November - April", 
    difficulty: "Easy",
    icon: "🏖️",
    image: "/images/galle fort.jpg",
    color: "from-teal-500/10 to-teal-600/20",
    features: ["UNESCO Fort", "Pristine Beaches", "Marine Life", "Coastal Culture"]
  },
  {
    id: 4,
    name: "Sigiriya",
    category: "Ancient Wonder",
    description: "The magnificent Lion Rock fortress rising 200m above the jungle canopy.",
    highlights: ["Ancient Rock Fortress", "Frescoes Gallery", "Mirror Wall", "Royal Gardens"],
    duration: "1-2 Days",
    bestTime: "December - March",
    difficulty: "Challenging",
    icon: "🗿",
    image: "/images/sigiriya(1).jpg",
    color: "from-orange-500/10 to-orange-600/20",
    features: ["UNESCO Site", "Ancient Art", "Panoramic Views", "Archaeological Wonder"]
  },
  {
    id: 5,
    name: "Ella",
    category: "Hill Country",
    description: "Scenic hill station with tea plantations, waterfalls, and mountain views.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls", "Tea Plantations"],
    duration: "2-3 Days",
    bestTime: "December - March",
    difficulty: "Moderate",
    icon: "🌄",
    image: "/images/ninearch(2) (1).jpg",
    color: "from-green-500/10 to-green-600/20",
    features: ["Mountain Views", "Tea Culture", "Hiking Trails", "Scenic Railways"]
  },
  {
    id: 6,
    name: "Nuwara Eliya",
    category: "Hill Station",
    description: "The 'Little England' of Sri Lanka with cool climate and colonial architecture.",
    highlights: ["Gregory Lake", "Horton Plains", "Tea Factories", "Colonial Buildings"],
    duration: "2-3 Days",
    bestTime: "December - March",
    difficulty: "Easy",
    icon: "🍃",
    image: "/images/nuwaraeliya(1).jpg",
    color: "from-emerald-500/10 to-emerald-600/20",
    features: ["Cool Climate", "Tea Estates", "Colonial Heritage", "Nature Parks"]
  },
  {
    id: 7,
    name: "Yala National Park",
    category: "Wildlife Safari",
    description: "Sri Lanka's premier wildlife destination with the highest leopard density.",
    highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Ancient Ruins"],
    duration: "1-2 Days",
    bestTime: "February - July",
    difficulty: "Easy",
    icon: "🦁",
    image: "/images/yala(1).jpg",
    color: "from-amber-500/10 to-amber-600/20",
    features: ["Wildlife Safari", "Leopards", "Ancient Ruins", "Bird Paradise"]
  },
  {
    id: 8,
    name: "Anuradhapura",
    category: "Ancient Capital",
    description: "First capital of Sri Lanka with sacred Buddhist temples and ancient ruins.",
    highlights: ["Sacred Bodhi Tree", "Ancient Stupas", "Ruins Complex", "Monastery Sites"],
    duration: "1-2 Days",
    bestTime: "November - March",
    difficulty: "Moderate",
    icon: "🏛️",
    image: "/images/anuradhpura (1).jpg",
    color: "from-red-500/10 to-red-600/20",
    features: ["UNESCO Site", "Sacred Sites", "Ancient Architecture", "Buddhist Heritage"]
  }
];

const categories = [
  { name: "All", icon: FaStar },
  { name: "Cultural Heritage", icon: FaTree },
  { name: "Coastal & Historic", icon: FaUmbrellaBeach },
  { name: "Hill Country", icon: FaMountain },
  { name: "Wildlife Safari", icon: FaCamera },
  { name: "Urban & Culture", icon: FaWater }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
              Our Destinations
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
              Discover Amazing <span className="text-primary font-semibold block sm:inline">Destinations</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral/70 max-w-3xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
              From ancient kingdoms to pristine beaches, explore Sri Lanka's most captivating destinations with our expert guidance.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base header-brand-secondary"
                >
                  <IconComponent className="w-4 h-4 text-primary" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20 group"
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-3xl sm:text-4xl filter drop-shadow-lg">
                    {destination.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs sm:text-sm font-medium text-neutral border border-gray-200">
                    {destination.category}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border ${
                    destination.difficulty === 'Easy' ? 'bg-green-100 text-green-600 border-green-200' :
                    destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-600 border-yellow-200' :
                    'bg-red-100 text-red-600 border-red-200'
                  }`}>
                    {destination.difficulty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral mb-2 sm:mb-3 header-brand-primary leading-tight">
                    {destination.name}
                  </h3>
                  
                  <p className="text-neutral/70 mb-4 leading-relaxed hero-subtitle text-sm sm:text-base">
                    {destination.description}
                  </p>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between mb-4 text-xs sm:text-sm bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-primary w-3 h-3" />
                      <span className="text-neutral/70 hero-subtitle">{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="text-primary w-3 h-3" />
                      <span className="text-neutral/70 hero-subtitle">{destination.bestTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {destination.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/5 text-primary rounded text-xs font-medium hero-subtitle"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-neutral mb-2 header-brand-secondary text-sm">Must-See Attractions</h4>
                    <ul className="space-y-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-neutral/70 hero-subtitle leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/"
                    className="w-full bg-primary/5 text-primary py-2.5 sm:py-3 rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center block"
                  >
                    Explore Destination
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sri Lanka Overview */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title text-center">
                Why Choose <span className="text-primary font-semibold">Sri Lanka?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <span className="text-2xl sm:text-3xl">🏛️</span>
                  </div>
                  <h3 className="font-semibold text-neutral mb-2 header-brand-primary text-sm sm:text-base">Rich Heritage</h3>
                  <p className="text-neutral/70 hero-subtitle text-xs sm:text-sm leading-relaxed">
                    Ancient kingdoms, sacred temples, and UNESCO World Heritage sites
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <span className="text-2xl sm:text-3xl">🌿</span>
                  </div>
                  <h3 className="font-semibold text-neutral mb-2 header-brand-primary text-sm sm:text-base">Diverse Nature</h3>
                  <p className="text-neutral/70 hero-subtitle text-xs sm:text-sm leading-relaxed">
                    From tropical beaches to misty mountains and wildlife sanctuaries
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <span className="text-2xl sm:text-3xl">🦁</span>
                  </div>
                  <h3 className="font-semibold text-neutral mb-2 header-brand-primary text-sm sm:text-base">Amazing Wildlife</h3>
                  <p className="text-neutral/70 hero-subtitle text-xs sm:text-sm leading-relaxed">
                    Leopards, elephants, and incredible biodiversity in national parks
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <span className="text-2xl sm:text-3xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-neutral mb-2 header-brand-primary text-sm sm:text-base">Warm Hospitality</h3>
                  <p className="text-neutral/70 hero-subtitle text-xs sm:text-sm leading-relaxed">
                    Friendly locals and authentic cultural experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-primary/10 mx-2 sm:mx-0">
              <h3 className="text-xl sm:text-2xl font-light text-neutral mb-4 hero-title">
                Ready to Explore <span className="text-primary font-semibold">Sri Lanka?</span>
              </h3>
              <p className="text-sm sm:text-lg text-neutral/70 mb-6 hero-subtitle max-w-2xl mx-auto">
                Let us create a personalized itinerary that covers the destinations of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center max-w-md mx-auto">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center"
                >
                  Plan My Trip
                </Link>
                <Link
                  href="/"
                  className="border border-primary/30 text-primary px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center"
                >
                  View Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}