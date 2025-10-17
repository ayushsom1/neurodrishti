'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function Description() {
  return (
    <section id="description" className="mx-auto max-w-6xl scroll-mt-20 px-6">
      <div className="mt-10 mb-10">
        <ScrollReveal direction="up" delay={100}>
          <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed">
            <span className="font-bold text-orange-500">
              NeuroDrishti Smartglasses
            </span>{' '}
            use AI, camera, sensors, and audio to give real-time voice
            guidance. They help visually impaired users navigate their
            surroundings with ease, boosting independence, safety and
            confidence.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
