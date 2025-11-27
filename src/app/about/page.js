'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
                About Us
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title">
                Professional Travel <span className="text-primary font-semibold block sm:inline">Services</span>
              </h1>
              
              <p className="text-base sm:text-lg text-neutral/70 mb-4 sm:mb-6 leading-relaxed hero-subtitle">
                With over 15 years of experience in the travel industry, we are your trusted 
                partner for exploring the beautiful island of Sri Lanka.
              </p>
              
              <p className="text-sm sm:text-base text-neutral/70 mb-6 sm:mb-8 leading-relaxed hero-subtitle">
                Founded with a passion for sharing Sri Lanka's natural beauty and rich culture, 
                we've grown to become one of the most reliable travel service providers in the country.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral mb-1 header-brand-primary text-sm sm:text-base">Licensed & Insured</h4>
                    <p className="text-xs sm:text-sm text-neutral/70 hero-subtitle leading-relaxed">Fully licensed tourism operator with comprehensive coverage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral mb-1 header-brand-primary text-sm sm:text-base">Expert Guides</h4>
                    <p className="text-xs sm:text-sm text-neutral/70 hero-subtitle leading-relaxed">Professional local guides with deep cultural knowledge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral mb-1 header-brand-primary text-sm sm:text-base">Premium Fleet</h4>
                    <p className="text-xs sm:text-sm text-neutral/70 hero-subtitle leading-relaxed">Well-maintained, air-conditioned vehicles for comfort</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral mb-1 header-brand-primary text-sm sm:text-base">24/7 Support</h4>
                    <p className="text-xs sm:text-sm text-neutral/70 hero-subtitle leading-relaxed">Round-the-clock customer support for peace of mind</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 text-center border border-gray-200 shadow-sm">
                {/* Main Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">
                  🏝️
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-primary hero-title">15+</div>
                    <div className="text-xs sm:text-sm text-neutral/70 hero-subtitle">Years Experience</div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-primary hero-title">500+</div>
                    <div className="text-xs sm:text-sm text-neutral/70 hero-subtitle">Happy Customers</div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-primary hero-title">50+</div>
                    <div className="text-xs sm:text-sm text-neutral/70 hero-subtitle">Tour Destinations</div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                    <div className="text-xl sm:text-2xl font-bold text-primary hero-title">4.9★</div>
                    <div className="text-xs sm:text-sm text-neutral/70 hero-subtitle">Average Rating</div>
                  </div>
                </div>

                <p className="text-neutral/70 text-xs sm:text-sm hero-subtitle">
                  Trusted by travelers from around the world
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-primary/10 text-primary p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-primary/20">
                <div className="text-base sm:text-lg font-bold">🏆</div>
                <div className="text-xs hero-subtitle">Award Winner</div>
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white text-primary p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200">
                <div className="text-base sm:text-lg font-bold">💯</div>
                <div className="text-xs hero-subtitle">Quality Service</div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="max-w-4xl mx-2 sm:mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-primary/10">
              <h2 className="text-xl sm:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title">Our <span className="text-primary font-semibold">Mission</span></h2>
              <p className="text-sm sm:text-lg text-neutral/70 leading-relaxed hero-subtitle">
                To provide exceptional travel experiences that create lasting memories while 
                promoting sustainable tourism and supporting local communities.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-light text-neutral mb-4 sm:mb-6 hero-title text-center">Our <span className="text-primary font-semibold">Story</span></h2>
              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-neutral/70 leading-relaxed hero-subtitle">
                  Dilshan Travelscape began as a small family business with a simple dream: to share the incredible beauty and rich culture of Sri Lanka with visitors from around the world. What started with a single vehicle and a passion for hospitality has grown into one of the island's most trusted travel service providers.
                </p>
                <p className="text-sm sm:text-base text-neutral/70 leading-relaxed hero-subtitle">
                  Over the years, we've had the privilege of welcoming thousands of guests from different corners of the globe, each bringing their own stories and creating new memories on our beautiful island. From the misty hills of Kandy to the golden beaches of the south, from ancient temples to bustling markets, we've been there every step of the way.
                </p>
                <p className="text-sm sm:text-base text-neutral/70 leading-relaxed hero-subtitle">
                  Today, we remain committed to the same values that founded our company: genuine hospitality, deep respect for our cultural heritage, and an unwavering dedication to creating exceptional travel experiences. Every journey with us is more than just a tour – it's an opportunity to connect with the heart and soul of Sri Lanka.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-light text-neutral mb-6 sm:mb-8 hero-title text-center">Our <span className="text-primary font-semibold">Values</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-neutral mb-3 header-brand-primary">Authentic Hospitality</h3>
                <p className="text-sm text-neutral/70 hero-subtitle leading-relaxed">
                  We treat every guest like family, ensuring warm, genuine Sri Lankan hospitality in every interaction.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl mb-4">🌿</div>
                <h3 className="text-lg font-semibold text-neutral mb-3 header-brand-primary">Sustainable Tourism</h3>
                <p className="text-sm text-neutral/70 hero-subtitle leading-relaxed">
                  We're committed to protecting our environment and supporting local communities through responsible tourism.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold text-neutral mb-3 header-brand-primary">Excellence</h3>
                <p className="text-sm text-neutral/70 hero-subtitle leading-relaxed">
                  We constantly strive for excellence in every aspect of our service, from vehicles to guides to experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}