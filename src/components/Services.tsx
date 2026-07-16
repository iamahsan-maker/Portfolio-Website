import React from 'react';
import { motion } from 'motion/react';
import { Globe, Cpu, Layers, Sparkles, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Cpu: <Cpu size={22} />,
  Layers: <Layers size={22} />,
  Sparkles: <Sparkles size={22} />,
};

export default function Services() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-24 bg-brand-bg transition-colors duration-500 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <Sparkles size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">CAPABILITIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-brand-text dark:text-white">
              Elevating Digital Products <br />
              With <span className="text-accent">Premium Services</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-brand-dark-gray/60 dark:text-white/50 text-sm font-sans leading-relaxed">
              Applying a unified visual strategy to build custom solutions. I act as an extension of your product team to deliver exceptional high-end engineering.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 60, damping: 15, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 bg-brand-card border border-brand-border rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              id={`service-card-${service.id}`}
            >
              {/* Back ambient radial glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-accent/1 group-hover:bg-accent/3 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                
                {/* Header segment with Icon and Arrow */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/5 flex items-center justify-center text-accent shadow-sm group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {iconMap[service.iconName]}
                  </div>
                  
                  {/* Premium Action Arrow Button */}
                  <button
                    onClick={handleScrollToContact}
                    className="p-3 rounded-full border border-brand-border text-brand-dark-gray dark:text-white/50 group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500 bg-transparent hover:bg-black/5 dark:hover:bg-white/5"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Core Text descriptions */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-brand-text dark:text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-dark-gray/70 dark:text-white/60 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Detail features bullet checklist */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-brand-border text-xs text-brand-dark-gray/60 dark:text-white/50 font-sans">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check size={10} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
