import Navbar from '@/components/Navbar';
import AppHeroSection from '@/components/app/AppHeroSection';
import AppFeaturesSection from '@/components/app/AppFeaturesSection';
import AppAdditionalFeatures from '@/components/app/AppAdditionalFeatures';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function AppPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AppHeroSection />
      <AppFeaturesSection />
      <AppAdditionalFeatures />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
