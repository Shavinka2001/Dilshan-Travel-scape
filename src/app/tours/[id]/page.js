import { packages } from '../../../data/siteData';
import { notFound } from 'next/navigation';
import PackageDetailClient from './PackageDetailClient';

// Generate metadata for each tour package
export async function generateMetadata({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;
  
  // Ensure params and params.id exist
  if (!resolvedParams?.id) {
    return {
      title: 'Package Not Found',
      description: 'The tour package you are looking for could not be found.'
    };
  }

  const packageId = parseInt(resolvedParams.id);
  const packageData = packages.find(p => p.id === packageId);
  
  if (!packageData || isNaN(packageId)) {
    return {
      title: 'Package Not Found',
      description: 'The tour package you are looking for could not be found.'
    };
  }

  return {
    title: `${packageData.title} - ${packageData.subtitle}`,
    description: packageData.longDescription,
    keywords: [
      packageData.title,
      ...packageData.highlights,
      'Sri Lanka tour',
      `${packageData.duration} tour`,
      packageData.difficulty
    ],
    openGraph: {
      title: `${packageData.title} - ${packageData.subtitle}`,
      description: packageData.longDescription,
      images: [
        {
          url: packageData.image,
          width: 1200,
          height: 630,
          alt: packageData.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${packageData.title} - ${packageData.subtitle}`,
      description: packageData.longDescription,
      images: [packageData.image],
    },
  };
}

// Generate static paths for all packages
export function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

export default async function PackageDetailPage({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;
  
  // Ensure params and params.id exist before parsing
  if (!resolvedParams?.id) {
    notFound();
  }

  const packageId = parseInt(resolvedParams.id);
  const packageData = packages.find(p => p.id === packageId);
  
  if (!packageData || isNaN(packageId)) {
    notFound();
  }

  return <PackageDetailClient />;
}