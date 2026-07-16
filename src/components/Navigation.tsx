import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ currentTheme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(href.substring(1));
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-brand-card/95 shadow-md backdrop-blur-md border-b border-brand-border'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 font-display font-black text-2xl md:text-3xl tracking-tighter text-brand-text dark:text-white"
        >
          <span>Haiders</span>
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
        </a>

        {/* Desktop Menu Center */}
        <nav className="hidden lg:flex items-center space-x-1 bg-brand-bg px-2 py-1.5 rounded-full border border-brand-border">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-black dark:text-black font-bold'
                    : 'text-brand-dark-gray/70 dark:text-white/70 hover:text-black dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA and Actions Right */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-brand-bg border border-brand-border text-brand-dark-gray dark:text-white hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-all duration-300 shadow-sm"
            aria-label="Toggle Theme Mode"
            id="theme-toggler-btn"
          >
            {currentTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-semibold text-xs uppercase tracking-wider text-white bg-black dark:text-black dark:bg-white rounded-full transition-transform duration-300 shadow-md hover:scale-105 active:scale-95"
            id="nav-talk-cta"
          >
            <span className="absolute inset-0 w-full h-full bg-accent transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-black transition-colors duration-300">
              Let's Talk <Sparkles size={12} className="text-accent dark:text-black group-hover:text-black" />
            </span>
          </a>
        </div>

        {/* Mobile Control Interface */}
        <div className="flex items-center lg:hidden space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-brand-bg text-brand-text dark:text-white border border-brand-border"
            aria-label="Toggle Theme"
          >
            {currentTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-brand-bg text-brand-text dark:text-white border border-brand-border"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-brand-card border-b border-brand-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-bold uppercase tracking-wider py-2 border-b border-brand-border transition-colors duration-300 ${
                      isActive ? 'text-accent pl-2 border-l-2 border-l-accent' : 'text-brand-dark-gray dark:text-white/80'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center bg-accent text-black font-bold uppercase text-xs tracking-wider py-3 rounded shadow"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
