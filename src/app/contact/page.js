'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { siteConfig } from '../../data/siteData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
              Contact Us
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
              Get In <span className="text-primary font-semibold">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
              Ready to plan your perfect Sri Lankan adventure? Contact us today and let's make your travel dreams come true.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-light text-neutral mb-6 sm:mb-8 hero-title">
                Let's Start Planning Your <span className="text-primary font-semibold">Journey</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">Phone</h4>
                    <a href={`tel:${siteConfig.phone}`} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">Email</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">Address</h4>
                    <p className="text-neutral/70 hero-subtitle text-sm sm:text-base">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base">WhatsApp</h4>
                    <a href={siteConfig.social.whatsapp} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base">
                      Quick Chat Available
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-neutral mb-4 header-brand-primary text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-2 text-neutral/70">
                  <div className="flex justify-between hero-subtitle text-sm sm:text-base">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between hero-subtitle text-sm sm:text-base">
                    <span>Saturday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between hero-subtitle text-sm sm:text-base">
                    <span>Sunday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-primary text-xs sm:text-sm hero-subtitle">
                    ✅ Emergency assistance available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title">
                  Send us a <span className="text-primary font-semibold">Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-neutral font-medium mb-2 text-sm sm:text-base header-brand-secondary">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base hero-subtitle"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-neutral font-medium mb-2 text-sm sm:text-base header-brand-secondary">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base hero-subtitle"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral font-medium mb-2 text-sm sm:text-base header-brand-secondary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base hero-subtitle"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral font-medium mb-2 text-sm sm:text-base header-brand-secondary">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base hero-subtitle"
                    >
                      <option value="">Select a service</option>
                      <option value="vehicle-rental">Vehicle Rental</option>
                      <option value="guided-tour">Guided Tour</option>
                      <option value="airport-transfer">Airport Transfer</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral font-medium mb-2 text-sm sm:text-base header-brand-secondary">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical text-sm sm:text-base hero-subtitle"
                      placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base header-brand-primary"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title">
              Need Immediate <span className="text-primary font-semibold">Assistance?</span>
            </h3>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center max-w-md mx-auto">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base header-brand-primary"
              >
                <FaPhone />
                <span>Call Now</span>
              </a>
              <a
                href={siteConfig.social.whatsapp}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base header-brand-primary"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}