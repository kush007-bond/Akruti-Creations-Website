import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

const FeaturedProject: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Iconic Case Study</span>
            <h3 className="text-7xl font-bold tracking-tighter mt-4 mb-8 uppercase">LALBAGH <br/> FLOWER SHOW</h3>
            <p className="text-2xl text-foreground/70 font-medium leading-relaxed mb-10">
              A massive undertaking involving spatial design, 3D sculptures, event branding, and technical installation for over 1 million visitors.
            </p>
            <MagneticButton>
              <Link to="/projects/lalbagh-flower-show" className="inline-block border-b-2 border-accent pb-2 font-black tracking-widest text-sm hover:text-accent transition-colors uppercase">
                VIEW FULL CASE STUDY
              </Link>
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-surface/5 rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/akruti-designs/farmhouse-1.jpg"
                alt="Lalbagh Flower Show" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center text-[#1A1A1A] font-black text-center p-6 text-xs uppercase tracking-tighter shadow-2xl"
            >
              AWARD WINNING PRODUCTION 2024
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
