import Image from 'next/image';

export default function GlassesHeroSection() {
  return (
    <section className="relative w-full h-[100vh] bg-gray-00">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/glasses-1.png"
          alt="NeuroDrishti Smart Glasses"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      {/* Matte black glass effect layer */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div
        className="absolute top-20 right-10 z-20 flex flex-col items-end text-right px-6 py-4 rounded-xl"
      >
        <h1
          className="mb-1"
          style={{
        fontFamily: 'Instrument Sans, sans-serif',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '41px',
        lineHeight: '60px',
        letterSpacing: '-4%',
        textAlign: 'right',
        color: '#000',
          }}
        >
          NeuroDrishti Smart Glasses
        </h1>
        <p
          style={{
        fontFamily: 'Instrument Sans, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '41px',
        lineHeight: '60px',
        letterSpacing: '-4%',
        textAlign: 'right', 
          }}
          className="text-gray-600"
        >
          Your Everyday assistive support.
        </p>
      </div>
    </section>
  );
}

