import Navbar from '@/components/Navbar';
import GlassesHeroSection from '@/components/glasses/GlassesHeroSection';
import GlassesLightweightSection from '@/components/glasses/GlassesLightweightSection';
import GlassesControlSection from '@/components/glasses/GlassesControlSection';
import GlassesSpecsSection from '@/components/glasses/GlassesSpecsSection';
import GlassesFeaturesSection from '@/components/glasses/GlassesFeaturesSection';
import GlassesPrivacySection from '@/components/glasses/GlassesPrivacySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function GlassesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GlassesHeroSection />
      <GlassesLightweightSection />
      <GlassesControlSection />
      <GlassesSpecsSection />
      <GlassesFeaturesSection />
      <GlassesPrivacySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
