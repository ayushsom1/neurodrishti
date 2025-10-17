'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const words = "INTRODUCING THE FIRST MULTIMODAL AI SMART GLASSES FOR VISUALLY IMPAIRED".split(" ");

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
        <div className="max-w-full mx-auto text-center">


          {/* Main Heading */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 leading-tight tracking-wide px-4 font-[family-name:var(--font-inria-sans)] whitespace-nowrap overflow-x-auto">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block animate-[slideInWord_1s_ease-out_forwards] opacity-0"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {word}{index < words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>
        </div>
      </div>


      
    </section>
    
        </>
  );
}
