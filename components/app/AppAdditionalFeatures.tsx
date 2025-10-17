'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function AppAdditionalFeatures() {
  const additionalFeatures = [
    {
      icon: '/assets/icons/detect-object.png',
      title: 'Detect objects',
      description: 'Finds nearby objects instantly',
    },
    {
      icon: '/assets/icons/describe-scene.png',
      title: 'Describe scene',
      description: 'Explains your surrounding area in detail',
    },
    {
      icon: '/assets/icons/call-volunteer.png',
      title: 'Call a volunteer',
      description: 'Get instant help quickly',
    },
    {
      icon: '/assets/icons/ai-assistant.png',
      title: 'AI assistant',
      description: 'Your personal assistant anytime',
      scale: 2,
    },
    {
      icon: '/assets/icons/detect-colours.png',
      title: 'Detect colors',
      description: 'Tells you the color of objects',
    },
    {
      icon: '/assets/icons/recognize-cash.png',
      title: 'Recognize Cash',
      description: 'Identifies currency notes for you',
    },
    {
      icon: '/assets/icons/voice-commands.png',
      title: 'Multi-Lingual',
      description: 'For easy use anywhere',
    },
    {
      icon: '/assets/icons/real-time.png',
      title: 'Background Mode',
      description: 'Stay connected even with phone closed',
    },
  ];

  return (
    <section className="relative w-full bg-[#928BFF] py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-3 md:mb-4">
              Additional Features
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="">There&apos;s a lot more to it</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-10 sm:gap-y-12 md:gap-y-16 mb-10 md:mb-16">
          {additionalFeatures.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
              <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            style={{ transform: feature.scale ? `scale(${feature.scale})` : undefined }}
          />
          </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="flex justify-center pt-4 md:pt-6">
            <Link href="https://play.google.com/store/apps/details?id=com.nd.objectnew" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base font-medium rounded hover:bg-gray-800 transition-colors">
              Download Now
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
