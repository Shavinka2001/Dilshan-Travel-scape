/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix Turbopack workspace root detection
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  
  // Optimize images
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // SEO and metadata
  generateEtags: false,
};

export default nextConfig;
