import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg',
  '08.jpg','09.jpg','10.jpg','15.jpg','17.jpg','18.jpg','22.jpg',
];

const LogoItem: React.FC<{ src: string }> = React.memo(({ src }) => (
  <motion.div
    className="flex-shrink-0 mx-6 w-24 h-16 flex items-center justify-center"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
  >
    <img
      src={`/images/Client logo/${src}`}
      alt="client logo"
      loading="lazy"
      decoding="async"
      className="max-h-full max-w-full object-contain transition-all duration-300"
      style={{ filter: 'grayscale(1) brightness(0.6)' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0) brightness(1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(0.6)';
      }}
    />
  </motion.div>
));

const track = [...logos, ...logos];

const ClientMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-base border-t border-foreground/10 overflow-hidden">
      <motion.p
        className="text-center text-xs uppercase tracking-[0.3em] font-bold text-accent mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Brands we've worked with
      </motion.p>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--color-base), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--color-base), transparent)' }}
        />

        <motion.div
          className="flex items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          {track.map((logo, i) => (
            <LogoItem key={i} src={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;
