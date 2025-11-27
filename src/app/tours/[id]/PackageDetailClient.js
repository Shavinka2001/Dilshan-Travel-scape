'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { packages } from '../../../data/siteData';
import { 
  FaClock, 
  FaDollarSign, 
  FaUsers, 
  FaCalendarAlt, 
  FaMountain,
  FaCheckCircle,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaStar,
  FaArrowLeft,
  FaHeart,
  FaShare
} from 'react-icons/fa';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function PackageDetailClient() {
  const params = useParams();
  const [packageData, setPackageData] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (!params?.id) {
        setPackageData(null);
        setLoading(false);
        return;
      }

      const packageId = parseInt(params.id);
      if (isNaN(packageId)) {
        setPackageData(null);
        setLoading(false);
        return;
      }

      const pkg = packages.find(p => p.id === packageId);
      setPackageData(pkg);
      setLoading(false);
    } catch (error) {
      console.error('Error loading package data:', error);
      setPackageData(null);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-neutral/70">Loading package details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral mb-4">Package Not Found</h1>
            <p className="text-neutral/70 mb-8">The package you're looking for doesn't exist.</p>
            <Link 
              href="/#packages"
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              <span>Back to Packages</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaMapMarkerAlt },
    { id: 'itinerary', label: 'Itinerary', icon: FaCalendarAlt },
    { id: 'inclusions', label: 'What\'s Included', icon: FaCheckCircle },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={packageData.gallery ? packageData.gallery[activeImageIndex] : packageData.image} 
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight hero-title">
                {packageData.title}
              </h1>
              <p className="text-xl sm:text-2xl mb-6 opacity-90 hero-title-accent">
                {packageData.subtitle}
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-2xl leading-relaxed hero-subtitle">
                {packageData.longDescription}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaClock className="text-primary" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaUsers className="text-primary" />
                  <span>{packageData.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaMountain className="text-primary" />
                  <span>{packageData.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaCalendarAlt className="text-primary" />
                  <span>{packageData.season}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Navigation */}
        {packageData.gallery && packageData.gallery.length > 1 && (
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {packageData.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeImageIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
            <FaHeart className="text-lg" />
          </button>
          <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
            <FaShare className="text-lg" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all font-medium flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-neutral/70 hover:text-neutral'
                  }`}
                >
                  <tab.icon className="text-sm" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-2xl text-neutral mb-6 header-brand-primary">Tour Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {packageData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                          <FaMapMarkerAlt className="text-primary text-sm flex-shrink-0 mt-1" />
                          <span className="text-neutral font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gallery */}
                  {packageData.gallery && (
                    <div>
                      <h3 className="text-2xl text-neutral mb-6 header-brand-primary">Photo Gallery</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {packageData.gallery.map((image, index) => (
                          <div 
                            key={index}
                            className="relative h-32 sm:h-40 rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setActiveImageIndex(index)}
                          >
                            <img 
                              src={image} 
                              alt={`${packageData.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h3 className="text-2xl text-neutral mb-6 header-brand-primary">Day by Day Itinerary</h3>
                  <div className="space-y-6">
                    {packageData.itinerary.map((day, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl text-neutral mb-2 header-brand-secondary">{day.title}</h4>
                            <p className="text-neutral/70 mb-4 leading-relaxed">{day.description}</p>
                            
                            {/* Activities */}
                            <div className="mb-4">
                              <h5 className="font-semibold text-neutral mb-2">Activities:</h5>
                              <div className="flex flex-wrap gap-2">
                                {day.activities.map((activity, actIndex) => (
                                  <span 
                                    key={actIndex}
                                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                  >
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-neutral">Accommodation:</span>
                                <span className="text-neutral/70">{day.accommodation}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-neutral">Meals:</span>
                                <span className="text-neutral/70">{day.meals}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'inclusions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Inclusions */}
                  <div>
                    <h3 className="text-2xl text-neutral mb-6 flex items-center space-x-2 header-brand-primary">
                      <FaCheckCircle className="text-green-500" />
                      <span>What's Included</span>
                    </h3>
                    <ul className="space-y-3">
                      {packageData.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-green-500 text-sm flex-shrink-0 mt-1" />
                          <span className="text-neutral/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h3 className="text-2xl text-neutral mb-6 flex items-center space-x-2 header-brand-primary">
                      <FaTimesCircle className="text-red-500" />
                      <span>What's Not Included</span>
                    </h3>
                    <ul className="space-y-3">
                      {packageData.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <FaTimesCircle className="text-red-500 text-sm flex-shrink-0 mt-1" />
                          <span className="text-neutral/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    From ${packageData.priceFrom}
                  </div>
                  <p className="text-neutral/70 text-sm">{packageData.price}</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                    <span className="text-sm text-neutral/70 ml-2">(4.9/5)</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral/70">Duration</span>
                    <span className="font-medium text-neutral">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral/70">Group Size</span>
                    <span className="font-medium text-neutral">{packageData.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral/70">Difficulty</span>
                    <span className="font-medium text-neutral">{packageData.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral/70">Best Season</span>
                    <span className="font-medium text-neutral">{packageData.season}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                  <button className="w-full border border-primary text-primary py-3 px-6 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl text-neutral mb-4 header-brand-primary">Need Help?</h3>
                <p className="text-neutral/70 text-sm mb-6">
                  Our travel experts are here to help you plan your perfect Sri Lankan adventure.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+94771234567"
                    className="flex items-center space-x-3 text-neutral hover:text-primary transition-colors"
                  >
                    <FaPhone className="text-primary" />
                    <span>+94 77 123 4567</span>
                  </a>
                  <a 
                    href="mailto:info@dilshantravelscape.com"
                    className="flex items-center space-x-3 text-neutral hover:text-primary transition-colors"
                  >
                    <FaEnvelope className="text-primary" />
                    <span>info@dilshantravelscape.com</span>
                  </a>
                  <a 
                    href="https://wa.me/94771234567"
                    className="flex items-center space-x-3 text-neutral hover:text-primary transition-colors"
                  >
                    <FaWhatsapp className="text-primary" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Back to Packages */}
              <Link 
                href="/#packages"
                className="flex items-center justify-center space-x-2 w-full border border-gray-300 text-neutral py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaArrowLeft className="text-sm" />
                <span>Back to All Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}