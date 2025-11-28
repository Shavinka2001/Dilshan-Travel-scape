import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DestinationsHighlight from '../components/DestinationsHighlight';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <DestinationsHighlight />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}