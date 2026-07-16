"use client";

import { useEffect } from 'react';

export default function RevealWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    }, { 
      threshold: 0.01, 
      rootMargin: '10% 0px 10% 0px' 
    });

    reveals.forEach((el) => observer.observe(el));

    // Force reveal all if they haven't appeared in 1.5 seconds
    const timer = setTimeout(() => {
      reveals.forEach(el => {
        if (!el.classList.contains('in')) {
          el.classList.add('in');
        }
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
