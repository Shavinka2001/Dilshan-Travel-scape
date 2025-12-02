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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create form data for FormSubmit
      const formDataToSend = new FormData();
      
      // Add form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service || 'Not specified');
      formDataToSend.append('message', formData.message);
      
      // Add additional metadata
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');
      
      // Replace with your actual email address
      const response = await fetch('https://formsubmit.co/dilshantravelscape.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    // Validate required fields
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in your name and message before sending to WhatsApp');
      return;
    }
    
    try {
      const serviceText = formData.service ? `\n🎯 *Service Required:* ${formData.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}` : '';
      const message = `🌴 *Hi Dilshan Travelscape!*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email || 'Not provided'}\n📱 *Phone:* ${formData.phone}${serviceText}\n\n💬 *Message:*\n${formData.message}\n\n---\n🗓️ *Sent from Website Contact Form*`;
      
      // Construct WhatsApp URL properly
      const phoneNumber = siteConfig.phone ? siteConfig.phone.replace(/[^\d]/g, '') : '94778197348';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Debug logging
      console.log('Phone number:', phoneNumber);
      console.log('WhatsApp URL:', whatsappURL);
      console.log('Message:', message);
      
      // Open WhatsApp with better browser compatibility
      if (window.navigator.userAgent.includes('Mobile')) {
        // Mobile device - use direct navigation
        window.location.href = whatsappURL;
      } else {
        // Desktop - try to open in new tab first
        const newWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
          // Popup blocked or failed - use direct navigation
          window.location.href = whatsappURL;
        }
      }
    } catch (error) {
      console.error('WhatsApp error:', error);
      alert('Unable to open WhatsApp. Please try again or contact us directly at +94 77 819 7348.');
    }
  };

  const handleVoiceCall = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold uppercase text-sm sm:text-sm tracking-wider header-brand-secondary mb-4 sm:mb-4 shadow-sm">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral mb-4 sm:mb-6 hero-title px-3 sm:px-0 leading-tight">
              Get In <span className="text-primary font-semibold">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
              Ready to plan your perfect Sri Lankan adventure? Contact us today and let's make your travel dreams come true.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-neutral mb-4 sm:mb-6 lg:mb-8 hero-title px-2 sm:px-0">
                Let's Start Planning Your <span className="text-primary font-semibold">Journey</span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.phone}`} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base break-all">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base mb-1">Address</h4>
                    <p className="text-neutral/70 hero-subtitle text-sm sm:text-base leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-neutral header-brand-primary text-sm sm:text-base mb-1">WhatsApp</h4>
                    <a href={siteConfig.social.whatsapp} className="text-neutral/70 hover:text-primary transition-colors hero-subtitle text-sm sm:text-base">
                      Quick Chat Available
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-neutral mb-3 sm:mb-4 header-brand-primary text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-2 sm:space-y-2.5 text-neutral/70">
                  <div className="flex justify-between items-center hero-subtitle text-xs sm:text-sm lg:text-base">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-right">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center hero-subtitle text-xs sm:text-sm lg:text-base">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-right">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center hero-subtitle text-xs sm:text-sm lg:text-base">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-right">9:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-primary/10 rounded-lg">
                  <p className="text-primary text-xs sm:text-sm hero-subtitle text-center">
                    ✅ Emergency assistance available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-xl lg:text-2xl font-light text-neutral mb-6 sm:mb-6 hero-title px-1 sm:px-0">
                  Send us a <span className="text-primary font-semibold">Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4 lg:gap-6">
                    <div>
                      <label className="block text-neutral font-semibold mb-2.5 sm:mb-2 text-base sm:text-base header-brand-secondary">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-base sm:text-base hero-subtitle touch-manipulation bg-gray-50 focus:bg-white min-h-[56px] sm:min-h-[48px]"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-neutral font-semibold mb-2.5 sm:mb-2 text-base sm:text-base header-brand-secondary">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-base sm:text-base hero-subtitle touch-manipulation bg-gray-50 focus:bg-white min-h-[56px] sm:min-h-[48px]"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral font-semibold mb-2.5 sm:mb-2 text-base sm:text-base header-brand-secondary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-base sm:text-base hero-subtitle touch-manipulation bg-gray-50 focus:bg-white min-h-[56px] sm:min-h-[48px]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral font-semibold mb-2.5 sm:mb-2 text-base sm:text-base header-brand-secondary">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-base sm:text-base hero-subtitle touch-manipulation bg-gray-50 focus:bg-white min-h-[56px] sm:min-h-[48px] appearance-none bg-no-repeat bg-right pr-12"
                      style={{
                        backgroundImage: "url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226,9 12,15 18,9%22></polyline></svg>')",
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '20px'
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="vehicle-rental">Vehicle Rental</option>
                      <option value="guided-tour">Guided Tour</option>
                      <option value="airport-transfer">Airport Transfer</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral font-semibold mb-2.5 sm:mb-2 text-base sm:text-base header-brand-secondary">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-vertical text-base sm:text-base hero-subtitle touch-manipulation min-h-[140px] sm:min-h-[120px] bg-gray-50 focus:bg-white leading-relaxed"
                      placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                    ></textarea>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="font-medium">Failed to send message</span>
                      </div>
                      <p className="text-sm mt-1">Please try again or contact us directly via phone or WhatsApp.</p>
                    </div>
                  )}

                  {/* Submit Options */}
                  <div className="space-y-4 sm:space-y-4 pt-2">
                    {/* Email Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-base header-brand-primary touch-manipulation min-h-[56px] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send via Email</span>
                        </>
                      )}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-3 bg-white text-gray-500">Or send instantly via</span>
                      </div>
                    </div>

                    {/* Quick Contact Buttons */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        disabled={!formData.name || !formData.message}
                        className="bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-base header-brand-primary touch-manipulation min-h-[56px] active:scale-[0.98] shadow-lg hover:shadow-xl"
                      >
                        <FaWhatsapp className="text-base sm:text-base" />
                        <span className="hidden xs:inline sm:inline">WhatsApp</span>
                        <span className="inline xs:hidden sm:hidden">Chat</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={handleVoiceCall}
                        className="bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-base header-brand-primary touch-manipulation min-h-[56px] active:scale-[0.98] shadow-lg hover:shadow-xl"
                      >
                        <FaPhone className="text-base sm:text-base" />
                        <span className="hidden xs:inline sm:inline">Call Now</span>
                        <span className="inline xs:hidden sm:hidden">Call</span>
                      </button>
                    </div>

                    {/* Help Text */}
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mt-3 px-2 leading-relaxed">
                        💡 <strong>WhatsApp:</strong> Requires name & message • <strong>Call:</strong> Direct voice connection
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
              Need Immediate <span className="text-primary font-semibold">Assistance?</span>
            </h3>
            <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4 justify-center max-w-sm xs:max-w-md mx-auto px-4 xs:px-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-primary text-white px-4 xs:px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base header-brand-primary touch-manipulation min-h-[48px] active:scale-[0.98] flex-1 xs:flex-initial"
              >
                <FaPhone className="text-sm sm:text-base" />
                <span>Call Now</span>
              </a>
              <a
                href={siteConfig.social.whatsapp}
                className="bg-green-600 text-white px-4 xs:px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base header-brand-primary touch-manipulation min-h-[48px] active:scale-[0.98] flex-1 xs:flex-initial"
              >
                <FaWhatsapp className="text-sm sm:text-base" />
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