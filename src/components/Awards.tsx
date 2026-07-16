import React from 'react';
import { motion } from 'motion/react';
import { Award, Medal, Flag, Sparkles } from 'lucide-react';
import { AWARDS_DATA } from '../data';

export default function Awards() {
  return (
    <section
      id="awards"
      className="py-24 bg-brand-bg text-brand-text dark:text-white transition-colors duration-500 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <Medal size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">ACCOLADES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Selected Awards & <br />
              <span className="text-accent">Industry Achievements</span>
            </h2>
          </div>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm text-sm font-sans leading-relaxed">
            Honored with prestigious awards from digital publication systems recognizing engineering excellence and creative courage.
          </p>
        </div>

        {/* Awards List Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AWARDS_DATA.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.05 }}
              className="p-6 md:p-8 bg-brand-card border border-brand-border rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
              id={`award-${award.id}`}
            >
              <div className="flex items-center space-x-4">
                {/* Visual outline medal logo */}
                <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/5 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  <Award size={20} />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-sm font-display font-bold text-brand-text dark:text-white group-hover:text-accent transition-colors duration-300">
                    {award.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-dark-gray/50 dark:text-white/40 uppercase">
                    <span>{award.organization}</span>
                    <span>•</span>
                    <span>{award.year}</span>
                  </div>
                </div>
              </div>

              {/* Award count multiplier */}
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-display font-black text-accent tracking-tighter uppercase">
                  {award.count}
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-dark-gray/40 dark:text-white/30 block">Times</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates carousel placeholder/graphic */}
        <div className="mt-16 p-8 md:p-10 bg-brand-card border border-brand-border rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-left">
            <div className="flex items-center space-x-2 text-xs font-mono text-accent uppercase font-bold tracking-widest">
              <Flag size={14} />
              <span>Certified Professional credentials</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-black tracking-tight leading-tight">
              Certified Interactive Developer & Accessibility Lead
            </h3>
            <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-relaxed font-sans">
              Fully accredited in Advanced Figma Systems (Fig-AC), Google UX Specialist Standard, W3C Web Content Accessibility (WCAG 2.1) Guidelines, and Modern React State Engineering.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-4">
            <span className="px-5 py-3 rounded-2xl border border-dashed border-black/15 dark:border-white/10 text-xs font-mono text-brand-dark-gray/50 dark:text-white/40 block">
              ID: FigAC-98440-S
            </span>
            <span className="px-5 py-3 bg-accent text-black font-bold text-xs font-mono uppercase tracking-widest rounded-2xl shadow-md">
              VALID
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
