import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Star, Building2 } from 'lucide-react';
import { MILESTONES_DATA } from '../data';

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-24 bg-brand-bg text-brand-text dark:text-white transition-colors duration-500 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <Star size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">ROADMAP</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Professional Journey & <br />
              <span className="text-accent">Career Milestones</span>
            </h2>
          </div>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm text-sm font-sans leading-relaxed">
            Collaborating with world-class product teams and startups since 2021 to ship resilient interactive products.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-3xl mx-auto mt-20">
          
          {/* Central Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/5 dark:bg-white/10 transform md:-translate-x-1/2 pointer-events-none" />
          
          {/* Animated Glowing line indicator */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent transform md:-translate-x-1/2 origin-top pointer-events-none"
          />

          <div className="space-y-12 md:space-y-16">
            {MILESTONES_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`milestone-${milestone.id}`}
                >
                  {/* Timeline circular node marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-accent group-hover:border-accent-hover z-10 shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>

                  {/* Left Column Spacer for large viewports */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Right Column: Visual card detail */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0"
                  >
                    <div className="p-6 bg-brand-card border border-brand-border rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                      
                      {/* Interactive edge overlay */}
                      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />

                      <div className="space-y-4">
                        
                        {/* Meta indicators */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-medium text-brand-dark-gray/40 dark:text-white/40">
                          <span className="flex items-center gap-1.5 text-accent font-semibold uppercase">
                            <Calendar size={12} />
                            {milestone.duration}
                          </span>
                          
                          <span className="flex items-center gap-1.5 uppercase">
                            <Building2 size={12} />
                            {milestone.company}
                          </span>
                        </div>

                        {/* Heading titles */}
                        <div className="space-y-1 text-left">
                          <h3 className="text-lg font-display font-extrabold text-brand-text dark:text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                            {milestone.role}
                          </h3>
                        </div>

                        {/* Paragraph list */}
                        <p className="text-xs text-brand-dark-gray/70 dark:text-white/50 leading-relaxed font-sans text-left">
                          {milestone.description}
                        </p>

                        {/* Milestones technology stack list */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border">
                          {milestone.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-black/[0.03] dark:bg-white/5 border border-brand-border rounded-full text-[9px] font-mono font-semibold text-brand-dark-gray/80 dark:text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
