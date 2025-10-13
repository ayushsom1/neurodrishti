import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductIntroSection from '@/components/ProductIntroSection';
import ProductStyleSection from '@/components/ProductStyleSection';
import AppConnectSection from '@/components/AppConnectSection';
import FeaturesSection from '@/components/FeaturesSection';
import ActionSection from '@/components/ActionSection';
import MilestonesSection from '@/components/MilestonesSection';
import SupportedBySection from '@/components/SupportedBySection';
import FAQSection from '@/components/FAQSection';
import Description from '@/components/Description';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Description />
      <ProductIntroSection />
      <ProductStyleSection />
      <AppConnectSection />
      <FeaturesSection />
      <ActionSection />
      <MilestonesSection />
      <TestimonialsSection />
      <SupportedBySection />
      <FAQSection />
      <Footer />
    </main>
  );
}
