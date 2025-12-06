import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DestinationsHighlight from '../components/DestinationsHighlight';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export const metadata = {
  title: "Sri Lanka Travel & Tours | Private Driver & Car Rental Services",
  description: "🇱🇰 #1 Tour Operator in Sri Lanka. Premium private driver services, custom tour packages & luxury car rentals. Expert guides, authentic experiences, 24/7 support. Book now!",
  keywords: "Sri Lanka travel tours, private driver Sri Lanka, tour operator, car rental, Colombo tours, Kandy tours, airport transfer",
  openGraph: {
    title: "Dilshan Travelscape - Sri Lanka's Premier Tour Operator & Private Driver Service",
    description: "🌟 Experience authentic Sri Lanka with our premium private driver services & custom tour packages. Luxury vehicles, expert guides, unbeatable rates! 🇱🇰",
    images: ['/images/sigiriya(1).jpg'],
  },
  alternates: {
    canonical: 'https://dilshantravelscape.com',
  },
}

export default function Home() {
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Dilshan Travelscape",
    "alternateName": ["Dilshan Tours", "Dilshan Travel"],
    "description": "Sri Lanka's premier travel agency offering private driver services, luxury car rentals, and custom tour packages with expert local guides and authentic experiences",
    "url": "https://dilshantravelscape.com",
    "logo": "https://dilshantravelscape.com/images/logo.png",
    "image": [
      "https://dilshantravelscape.com/images/sigiriya(1).jpg",
      "https://dilshantravelscape.com/images/kandy.jpg",
      "https://dilshantravelscape.com/images/ella.jpg"
    ],
    "telephone": "+94 77 819 7348",
    "email": "dilshantravelscape@gmail.com",
    "priceRange": "$$-$$$",
    "currenciesAccepted": "USD, EUR, LKR",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
    "foundingDate": "2009",
    "slogan": "Explore Sri Lanka In Style & Comfort",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Welewaththa, Hiriketiya",
      "addressLocality": "Dickwella",
      "addressRegion": "Southern Province",
      "postalCode": "81200",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.9738",
      "longitude": "80.7675"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Western Province"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Central Province"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Southern Province"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "7.8731",
        "longitude": "80.7718"
      },
      "geoRadius": "500000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00", 
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "487",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Sri Lanka Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Private Driver Service",
          "description": "Professional chauffeur service with luxury vehicles across Sri Lanka",
          "priceRange": "$50-150/day",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Driver & Car Hire",
            "serviceType": "Transportation",
            "provider": {
              "@id": "https://dilshantravelscape.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Custom Tour Packages", 
          "description": "Personalized Sri Lankan tour experiences with expert guides",
          "priceRange": "$100-500/person",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Sri Lanka Cultural & Scenic Tours",
            "description": "Multi-day tours covering cultural sites, national parks and scenic destinations"
          }
        },
        {
          "@type": "Offer",
          "name": "Airport Transfer Service",
          "description": "Reliable pickup and drop-off services for all Sri Lankan airports", 
          "priceRange": "$25-75/trip",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfers",
            "serviceType": "Transportation"
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Luxury Vehicle Rental",
          "category": "Car Rental"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "50-150"
        }
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+94-77-819-7348",
        "contactType": "customer service",
        "availableLanguage": ["English", "Sinhala"],
        "areaServed": "LK"
      },
      {
        "@type": "ContactPoint", 
        "email": "dilshantravelscape@gmail.com",
        "contactType": "reservations",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/dilshantravelscape",
      "https://www.instagram.com/dilshantravelscape", 
      "https://wa.me/94778197348"
    ],
    "keywords": "Sri Lanka travel tours, private driver Sri Lanka, tour operator, car rental, airport transfer, Colombo tours, Kandy tours, Galle tours, cultural tours, wildlife safari",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Licensed Tour Operator",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Sri Lanka Tourism Development Authority"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dilshantravelscape.com#localbusiness",
    "name": "Dilshan Travelscape",
    "image": "https://dilshantravelscape.com/images/logo.png",
    "telephone": "+94 77 819 7348",
    "email": "dilshantravelscape@gmail.com", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Welewaththa, Hiriketiya",
      "addressLocality": "Dickwella", 
      "addressRegion": "Southern Province",
      "postalCode": "81200",
      "addressCountry": "LK"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dilshantravelscape.com"
    }]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dilshantravelscape.com#organization",
    "name": "Dilshan Travelscape",
    "url": "https://dilshantravelscape.com",
    "logo": "https://dilshantravelscape.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-77-819-7348",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/dilshantravelscape",
      "https://www.instagram.com/dilshantravelscape",
      "https://wa.me/94778197348"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            travelAgencySchema,
            localBusinessSchema,
            breadcrumbSchema,
            organizationSchema
          ])
        }}
      />
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ServicesSection />
        <PackagesSection />
        <DestinationsHighlight />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
}