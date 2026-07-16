import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Globe, Instagram, Sparkles, Send, Award, Layers } from 'lucide-react';
import { MADISON_PORTRAIT } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-bg transition-colors duration-500"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/10 w-[35vw] h-[35vw] rounded-full bg-accent/5 dark:bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[40vw] h-[40vw] rounded-full bg-accent-secondary/5 dark:bg-accent-secondary/3 blur-[140px] pointer-events-none" />
      
      {/* Decorative dot grids */}
      <div className="absolute top-1/3 left-6 w-32 h-32 opacity-20 dark:opacity-10 bg-[radial-gradient(#111111_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography and Details */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-brand-card/80 border border-brand-border px-3 py-1.5 rounded-full w-fit shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-dark-gray/80 dark:text-white/80">
              Open For Internship Opportunities
            </span>
          </motion.div>

          {/* Large Title Header */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs font-mono text-accent uppercase tracking-[0.25em]"
            >
              FRONTEND DEVELOPER & WEB DESIGNER
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
              className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-[0.9] tracking-tighter text-brand-text dark:text-white"
            >
              Frontend <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-accent to-brand-text dark:from-white dark:via-accent dark:to-white">
                Developer &
              </span> <br />
              Web Designer.
            </motion.h1>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-brand-dark-gray dark:text-white/70 max-w-xl font-sans leading-relaxed"
          >
            Hi, I'm <strong className="font-semibold text-brand-text dark:text-white">Ahsan Haider</strong>. I build highly responsive web pages, interactive design wireframes, and digital projects that combine <strong className="text-accent">visual elegance</strong> with solid front-end code.
          </motion.p>

          {/* Social Connect Group */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-4 text-brand-dark-gray/60 dark:text-white/50"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Connect:</span>
            <div className="flex items-center space-x-3">
              {[
                { icon: <Github size={18} />, href: 'https://github.com' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
                { icon: <Globe size={18} />, href: 'https://be.net/ahsanhaider5' },
                { icon: <Send size={18} />, href: 'mailto:ahsanhaider406@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-brand-border hover:border-accent hover:text-accent dark:hover:border-accent hover:scale-110 active:scale-95 transition-all duration-300 bg-brand-card/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollTo('portfolio')}
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:bg-accent dark:hover:bg-accent hover:text-black dark:hover:text-black hover:scale-105 active:scale-95 cursor-pointer"
            >
              Explore Portfolio
              <ArrowRight size={14} className="ml-2.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-card text-brand-text dark:text-white font-semibold text-xs uppercase tracking-wider border border-brand-border transition-all duration-300 shadow-sm hover:border-accent hover:text-accent hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get In Touch
              <Send size={12} className="ml-2.5 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Stats Segment */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-6 border-t border-brand-border grid grid-cols-3 gap-4"
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '150+', label: 'Completed Projects' },
              { value: '50+', label: 'Happy Clients' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl md:text-3xl font-display font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-brand-dark-gray/60 dark:text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Side: Portrait inside rounded container & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.3 }}
            className="relative w-full max-w-[380px] lg:max-w-none aspect-square md:aspect-[4/5] rounded-[2rem] p-4 bg-accent/20 dark:bg-accent/10 border-2 border-accent/20 dark:border-accent/10 flex items-center justify-center overflow-visible group cursor-grab active:cursor-grabbing"
          >
            
            {/* Ambient Back Glow inside border */}
            <div className="absolute inset-4 rounded-[1.75rem] bg-gradient-to-tr from-accent/40 via-transparent to-accent-secondary/30 blur-md pointer-events-none" />

             {/* Main Portrait Image Container */}
            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-brand-card border border-brand-border shadow-2xl">
              <motion.img
                src={MADISON_PORTRAIT}
                alt="Ahsan Haider Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                initial={{ filter: 'grayscale(100%)' }}
                animate={{ filter: 'grayscale(0%)' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Image Inner Shadows for cinematic style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Project Preview Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-brand-card p-4 rounded-2xl shadow-xl border border-brand-border flex items-center space-x-3 max-w-[190px] select-none pointer-events-none"
            >
              <div className="p-2.5 rounded-xl bg-accent text-black shadow-md">
                <Layers size={18} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">Latest Craft</div>
                <div className="text-xs font-bold text-brand-text dark:text-white leading-tight">University Portal UI</div>
              </div>
            </motion.div>

            {/* Floating Card 2: Award Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -left-8 bg-brand-card px-4 py-3 rounded-2xl shadow-xl border border-brand-border flex items-center space-x-3 select-none pointer-events-none"
            >
              <div className="p-2.5 rounded-xl bg-accent-secondary text-black shadow-md">
                <Award size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-brand-text dark:text-white">ADP ITM</div>
                <div className="text-[10px] font-mono text-brand-dark-gray/60 dark:text-white/40">Riphah Lahore</div>
              </div>
            </motion.div>

            {/* Animated orbit circles */}
            <svg className="absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-black/5 dark:stroke-white/5 fill-none stroke-[1]"
                strokeDasharray="4, 4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="49%"
                className="stroke-accent/10 dark:stroke-accent/5 fill-none stroke-[1.5]"
              />
            </svg>
            
          </motion.div>
        </div>
        
      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer select-none" onClick={() => handleScrollTo('about')}>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-dark-gray/40 dark:text-white/30 mb-2">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-black/20 dark:border-white/20 p-1 flex justify-center"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
