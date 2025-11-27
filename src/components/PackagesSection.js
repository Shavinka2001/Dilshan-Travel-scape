'use client';

import { packages } from '../data/siteData';
import { FaClock, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function PackagesSection() {
  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
            Tour Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
            Curated Travel <span className="text-primary font-semibold block sm:inline">Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
            Thoughtfully designed journeys showcasing Sri Lanka's natural beauty and rich culture.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20 mx-2 sm:mx-0 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center overflow-hidden">
                {pkg.image ? (
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl sm:text-5xl md:text-6xl text-primary/40">🏝️</div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral mb-3 header-brand-primary leading-tight">
                  {pkg.title}
                </h3>
                
                <p className="text-neutral/70 mb-4 sm:mb-5 leading-relaxed hero-subtitle text-sm sm:text-base">
                  {pkg.description}
                </p>

                {/* Package Details */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 text-xs sm:text-sm bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-primary text-xs" />
                    <span className="text-neutral/70 hero-subtitle">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="text-primary text-xs" />
                    <span className="text-neutral font-semibold header-brand-primary">{pkg.price}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="font-semibold text-neutral mb-3 header-brand-secondary text-sm sm:text-base">Experience Highlights</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-2 text-xs sm:text-sm">
                        <FaMapMarkerAlt className="text-primary text-xs flex-shrink-0 mt-1" />
                        <span className="text-neutral/70 hero-subtitle leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href={`/tours/${pkg.id}`}
                    className="flex-1 sm:flex-none border border-primary/30 text-primary py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-medium hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center inline-block"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="/tours"
                    className="flex-1 sm:flex-none bg-primary/5 text-primary py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center inline-block"
                  >
                    View All Tours
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tours CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/tours"
            className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View All Tour Packages
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}