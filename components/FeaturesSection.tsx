'use client';

import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    title: 'Read',
    subtitle: 'Any text, Anywhere',
    description: 'With Reading Mode, MusicChord glasses make reading effortless. From handwritten notes and newspapers to books, magazines, or signboards, the glasses instantly read them out loud in a clear voice. Just wear the glasses, look at the text, and hear it—making reading simple, independent, and accessible.',
    image: '/assets/images/feature-read.jpg',
    video: '/assets/videos/feature1.mp4'
  },
  {
    title: 'Identify',
    subtitle: 'Your loved ones',
    description: 'With Person Identification Mode, NeuroDrishti glasses help you recognize the people around you. The glasses can identify familiar faces, tell you who is nearby, and even share their expressions. Just wear the glasses, and get clear voice feedback—making social interactions easier, confident, and independent.',
    image: '/assets/images/feature-identify.jpg',
    video: '/assets/videos/feature2.mp4'
  },
  {
    title: 'Navigate',
    subtitle: 'Around easily',
    description: 'With Navigation Mode, NeuroDrishti glasses guide you safely through your surroundings. The glasses detect objects, describe the environment, and alert you about obstacles in your path. Just wear the glasses and listen as they provide clear directions—helping you move around confidently, independently, and with ease.',
    image: '/assets/images/feature-navigate.jpg',
    video: '/assets/videos/feature3.mp4'
  },
  {
    title: 'Your',
    subtitle: 'Smart Companion',
    description: 'With Gemini AI Assistant, NeuroDrishti becomes your intelligent companion. Simply ask a question, give a command, or seek guidance—Gemini responds instantly with clear, helpful answers. From solving doubts to assisting with daily tasks, it\'s always ready to support you—making your experience simpler, easier, and more connected.',
    image: '/assets/images/feature-companion.png'
  },
  {
    title: 'Connect',
    subtitle: 'With Volunteers',
    description: 'With Video Calling, NeuroDrishti connects you directly to caring volunteers. Whenever you need guidance while navigating, making a sick decisions, or seeking real-time support, a volunteer is just a call away. Get human assistance when you need it most—making every journey easier, and more confident.',
    image: '/assets/images/feature-connect.png'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={index} direction="up" delay={100}>
                <div className="space-y-6 md:space-y-8">
                  {/* Feature Heading */}
                  <ScrollReveal direction="fade" delay={200}>
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black">
                        {feature.title}
                      </h2>
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        {feature.subtitle}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Content and Image Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    {isEven ? (
                      <>
                        {/* Image/Video on Left */}
                        <ScrollReveal direction="left" delay={300}>
                          <div>
                            {feature.video ? (
                              <video
                                src={feature.video}
                                muted
                                loop
                                playsInline
                                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                  e.currentTarget.pause();
                                  e.currentTarget.currentTime = 0;
                                }}
                              />
                            ) : (
                              <img
                                src={feature.image}
                                alt={`${feature.title} - ${feature.subtitle}`}
                                className="w-full h-auto object-cover rounded-lg"
                              />
                            )}
                          </div>
                        </ScrollReveal>

                        {/* Text on Right */}
                        <ScrollReveal direction="right" delay={300}>
                          <div>
                            <Card className="border-none shadow-none bg-transparent">
                              <CardContent className="p-0">
                                <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                  {feature.description}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </ScrollReveal>
                      </>
                    ) : (
                      <>
                        {/* Text on Left */}
                        <ScrollReveal direction="left" delay={300}>
                          <div>
                            <Card className="border-none shadow-none bg-transparent">
                              <CardContent className="p-0">
                                <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                  {feature.description}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </ScrollReveal>

                        {/* Image/Video on Right */}
                        <ScrollReveal direction="right" delay={300}>
                          <div>
                            {feature.video ? (
                              <video
                                src={feature.video}
                                muted
                                loop
                                playsInline
                                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                  e.currentTarget.pause();
                                  e.currentTarget.currentTime = 0;
                                }}
                              />
                            ) : (
                              <img
                                src={feature.image}
                                alt={`${feature.title} - ${feature.subtitle}`}
                                className="w-full h-auto object-cover rounded-lg"
                              />
                            )}
                          </div>
                        </ScrollReveal>
                      </>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
