import React, { useEffect, useRef } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedShowsSection from '@/components/home/FeaturedShowsSection';
import { featuredShows } from '@/data/homeData';

const Index = () => {
  // References for animations
  const featuresRef = useRef<HTMLDivElement>(null);

  // Add scroll animation observations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='flex flex-col gap-20 pb-24'>
      <HeroSection />

      <section className='w-full'>
        <div className='relative overflow-hidden bg-black'>
          <video
            className='h-[340px] md:h-[480px] lg:h-[560px] w-full object-cover pointer-events-none'
            src='/motion/mombasa%20malindi.mp4'
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList='nodownload nofullscreen noplaybackrate noremoteplayback'
          />
        </div>
      </section>

      <FeaturedShowsSection
        featuredShows={featuredShows}
        featuresRef={featuresRef}
      />
    </div>
  );
};

export default Index;
