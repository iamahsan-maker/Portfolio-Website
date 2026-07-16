import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Github, ExternalLink, Library, BarChart2, Lightbulb, Compass, Zap } from 'lucide-react';
import { CASE_STUDY_BANNER } from '../data';

export default function CaseStudy() {
  const triggerSimulation = (label: string) => {
    alert(`Simulated Action: Launching ${label}...`);
  };

  return (
    <section
      id="case-study"
      className="py-24 bg-white dark:bg-[#080808] text-brand-text dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-16 text-center lg:text-left">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
            <Sparkles size={11} className="text-accent" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">FEATURED SPREAD</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Monolith Identity <span className="text-accent">Case Study</span>
          </h2>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-lg text-sm font-sans">
            An in-depth review of visual-identity and product modeling for Monolith Architectural Studio.
          </p>
        </div>

        {/* Big Full-Width Premium Image Screen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="relative w-full aspect-[21/9] md:aspect-[16/6] rounded-[2.5rem] overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-2xl mb-16 group"
        >
          <img
            src={CASE_STUDY_BANNER}
            alt="Monolith Identity Branding Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end md:justify-between text-white gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Category: ART DIRECTION & BRANDING</span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight">Monolith Studio Guidelines</h3>
            </div>
            
            {/* Dynamic visual tag */}
            <div className="px-4 py-2 bg-accent text-black rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 w-fit">
              <Zap size={12} className="animate-pulse" />
              <span>PROJECT OF YEAR • 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout for research details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Bento Column: Problem & Solution */}
          <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="p-8 bg-[#FAF9F5] dark:bg-[#121212] rounded-[2rem] border border-black/5 dark:border-white/5 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EAEAEA] dark:bg-white/5 flex items-center justify-center text-brand-dark-gray dark:text-white">
                  <Compass size={18} />
                </div>
                <h4 className="text-base font-display font-bold text-brand-text dark:text-white">01. The Problem</h4>
                <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-relaxed font-sans">
                  Monolith is a legendary geometric architectural boutique whose digital platform was completely outdated, failing to convert international investors and agency leads due to messy alignments and slow load layouts.
                </p>
              </div>

              {/* Solution */}
              <div className="p-8 bg-[#FAF9F5] dark:bg-[#121212] rounded-[2rem] border border-black/5 dark:border-white/5 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EAEAEA] dark:bg-white/5 flex items-center justify-center text-accent">
                  <Lightbulb size={18} />
                </div>
                <h4 className="text-base font-display font-bold text-brand-text dark:text-white">02. The Solution</h4>
                <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-relaxed font-sans">
                  Crafted a bold monochromatic identity guide paired with custom web layouts, combining oversized brutalist photography crops, high-contrast typography pairings, and clean spring-animations that loads in under 0.4 seconds.
                </p>
              </div>
            </div>

            {/* Research & Wireframes Bento */}
            <div className="p-8 bg-[#FAF9F5] dark:bg-[#121212] rounded-[2rem] border border-black/5 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="text-base font-display font-bold text-brand-text dark:text-white">03. Research & Wireframes</h4>
                <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-relaxed font-sans">
                  We started with extensive heatmapping analyses showing users skipped lengthy texts. This led to high-fidelity wireframes that emphasized asymmetrical whitespace and tactile grid previews over paragraphs.
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-accent uppercase tracking-wider">
                  <Library size={12} />
                  <span>3 Weeks discovery • 45 User Interviews</span>
                </div>
              </div>
              
              {/* Mock wireframe container */}
              <div className="border border-dashed border-black/10 dark:border-white/10 rounded-2xl p-4 space-y-3 bg-white/50 dark:bg-black/40 select-none">
                <div className="h-5 bg-black/5 dark:bg-white/5 rounded w-1/3" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 bg-accent/20 rounded border border-accent/20" />
                  <div className="h-14 bg-black/5 dark:bg-white/5 rounded" />
                  <div className="h-14 bg-black/5 dark:bg-white/5 rounded" />
                </div>
                <div className="h-3 bg-black/5 dark:bg-white/5 rounded w-full" />
              </div>
            </div>

          </div>

          {/* Right Bento Column: Results Metrics & CTA Buttons */}
          <div className="lg:col-span-4 p-8 bg-black text-white rounded-[2rem] border border-white/5 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                <BarChart2 size={18} />
              </div>
              <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">04. The Results</h4>
              <p className="text-xs text-white/50 font-sans leading-relaxed">
                The brand repositioning elevated Monolith's international inbound portfolio enquiries by more than double within the very first financial quarter.
              </p>
            </div>

            {/* Metrics stack */}
            <div className="space-y-4 py-4 border-y border-white/10 font-sans">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase text-white/40 tracking-widest">Inbound Leads</span>
                <span className="text-lg font-extrabold text-accent">+142%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase text-white/40 tracking-widest">Page Load Speeds</span>
                <span className="text-lg font-extrabold text-[#FFD76A]">0.4s (Vite optimized)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase text-white/40 tracking-widest">Awwwards Score</span>
                <span className="text-lg font-extrabold text-white">8.95 / 10</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => triggerSimulation('Visit Live Monolith Site')}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-accent text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-white transition-all duration-300 cursor-pointer"
              >
                <span>Visit Live Demo</span>
                <ExternalLink size={12} />
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => triggerSimulation('View Monolith on Behance')}
                  className="flex items-center justify-center space-x-1.5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full font-bold text-[10px] uppercase tracking-wider transition-colors duration-300 cursor-pointer"
                >
                  <span>Behance</span>
                </button>
                <button
                  onClick={() => triggerSimulation('View Monolith GitHub Codebase')}
                  className="flex items-center justify-center space-x-1.5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full font-bold text-[10px] uppercase tracking-wider transition-colors duration-300 cursor-pointer"
                >
                  <Github size={10} />
                  <span>GitHub</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
