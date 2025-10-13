'use client';

export default function ProductStyleSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 py-20 lg:py-0">
      <div className=" mx-auto px-6 lg:px-12">
        <div className="min-h-[80vh] lg:min-h-screen flex items-center justify-center">
            <div className="relative p-8 ">
              {/* Text Overlay */}
              <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-sm">
                  Made to fit your<br />everyday style
                </h2>
              </div>

              {/* Glasses Image */}
              <div className="relative">
                <img
                  src="/assets/images/1C.png"
                  alt="NeuroDrishti Glasses Side View"
                  className="w-full h-auto "
                />
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
