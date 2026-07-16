import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

// Sub-components import
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sync theme with HTML node classList
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle premium countdown loading screen
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.floor(Math.random() * 15) + 5;
          const next = prev + increment;
          return next > 100 ? 100 : next;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      const delay = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(delay);
    }
  }, [progress]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* Pre-loading Splash Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 bg-[#141311] text-[#FAF9F5] flex flex-col justify-between p-8 md:p-12 select-none"
          >
            {/* Header branding */}
            <div className="flex items-center space-x-2">
              <span className="font-display font-black text-2xl tracking-tighter">Haiders</span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>

            {/* Core percentage container */}
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center space-x-2 text-accent">
                <Compass size={16} className="animate-spin-slow" />
                <span className="text-xs font-mono tracking-widest uppercase">Initializing cinematic portfolio...</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter tabular-nums leading-none">
                {progress}%
              </h1>
            </div>

            {/* Quote details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                © {new Date().getFullYear()} HAIDERS • ART DIRECTION & DEVELOPMENT
              </span>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1">
                <Sparkles size={10} />
                Est. San Francisco, California
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Canvas App */}
      <div className={`min-h-screen bg-brand-bg text-brand-text dark:text-white font-sans transition-colors duration-500 overflow-x-hidden relative`}>
        
        {/* Immersive cursor and top scrolling indicator */}
        <CustomCursor />
        <ScrollProgress />

        {/* Sticky top menu */}
        <Navigation currentTheme={theme} toggleTheme={toggleTheme} />

        {/* Cinematic One-Page scrolls layout */}
        <main>
          
          {/* 1. Hero Entrance */}
          <Hero />

          {/* Infinite Marquee 1 */}
          <Marquee text={['UI Design', 'Tactile Motion', 'Figma Systems', 'React Architect', 'Art Direction']} speed={30} />

          {/* 2. Story / About Card */}
          <About />

          {/* 3. Skill Matrices */}
          <Skills />

          {/* 4. Services Catalog */}
          <Services />

          {/* Infinite Marquee 2 (Reversed direction) */}
          <Marquee text={['Award Nominated', 'Clean Code Guidelines', 'Luxury Branding', 'User Centered Designs', 'Vite Speed Optimized']} speed={35} reverse={true} />

          {/* 5. Custom filtered projects grid */}
          <Portfolio />

          {/* 6. In-depth Case study */}
          <CaseStudy />

          {/* 7. Connected timelines */}
          <Timeline />

          {/* 8. Carousel reviews */}
          <Testimonials />

          {/* 9. Achievements medals */}
          <Awards />

          {/* 10. Editorial thought listings */}
          <Blog />

          {/* 11. Coords details & validate inputs */}
          <Contact />

        </main>

        {/* Footer block */}
        <Footer />

      </div>
    </>
  );
}
