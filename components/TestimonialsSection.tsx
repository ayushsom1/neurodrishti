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
        <div className="text-center mb-12">
          <h3 className="text-3xl font-normal mb-2">Testimonials</h3>
          <h2 className="text-5xl md:text-5xl font-normal">
            Voices that inspire us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] w-[300px] rounded-3xl p-8 border border-black width-full"
            >
              {/* Name and Location */}
              <h4 className="text-3xl font-normal mb-1">
                {testimonial.name}
              </h4>
              <p className="text-2xl font-normal mb-6">
                {testimonial.location}
              </p>

              {/* Testimonial Text */}
              <p className="text-xl font-normal leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
