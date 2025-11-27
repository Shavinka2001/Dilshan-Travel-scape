'use client';

import { useEffect, useRef } from 'react';
import { FaArrowRight, FaStar, FaPlay, FaAward, FaShieldAlt, FaClock } from 'react-icons/fa';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video properties for maximum compatibility
      video.muted = true;
      video.volume = 0;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      
      const attemptPlay = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.log('Video autoplay failed, setting up user interaction fallback:', error);
          
          // Enhanced fallback for user interaction
          const playOnInteraction = async () => {
            try {
              await video.play();
              console.log('Video started after user interaction');
              // Remove all event listeners after successful play
              document.removeEventListener('click', playOnInteraction);
              document.removeEventListener('touchstart', playOnInteraction);
              document.removeEventListener('keydown', playOnInteraction);
              document.removeEventListener('scroll', playOnInteraction);
            } catch (playError) {
              console.error('Failed to play video even after user interaction:', playError);
            }
          };
          
          // Add multiple interaction listeners
          document.addEventListener('click', playOnInteraction, { once: true });
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('keydown', playOnInteraction, { once: true });
          document.addEventListener('scroll', playOnInteraction, { once: true });
        }
      };

      // Handle video loading events
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded');
        attemptPlay();
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        if (video.paused) {
          attemptPlay();
        }
      };

      const handleLoadedData = () => {
        console.log('Video data loaded');
        attemptPlay();
      };

      // Add event listeners
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);

      // Immediate attempt if video is already ready
      if (video.readyState >= 2) {
        attemptPlay();
      }

      // Cleanup function
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);
  return (
    <section id="home" className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen w-full max-w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 video-background">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video load started')}
          onLoadedData={() => console.log('Video loaded data')}
          onCanPlay={() => console.log('Video can play')}
          onPlay={() => {
            console.log('Video started playing');
            const loadingDiv = document.getElementById('video-loading');
            if (loadingDiv) {
              loadingDiv.style.display = 'none';
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <source src="/video/hero.webm" type="video/webm" />
          {/* Fallback message */}
          Your browser does not support the video tag.
        </video>
        
        {/* Video Loading Indicator */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neutral/10 to-secondary/20" id="video-loading"></div>
        
        {/* Professional Video Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      <div className="w-full max-w-full h-full flex items-center justify-center relative z-10">
        <div className="w-full max-w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Centered Content */}
          <div className="text-white text-center w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-5xl overflow-hidden">


            {/* Main Heading */}
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4 md:mb-6">
                <span className="block text-white hero-title">
                  Explore the Unseen Beauty of
                </span>
                <span className="block text-secondary hero-title-accent mt-1 sm:mt-2">
                  Sri Lanka
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/95 hero-subtitle max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                Your trusted travel partner for an unforgettable island adventure with 
                <span className="text-secondary hero-brand"> Dilshan Travelscape</span>
              </p>
            </div>






          </div>


        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white hidden md:block">
        <div className="flex flex-col items-center group cursor-pointer">
          <span className="text-xs sm:text-sm mb-3 sm:mb-4 font-semibold tracking-wider uppercase opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            Explore More
          </span>
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/50 rounded-full flex justify-center group-hover:border-secondary transition-colors duration-300 backdrop-blur-sm bg-white/10">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-secondary rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
          <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-white/50 to-transparent mt-2 sm:mt-3"></div>
        </div>
      </div>
    </section>
  );
}