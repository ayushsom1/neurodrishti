'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function AppFeaturesSection() {
  const features = [
    {
      icon: '/assets/icons/read-text.png',
      title: 'Reading text',
      description: 'The Reading Text feature lets users instantly hear printed or handwritten text read aloud through the glasses. From books and documents to labels and signs, it makes reading effortless and accessible, anywhere.',
    },
    {
      icon: '/assets/icons/smart-navigation.png',
      title: 'Smart Navigation',
      description: 'Smart Navigation helps users move safely and confidently by guiding them through their surroundings in real time. With voice assistance and obstacle detection, it ensures smooth travel indoors and outdoors alike.',
    },
    {
      icon: '/assets/icons/identify-people.png',
      title: 'Facial Recognition',
      description: 'Facial Recognition allows the glasses to identify and announce familiar faces, helping users connect with people around them with ease and confidence.',
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl tracking-widest font-bold mb-2 md:mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              Accessibility in your pocket
            </h2>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left - Phone Mockup */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative my-8 sm:my-12 md:my-16 lg:my-20">
                <img
                  src="/assets/images/app-second.png"
                  alt="NeuroDrishti App Connected Screen"
                  className="w-full max-w-xs sm:max-w-sm h-auto object-contain scale-125 sm:scale-150"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Features List */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10 pt-4 md:pt-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="right" delay={300 + (index * 150)}>
                <div className="space-y-2 md:space-y-3">
                {/* Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain invert"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-1 md:mb-2">{feature.title}</h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                  {/* Download Button - only on last feature */}
                  {index === features.length - 1 && (
                    <div className="pt-2">

                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="up" delay={600}>
          <div className="mt-8 md:mt-12 flex justify-center">
            <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors">
              Download Now
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
