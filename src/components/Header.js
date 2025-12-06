'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'Tours', href: '/tours', isPage: true },
    { name: 'Destinations', href: '/destinations', isPage: true },
    { name: 'Reviews', href: '/reviews', isPage: true },
    { name: 'About', href: '/about', isPage: true },
    { name: 'Contact', href: '/contact', isPage: true }
  ];
 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-1 sm:py-0.5">
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <img 
                src="/images/logo.png" 
                alt="Dilshan Travelscape Logo" 
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight header-brand-primary whitespace-nowrap">
                  <span className="text-primary">Dilshan</span> <span className="text-secondary">Travelscape</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => {
              // Special styling for Reviews page
              if (item.name === 'Reviews') {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-neutral/80 hover:text-primary transition-all duration-300 font-medium py-1 px-3 rounded-full hover:bg-primary/5 relative group"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              }
              
              if (item.isPage) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-neutral/80 hover:text-primary transition-all duration-300 font-medium py-1 px-3 rounded-full hover:bg-primary/5 relative group"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-neutral/80 hover:text-primary transition-all duration-300 font-medium py-1 px-3 rounded-full hover:bg-primary/5 relative group"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral p-1.5 sm:p-2 hover:bg-primary/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="bg-white border-t border-gray-100 py-3 sm:py-4 space-y-1 rounded-b-2xl shadow-lg">
            {navItems.map((item, index) => {
              // Special styling for Reviews page in mobile menu
              if (item.name === 'Reviews' && item.isPage) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 sm:px-6 text-sm text-neutral/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl font-medium mx-1 sm:mx-2 relative group"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              }
              
              if (item.isPage) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 sm:px-6 text-sm text-neutral/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl font-medium mx-1 sm:mx-2 relative group"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 sm:px-6 text-sm text-neutral/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl font-medium mx-1 sm:mx-2 relative group"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </header>
  );
}