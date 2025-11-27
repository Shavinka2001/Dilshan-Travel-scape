'use client';

import { useState } from 'react';
import { packages } from '../../data/siteData';
import { 
  FaClock, 
  FaDollarSign, 
  FaUsers, 
  FaMapMarkerAlt,
  FaFilter,
  FaSearch,
  FaStar
} from 'react-icons/fa';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [filterBy, setFilterBy] = useState('all');

  // Filter and sort packages
  const filteredPackages = packages
    .filter(pkg => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
      
      if (filterBy === 'all') return matchesSearch;
      if (filterBy === 'short') return matchesSearch && parseInt(pkg.duration) <= 3;
      if (filterBy === 'long') return matchesSearch && parseInt(pkg.duration) > 3;
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.priceFrom - b.priceFrom;
      if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral mb-6 hero-title">
              Tour <span className="text-primary hero-title-accent">Packages</span>
            </h1>
            <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed hero-subtitle">
              Discover Sri Lanka's incredible beauty through our carefully crafted tour packages. 
              From cultural heritage to pristine beaches, adventure awaits.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/40" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/40" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none bg-white"
              >
                <option value="all">All Durations</option>
                <option value="short">Short Tours (1-3 days)</option>
                <option value="long">Long Tours (4+ days)</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none bg-white"
              >
                <option value="price">Sort by Price</option>
                <option value="duration">Sort by Duration</option>
                <option value="title">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-neutral/70">
            Showing {filteredPackages.length} of {packages.length} tours
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-neutral leading-tight group-hover:text-primary transition-colors header-brand-primary">
                    {pkg.title}
                  </h3>
                  <div className="text-right ml-4">
                    <div className="text-lg font-bold text-primary">
                      ${pkg.priceFrom}
                    </div>
                    <div className="text-xs text-neutral/60">per person</div>
                  </div>
                </div>

                <p className="text-neutral/70 text-sm mb-4 leading-relaxed hero-subtitle">
                  {pkg.subtitle}
                </p>

                {/* Package Details */}
                <div className="flex items-center justify-between mb-4 text-sm bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-primary text-xs" />
                    <span className="text-neutral/70">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-primary text-xs" />
                    <span className="text-neutral/70">{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 4).map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 4 && (
                      <span className="text-xs text-neutral/60 px-2 py-1">
                        +{pkg.highlights.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={`/tours/${pkg.id}`}
                  className="block w-full bg-primary text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-neutral/20 mb-4">🔍</div>
            <h3 className="text-2xl text-neutral mb-2 header-brand-primary">No tours found</h3>
            <p className="text-neutral/70 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterBy('all');
                setSortBy('price');
              }}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl text-neutral mb-4 header-brand-primary">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-neutral/70 mb-6 max-w-2xl mx-auto">
            We can customize any tour to match your preferences. Contact us to create your perfect Sri Lankan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Custom Tour Request
            </Link>
            <a
              href="https://wa.me/94771234567"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}