"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMobOpen, setIsMobOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobOpen(false);

  return (
    <nav className="nav" style={{
      background: scrolled ? 'rgba(8,9,13,0.98)' : 'rgba(8,9,13,0.85)',
      borderBottomColor: scrolled ? '#1c2236' : 'transparent',
      zIndex: 1000
    }}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={closeMenu}>fima.dev<span className="cursor"></span></Link>
        <div className={`nav-links ${isMobOpen ? 'mob-open' : ''}`}>
          <Link href="/#expertise" onClick={closeMenu}>expertise</Link>
          <Link href="/#projects" onClick={closeMenu}>projects</Link>
          <Link href="/#research" onClick={closeMenu}>research</Link>
          <Link href="/blog" onClick={closeMenu}>blog</Link>
          <Link href="/#contact" onClick={closeMenu}>contact</Link>
        </div>
        <button className="mob-toggle" aria-label="Toggle menu" onClick={() => setIsMobOpen(!isMobOpen)}>
          {isMobOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
        <a href="https://wa.me/260770940863" target="_blank" rel="noopener" className="nav-cta">work_with_me()</a>
      </div>
    </nav>
  );
}
