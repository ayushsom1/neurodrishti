import Image from 'next/image';

export default function GlassesSpecsSection() {
  return (
    <section className="w-full bg-black text-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left side - Rotated Image */}
        <div className="relative bg-gray-900 overflow-hidden">
          <Image
            src="/assets/images/glasses-4.jpg"
            alt="NeuroDrishti Glasses Side View"
            fill
            className="object-cover -rotate-90"
          />
        </div>

        {/* Right side - Specifications */}
        <div className="z-10 flex flex-col justify-center px-8 md:px-16 py-12 z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-12 mx-auto">Specifications</h2>

          <div className="space-y-10">
            {/* Camera */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Camera</h3>
              <p className="text-white">An 8 MP camera that captures everything.</p>
            </div>

            {/* Battery */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Battery</h3>
              <p className="text-gray-400">Can run 12 hours per day with magnetic charging.</p>
            </div>

            {/* Lightweight */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Lightweight</h3>
              <p className="text-gray-400">Weighs only 34 grams.</p>
            </div>

            {/* Audio */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Audio</h3>
              <p className="text-gray-400">
                Delivers superior audio quality with Active Noise Cancellation.
              </p>
            </div>

            {/* Wifi & Bluetooth */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Wifi & Bluetooth</h3>
              <p className="text-gray-400">Keeps you connected at all times</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
