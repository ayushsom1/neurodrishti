'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function ProductStyleSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="container mx-auto px-3 ">
        <div className="relative w-full">
          {/* Glasses Image */}
          <img
            src="/assets/images/1C.png"
            alt="NeuroDrishti Glasses Side View"
            className="w-full h-auto rounded-lg "
          />

          {/* Text Overlay - Top Right Corner */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-12 z-10">
            <ScrollReveal direction="left" delay={200}>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-weight-500 leading-tight text-left ">
                Made to fit your<br />everyday style
              </h2>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

