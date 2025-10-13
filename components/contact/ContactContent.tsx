'use client';

export default function ContactContent() {
  return (
    <section className="relative h-screen w-full bg-[#0A1628] py-25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Book a meeting
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Our solution will help you from start to finish
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Dotted Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dotted border-gray-500 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#0A1628] relative z-10">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Select a Date</h3>
                <p className="text-gray-400">
                  Select Date according to your schedule
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#0A1628] relative z-10">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Enter Your Details</h3>
                <p className="text-gray-400">
                  Put in your details for confirmation
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#0A1628] relative z-10">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Submit</h3>
                <p className="text-gray-400">
                  And we will contact you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-white text-[#0A1628] font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
