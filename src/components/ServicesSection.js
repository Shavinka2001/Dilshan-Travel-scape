'use client';

import { services } from '../data/siteData';
import { FaCar, FaMap, FaPlane, FaCheck } from 'react-icons/fa';

const iconMap = {
  '🚗': FaCar,
  '🗺️': FaMap,
  '✈️': FaPlane
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase text-xs sm:text-sm tracking-wider header-brand-secondary block mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral mb-4 sm:mb-6 hero-title px-2 sm:px-0">
            Professional Travel <span className="text-primary font-semibold block sm:inline">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral/70 max-w-2xl mx-auto hero-subtitle px-4 sm:px-0 leading-relaxed">
            Reliable and professional travel solutions for your Sri Lankan adventure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCar;
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20 mx-2 sm:mx-0"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <IconComponent className="text-lg sm:text-xl text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-neutral mb-3 sm:mb-4 header-brand-primary leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-neutral/70 mb-4 sm:mb-6 leading-relaxed hero-subtitle text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary text-xs sm:text-sm flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-neutral/70 hero-subtitle leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}