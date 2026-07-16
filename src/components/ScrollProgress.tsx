import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-brand-light-gray/20 z-50 pointer-events-none">
      <motion.div
        id="scroll-progress-indicator"
        className="h-full bg-accent origin-left"
        style={{ scaleX }}
      />
      {/* Small subtle badge showing scroll depth */}
      <div className="absolute right-4 top-4 hidden lg:flex items-center space-x-1.5 px-2 py-1 rounded bg-black/80 text-[10px] font-mono text-accent-secondary select-none tracking-widest backdrop-blur-md border border-white/10">
        <span>SCRL</span>
        <span>{percentage.toString().padStart(3, '0')}%</span>
      </div>
    </div>
  );
}
