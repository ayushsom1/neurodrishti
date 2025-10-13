import Image from 'next/image';

export default function GlassesFeaturesSection() {
  const features = [
    {
      icon: '/assets/icons/detect-object.png',
      title: 'Detect objects',
      description: 'Find nearby objects instantly.',
    },
    {
      icon: '/assets/icons/read-text.png',
      title: 'Read text',
      description: 'Reads out or handwritten text aloud.',
    },
    {
      icon: '/assets/icons/describe-scene.png',
      title: 'Describe scene',
      description: 'Explains what is happening around you.',
    },
    {
      icon: '/assets/icons/identify-people.png',
      title: 'Identify people',
      description: 'Recognizes faces in real time.',
    },
    {
      icon: '/assets/icons/call-volunteer.png',
      title: 'Call a volunteer',
      description: 'Connects you to a helper quickly.',
    },
    {
      icon: '/assets/icons/ai-assistant.png',
      title: 'AI assistant',
      description: 'Your smart assistant anytime.',
    },
    {
      icon: '/assets/icons/voice-commands.png',
      title: 'Voice commands',
      description: 'Control easily with your voice.',
    },
    {
      icon: '/assets/icons/real-time.png',
      title: 'Real time translation',
      description: 'Instantly translates languages for you.',
    },
    {
      icon: '/assets/icons/detect-colours.png',
      title: 'Detect colors',
      description: 'Tells you the color of objects.',
    },
    {
      icon: '/assets/icons/recognize-cash.png',
      title: 'Recognize Cash',
      description: 'Identifies currency notes for you.',
    },
    {
      icon: '/assets/icons/smart-navigation.png',
      title: 'Smart Navigation',
      description: 'Guides you safely on the go.',
    },
    {
      icon: '/assets/icons/qr.png',
      title: 'Scan and read',
      description: 'Scan with ease',
    },
  ];

  return (
    <section className="w-full bg-[#FF501B] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-4xl mb-4">Features</p>
          <h2 className="text-6xl md:text-5xl font-weight-500">Complete All-in-one solution</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold mb-2">{feature.title}</div>
              <p className="text-lg ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
