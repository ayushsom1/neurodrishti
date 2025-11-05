import ScrollReveal from '@/components/ScrollReveal';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sanjay Mehta",
      location: "New Delhi",
      text: "Neurodrishti lets me walk around independently. The voice guidance is clear and fast—it's like having a personal assistant."
    },
    {
      name: "Neha Sharma",
      location: "Lucknow",
      text: "As a visually impaired teacher, Neurodrishti reads notes instantly. It makes teaching easier, helping me work confidently and independently."
    },
    {
      name: "Ravi Kumar",
      location: "Noida",
      text: "As a visually impaired teacher, Neurodrishti reads notes instantly. It makes teaching easier, helping me work confidently and independently."
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-normal mb-2">Testimonials</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal">
              Voices that inspire us
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-stretch">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div
                className="bg-[#D9D9D9] w-full max-w-[300px] h-full rounded-3xl p-6 md:p-8 border border-black flex flex-col"
              >
                {/* Name and Location */}
                <h4 className="text-2xl md:text-3xl font-normal mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-xl md:text-2xl font-normal mb-4 md:mb-6">
                  {testimonial.location}
                </p>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl font-normal leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
