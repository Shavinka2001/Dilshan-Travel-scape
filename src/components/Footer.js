'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A73E8]/10 via-[#6C63FF]/5 to-[#FFC046]/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A73E8]/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Dilshan Travelscape Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold">
                <span className="text-white">Dilshan</span> <span className="text-[#FFC046]">Travelscape</span>
              </h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Your gateway to Sri Lanka's wonders. Creating unforgettable travel experiences with luxury, comfort, and authentic local insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.social.facebook}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#1A73E8]/20 hover:scale-110 transition-all duration-300 border border-white/10 group"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white group-hover:text-[#1A73E8] transition-colors" />
              </a>
              <a 
                href={siteConfig.social.instagram}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#6C63FF]/20 hover:scale-110 transition-all duration-300 border border-white/10 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white group-hover:text-[#6C63FF] transition-colors" />
              </a>
              <a 
                href={siteConfig.social.whatsapp}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#FFC046]/20 hover:scale-110 transition-all duration-300 border border-white/10 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white group-hover:text-[#FFC046] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-[#1A73E8] to-[#FFC046] rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/70 hover:text-[#FFC046] hover:translate-x-2 transition-all duration-300 flex items-center group"><span className="w-0 h-0.5 bg-[#FFC046] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>Home</a></li>
              <li><a href="/tours" className="text-white/70 hover:text-[#FFC046] hover:translate-x-2 transition-all duration-300 flex items-center group"><span className="w-0 h-0.5 bg-[#FFC046] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>Tours</a></li>
              <li><a href="/destinations" className="text-white/70 hover:text-[#FFC046] hover:translate-x-2 transition-all duration-300 flex items-center group"><span className="w-0 h-0.5 bg-[#FFC046] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>Destinations</a></li>
              <li><a href="/about" className="text-white/70 hover:text-[#FFC046] hover:translate-x-2 transition-all duration-300 flex items-center group"><span className="w-0 h-0.5 bg-[#FFC046] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>About Us</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-[#FFC046] hover:translate-x-2 transition-all duration-300 flex items-center group"><span className="w-0 h-0.5 bg-[#FFC046] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-[#1A73E8] to-[#FFC046] rounded-full mr-3"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#1A73E8]/20 rounded-xl flex items-center justify-center group-hover:bg-[#1A73E8]/30 transition-colors">
                  <FaPhone className="text-[#1A73E8]" />
                </div>
                <a href={`tel:${siteConfig.phone}`} className="text-white/70 hover:text-[#FFC046] transition-colors font-medium">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center group-hover:bg-[#6C63FF]/30 transition-colors">
                  <FaEnvelope className="text-[#6C63FF]" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-[#FFC046] transition-colors font-medium break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#FFC046]/20 rounded-xl flex items-center justify-center group-hover:bg-[#FFC046]/30 transition-colors mt-0.5">
                  <FaMapMarkerAlt className="text-[#FFC046]" />
                </div>
                <span className="text-white/70 leading-relaxed">{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-white/60 text-sm font-medium">
              © 2024 <span className="text-[#FFC046]">Dilshan Travelscape</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-[#1A73E8] text-sm transition-colors font-medium hover:underline">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[#1A73E8] text-sm transition-colors font-medium hover:underline">Terms of Service</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="border-t border-white/5 pt-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3 text-white/40 text-xs bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-5 h-5 bg-gradient-to-br from-[#1A73E8] to-[#6C63FF] rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="font-medium">Crafted by</span>
                <span className="text-[#FFC046] font-bold text-sm">LuminexIT</span>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <a 
                  href="tel:+94719769164" 
                  className="text-[#FFC046] hover:text-white transition-colors duration-300 font-semibold text-sm hover:underline"
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