import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Download, Sparkles, Trophy, Cpu, Briefcase, Zap, CheckCircle } from 'lucide-react';
import { MADISON_PORTRAIT } from '../data';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Simulate high-end PDF download trigger
    setTimeout(() => {
      alert("Simulated PDF Resume Download: 'Ahsan_Haider_Frontend_Developer_Resume.pdf' triggered successfully.");
      setDownloadSuccess(false);
    }, 1200);
  };

  return (
    <section
      id="about"
      className="relative py-28 bg-brand-bg text-brand-text overflow-hidden border-y border-brand-border transition-colors duration-500"
    >
      {/* Abstract Glowing Gradients behind elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[20vw] h-[20vw] rounded-full bg-[#FFD76A]/5 blur-[90px] pointer-events-none" />

      {/* Gigantic Decorative Typographic background text */}
      <div className="absolute bottom-10 right-10 text-[18vw] font-display font-black leading-none text-white/[0.01] uppercase tracking-wider select-none pointer-events-none">
        Craft
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-brand-border rounded-full">
            <Sparkles size={11} className="text-accent" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-accent-secondary">CRAFT STORY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            The Mind Behind <span className="text-accent">The Code</span>
          </h2>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-lg mx-auto text-sm font-sans">
            Bridging beautiful interactive layouts with responsive frontend engineering.
          </p>
        </div>

        {/* About Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Centered Portrait Image inside dynamic circles */}
          <div className="lg:col-span-5 relative flex justify-center py-6">
            
            {/* Multi-layered abstract radial circles behind the portrait */}
            <div className="absolute w-[110%] aspect-square rounded-full border border-white/5 scale-105 pointer-events-none flex items-center justify-center animate-spin-slow">
              <div className="w-[85%] aspect-square rounded-full border border-dashed border-accent/20" />
            </div>
            
            {/* Glowing blur shape */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-[40px] opacity-60 scale-75 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
              className="relative w-full max-w-[320px] aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-brand-card group"
            >
              <img
                src={MADISON_PORTRAIT}
                alt="Ahsan Haider Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">FRONTEND DEVELOPER & DESIGNER</div>
                <div className="text-lg font-bold">M Ahsan Haider</div>
              </div>
            </motion.div>
          </div>

          {/* About Biography & Story Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-brand-text">
                Crafting lightweight, highly responsive interfaces with pixel-perfect precision.
              </h3>
              <p className="text-sm md:text-base text-brand-dark-gray dark:text-white/70 leading-relaxed font-sans">
                My name is <strong>Ahsan Haider</strong>, and I recently completed my <strong>ADP ITM</strong> (Associate Degree Program in Information Technology & Management) from <strong>Riphah International University, Lahore</strong>. Through my studies, I mastered dual disciplines: frontend web technologies and structural IT workflows.
              </p>
              <p className="text-sm text-brand-dark-gray/80 dark:text-white/60 leading-relaxed font-sans">
                I specialize in translating graphic designs into beautiful, clean markup using <strong>HTML, CSS, JavaScript, Tailwind CSS</strong>, and <strong>Figma</strong>. As a passionate fresher, I am eagerly looking for an internship to apply my skills to real-world industrial projects and see the inner workflows of the modern web industry.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Frontend Development',
                  desc: 'Writing clean, semantic, and highly structured HTML, CSS, and modern JavaScript.',
                  icon: <Trophy size={16} className="text-accent" />,
                },
                {
                  title: 'UI Design & Wireframing',
                  desc: 'Prototyping responsive layouts and high-fidelity component architectures directly in Figma.',
                  icon: <Cpu size={16} className="text-accent" />,
                },
              ].map((value, idx) => (
                <div key={idx} className="p-4 bg-brand-card border border-brand-border rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2">
                    {value.icon}
                    <h4 className="text-sm font-bold tracking-tight text-brand-text">{value.title}</h4>
                  </div>
                  <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-normal">{value.desc}</p>
                </div>
              ))}
            </div>

            {/* Achievements Counters */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-brand-border">
              <div className="text-center">
                <div className="text-3xl font-display font-extrabold text-accent">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/50 dark:text-white/40 mt-1">Dedication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-extrabold text-accent">
                  <Counter value={5} suffix="+" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/50 dark:text-white/40 mt-1">Core Tech Stack</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-extrabold text-accent">
                  <Counter value={8} suffix="+" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/50 dark:text-white/40 mt-1">Practice Projects</div>
              </div>
            </div>

            {/* Download Resume / Simulated Action */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleDownload}
                disabled={downloadSuccess}
                className={`group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer ${
                  downloadSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-accent text-black hover:bg-accent-hover hover:scale-105 active:scale-95'
                }`}
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle size={14} className="mr-2 animate-bounce" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={14} className="mr-2 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                    Download Resume PDF
                  </>
                )}
              </button>
              <span className="text-[10px] font-mono text-brand-dark-gray/60 dark:text-white/40 max-w-[160px] leading-tight hidden sm:inline-block">
                Curriculum Vitae • Clean, PDF printable dossier
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
