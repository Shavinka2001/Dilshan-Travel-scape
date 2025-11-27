import Link from 'next/link';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl mb-6">🏝️</div>
          <h1 className="text-4xl font-bold text-neutral mb-4">Tour Not Found</h1>
          <p className="text-neutral/70 mb-8 leading-relaxed">
            The tour package you're looking for doesn't exist or may have been moved. 
            Let's get you back on track to discover amazing Sri Lankan adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              <span>View All Tours</span>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center space-x-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <FaHome className="text-sm" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}