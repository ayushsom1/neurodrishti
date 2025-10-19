import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function GlassesSpecsSection() {
  return (
    <section className="w-full bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] min-h-[800px]">
        {/* Left side - Rotated Image (on top in mobile) */}
        <div className="relative flex items-center justify-center overflow-hidden order-1 md:order-none min-h-[300px] md:min-h-0">
          <ScrollReveal direction="left" delay={100} className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[300px] max-h-[700px]">
              <Image
                src="/assets/images/glasses-4.png"
                alt="NeuroDrishti Glasses Side View"
                fill
                className="object-contain md:-rotate-90 md:scale-150"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right side - Specifications (below image in mobile) */}
        <div className="z-10 flex flex-col justify-center px-8 md:px-16 py-12 order-2 md:order-none">
          <ScrollReveal direction="fade" delay={200}>
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center md:text-left">Specifications</h2>
          </ScrollReveal>

          <div className="space-y-10">
            {/* Camera */}
            <ScrollReveal direction="right" delay={300}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Camera</h3>
                <p className="text-black">An 8 MP camera that captures everything.</p>
              </div>
            </ScrollReveal>

            {/* Battery */}
            <ScrollReveal direction="right" delay={400}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Battery</h3>
                <p className="text-black">Can run 12 hours per day with magnetic charging.</p>
              </div>
            </ScrollReveal>

            {/* Lightweight */}
            <ScrollReveal direction="right" delay={500}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Lightweight</h3>
                <p className="text-black">Weighs only 34 grams.</p>
              </div>
            </ScrollReveal>

            {/* Audio */}
            <ScrollReveal direction="right" delay={600}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Audio</h3>
                <p className="text-black">
                  Delivers superior audio quality with Active Noise Cancellation.
                </p>
              </div>
            </ScrollReveal>

            {/* Wifi & Bluetooth */}
            <ScrollReveal direction="right" delay={700}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Wifi & Bluetooth</h3>
                <p className="text-black">Keeps you connected at all times</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


// in mobile view rotate back the image 