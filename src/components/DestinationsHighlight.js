'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight, FaClock, FaCamera, FaMountain, FaUmbrellaBeach, FaLandmark, FaLeaf } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    location: "Central Province",
    description: "Ancient rock fortress with stunning frescoes and panoramic views",
    image: "/images/sigiriya.jpg",
    category: "Heritage",
    icon: <FaLandmark className="w-5 h-5" />,
    highlights: ["5th Century Palace", "Ancient Frescoes", "Mirror Wall", "Lion's Paws"],
    bestTime: "Year-round",
    duration: "4-5 hours"
  },
  {
    id: 2,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    description: "Iconic colonial-era railway bridge surrounded by lush tea plantations",
    image: "/images/ninearch.jpg",
    category: "Nature",
    icon: <FaMountain className="w-5 h-5" />,
    highlights: ["Train Spotting", "Tea Plantations", "Photography", "Hiking Trails"],
    bestTime: "Dec - Mar",
    duration: "2-3 hours"
  },
  {
    id: 3,
    name: "Galle Fort",
    location: "Southern Province", 
    description: "UNESCO World Heritage Dutch colonial fort with cobblestone streets",
    image: "/images/galle.jpg",
    category: "Heritage",
    icon: <FaLandmark className="w-5 h-5" />,
    highlights: ["Dutch Architecture", "Lighthouse", "Rampart Walks", "Art Galleries"],
    bestTime: "Nov - Apr",
    duration: "Half Day"
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    location: "Central Province",
    description: "Misty hill station known as 'Little England' with tea estates",
    image: "/images/nuwaraeliya.jpg",
    category: "Nature",
    icon: <FaLeaf className="w-5 h-5" />,
    highlights: ["Tea Factories", "Gregory Lake", "Strawberry Farms", "Cool Climate"],
    bestTime: "Mar - May",
    duration: "Full Day"
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    description: "Premier wildlife sanctuary famous for leopards and diverse fauna",
    image: "/images/yala.jpg",
    category: "Wildlife",
    icon: <FaCamera className="w-5 h-5" />,
    highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Safari Experience"],
    bestTime: "Feb - Jul",
    duration: "Full Day"
  },
  {
    id: 6,
    name: "Hiriketiya Bay",
    location: "Southern Province", 
    description: "Hidden gem beach perfect for surfing and relaxation",
    image: "/images/hiriketiya.jpg",
    category: "Beach",
    icon: <FaUmbrellaBeach className="w-5 h-5" />,
    highlights: ["Surfing Waves", "Palm Trees", "Beach Cafes", "Sunset Views"],
    bestTime: "Nov - Apr",
    duration: "Half Day"
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

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            <span className="text-primary font-semibold uppercase text-sm tracking-wider mx-4 header-brand-secondary">
              Discover Sri Lanka
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-neutral mb-6 hero-title">
            Must-Visit <span className="text-primary font-semibold hero-title-accent">Destinations</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral/70 max-w-3xl mx-auto hero-subtitle leading-relaxed">
            From ancient fortresses to pristine beaches, discover the diverse beauty and rich heritage 
            that makes Sri Lanka the Pearl of the Indian Ocean.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.filter}
              onClick={() => setActiveCategory(category.filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hero-subtitle text-sm sm:text-base ${
                activeCategory === category.filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-neutral/70 hover:bg-primary/5 hover:text-primary border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="text-primary">
                      {destination.icon}
                    </div>
                    <span className="text-neutral font-medium text-sm hero-subtitle">
                      {destination.category}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 text-primary" />
                  <span className="hero-subtitle text-sm">{destination.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral mb-3 hero-title-accent group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-neutral/70 mb-4 hero-subtitle leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hero-subtitle font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-neutral/60 text-xs rounded-full hero-subtitle">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-neutral/60">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 mr-1" />
                      <span className="hero-subtitle">{destination.duration}</span>
                    </div>
                  </div>
                  <span className="hero-subtitle font-medium text-primary">
                    Best: {destination.bestTime}
                  </span>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/tours"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl hover:from-primary/90 hover:to-primary transition-all duration-300 font-medium hero-subtitle shadow-lg hover:shadow-xl"
                >
                  Explore Tours
                  <FaArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === destination.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral mb-4 hero-title-accent">
              Ready to Explore Sri Lanka?
            </h3>
            <p className="text-neutral/70 mb-8 hero-subtitle text-lg max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have discovered the magic of Sri Lanka with our expertly crafted tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tours"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold hero-subtitle shadow-lg hover:shadow-xl"
              >
                View All Tours
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold hero-subtitle"
              >
                Plan Custom Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}