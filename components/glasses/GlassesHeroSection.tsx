'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function GlassesHeroSection() {
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
    <section className="relative w-full h-[100vh] bg-gray-00 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/assets/videos/apphero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Matte black glass effect layer */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <ScrollReveal direction="right" delay={100}>
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 z-20 flex flex-col items-center md:items-end text-center md:text-right px-6 py-4 rounded-xl w-auto max-w-md md:max-w-2xl" >
          <h1
            className="mb-1 text-[22px] md:text-[41px] leading-[40px] md:leading-[60px]"
            style={{
          fontFamily: 'Instrument Sans, sans-serif',
          fontWeight: 500,
          fontStyle: 'normal',
          letterSpacing: '-4%',
          color: '#000',
            }}
          >
            NeuroDrishti Smart Glasses
          </h1>
          <p
            className="text-gray-600 text-[20px] md:text-[41px] leading-[40px] md:leading-[60px]"
            style={{
          fontFamily: 'Instrument Sans, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          letterSpacing: '-4%',
            }}
          >
            Your Everyday assistive support.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}



