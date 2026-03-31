import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in window);
    
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (isHidden) setIsHidden(false);

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isHidden]);

  // Don't render anything if on mobile
  const isMobile = typeof navigator !== 'undefined' && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in window));
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-20%', // Offset to make the tip the actual anchor
        translateY: '-20%',
      }}
      animate={{
        scale: isHidden ? 0 : 1,
        rotate: isPointer ? 15 : -15, // Subtle left tilt by default, slightly right on pointer
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
    >
      <svg 
        width="30" 
        height="30" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20 4C18.5 4 17.5 5 16.5 6.5L6 24C5 26 6 28 8 28H32C34 28 35 26 34 24L23.5 6.5C22.5 5 21.5 4 20 4Z"
          animate={{
            fill: isPointer ? '#E9B741' : '#FFFFFF',
            d: isPointer 
              ? "M20 6C16 6 15 8 13 11L6 22C4 25 5 28 8 28H32C35 28 36 25 34 22L27 11C25 8 24 6 20 6Z" 
              : "M20 4C18.5 4 17.5 5 16.5 6.5L6 24C5 26 6 28 8 28H32C34 28 35 26 34 24L23.5 6.5C22.5 5 21.5 4 20 4Z",
            scale: isPointer ? 1.4 : 1
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
