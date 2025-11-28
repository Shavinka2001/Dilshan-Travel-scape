'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight, FaClock, FaCamera, FaMountain, FaUmbrellaBeach, FaLandmark, FaLeaf, FaStar, FaHeart } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    location: "Central Province",
    description: "Ancient rock fortress with stunning frescoes and panoramic views",
    image: "/images/sigiriya.jpg",
    category: "Heritage",
    icon: <FaLandmark className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["5th Century Palace", "Ancient Frescoes", "Mirror Wall", "Lion's Paws"],
    bestTime: "Year-round",
    duration: "4-5 hours",
    rating: 4.9,
    popularity: "Very High",
    unesco: true,
    alt: "Sigiriya Rock Fortress ancient ruins with Lion's Paws entrance in Sri Lanka"
  },
  {
    id: 2,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    description: "Iconic colonial-era railway bridge surrounded by lush tea plantations",
    image: "/images/ninearch.jpg",
    category: "Nature",
    icon: <FaMountain className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["Train Spotting", "Tea Plantations", "Photography", "Hiking Trails"],
    bestTime: "Dec - Mar",
    duration: "2-3 hours",
    rating: 4.8,
    popularity: "High",
    unesco: false,
    alt: "Nine Arch Bridge in Ella with train passing through tea plantations"
  },
  {
    id: 3,
    name: "Galle Fort",
    location: "Southern Province", 
    description: "UNESCO World Heritage Dutch colonial fort with cobblestone streets",
    image: "/images/galle.jpg",
    category: "Heritage",
    icon: <FaLandmark className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["Dutch Architecture", "Lighthouse", "Rampart Walks", "Art Galleries"],
    bestTime: "Nov - Apr",
    duration: "Half Day",
    rating: 4.7,
    popularity: "Very High",
    unesco: true,
    alt: "Galle Fort lighthouse and Dutch colonial architecture in Sri Lanka"
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    location: "Central Province",
    description: "Misty hill station known as 'Little England' with tea estates",
    image: "/images/nuwaraeliya.jpg",
    category: "Nature",
    icon: <FaLeaf className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["Tea Factories", "Gregory Lake", "Strawberry Farms", "Cool Climate"],
    bestTime: "Mar - May",
    duration: "Full Day",
    rating: 4.6,
    popularity: "High",
    unesco: false,
    alt: "Nuwara Eliya tea plantations and misty mountains in Sri Lanka hill country"
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    description: "Premier wildlife sanctuary famous for leopards and diverse fauna",
    image: "/images/yala.jpg",
    category: "Wildlife",
    icon: <FaCamera className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Safari Experience"],
    bestTime: "Feb - Jul",
    duration: "Full Day",
    rating: 4.8,
    popularity: "Very High",
    unesco: false,
    alt: "Yala National Park wildlife safari with leopards and elephants"
  },
  {
    id: 6,
    name: "Hiriketiya Bay",
    location: "Southern Province", 
    description: "Hidden gem beach perfect for surfing and relaxation",
    image: "/images/hiriketiya.jpg",
    category: "Beach",
    icon: <FaUmbrellaBeach className="w-4 h-4 sm:w-5 sm:h-5" />,
    highlights: ["Surfing Waves", "Palm Trees", "Beach Cafes", "Sunset Views"],
    bestTime: "Nov - Apr",
    duration: "Half Day",
    rating: 4.5,
    popularity: "Medium",
    unesco: false,
    alt: "Hiriketiya Bay beach with palm trees and surfing waves in southern Sri Lanka"
  }
];

const categories = [
  { name: "All", filter: "all" },
  { name: "Heritage", filter: "Heritage" },
  { name: "Nature", filter: "Nature" },
  { name: "Beach", filter: "Beach" },
  { name: "Wildlife", filter: "Wildlife" }
];

export default function DestinationsHighlight() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  // Mobile detection and responsive handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Must-Visit Destinations in Sri Lanka",
    "description": "Top tourist destinations and attractions in Sri Lanka including heritage sites, natural wonders, beaches, and wildlife parks",
    "itemListElement": filteredDestinations.map((destination, index) => ({
      "@type": "TouristDestination",
      "position": index + 1,
      "name": destination.name,
      "description": destination.description,
      "geo": {
        "@type": "GeoCoordinates",
        "addressRegion": destination.location
      },
      "touristType": destination.category,
      "image": `https://dilshantravelscape.com${destination.image}`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": destination.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section 
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        itemScope 
        itemType="https://schema.org/TouristAttraction"
        role="region"
        aria-labelledby="destinations-heading"
      >
        {/* Background Pattern - Optimized for mobile */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-primary rounded-full -translate-x-24 -translate-y-24 sm:-translate-x-48 sm:-translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-secondary rounded-full translate-x-20 translate-y-20 sm:translate-x-40 sm:translate-y-40"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-12 sm:w-24"></div>
            <span className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mx-3 sm:mx-4 header-brand-secondary">
              Discover Sri Lanka
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-12 sm:w-24"></div>
          </div>
          
          <h2 
            id="destinations-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2"
            itemProp="name"
          >
            Must-Visit <span className="text-primary font-semibold hero-title-accent block sm:inline">Destinations</span>
          </h2>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-neutral/70 max-w-3xl mx-auto hero-subtitle leading-relaxed px-4 sm:px-0"
            itemProp="description"
          >
            From ancient fortresses to pristine beaches, discover the diverse beauty and rich heritage 
            that makes Sri Lanka the Pearl of the Indian Ocean.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.filter}
              onClick={() => setActiveCategory(category.filter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hero-subtitle text-xs sm:text-sm md:text-base touch-manipulation ${
                activeCategory === category.filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white text-neutral/70 hover:bg-primary/5 hover:text-primary border border-gray-200 hover:border-primary/30'
              }`}
              aria-pressed={activeCategory === category.filter}
              role="tab"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 xl:gap-10 px-3 sm:px-0">
          {filteredDestinations.map((destination, index) => (
            <article
              key={destination.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 min-h-[420px] sm:min-h-[400px]"
              onMouseEnter={() => !isMobile && setHoveredCard(destination.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              itemScope
              itemType="https://schema.org/TouristDestination"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                  loading={index < 2 ? "eager" : "lazy"}
                  itemProp="image"
                  width="400"
                  height="300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(destination.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation"
                  aria-label={`${favorites.has(destination.id) ? 'Remove from' : 'Add to'} favorites`}
                >
                  <FaHeart className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
                    favorites.has(destination.id) ? 'text-red-500' : 'text-gray-400'
                  }`} />
                </button>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
                    <div className="text-primary flex-shrink-0">
                      {destination.icon}
                    </div>
                    <span className="text-neutral font-medium text-xs sm:text-sm hero-subtitle whitespace-nowrap">
                      {destination.category}
                    </span>
                    {destination.unesco && (
                      <span className="text-yellow-600 text-xs font-bold" title="UNESCO World Heritage Site">
                        UNESCO
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating & Location */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 space-y-1">
                  <div className="flex items-center space-x-1 text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    <span className="hero-subtitle text-xs sm:text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="flex items-center text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <FaMapMarkerAlt className="w-3 h-3 mr-1 text-primary flex-shrink-0" />
                    <span className="hero-subtitle text-xs sm:text-sm truncate">{destination.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 
                    className="text-xl sm:text-xl md:text-2xl font-semibold text-neutral mb-3 sm:mb-3 hero-title-accent group-hover:text-primary transition-colors line-clamp-2"
                    itemProp="name"
                  >
                    {destination.name}
                  </h3>
                  
                  <p 
                    className="text-neutral/70 mb-4 sm:mb-4 hero-subtitle leading-relaxed text-base sm:text-base line-clamp-3"
                    itemProp="description"
                  >
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 sm:mb-4">
                    <div className="flex flex-wrap gap-2 sm:gap-2">
                      {destination.highlights.slice(0, isMobile ? 3 : 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 sm:px-3 py-1 sm:py-1 bg-primary/10 text-primary text-sm rounded-full hero-subtitle font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="px-3 sm:px-3 py-1 sm:py-1 bg-gray-100 text-neutral/60 text-sm rounded-full hero-subtitle">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-2 text-sm sm:text-sm text-neutral/60">
                    <div className="flex items-center space-x-4 sm:space-x-4">
                      <div className="flex items-center">
                        <FaClock className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="hero-subtitle">{destination.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="hero-subtitle font-medium text-primary">
                          {destination.popularity}
                        </span>
                      </div>
                    </div>
                    <span className="hero-subtitle font-medium text-primary text-sm sm:text-sm">
                      Best: {destination.bestTime}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link 
                    href="/tours"
                    className="group/btn inline-flex items-center justify-center w-full px-6 sm:px-6 py-4 sm:py-3 bg-gradient-to-r from-primary via-primary to-primary/95 text-white rounded-xl hover:from-primary/95 hover:via-primary/95 hover:to-primary active:scale-95 transition-all duration-200 font-bold hero-subtitle shadow-xl hover:shadow-2xl text-base sm:text-base touch-manipulation border-2 border-primary/20 hover:border-primary/40 min-h-[48px]"
                    aria-label={`Explore tours to ${destination.name}`}
                  >
                    <span className="font-bold">Explore Tours</span>
                    <FaArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === destination.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-2 sm:px-0">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral mb-3 sm:mb-4 hero-title-accent">
              Ready to Explore Sri Lanka?
            </h3>
            <p className="text-neutral/70 mb-6 sm:mb-8 hero-subtitle text-base sm:text-lg max-w-2xl mx-auto px-2">
              Join thousands of satisfied travelers who have discovered the magic of Sri Lanka with our expertly crafted tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
              <Link 
                href="/tours"
                className="inline-flex items-center justify-center px-8 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-primary via-primary to-primary/95 text-white rounded-xl hover:from-primary/95 hover:via-primary/95 hover:to-primary active:scale-95 transition-all duration-200 font-bold hero-subtitle shadow-2xl hover:shadow-2xl text-base sm:text-base touch-manipulation border-2 border-primary/30 hover:border-primary/50 min-h-[52px]"
              >
                <span className="font-bold">View All Tours</span>
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-8 py-4 sm:py-4 bg-white text-primary border-3 border-primary rounded-xl hover:bg-primary hover:text-white active:scale-95 transition-all duration-200 font-bold hero-subtitle shadow-lg hover:shadow-xl text-base sm:text-base touch-manipulation min-h-[52px]"
              >
                <span className="font-bold">Plan Custom Trip</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}