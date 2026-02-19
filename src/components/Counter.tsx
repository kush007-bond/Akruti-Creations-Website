import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      
      let currentFrame = 0;
      const timer = setInterval(() => {
        currentFrame++;
        start += increment;
        if (currentFrame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    } else {
      // Optional: Reset count when out of view so it restarts next time
      setCount(0);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default Counter;
