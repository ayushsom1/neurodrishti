'use client';

export default function ActionSection() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-8">
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-normal text-black">
            Watch NeuroDrishti in <span className="font-bold">ACTION</span>
          </h2>

          {/* Video/Image Card */}
          
              <video
                className="w-full h-auto rounded-md"
                controls
                preload="metadata"
              >
                <source src="/assets/videos/Product video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        </div>
      </div>
    </section>
  );
}
