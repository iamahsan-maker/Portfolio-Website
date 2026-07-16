import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  text: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ text, speed = 25, reverse = false }: MarqueeProps) {
  // Repeat the array elements to ensure seamless loop
  const repeatedText = [...text, ...text, ...text, ...text];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-6 md:py-8 border-y border-white/10 select-none">
      {/* Soft overlay edges for depth */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center gap-12 text-[5vw] md:text-[3.5vw] font-display font-extrabold uppercase tracking-tight text-white/90"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {repeatedText.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="w-3.5 h-3.5 rounded-full bg-accent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
