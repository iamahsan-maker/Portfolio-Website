import React from 'react';
import { motion } from 'motion/react';
import {
  LayoutGrid,
  Compass,
  Code,
  Wind,
  Zap,
  Palette,
  Smartphone,
  Layers,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { SKILLS_DATA } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid size={18} />,
  Compass: <Compass size={18} />,
  Code: <Code size={18} />,
  Wind: <Wind size={18} />,
  Zap: <Zap size={18} />,
  Palette: <Palette size={18} />,
  Smartphone: <Smartphone size={18} />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-brand-bg transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <Trophy size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">PROFICIENCIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-brand-text dark:text-white">
              Superpowers & <br className="hidden sm:inline" />
              <span className="text-accent">Software Expertise</span>
            </h2>
          </div>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm text-sm font-sans leading-relaxed">
            Proficiency scores derived from years of physical product shipping, design system modeling, and full-scale web launches.
          </p>
        </div>

        {/* Card Grid with Framer Motion stagger effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS_DATA.map((skill) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
              }}
              className="group relative p-6 bg-brand-card border border-brand-border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              id={`skill-card-${skill.id}`}
            >
              {/* Card top border glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-accent rounded-t-3xl transition-colors duration-300" />

              <div className="space-y-4">
                
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-2xl bg-black/[0.03] dark:bg-white/5 flex items-center justify-center text-brand-text dark:text-white group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  {iconMap[skill.iconName] || <Layers size={18} />}
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-brand-text dark:text-white group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-accent">
                      {skill.percentage}%
                    </span>
                  </div>
                  <p className="text-xs text-brand-dark-gray/60 dark:text-white/40 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-1 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Small aesthetic summary pill below cards */}
        <div className="mt-12 flex flex-wrap gap-2.5 justify-center">
          {[
            'Figma Auto-Layout 4.0', 'Framer Motion Spring Physics', 'CSS Grid Composition', 'Tailwind Variable Themes', 'D3.js Data Graphs', 'Semantic HTML5 SEO'
          ].map((pill, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase bg-brand-card text-brand-dark-gray/70 dark:text-white/60 border border-brand-border shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
