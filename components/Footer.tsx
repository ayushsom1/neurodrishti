'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black to-amber-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-6">
          {/* Main Heading */}
          <h2 className="text-[#C5C4C4] text-3xl md:text-6xl lg:text-[100px] font-weight-400 leading-tight">
            Let&apos;s build something<br />great together
          </h2>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-white/80" />
            <a
              href="mailto:neurodrishti@gmail.com"
              className="text-white text-base md:text-2xl hover:text-white/80 transition-colors"
            >
              neurodrishti@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-10 pt-4">
            {/* X (Twitter) */}
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-15 h-15 text-white" />
              </Link>

            {/* Instagram */}
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-15 h-15 text-white" />
              </Link>

            {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/neuro-drishti" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-15 h-15 text-white" />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
