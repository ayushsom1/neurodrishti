'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playingForward = true;
    let animationFrameId: number;

    const animateVideo = () => {
      if (!video) return;

      if (!playingForward) {
        if (video.currentTime <= 0.1) {
          playingForward = true;
          video.play();
        } else {
          video.currentTime -= 0.040; // ~30fps backward
          animationFrameId = requestAnimationFrame(animateVideo);
        }
      }
    };

    const handleEnded = () => {
      playingForward = false;
      video.pause();
      animateVideo();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-[100vh] object-cover opacity-70"
        >
          <source src="/assets/videos/Hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">


          {/* Main Heading */}
          <h1 className="text-white text-3xl font-bold mb-12 leading-tight tracking-wide">
           INTRODUCING THE FIRST MULTIMODAL AI SMART GLASSES FOR VISUALLY IMPAIRED
          </h1>
        </div>
      </div>


      {/* Scroll Indicator - Optional */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
    
        </>
  );
}
