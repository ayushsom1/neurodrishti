'use client';

import Link from 'next/link';

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
    <section className="relative w-full bg-[#928BFF] py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-2xl font-bold uppercase tracking-widest text-white mb-4">
        Additional Features
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        <span className="">There's a lot more to it</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 mb-16">
        {additionalFeatures.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center mb-4">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-14 h-14 object-contain"
          />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-black mb-3">
          {feature.title}
          </h3>

          {/* Description */}
          <p className="text-xl text-black/80 leading-relaxed">
          {feature.description}
          </p>
        </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center pt-6">
        <Link href="https://play.google.com/store/apps/details?id=com.nd.objectnew" target="_blank" rel="noopener noreferrer" className="px-10 py-3 bg-black text-white text-base font-medium rounded hover:bg-gray-800 transition-colors">
          Download Now
        </Link>
      </div>
      </div>
    </section>
  );
}
