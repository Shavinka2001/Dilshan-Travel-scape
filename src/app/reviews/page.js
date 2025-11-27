'use client';

import { testimonials } from '../../data/siteData';
import { FaStar, FaQuoteLeft, FaUsers, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Extended review data with more detailed information
const extendedReviews = [
  {
    ...testimonials[0],
    tour: "Colombo City Tour",
    date: "October 2024",
    verified: true,
    helpful: 24
  },
  {
    ...testimonials[1],
    tour: "Kandy Cultural Tour", 
    date: "September 2024",
    verified: true,
    helpful: 18
  },
  {
    ...testimonials[2],
    tour: "Southern Coast Explorer",
    date: "November 2024", 
    verified: true,
    helpful: 31
  },
  {
    id: 4,
    name: "James Wilson",
    country: "United Kingdom",
    rating: 5,
    comment: "Outstanding service from start to finish! Our guide was incredibly knowledgeable and passionate about Sri Lanka's culture. The vehicle was comfortable and clean. Highly recommend for anyone visiting Sri Lanka.",
    tour: "Custom Package",
    date: "August 2024",
    verified: true,
    helpful: 27
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    country: "Spain",
    rating: 5,
    comment: "Perfect family vacation! The team arranged everything beautifully, and our children loved every moment. Safe, reliable, and professional service throughout our 10-day journey.",
    tour: "Family Adventure",
    date: "July 2024",
    verified: true,
    helpful: 22
  },
  {
    id: 6,
    name: "David Chen",
    country: "Canada",
    rating: 4,
    comment: "Great experience exploring the cultural sites of Kandy. The botanical gardens were breathtaking, and the traditional dance show was mesmerizing. Minor delay on pickup, but overall excellent service.",
    tour: "Kandy Cultural Tour",
    date: "September 2024",
    verified: true,
    helpful: 15
  }
];

export default function ReviewsPage() {
  const averageRating = extendedReviews.reduce((sum, review) => sum + review.rating, 0) / extendedReviews.length;
  const totalReviews = extendedReviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
              Customer Reviews
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
              Traveler <span className="text-primary font-semibold block sm:inline">Experiences</span>  
            </h1>
            <p className="text-base sm:text-lg text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
              Read authentic reviews from travelers who've experienced Sri Lanka with us.
            </p>
          </div>

          {/* Rating Overview */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-primary/10 mx-2 sm:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 hero-title">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(averageRating) ? 'text-primary' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-neutral/70 hero-subtitle text-sm sm:text-base">Overall Rating</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 hero-title">{totalReviews}</div>
                  <div className="flex justify-center mb-2">
                    <FaUsers className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-neutral/70 hero-subtitle text-sm sm:text-base">Total Reviews</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 hero-title">100%</div>
                  <div className="flex justify-center mb-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div className="text-neutral/70 hero-subtitle text-sm sm:text-base">Verified Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {extendedReviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6 sm:-top-4 sm:left-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <FaQuoteLeft className="text-primary text-xs sm:text-sm" />
                  </div>
                </div>

                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span>Verified</span>  
                    </div>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center mb-4 pt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                  <span className="ml-2 text-neutral font-semibold header-brand-primary text-sm sm:text-base">
                    {review.rating}.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-neutral/70 mb-4 sm:mb-6 leading-relaxed hero-subtitle text-sm sm:text-base">
                  "{review.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-lg border border-primary/20">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">
                        {review.name}
                      </h4>
                      <p className="text-neutral/70 text-xs sm:text-sm hero-subtitle">
                        {review.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review Meta */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-neutral/60 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      <span className="hero-subtitle">{review.tour}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span className="hero-subtitle">{review.date}</span>
                    </div>
                  </div>
                  <div className="text-neutral/60 hero-subtitle">
                    {review.helpful} found helpful
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-light text-neutral mb-6 hero-title text-center">
              Rating <span className="text-primary font-semibold">Breakdown</span>
            </h3>
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = extendedReviews.filter(review => review.rating === rating).length;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                
                return (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium text-neutral header-brand-secondary">{rating}</span>
                      <FaStar className="text-primary w-3 h-3" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-neutral/70 w-12 hero-subtitle">
                      {count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-primary/10 mx-2 sm:mx-0">
              <h3 className="text-xl sm:text-2xl font-light text-neutral mb-4 hero-title">
                Ready to Create Your Own <span className="text-primary font-semibold">Experience?</span>
              </h3>
              <p className="text-sm sm:text-lg text-neutral/70 mb-6 hero-subtitle max-w-2xl mx-auto">
                Join hundreds of satisfied travelers who have discovered the magic of Sri Lanka with us.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center max-w-md mx-auto">
                <a
                  href="/"
                  className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center"
                >
                  Explore Tours
                </a>
                <a
                  href="/contact"
                  className="border border-primary/30 text-primary px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base header-brand-primary text-center"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}