'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import StoryIntro from '@/components/StoryIntro';
import ComicStoryGrid from '@/components/ComicStoryGrid';
import MotivationSection from '@/components/MotivationSection';
import ClickEffect from '@/components/ClickEffect';
import QuizSection from '@/components/QuizSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const panels = document.querySelectorAll('.panel');
    panels.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <ClickEffect />
      <HeroSection />
      <StoryIntro />
      <ComicStoryGrid />
      <MotivationSection />
      <QuizSection />
      <FooterSection />
    </main>
  );
}
