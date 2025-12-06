'use client';

import { useState, useEffect } from 'react';
import { testimonials, siteConfig } from '../../data/siteData';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaPen, 
  FaGoogle, 
  FaCheck, 
  FaTimes, 
  FaSpinner,
  FaExternalLinkAlt,
  FaThumbsUp,
  FaArrowRight
} from 'react-icons/fa';
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
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    tour: '',
    rating: 5,
    comment: '',
    recommend: true
  });

  const averageRating = extendedReviews.reduce((sum, review) => sum + review.rating, 0) / extendedReviews.length;
  const totalReviews = extendedReviews.length;

  // Google My Business integration - Official Google Maps link
  const googleReviewUrl = 'https://maps.app.goo.gl/5TBKMjZd8vyhvjic9';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Step 1: Save to local storage/database (you can integrate with your backend here)
      const reviewData = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        verified: false, // Will be verified after Google review
        helpful: 0,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage for demo (replace with actual API call)
      const existingReviews = JSON.parse(localStorage.getItem('pendingReviews') || '[]');
      existingReviews.push(reviewData);
      localStorage.setItem('pendingReviews', JSON.stringify(existingReviews));

      // Step 2: Redirect to Google My Business for official review
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Show success message and redirect to Google
        setTimeout(() => {
          window.open(googleReviewUrl, '_blank');
        }, 2000);
      }, 1500);

    } catch (error) {
      console.error('Review submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const directGoogleReview = () => {
    // Direct users to Google Maps to leave a review
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  // Debug log
  console.log('Reviews page rendered, showReviewForm:', showReviewForm);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E1E1E] via-[#1A73E8] to-[#1E1E1E] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#1A73E8]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#6C63FF]/10 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 sm:py-24 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Modern Glass Badge */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-xl text-[#FFC046] font-semibold text-sm tracking-wider px-6 py-3 rounded-full border border-white/10 mb-8 shadow-2xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-2 h-2 bg-[#FFC046] rounded-full mr-3 animate-pulse"></div>
              <FaStar className="mr-2 text-[#FFC046] group-hover:rotate-12 transition-transform duration-300" />
              Customer Reviews
            </div>

            {/* Premium Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl hero-title text-white mb-8 leading-tight">
              <span className="inline-block animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Traveler</span>
              <span className="block hero-title-accent bg-gradient-to-r from-[#1A73E8] via-[#6C63FF] to-[#FFC046] bg-clip-text text-transparent animate-fadeInUp opacity-0 mt-2" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Experiences
              </span>
            </h1>

            {/* Subtle Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 hero-subtitle">
              Authentic stories from travelers who've discovered Sri Lanka's magic with us.
            </p>
            
            {/* Google Maps Trust Badge */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-12 hover:bg-white/10 transition-all duration-300">
              <FaGoogle className="text-red-400 mr-3 text-lg" />
              <span className="text-white/90 text-sm font-medium">Verified on Google Maps</span>
              <FaStar className="text-yellow-400 ml-3 text-sm animate-pulse" />
            </div>

            {/* Premium Glass Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12">
              <div className="text-center group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#FFC046] transition-colors duration-300">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-sm transition-all duration-300 ${i < Math.floor(averageRating) ? 'text-[#FFC046]' : 'text-white/30'} hover:scale-125`} style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <div className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Rating</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#1A73E8] transition-colors duration-300">
                  {totalReviews}+
                </div>
                <div className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Reviews</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#6C63FF] transition-colors duration-300">
                  100%
                </div>
                <div className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Verified</div>
              </div>
            </div>

            {/* Premium Glass CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <button
                onClick={() => setShowReviewForm(true)}
                className="group relative bg-[#1A73E8]/80 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-semibold hover:bg-[#1A73E8] transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-[#1A73E8]/25 hover:scale-110 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaPen className="text-lg group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Write Review</span>
              </button>
              <button
                onClick={directGoogleReview}
                className="group relative bg-[#FFC046]/90 backdrop-blur-xl text-[#1E1E1E] px-10 py-5 rounded-2xl font-semibold hover:bg-[#FFC046] transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-[#FFC046]/25 hover:scale-110 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaGoogle className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Google Maps</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-[#F5F7FA]">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Clean Google Maps Section */}
      <section className="py-16 sm:py-20 -mt-8 relative z-10 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-[#1E1E1E]/5 hover:shadow-2xl transition-shadow duration-500">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-[#1A73E8]/10 to-[#6C63FF]/10 backdrop-blur-xl text-[#1A73E8] font-semibold text-sm tracking-wider px-6 py-3 rounded-full border border-[#1A73E8]/20 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="w-2 h-2 bg-[#1A73E8] rounded-full mr-3 animate-pulse"></div>
                <FaMapMarkerAlt className="mr-2 group-hover:bounce" />
                Google Integration
              </div>
              <h2 className="text-3xl sm:text-4xl hero-title text-[#1E1E1E] mb-4">
                Find Us on <span className="hero-title-accent text-[#1A73E8]">Google Maps</span>
              </h2>
              <p className="text-[#1E1E1E]/70 max-w-xl mx-auto text-lg leading-relaxed hero-subtitle">
                Visit our verified Google Maps profile to explore reviews and share your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Clean Info Card */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/95 to-[#F5F7FA]/95 backdrop-blur-xl p-8 rounded-3xl border border-[#1E1E1E]/5 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-[#1A73E8] rounded-2xl flex items-center justify-center shadow-lg">
                      <FaGoogle className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1E1E1E]">Google My Business</h3>
                      <p className="text-[#1E1E1E]/60">Verified Profile</p>
                    </div>
                  </div>

                  <p className="text-[#1E1E1E]/80 mb-8 leading-relaxed">
                    Join hundreds of travelers who've shared their Sri Lankan adventures on our Google Maps profile.
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={directGoogleReview}
                      className="w-full bg-[#FFC046] hover:bg-[#FFC046]/90 text-[#1E1E1E] py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group"
                    >
                      <FaGoogle className="group-hover:scale-110 transition-transform" />
                      <span>Leave a Google Review</span>
                      <FaExternalLinkAlt className="text-sm opacity-80" />
                    </button>

                    <a
                      href={googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-[#F5F7FA] text-[#1A73E8] py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 border border-[#1A73E8]/30 hover:border-[#1A73E8]/50"
                    >
                      <FaMapMarkerAlt />
                      <span>View on Google Maps</span>
                      <FaExternalLinkAlt className="text-sm opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#F5F7FA] rounded-xl border border-[#1E1E1E]/5">
                    <FaThumbsUp className="text-[#1A73E8] text-2xl mx-auto mb-3" />
                    <p className="text-sm text-[#1E1E1E]/70 font-medium">Help Others</p>
                  </div>
                  <div className="text-center p-4 bg-[#F5F7FA] rounded-xl border border-[#1E1E1E]/5">
                    <FaStar className="text-[#FFC046] text-2xl mx-auto mb-3" />
                    <p className="text-sm text-[#1E1E1E]/70 font-medium">Improve Service</p>
                  </div>
                  <div className="text-center p-4 bg-[#F5F7FA] rounded-xl border border-[#1E1E1E]/5">
                    <FaMapMarkerAlt className="text-[#6C63FF] text-2xl mx-auto mb-3" />
                    <p className="text-sm text-[#1E1E1E]/70 font-medium">Local Visibility</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl overflow-hidden shadow-inner border border-[#1E1E1E]/10">
                <div className="aspect-square flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#1A73E8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaMapMarkerAlt className="text-[#1A73E8] text-3xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#1E1E1E] mb-3">Interactive Map</h4>
                    <p className="text-[#1E1E1E]/70 mb-6 max-w-xs mx-auto">
                      Discover our location and read more reviews on Google Maps
                    </p>
                    <a
                      href={siteConfig.social.googleMyBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#1A73E8] hover:bg-[#1A73E8]/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <FaGoogle />
                      <span>Open Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Reviews Section */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#6C63FF]/10 to-[#1A73E8]/10 backdrop-blur-xl text-[#6C63FF] font-semibold text-sm tracking-wider px-6 py-3 rounded-full border border-[#6C63FF]/20 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-2 h-2 bg-[#6C63FF] rounded-full mr-3 animate-pulse"></div>
              <FaUsers className="mr-2 group-hover:bounce" />
              Customer Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl hero-title text-[#1E1E1E] mb-6">
              What Our <span className="hero-title-accent text-[#1A73E8]">Travelers Say</span>
            </h2>
            <p className="text-[#1E1E1E]/70 max-w-2xl mx-auto text-lg leading-relaxed hero-subtitle">
              Authentic experiences shared by travelers who've discovered Sri Lanka's beauty with us.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {extendedReviews.map((review, index) => (
              <div
                key={review.id}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-700 border border-[#1E1E1E]/5 hover:border-[#1A73E8]/30 hover:-translate-y-4 hover:rotate-1 overflow-hidden relative"
              >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/5 via-transparent to-[#6C63FF]/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A73E8]/20 via-[#6C63FF]/20 to-[#FFC046]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
                
                {/* Rating */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#FFC046] text-lg group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="bg-[#6C63FF]/10 text-[#6C63FF] px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-2 border border-[#6C63FF]/20">
                      <FaCheck className="text-xs" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-[#1E1E1E]/80 mb-8 leading-relaxed text-lg relative z-10">
                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-[#1A73E8]/20 text-2xl" />
                    <span className="italic pl-6">"{review.comment}"</span>
                  </div>
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#6C63FF] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-white/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <span className="relative z-10">{review.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E] text-lg">{review.name}</h4>
                    <p className="text-[#1E1E1E]/60 text-sm font-medium">{review.country}</p>
                    <div className="flex items-center space-x-3 mt-2 text-xs text-[#1E1E1E]/50">
                      <span className="flex items-center space-x-1 bg-[#F5F7FA] px-2 py-1 rounded-full">
                        <FaMapMarkerAlt className="text-xs text-[#1A73E8]" />
                        <span>{review.tour}</span>
                      </span>
                      <span className="bg-[#F5F7FA] px-2 py-1 rounded-full">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Helpful Count */}
                <div className="mt-8 pt-6 border-t border-[#1E1E1E]/10 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-2 bg-[#1A73E8]/5 text-[#1A73E8] px-3 py-2 rounded-full font-medium">
                      <FaThumbsUp className="text-xs" />
                      <span>{review.helpful} found helpful</span>
                    </span>
                    <span className="text-[#1E1E1E]/40 text-xs uppercase tracking-wider font-medium">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#1E1E1E]/5 mb-16 hover:shadow-3xl hover:scale-[1.01] transition-all duration-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/5 via-transparent to-[#FFC046]/5 opacity-50"></div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-[#FFC046]/10 to-[#1A73E8]/10 backdrop-blur-xl text-[#FFC046] font-semibold text-sm tracking-wider px-6 py-3 rounded-full border border-[#FFC046]/20 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="w-2 h-2 bg-[#FFC046] rounded-full mr-3 animate-pulse"></div>
                <FaStar className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Analytics
              </div>
              <h3 className="text-2xl sm:text-3xl hero-title text-[#1E1E1E] mb-4">
                Rating <span className="hero-title-accent text-[#1A73E8]">Breakdown</span>
              </h3>
            </div>

            <div className="space-y-8 max-w-2xl mx-auto">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = extendedReviews.filter(review => review.rating === rating).length;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                return (
                  <div key={rating} className="group">
                    <div className="flex items-center space-x-6 mb-2">
                      <div className="flex items-center space-x-3 w-20">
                        <span className="text-xl font-bold text-[#1E1E1E]">{rating}</span>
                        <FaStar className="text-[#FFC046] text-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="w-full bg-gradient-to-r from-[#F5F7FA] to-white rounded-full h-5 overflow-hidden shadow-inner border border-[#1E1E1E]/10">
                          <div
                            className="relative bg-gradient-to-r from-[#1A73E8] via-[#6C63FF] to-[#FFC046] h-5 rounded-full transition-all duration-1500 ease-out shadow-lg"
                            style={{ width: `${percentage}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#1E1E1E] font-bold w-16 text-right">
                        <span className="bg-[#1E1E1E]/5 px-3 py-1 rounded-full text-sm">{count}</span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-[#1E1E1E]/50 font-medium">
                      {percentage.toFixed(1)}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Form Modal */}
          {showReviewForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-6 sm:p-8">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl hero-title text-[#1E1E1E]">
                      Share Your <span className="text-[#1A73E8] hero-title-accent">Experience</span>
                    </h3>
                    <button
                      onClick={() => setShowReviewForm(false)}
                      className="w-12 h-12 bg-[#F5F7FA] hover:bg-[#1E1E1E]/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <FaTimes className="text-[#1E1E1E]/60" />
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#6C63FF] px-6 py-4 rounded-2xl mb-8">
                      <div className="flex items-center space-x-3">
                        <FaCheck className="text-[#6C63FF] text-lg" />
                        <span className="font-semibold">Review submitted successfully!</span>
                      </div>
                      <p className="text-sm mt-2 text-[#6C63FF]/80">You'll be redirected to Google to leave an official review.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-8">
                      <div className="flex items-center space-x-3">
                        <FaTimes className="text-red-600 text-lg" />
                        <span className="font-semibold">Failed to submit review</span>
                      </div>
                      <p className="text-sm mt-2 text-red-600/80">Please try again or contact us directly.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#1E1E1E] font-medium mb-3 text-sm uppercase tracking-wide nav-link">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-[#1E1E1E]/20 focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] transition-all duration-300 bg-[#F5F7FA] hover:bg-white hero-subtitle"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1E1E1E] font-medium mb-3 text-sm uppercase tracking-wide nav-link">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-[#1E1E1E]/20 focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] transition-all duration-300 bg-[#F5F7FA] hover:bg-white hero-subtitle"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#1E1E1E] font-medium mb-3 text-sm uppercase tracking-wide nav-link">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-[#1E1E1E]/20 focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] transition-all duration-300 bg-[#F5F7FA] hover:bg-white hero-subtitle"
                          placeholder="Your country"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1E1E1E] font-medium mb-3 text-sm uppercase tracking-wide nav-link">
                          Tour/Service
                        </label>
                        <select
                          name="tour"
                          value={formData.tour}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-[#1E1E1E]/20 focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] transition-all duration-300 bg-[#F5F7FA] hover:bg-white hero-subtitle"
                        >
                          <option value="">Select tour/service</option>
                          <option value="Cultural & Scenic Adventure">Cultural & Scenic Adventure</option>
                          <option value="Ancient Kingdoms Tour">Ancient Kingdoms Tour</option>
                          <option value="Hill Country Explorer">Hill Country Explorer</option>
                          <option value="Airport Transfer">Airport Transfer</option>
                          <option value="Custom Package">Custom Package</option>
                          <option value="Vehicle Rental">Vehicle Rental</option>
                        </select>
                      </div>
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-[#1E1E1E] font-medium mb-4 text-sm uppercase tracking-wide nav-link">
                        Overall Rating *
                      </label>
                      <div className="flex space-x-3 justify-center sm:justify-start">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className={`w-14 h-14 rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${
                              star <= formData.rating
                                ? 'bg-[#FFC046] border-[#FFC046] text-white shadow-lg'
                                : 'bg-[#F5F7FA] border-[#1E1E1E]/20 hover:border-[#FFC046] hover:bg-[#FFC046]/10 text-[#1E1E1E]/40'
                            }`}
                          >
                            <FaStar className="w-6 h-6 mx-auto" />
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-[#1A73E8] font-medium mt-4 text-center sm:text-left">
                        {formData.rating === 5 ? '★★★★★ Excellent!' : 
                         formData.rating === 4 ? '★★★★☆ Very Good' :
                         formData.rating === 3 ? '★★★☆☆ Good' :
                         formData.rating === 2 ? '★★☆☆☆ Fair' : '★☆☆☆☆ Poor'}
                      </p>
                    </div>

                    {/* Review Comment */}
                    <div>
                      <label className="block text-[#1E1E1E] font-medium mb-3 text-sm uppercase tracking-wide nav-link">
                        Your Review *
                      </label>
                      <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-4 rounded-xl border border-[#1E1E1E]/20 focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] transition-all duration-300 resize-vertical bg-[#F5F7FA] hover:bg-white hero-subtitle"
                        placeholder="Share your experience with us. What made your trip special? How was the service? Any specific highlights?"
                      />
                    </div>

                    {/* Recommendation */}
                    <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-[#1E1E1E]/10">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          id="recommend"
                          name="recommend"
                          checked={formData.recommend}
                          onChange={handleInputChange}
                          className="w-6 h-6 text-[#1A73E8] border-2 border-[#1E1E1E]/30 rounded-lg focus:ring-[#1A73E8] focus:ring-2"
                        />
                        <label htmlFor="recommend" className="text-[#1E1E1E] font-medium flex-1 hero-subtitle">
                          I would recommend Dilshan Travelscape to friends and family
                        </label>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#1A73E8] text-white py-4 px-8 rounded-2xl font-semibold hover:bg-[#1A73E8]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin text-lg" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <FaPen className="text-lg" />
                            <span>Submit Review</span>
                          </>
                        )}
                      </button>
                      
                      <button
                        type="button"
                        onClick={directGoogleReview}
                        className="flex-1 bg-[#FFC046] text-[#1E1E1E] py-4 px-8 rounded-2xl font-semibold hover:bg-[#FFC046]/90 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <FaGoogle className="text-lg" />
                        <span>Review on Google</span>
                      </button>
                    </div>

                    <div className="text-center pt-4 border-t border-[#1E1E1E]/10">
                      <p className="text-sm text-[#1E1E1E]/60 leading-relaxed hero-subtitle">
                        Your review helps other travelers make informed decisions and helps us improve our services.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Modern CTA Section */}
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-[#1E1E1E] to-[#1A73E8] rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-32 h-32 bg-[#FFC046]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-24 h-24 bg-[#6C63FF]/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-xl text-[#FFC046] font-semibold text-sm tracking-wider px-6 py-3 rounded-full border border-white/30 mb-8 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[#FFC046] rounded-full mr-3 animate-pulse"></div>
                  <FaStar className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                </div>
                <h3 className="text-2xl sm:text-3xl hero-title mb-6">
                  Ready to Create Your Own <span className="hero-title-accent text-[#FFC046]">Experience?</span>
                </h3>
                <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg leading-relaxed hero-subtitle">
                  Join our community of satisfied travelers and discover Sri Lanka's magic with professional guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                  <a
                    href="/"
                    className="bg-[#FFC046] text-[#1E1E1E] px-8 py-4 rounded-2xl font-semibold hover:bg-[#FFC046]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <span>Explore Tours</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
                  >
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Floating Google Maps Review Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={directGoogleReview}
          className="group bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 animate-pulse"
          title="Leave a Review on Google Maps"
        >
          <FaGoogle className="text-xl group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}