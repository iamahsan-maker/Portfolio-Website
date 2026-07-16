import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  }, []);

  // Auto-slide transition effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-brand-bg text-brand-text dark:text-white transition-colors duration-500 overflow-hidden border-t border-brand-border relative"
    >
      {/* Soft color glowing backdrops */}
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-10 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
            <Sparkles size={11} className="text-accent" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">REVIEWS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Trusted By <span className="text-accent">Visionary Founders</span>
          </h2>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm mx-auto text-xs font-sans">
            Hear from corporate directors, VP leads, and venture founders about their digital metrics growth.
          </p>
        </div>

        {/* Carousel Content Container */}
        <div className="relative min-h-[340px] md:min-h-[280px] flex items-center justify-center">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Glassmorphism Card */}
              <div className="p-8 md:p-12 bg-brand-card/60 backdrop-blur-lg border border-brand-border rounded-[2.5rem] shadow-xl flex flex-col items-center space-y-6 max-w-2xl mx-auto">
                
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquareQuote size={24} />
                </div>

                {/* Rating star panel */}
                <div className="flex items-center space-x-1 text-accent">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>

                {/* Feedback quote */}
                <blockquote className="text-sm md:text-base text-brand-dark-gray dark:text-white/85 font-medium leading-relaxed italic max-w-xl">
                  "{activeTestimonial.feedback}"
                </blockquote>

                {/* Profile detail details */}
                <div className="flex items-center space-x-4 pt-4 border-t border-brand-border w-full justify-center">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-accent shadow-sm"
                  />
                  <div className="text-left">
                    <div className="text-sm font-bold text-brand-text dark:text-white">{activeTestimonial.name}</div>
                    <div className="text-[10px] font-mono text-brand-dark-gray/60 dark:text-white/40 uppercase">
                      {activeTestimonial.role} • {activeTestimonial.company}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Manual Slides Controls Rail */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-brand-card border border-brand-border text-brand-dark-gray dark:text-white hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Previous review slide"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-accent w-6' : 'bg-black/10 dark:bg-white/15'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-brand-card border border-brand-border text-brand-dark-gray dark:text-white hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Next review slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
