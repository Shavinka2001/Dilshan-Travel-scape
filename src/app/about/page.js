'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A73E8]/5 via-transparent to-[#6C63FF]/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A73E8]/10 border border-[#1A73E8]/20 text-[#1A73E8] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#1A73E8] rounded-full mr-2 animate-pulse"></span>
              About Dilshan Travelscape
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl hero-title text-[#1E1E1E] mb-6 leading-tight">
              Your Gateway to
              <span className="block text-transparent bg-gradient-to-r from-[#1A73E8] to-[#6C63FF] bg-clip-text hero-title-accent">
                Sri Lanka's Wonders
              </span>
            </h1>
            <p className="text-lg sm:text-xl hero-subtitle text-[#1E1E1E]/70 max-w-3xl mx-auto leading-relaxed">
              Based in the heart of Sri Lanka's southern coast, we specialize in creating unforgettable 
              travel experiences that showcase the island's natural beauty and cultural heritage.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-[#1A73E8] mb-2">8+</div>
                <div className="text-sm sm:text-base text-[#1E1E1E]/70 font-medium">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA] hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-[#FFC046] mb-2">250+</div>
                <div className="text-sm sm:text-base text-[#1E1E1E]/70 font-medium">Happy Travelers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA] hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-[#6C63FF] mb-2">25+</div>
                <div className="text-sm sm:text-base text-[#1E1E1E]/70 font-medium">Destinations</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA] hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold text-[#FFC046] mb-2">4.8★</div>
                <div className="text-sm sm:text-base text-[#1E1E1E]/70 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl hero-title text-[#1E1E1E] mb-6 leading-tight">
                Passionate About Sri Lankan
                <span className="block text-[#6C63FF] hero-title-accent">Hospitality & Culture</span>
              </h2>
              
              <p className="text-lg hero-subtitle text-[#1E1E1E]/70 mb-6 leading-relaxed">
                Dilshan Travelscape was born from a deep love for Sri Lanka's incredible diversity - 
                from the pristine beaches of Hiriketiya to the ancient wonders of Sigiriya, from the 
                misty hills of Ella to the wildlife-rich plains of Yala.
              </p>
              
              <p className="text-base hero-subtitle text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Located in Welewaththa, Hiriketiya, Dickwella, we're perfectly positioned to showcase 
                the southern coast's hidden gems while providing easy access to Sri Lanka's most 
                iconic destinations across the island.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-xl border border-slate-200 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1A73E8] to-[#1A73E8]/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">Licensed & Registered</h4>
                    <p className="text-sm text-[#1E1E1E]/70">Fully certified tour operator with Sri Lanka Tourism Board</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-xl border border-slate-200 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FFC046] to-[#FFC046]/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">Local Expert Guides</h4>
                    <p className="text-sm text-[#1E1E1E]/70">Experienced guides with deep knowledge of Sri Lankan culture</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-xl border border-slate-200 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12a2 2 0 004 0a2 2 0 00-4 0zm0 0V6a2 2 0 012-2h2a2 2 0 012 2v6" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">Premium Vehicle Fleet</h4>
                    <p className="text-sm text-[#1E1E1E]/70">Air-conditioned, well-maintained vehicles for maximum comfort</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-xl border border-slate-200 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">24/7 Customer Support</h4>
                    <p className="text-sm text-slate-600">Round-the-clock assistance for complete peace of mind</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Image with overlay */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl group">
                  <img 
                    src="/images/hiriketiya.jpg" 
                    alt="Beautiful Hiriketiya Beach - Our Home Base in Sri Lanka" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      e.target.src = '/images/sigiriya.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">Hiriketiya Beach</p>
                    <p className="text-lg font-bold">Our Beautiful Home Base</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">Active Tours</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">Live</div>
                </div>

                <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-[#F5F7FA]">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-4 h-4 text-[#FFC046]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm font-medium text-[#1E1E1E]/70">Rating</span>
                  </div>
                  <div className="text-xl font-bold text-[#1E1E1E]">4.8/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full mr-2"></span>
              What We Offer
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl hero-title text-[#1E1E1E] mb-6">
              Comprehensive Travel
              <span className="block text-[#1A73E8] hero-title-accent">Solutions</span>
            </h2>
            <p className="text-lg hero-subtitle text-[#1E1E1E]/70 max-w-2xl mx-auto">
              From vehicle rentals to guided tours, we provide everything you need for an unforgettable Sri Lankan adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-[#1A73E8]/10 to-[#1A73E8]/5 rounded-3xl p-8 h-full border border-[#1A73E8]/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-[#1A73E8] to-[#1A73E8]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl nav-link font-bold text-[#1E1E1E] mb-4">Vehicle Rentals</h3>
                <p className="hero-subtitle text-[#1E1E1E]/70 mb-6 leading-relaxed">
                  Premium air-conditioned vehicles with professional drivers. From cars to vans, perfect for any group size.
                </p>
                <div className="space-y-2 text-sm text-[#1E1E1E]/60">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full mr-2"></div>
                    Professional drivers
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full mr-2"></div>
                    GPS tracking
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full mr-2"></div>
                    24/7 support
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#FFC046]/10 to-[#FFC046]/5 rounded-3xl p-8 h-full border border-[#FFC046]/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-[#FFC046] to-[#FFC046]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl nav-link font-bold text-[#1E1E1E] mb-4">Guided Tours</h3>
                <p className="hero-subtitle text-[#1E1E1E]/70 mb-6 leading-relaxed">
                  Expertly crafted tours covering Sri Lanka's cultural sites, natural wonders, and hidden gems.
                </p>
                <div className="space-y-2 text-sm text-[#1E1E1E]/60">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#FFC046] rounded-full mr-2"></div>
                    Expert local guides
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#FFC046] rounded-full mr-2"></div>
                    Custom itineraries
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#FFC046] rounded-full mr-2"></div>
                    Cultural insights
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#6C63FF]/5 rounded-3xl p-8 h-full border border-[#6C63FF]/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl nav-link font-bold text-[#1E1E1E] mb-4">Airport Transfers</h3>
                <p className="hero-subtitle text-[#1E1E1E]/70 mb-6 leading-relaxed">
                  Reliable pickup and drop-off services ensuring smooth arrivals and departures.
                </p>
                <div className="space-y-2 text-sm text-[#1E1E1E]/60">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full mr-2"></div>
                    Flight tracking
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full mr-2"></div>
                    Meet & greet
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full mr-2"></div>
                    Fixed rates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#F5F7FA] to-[#1A73E8]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFC046]/10 text-[#FFC046] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 bg-[#FFC046] rounded-full mr-2"></span>
                Our Mission
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl hero-title text-[#1E1E1E] mb-6">
                Creating Unforgettable
                <span className="block text-[#1A73E8] hero-title-accent">Sri Lankan Memories</span>
              </h2>
              <p className="text-lg hero-subtitle text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Our mission is to provide exceptional travel experiences that showcase the true beauty 
                and culture of Sri Lanka while promoting sustainable tourism and supporting local communities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#FFC046]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FFC046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg nav-link font-semibold text-[#1E1E1E] mb-2">Authentic Experiences</h3>
                    <p className="hero-subtitle text-[#1E1E1E]/70">Connect with local culture, traditions, and hidden gems that only locals know.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1A73E8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg nav-link font-semibold text-[#1E1E1E] mb-2">Safety & Comfort</h3>
                    <p className="hero-subtitle text-[#1E1E1E]/70">Your safety and comfort are our top priorities throughout your journey.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg nav-link font-semibold text-[#1E1E1E] mb-2">Sustainable Tourism</h3>
                    <p className="hero-subtitle text-[#1E1E1E]/70">Supporting local communities and preserving Sri Lanka's natural beauty.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA]">
                    <div className="text-3xl font-bold text-[#1A73E8] mb-2">250+</div>
                    <div className="text-[#1E1E1E]/70 font-medium">Happy Travelers</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA]">
                    <div className="text-3xl font-bold text-[#FFC046] mb-2">25+</div>
                    <div className="text-[#1E1E1E]/70 font-medium">Destinations</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA]">
                    <div className="text-3xl font-bold text-[#6C63FF] mb-2">8+</div>
                    <div className="text-[#1E1E1E]/70 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F7FA]">
                    <div className="text-3xl font-bold text-[#FFC046] mb-2">4.8★</div>
                    <div className="text-[#1E1E1E]/70 font-medium">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#1A73E8] to-[#6C63FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl hero-title text-white mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl hero-subtitle text-white/90 mb-8 leading-relaxed">
            Let us create your perfect Sri Lankan adventure. From southern beaches to ancient kingdoms, 
            we'll show you the real beauty of our island paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A73E8] rounded-xl font-semibold hover:bg-[#F5F7FA] transition-colors duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </a>
            <a
              href="/tours"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#1A73E8] transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Tours
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
