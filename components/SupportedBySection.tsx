'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const supportedLogos = [
  '/assets/icons/supported/s1.png',
  '/assets/icons/supported/s2.jpg',
  '/assets/icons/supported/s3.jpg',
  '/assets/icons/supported/s4.png',
  '/assets/icons/supported/s5.png',
  '/assets/icons/supported/s6.png',
  '/assets/icons/supported/s7.png',
  '/assets/icons/supported/s8.jpg',
];

export default function SupportedBySection() {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Title animation - fade up
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Logo item animation - scale and fade
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h2
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black"
            variants={titleVariants}
          >
            Supported by
          </motion.h2>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center"
            variants={containerVariants}
          >
            {supportedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={logo}
                  alt={`Supported by partner ${index + 1}`}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ filter: 'grayscale(100%)' }}
                  whileHover={{
                    filter: 'grayscale(0%)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
