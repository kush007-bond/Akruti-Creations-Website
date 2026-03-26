import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Printer, Landmark, Layers, Box, Layout, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const iconMap = {
  Palette: <Palette className="w-8 h-8" />,
  Printer: <Printer className="w-8 h-8" />,
  Box: <Box className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-base">
      <header className="max-w-7xl mx-auto px-6 mb-16 md:mb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Capabilities Index</span>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mt-8 mb-8 md:mb-12 uppercase">
            FULL <span className="text-accent italic">SPECTRUM</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/50 max-w-3xl mx-auto font-medium leading-relaxed">
            We are an end-to-end brand experience partner. If it can be imagined, it can be built by Akruti.
          </p>
        </motion.div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/5">
        {services.map((service, idx) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="relative aspect-square md:aspect-auto md:h-[80vh] group overflow-hidden bg-base"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/1000x1000/1a1a1a/e9b741?text=Service"; }}
            />
            
            {/* Overlay Content — always visible on mobile, hover on desktop */}
            <div className="absolute inset-0 bg-base/90 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 md:p-20">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: false }}
                 transition={{ delay: 0.2 }}
                 className="text-accent mb-8"
               >
                 {iconMap[service.iconName as keyof typeof iconMap]}
               </motion.div>
               <motion.h2 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: false }}
                 transition={{ delay: 0.3 }}
                 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-6 uppercase"
               >
                 {service.title}
               </motion.h2>
               <motion.p 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: false }}
                 transition={{ delay: 0.4 }}
                 className="text-lg text-foreground/60 leading-relaxed font-light mb-12 max-w-md"
               >
                 {service.description}
               </motion.p>
               <motion.button 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: false }}
                 transition={{ delay: 0.5 }}
                 className="text-accent font-bold tracking-widest uppercase border-b-2 border-accent w-fit pb-2 hover:text-foreground hover:border-foreground transition-colors"
               >
                 VIEW DETAILS
               </motion.button>
            </div>

            {/* Default Label — only shown on desktop before hover */}
            <div className="hidden md:block absolute bottom-10 left-10 text-foreground/30 font-black tracking-widest uppercase group-hover:opacity-0 transition-opacity">
              {service.title}
            </div>
          </motion.div>
        ))}
      </section>
      
      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">HAVE A SPECIFIC REQUIREMENT?</h2>
          <Link to="/contact" className="inline-block bg-accent text-[#1A1A1A] px-12 py-6 rounded-full font-black text-xl hover:bg-foreground hover:text-base transition-all uppercase shadow-xl">
            LET'S DISCUSS
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
