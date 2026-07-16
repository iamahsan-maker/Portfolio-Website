import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Track hovered interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isButton = target.closest('button, a, [role="button"], input, textarea, select');
      const isLargeText = target.closest('h1, h2, .huge-text');
      
      setHovered(!!isButton);
      setTextHovered(!!isLargeText);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Glow Circle */}
      <motion.div
        id="custom-cursor-glow"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 0.7 : hovered ? 1.8 : textHovered ? 2.5 : 1,
          backgroundColor: textHovered ? 'rgba(247, 169, 40, 0.2)' : hovered ? 'rgba(247, 169, 40, 0.1)' : 'rgba(247, 169, 40, 0)',
          borderColor: textHovered ? '#FFD76A' : '#F7A928',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 0.5 : hovered ? 1.5 : 1,
          backgroundColor: clicked ? '#FFD76A' : '#F7A928',
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
    </>
  );
}
