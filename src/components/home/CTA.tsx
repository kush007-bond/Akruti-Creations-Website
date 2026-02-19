import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

const CTA: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 bg-surface text-base">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="text-[12vw] font-bold tracking-tighter leading-none mb-20 uppercase"
        >
          AKRUTI CREATIONS
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-12"
        >
          <p className="text-3xl font-medium tracking-tight max-w-2xl">
            Ready to redefine your brand's physical presence?
          </p>
          <MagneticButton>
            <Link to="/contact" className="bg-accent text-surface px-16 py-8 rounded-full font-black text-2xl hover:scale-110 transition-transform shadow-2xl block">
              START A PROJECT
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
