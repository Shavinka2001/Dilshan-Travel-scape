import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Dilshan Travelscape - Premium Vehicle Rentals & Tours in Sri Lanka",
    template: "%s | Dilshan Travelscape"
  },
  description: "Experience Sri Lanka with Dilshan Travelscape. Premium vehicle rentals, guided tours, and airport transfers. Professional drivers, 15+ years experience, 24/7 support. Book your Sri Lankan adventure today!",
  keywords: ["Sri Lanka tours", "vehicle rental Sri Lanka", "Colombo tours", "Kandy tours", "airport transfer", "car rental", "tour guide", "travel Sri Lanka", "vacation packages"],
  authors: [{ name: "Dilshan Travelscape" }],
  creator: "Dilshan Travelscape",
  publisher: "Dilshan Travelscape",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dilshantravelscape.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dilshan Travelscape - Premium Vehicle Rentals & Tours in Sri Lanka",
    description: "Experience Sri Lanka with premium vehicle rentals and guided tours. Professional service, competitive rates, 24/7 support.",
    url: "https://dilshantravelscape.com",
    siteName: "Dilshan Travelscape",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dilshan Travelscape - Sri Lanka Tourism',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dilshan Travelscape - Premium Vehicle Rentals & Tours",
    description: "Experience Sri Lanka with premium vehicle rentals and guided tours. Book your adventure today!",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
      </body>
    </html>
  );
}
