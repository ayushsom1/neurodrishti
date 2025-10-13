'use client';

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
    <section className="relative w-full bg-black text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-2xl  tracking-widest font-bold mb-3">Features</p>
          <h2 className="text-5xl md:text-4xl lg:text-5xl ">
            Accessibility in your pocket
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative my-20">
              <img
                src="/assets/images/app-second.png"
                alt="NeuroDrishti App Connected Screen"
                className="w-full h-auto object-contain scale-150"
              />
            </div>
          </div>

          {/* Right - Features List */}
          <div className="space-y-10 pt-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3">
                {/* Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-12 h-12 object-contain invert"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Download Button - only on last feature */}
                {index === features.length - 1 && (
                  <div className="pt-2">

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
          <div className="mt-12 flex justify-center ">
            <button className="bg-white text-black px-8 py-3 rounded text-base font-medium hover:bg-gray-100 transition-colors">
              Download Now
            </button>
          </div>
      </div>
    </section>
  );
}
