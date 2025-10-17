'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

export default function AppHeroSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh] lg:min-h-screen">
          {/* Left Content */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-4 md:space-y-6">
              {/* Main Heading */}
              <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-weight-700 leading-tight">
                NeuroDrishti App
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-weight-700 text-black">
                Simple. Seamless. Smart.
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                The NeuroDrishti App connects seamlessly with our smart glasses, allowing effortless switching between modes for different environments. With multi-language support and a simple, intuitive interface, controlling your glasses has never been easier.
              </p>

              {/* Download Button */}
              <div className="pt-2 md:pt-4">
                <Button asChild className="px-6 sm:px-8 py-4 sm:py-6 bg-black text-white text-base sm:text-lg md:text-xl font-medium hover:bg-gray-800">
                  <Link href="https://play.google.com/store/apps/details?id=com.nd.objectnew" target="_blank" rel="noopener noreferrer">
                    Download for Android
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Image - Phone Mockup */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <Card className="overflow-hidden border-none shadow-none bg-transparent">
                <div className="relative">
                  <img
                    src="/assets/images/app-hero.png"
                    alt="NeuroDrishti App Interface"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain scale-150 sm:scale-160"
                  />
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
