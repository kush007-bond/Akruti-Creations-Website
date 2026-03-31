import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../Counter';

const stats = [
  { label: "Projects Delivered", value: 500, suffix: "+", desc: "From boutique identities to city-scale flower shows." },
  { label: "Sq. Ft. Fabricated", value: 150, suffix: "k", desc: "Large-format stage and exhibition spaces built yearly." },
  { label: "Years of Craft", value: 15, suffix: "+", desc: "Dominating the intersection of design and production." }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 md:py-40 px-6 relative overflow-hidden bg-base text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-accent text-6xl md:text-8xl font-black tracking-tighter mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl font-bold uppercase tracking-[0.2em] text-foreground/40">{stat.label}</p>
              <p className="mt-4 text-foreground/60">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Marquee Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none opacity-5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25rem] font-black uppercase inline-block"
        >
          AKRUTI CREATIONS AKRUTI CREATIONS AKRUTI CREATIONS
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
