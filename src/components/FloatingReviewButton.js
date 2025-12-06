'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaGoogle, FaTimes, FaPen } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function FloatingReviewButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Show button after user scrolls down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowOptions(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show on review page itself
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/reviews') {
      setIsVisible(false);
    }
  }, []);

  const handleGoogleReview = () => {
    window.open(siteConfig.googleMaps.reviewUrl, '_blank');
  };

  const handleWriteReview = () => {
    window.location.href = '/reviews';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Options Menu */}
      {showOptions && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-64 transform transition-all duration-300 ease-out">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 text-sm">Share Your Experience</h3>
            <button
              onClick={() => setShowOptions(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
          
          <div className="space-y-2">
            {/* Write Review Option */}
            <button
              onClick={handleWriteReview}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group text-left"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <FaPen className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Write a Review</div>
                <div className="text-xs text-gray-500">Share on our website</div>
              </div>
            </button>

            {/* Google Review Option */}
            <button
              onClick={handleGoogleReview}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors group text-left"
            >
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <FaGoogle className="w-3 h-3 text-red-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Google Review</div>
                <div className="text-xs text-gray-500">Review on Google Maps</div>
              </div>
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Your feedback helps other travelers
            </p>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className={`group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 ${
          showOptions ? 'rotate-45' : ''
        }`}
        aria-label="Leave a review"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping group-hover:opacity-0"></div>
        
        {/* Icon */}
        <div className="relative">
          {showOptions ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaStar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Leave a Review
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
}