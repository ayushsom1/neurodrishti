'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'What are Neurodrishti Smartglasses?',
    answer: 'Neurodrishti Smartglasses are AI-powered assistive glasses designed to help visually impaired individuals understand their surroundings. The device uses advanced computer vision and voice assistance to describe objects, read text, detect human emotions, and enable safe navigation.'
  },
  {
    question: 'How do the glasses assist visually impaired users?',
    answer: 'The glasses work in multiple modes such as Environment Understanding, Text Reading, Facial & Emotion Recognition, Navigation Mode, and Human Behavior Understanding. Through audio feedback, users can hear real-time descriptions of their surroundings, read printed or handwritten text, and even identify familiar people.'
  },
  {
    question: 'What technology powers Neurodrishti Smartglasses?',
    answer: 'Our glasses integrate cutting-edge technologies including AI-based computer vision, OCR (Optical Character Recognition), and multimodal data processing. They also feature a specially developed photodiode camera sensor for high reading accuracy (up to 97–98%) and multilingual support.'
  },
  {
    question: 'Can the device be used independently or does it need a smartphone?',
    answer: 'Neurodrishti Smartglasses can operate both independently and with smartphone connectivity. Through Bluetooth and Wi-Fi integration, the companion app enables real-time data synchronization, voice updates, and over-the-air software improvements.'
  },
  {
    question: 'How are Neurodrishti Smartglasses different from Ray-Ban Smartglasses?',
    answer: 'While Ray-Ban Smartglasses focus mainly on lifestyle features such as photo capturing, calling, and music streaming, Neurodrishti Smartglasses are designed with a social impact focus — empowering visually impaired users. They integrate AI and OCR for environment understanding, text reading, emotion recognition, and navigation support, making them a specialized assistive technology product rather than a fashion or entertainment device.'
  },
  {
    question: 'When will Neurodrishti Smartglasses be available in the market?',
    answer: 'The prototype has already been developed and tested successfully in collaboration with ALIMCO and IIT Delhi. The team is now working on making the product market-ready with support from government and research institutions. Commercial availability will follow after MVP testing and certification.'
  }
];

export default function FAQSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="space-y-8 md:space-y-12">
        
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black">
              Frequently Asked Questions (FAQ)
            </h2>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <ScrollReveal direction="left" delay={200}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-300 rounded-md px-4">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>

            {/* Right Column */}
            <ScrollReveal direction="right" delay={200}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(3, 6).map((faq, index) => (
                  <AccordionItem key={index + 3} value={`item-${index + 3}`} className="border border-gray-300 rounded-md px-4">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
