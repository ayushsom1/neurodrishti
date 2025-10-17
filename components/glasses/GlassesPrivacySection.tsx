import { FcPrivacy } from "react-icons/fc";
import ScrollReveal from '@/components/ScrollReveal';

export default function GlassesPrivacySection() {
  return (
    <section className="w-full bg-[#DAC88C] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Privacy matters.</h2>
        </ScrollReveal>

        {/* Privacy Description */}
        <ScrollReveal direction="up" delay={200}>
          <p className="text-base leading-relaxed mb-10 max-w-4xl">
            At NeuroDrishti, we place the highest importance on your privacy and security. We believe that your data belongs entirely to you, which is why we ensure you have complete control over how it is stored, shared, and used. To keep it safe, we employ advanced encryption techniques along with robust security measures designed to protect your information from any unauthorized access.
          </p>

          <FcPrivacy className="w-16 h-16" />
        </ScrollReveal>
      </div>
    </section>
  );
}
