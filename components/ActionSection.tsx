'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function ActionSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-6 md:space-y-8">
          {/* Title */}
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black">
              Watch NeuroDrishti in <span className="font-bold">ACTION</span>
            </h2>
          </ScrollReveal>

          {/* Video/Image Card */}
          <ScrollReveal direction="up" delay={200}>
            <video
              className="w-full h-auto rounded-md"
              controls
              preload="metadata"
            >
              <source src="/assets/videos/Product video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
