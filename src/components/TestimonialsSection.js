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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20 mx-2 sm:mx-0 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6 sm:-top-4 sm:left-8">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <FaQuoteLeft className="text-primary text-xs sm:text-sm" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-neutral/70 mb-4 sm:mb-6 leading-relaxed hero-subtitle text-sm sm:text-base">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-lg border border-primary/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral/70 text-xs sm:text-sm hero-subtitle">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-primary/10 mx-2 sm:mx-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">500+</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">4.9</div>
                <div className="text-neutral/70 hero-subtitle text-xs sm:text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 hero-title">50+</div>
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