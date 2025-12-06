import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingReviewButton from "../components/FloatingReviewButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Dilshan Travelscape - Sri Lanka Travel & Tours | Private Driver & Car Rental",
    template: "%s | Dilshan Travelscape - Sri Lanka Travel & Tours"
  },
  description: "#1 Tour Operator in Sri Lanka 🇱🇰 Premium private driver services, car rental, and tour packages. Expert local guides, luxury vehicles, airport transfers. Book authentic Sri Lankan adventures with trusted professionals since 2009.",
  keywords: [
    // Primary Keywords
    "Sri Lanka travel and tours",
    "private driver Sri Lanka", 
    "tour operator Sri Lanka",
    "car rental Sri Lanka",
    
    // Secondary Keywords
    "Sri Lanka tour packages",
    "Colombo private driver",
    "airport transfer Sri Lanka",
    "hire car with driver Sri Lanka",
    "Sri Lanka travel agency",
    "tour guide Sri Lanka",
    
    // Location-specific
    "Kandy tours",
    "Galle tours", 
    "Ella tours",
    "Sigiriya tours",
    "Anuradhapura tours",
    "Nuwara Eliya tours",
    "Yala safari tours",
    
    // Service Keywords
    "vehicle rental with driver",
    "chauffeur service Sri Lanka",
    "custom tour packages",
    "group tours Sri Lanka",
    "honeymoon packages Sri Lanka",
    "family tours Sri Lanka",
    "luxury car hire Sri Lanka",
    "minivan rental Sri Lanka",
    "wedding car rental"
  ],
  authors: [{ name: "Dilshan Travelscape" }],
  creator: "Dilshan Travelscape",
  publisher: "Dilshan Travelscape",
  category: "Travel & Tourism",
  classification: "Travel Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dilshantravelscape.com'),
  alternates: {
    canonical: 'https://dilshantravelscape.com',
  },
  openGraph: {
    title: "Dilshan Travelscape - Sri Lanka's #1 Private Driver & Tour Operator",
    description: "🌟 Premium Sri Lankan travel experiences with expert private drivers & authentic tour packages. Luxury vehicles, professional guides, 24/7 support. Perfect for WhatsApp booking! 🇱🇰",
    url: "https://dilshantravelscape.com",
    siteName: "Dilshan Travelscape",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Dilshan Travelscape - Sri Lanka Travel & Tours',
      },
      {
        url: '/images/sigiriya(1).jpg',
        width: 800,
        height: 600,
        alt: 'Sigiriya Rock Fortress - Sri Lanka Tours',
      }
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Sri Lanka',
    phoneNumber: '+94 77 819 7348',
    emails: ['dilshantravelscape@gmail.com'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DilshanTours',
    creator: '@DilshanTours',
    title: "Dilshan Travelscape - Private Driver & Tours Sri Lanka",
    description: "🇱🇰 Premium Sri Lankan travel experiences. Private drivers, tour packages, car rental. Book authentic adventures with trusted professionals!",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Dilshan Travelscape',
    'application-name': 'Dilshan Travelscape',
    'msapplication-TileColor': '#1A73E8',
    'theme-color': '#1A73E8',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#232249',
}

export default function RootLayout({ children }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Dilshan Travelscape",
      "alternateName": "Dilshan Tours",
      "description": "Premium vehicle rentals and guided tours in Sri Lanka with professional drivers and expert local guides",
      "url": "https://dilshantravelscape.com",
      "logo": "https://dilshantravelscape.com/logo.png",
      "image": "https://dilshantravelscape.com/og-image.jpg",
      "telephone": "+94 77 123 4567",
      "email": "info@dilshantravelscape.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Colombo",
        "addressRegion": "Western Province",
        "postalCode": "00100",
        "addressCountry": "LK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.9271",
        "longitude": "79.8612"
      },
      "openingHours": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "foundingDate": "2009",
      "slogan": "Explore Sri Lanka In Style & Comfort",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Travel Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vehicle Rental",
              "description": "Premium car and van rentals with professional drivers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guided Tours",
              "description": "Expert guided tours to Sri Lanka's top destinations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Transfer",
              "description": "Reliable airport pickup and drop-off services"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      "sameAs": [
        "https://facebook.com/dilshantravelscape",
        "https://instagram.com/dilshantravelscape",
        "https://wa.me/94771234567"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Dilshan Travelscape",
      "url": "https://dilshantravelscape.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dilshantravelscape.com/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/logo.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
        <FloatingReviewButton />
      </body>
    </html>
  );
}
