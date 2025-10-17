'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';

const stats = [
  { value: '100+', label: 'Users tested' },
  { value: '500+', label: 'Volunteers' },
  { value: '10+', label: 'Available languages' },
  { value: '1K+', label: 'Images Described' }
];

export default function MilestonesSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal direction="up" delay={100}>
          <Card className="border-2 border-black rounded-lg">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left Content */}
                <ScrollReveal direction="left" delay={200}>
                  <div className="space-y-4">
                    <Badge variant="outline" className="border-black text-black font-bold text-xs sm:text-sm px-3 sm:px-4 py-2">
                      Milestones
                    </Badge>
                    <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-weight-500 leading-tight">
                      Everyday, we&apos;re making the world more accessible to more people
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Right Stats Grid */}
                <ScrollReveal direction="right" delay={300}>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:ml-5">
                    {stats.map((stat, index) => (
                      <div key={index} className="space-y-1 sm:space-y-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-700">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
