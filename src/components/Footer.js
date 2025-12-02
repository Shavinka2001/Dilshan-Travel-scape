'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Dilshan <span className="text-secondary">Rent & Tours</span>
            </h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Your trusted partner for premium vehicle rentals and unforgettable tours in Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.social.facebook}
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={siteConfig.social.instagram}
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={siteConfig.social.whatsapp}
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#packages" className="text-white/70 hover:text-secondary transition-colors">Tour Packages</a></li>
              <li><a href="#about" className="text-white/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <a href={`tel:${siteConfig.phone}`} className="text-white/70 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span className="text-white/70">{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-white/70 text-sm">
              © 2024 Dilshan Travelscape. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 text-white/40 text-xs">
                <div className="w-4 h-4 bg-gradient-to-r from-[#1A73E8] to-[#6C63FF] rounded-md flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span>Developed by</span>
                <span className="text-[#FFC046] font-medium">LuminexIT</span>
                <span className="text-white/20">•</span>
                <a 
                  href="tel:+94719769164" 
                  className="text-[#FFC046] hover:text-[#FFC046]/80 transition-colors duration-200 font-medium"
                >
                  071 976 9164
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}