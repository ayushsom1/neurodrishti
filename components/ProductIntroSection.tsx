'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProductIntroSection() {
  return (
    <section className="relative w-full bg-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-6">


              {/* Main Heading */}
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-weight-500 leading-tight">
                NeuroDrishti<br />Smartglasses
              </h2>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl md:text-3xl font-weight-500 text-gray-800">
                Your Vision Companion.
              </p>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-weight-500 leading-relaxed max-w-lg">
                Wear NeuroDrishti smart glasses to confidently navigate and explore the world with independence and ease.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeaWuSjh3ujG79BTLUjWYdp2dfoQ0k1HlxBy6L5hFRIfIeuQw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    Pre-Book Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-black text-black font-medium rounded hover:bg-black hover:text-white">
                  Discover more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Image with Card */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/assets/images/1B.png"
                      alt="NeuroDrishti Smart Glasses"
                      className="w-full h-auto object-cover"
                    />
                  </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
