'use client';

export default function NewsContent() {
  const newsImages = [
    '/assets/images/news/n1.png',
    '/assets/images/news/n2.png',
    '/assets/images/news/n3.png',
    '/assets/images/news/n4.png',
    '/assets/images/news/n5.png',
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...newsImages, ...newsImages];

  return (
    <section className="relative h-screen w-full bg-[#0A1628] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            News and Achievements
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
            Stay updated with the latest news and milestones from Ocular Glasses.
            Discover how our innovative technology is making a difference.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll hover:pause-animation">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`News ${(index % newsImages.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1628] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1628] to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 5 - 1.5rem * 5));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
