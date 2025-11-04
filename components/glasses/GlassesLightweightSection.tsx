import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function GlassesLightweightSection() {
  return (
    <section className="w-full bg-white space-y-8 my-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Text content */}
        <ScrollReveal direction="left" delay={100}>
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <h2 className="text-4xl md:text-7xl font-light mb-6 text-[#534B4B]">
              So light, you&apos;ll forget you&apos;re wearing them.
            </h2>
            <p className="text-2xl text-[#534B4B] mb-8">
              Balanced frames hug your facial contours. They feel almost part of you.
            </p>
            <div>
              <Link
                href="#"
                className="inline-block bg-black text-white px-6 py-3 rounded text-sm hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Right side - Image */}
        <ScrollReveal direction="right" delay={200}>
          <div className="relative h-[400px] md:h-full mx-2">
            <Image
              src="/assets/images/glasses2.png"
              alt="Lightweight glasses being held"
              fill
              className="object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
