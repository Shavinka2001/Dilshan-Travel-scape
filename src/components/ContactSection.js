'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm bg-secondary/10 px-4 py-2 rounded-full">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Ready to plan your perfect Sri Lankan adventure? Contact us today and let's make your travel dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral mb-6 sm:mb-8">
              Let's Start Planning Your Journey
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral">Phone</h4>
                  <a href={`tel:${siteConfig.phone}`} className="text-neutral/70 hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-neutral/70 hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral">Address</h4>
                  <p className="text-neutral/70">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral">WhatsApp</h4>
                  <a href={siteConfig.social.whatsapp} className="text-neutral/70 hover:text-primary transition-colors">
                    Quick Chat Available
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-background rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-neutral mb-4">Business Hours</h4>
              <div className="space-y-2 text-neutral/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-primary text-sm">
                  ✅ Emergency assistance available 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-background rounded-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral mb-4 sm:mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-neutral font-medium mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral font-medium mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="vehicle-rental">Vehicle Rental</option>
                    <option value="guided-tour">Guided Tour</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="custom-package">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-neutral mb-6">
            Need Immediate Assistance?
          </h3>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaPhone />
              <span>Call Now</span>
            </a>
            <a
              href={siteConfig.social.whatsapp}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}