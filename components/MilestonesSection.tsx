'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '100+', label: 'Users tested' },
  { value: '500+', label: 'Volunteers' },
  { value: '10+', label: 'Available languages' },
  { value: '1K+', label: 'Images Described' }
];

export default function MilestonesSection() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Card className="border-2 border-black rounded-lg">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-center">
              {/* Left Content */}
              <div className="space-y-4">
                <Badge variant="outline" className="border-black text-black font-bold text-sm px-4 py-2">
                  Milestones
                </Badge>
                <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-weight-500 leading-tight">
                  Everyday, we&apos;re making the world more accessible to more people
                </h2>
              </div>

              {/* Right Stats Grid */}
              <div className="grid grid-cols-2 gap-6 md:gap-8 ml-5">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-xl text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
