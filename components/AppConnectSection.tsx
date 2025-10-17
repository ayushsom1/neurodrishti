'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AppConnectSection() {
  return (
    <section className="relative w-full bg-[#FFEDED] py-12 md:py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[80vh] lg:min-h-screen">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Connect seamlessly<br />with Neurodrishti App
            </h2>

            {/* Badge */}
            <Badge variant="outline" className="border-black text-black text-xs sm:text-sm px-3 sm:px-4 py-2">
              Available on Google Playstore
            </Badge>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg">
              A simple interface designed to give you smarter, effortless control of your glasses.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className=" px-8 py-3 bg-black text-white border-2 font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black">
                <Link href="https://play.google.com/store/apps/details?id=com.nd.objectnew" target="_blank" rel="noopener noreferrer">
                  Download Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white">
                Discover more
              </Button>
            </div>
          </div>

          {/* Right Image - Phone Mockup */}
          <div className="relative flex justify-center">
            <Card className="overflow-hidden border-none shadow-none bg-transparent">
              <div className="relative">
                <img
                  src="/assets/images/1D.png"
                  alt="Neurodrishti App Interface"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl scale-150"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
