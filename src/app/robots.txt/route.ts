import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Enhanced SEO Configuration
Sitemap: https://dilshantravelscape.com/sitemap.xml
Sitemap: https://dilshantravelscape.com/sitemap-images.xml

# Disallow admin and system areas
Disallow: /admin/
Disallow: /_next/
Disallow: /api/
Disallow: /.well-known/
Disallow: /private/

# Allow specific important pages
Allow: /
Allow: /services
Allow: /packages  
Allow: /about
Allow: /contact

# Allow media files
Allow: /images/
Allow: /favicon.ico
Allow: /og-image.jpg
Allow: /apple-touch-icon.png

# Crawl delay for better server performance
Crawl-delay: 1`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}