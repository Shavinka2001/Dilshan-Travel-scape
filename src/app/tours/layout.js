import { packages } from '../../data/siteData';
import { notFound } from 'next/navigation';

// Metadata for all tours pages
export const metadata = {
  title: {
    default: "Tour Packages | Dilshan Travelscape",
    template: "%s | Dilshan Travelscape"
  },
  description: "Explore our carefully curated tour packages across Sri Lanka. From cultural heritage tours to adventure packages, find your perfect Sri Lankan experience.",
  keywords: ["Sri Lanka tour packages", "Kandy tours", "Galle tours", "cultural tours", "adventure tours", "guided tours Sri Lanka"],
};

export default function ToursLayout({ children }) {
  return children;
}