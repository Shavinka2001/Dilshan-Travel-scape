import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dilshantravelscape.com'
  const currentDate = new Date()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // Tour packages (dynamic - you can expand this)
  const tourPackages = [
    { id: '1', name: 'cultural-scenic-adventure' },
    { id: '2', name: 'ancient-kingdoms-tour' },
    { id: '3', name: 'hill-country-explorer' },
  ]
  
  const tourPages = tourPackages.map(tour => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Destination pages (for future expansion)
  const destinations = [
    'colombo', 'kandy', 'galle', 'sigiriya', 
    'ella', 'nuwara-eliya', 'yala', 'anuradhapura'
  ]
  
  const destinationPages = destinations.map(destination => ({
    url: `${baseUrl}/destinations/${destination}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Service pages (for future SEO expansion)
  const services = [
    'private-driver',
    'car-rental', 
    'airport-transfer',
    'wedding-car-hire',
    'group-tours'
  ]
  
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    ...staticPages,
    ...tourPages,
    // Uncomment when you create these pages
    // ...destinationPages,
    // ...servicePages,
  ]
}