'use client';

import { testimonials } from '../data/siteData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
            Client <span className="text-primary font-semibold block sm:inline">Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
            Trusted by travelers who've experienced the magic of Sri Lanka with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/30 mx-2 sm:mx-0 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>
              </div>

              {/* Rating & Date */}
              <div className="flex items-center justify-between mb-4 pt-3">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary w-4 h-4" />
                  ))}
                </div>
                {testimonial.date && (
                  <span className="text-neutral/50 text-xs hero-subtitle">
                    {testimonial.date}
                  </span>
                )}
              </div>

              {/* Comment */}
              <p className="text-neutral/80 mb-6 leading-relaxed hero-subtitle text-sm sm:text-base line-clamp-6">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-lg border border-primary/20" style={{display: 'none'}}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral/70 text-xs sm:text-sm hero-subtitle">
                    {testimonial.country}
                  </p>
                  {testimonial.tour && (
                    <p className="text-primary/80 text-xs hero-subtitle font-medium">
                      {testimonial.tour}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Testimonials */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-neutral/70 hero-subtitle text-sm sm:text-base mb-4">
            Read more amazing experiences from our satisfied travelers
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hero-subtitle shadow-md hover:shadow-lg">
            View All Reviews
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 sm:p-8 border border-primary/10 mx-2 sm:mx-0 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">750+</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">4.9</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">60+</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">15+</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}