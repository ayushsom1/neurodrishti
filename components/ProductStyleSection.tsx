'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function ProductStyleSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 py-12 md:py-16 lg:py-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center">
          <ScrollReveal direction="up" delay={100}>
            <div className="relative w-full max-w-6xl">
              {/* Text Overlay */}
              <ScrollReveal direction="left" delay={200}>
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12 z-10">
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg">
                    Made to fit your<br />everyday style
                  </h2>
                </div>
              </ScrollReveal>

              {/* Glasses Image */}
              <div className="relative w-full">
                <img
                  src="/assets/images/1C.png"
                  alt="NeuroDrishti Glasses Side View"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
