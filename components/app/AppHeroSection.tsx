'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AppHeroSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] lg:min-h-screen">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-black text-5xl md:text-6xl font-weight-700 leading-tight">
              NeuroDrishti App
            </h1>

            {/* Subheading */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-weight-700 text-black">
              Simple. Seamless. Smart.
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-2xl leading-relaxed max-w-3xl">
              The NeuroDrishti App connects seamlessly with our smart glasses, allowing effortless switching between modes for different environments. With multi-language support and a simple, intuitive interface, controlling your glasses has never been easier.
            </p>

            {/* Download Button */}
            <div className="pt-4">
              <Button asChild className="px-8 py-6 bg-black text-white text-xl  font-medium hover:bg-gray-800 ">
                <Link href="https://play.google.com/store/apps/details?id=com.nd.objectnew" target="_blank" rel="noopener noreferrer">
                  Download for Android
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <Card className="overflow-hidden border-none shadow-none bg-transparent">
              <div className="relative">
                <img
                  src="/assets/images/app-hero.png"
                  alt="NeuroDrishti App Interface"
                  className="w-full max-w-md h-auto object-contain scale-160"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
