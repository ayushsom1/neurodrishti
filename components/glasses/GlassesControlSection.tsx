import Image from 'next/image';

export default function GlassesControlSection() {
  return (
    <section className="w-full bg-gray-50 relative h-[700px] md:h-[700px]">
      {/* Full-width background image */}
      <Image
        src="/assets/images/Glasses-3.jpg"
        alt="Control made simple - touchpad on glasses"
        fill
        className="object-cover"
      />

      {/* Overlaid text content - top left */}
      <div className="relative z-10 flex flex-col justify-start px-8 md:px-16 py-12 md:py-16 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-weight-400 mb-4 text-[#534B4B]">
          Control Made <br /> simple
        </h2>
        <p className="text-[#534B4B] md:text-2xl text-gray-700">
          With just a tap or swipe on the touchpad, switch modes, access features, and stay in command.
        </p>
      </div>
    </section>
  );
}
