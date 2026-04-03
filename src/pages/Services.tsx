import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Printer, Landmark, Layers, Box, Layout, Video, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, type Service } from '../data/services';

const iconMap = {
  Palette: <Palette className="w-8 h-8" />,
  Printer: <Printer className="w-8 h-8" />,
  Box: <Box className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />
};

const iconMapLarge = {
  Palette: <Palette className="w-12 h-12" />,
  Printer: <Printer className="w-12 h-12" />,
  Box: <Box className="w-12 h-12" />,
  Layout: <Layout className="w-12 h-12" />,
  Video: <Video className="w-12 h-12" />,
  Landmark: <Landmark className="w-12 h-12" />,
  Layers: <Layers className="w-12 h-12" />
};

const Services: React.FC = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <div>
      {/* Block 1 — yellow */}
      <header className="pt-32 pb-16 md:pb-40 px-6 text-center section-yellow">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </header>

      {/* Block 2 — base */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/5 bg-base">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="relative aspect-square md:aspect-auto md:h-[80vh] group overflow-hidden bg-base cursor-pointer"
            onClick={() => setSelected(service)}
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
            <div className="absolute inset-0 bg-base/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 md:p-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ delay: 0.2 }}
                className="text-accent mb-8"
              >
                {iconMap[service.iconName as keyof typeof iconMap]}
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-6 uppercase"
              >
                {service.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ delay: 0.4 }}
                className="text-lg text-foreground leading-relaxed font-light mb-12 max-w-md"
              >
                {service.description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-accent font-bold tracking-widest uppercase border-b-2 border-accent w-fit pb-2 hover:text-foreground hover:border-foreground transition-colors"
              >
                VIEW DETAILS <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Default Label — only shown on desktop before hover */}
            <div className="hidden md:block absolute bottom-10 left-10 text-foreground/30 font-black tracking-widest uppercase group-hover:opacity-0 transition-opacity">
              {service.title}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Block 3 — yellow */}
      <section className="py-40 px-6 text-center section-yellow">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "100px" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">HAVE A SPECIFIC REQUIREMENT?</h2>
          <Link to="/contact" className="inline-block bg-[#1A1A1A] text-[#E9B741] px-12 py-6 rounded-full font-black text-xl hover:bg-[#333] transition-all uppercase shadow-xl">
            LET'S DISCUSS
          </Link>
        </motion.div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-base w-full md:max-w-4xl rounded-t-3xl md:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header image */}
              <div className="relative h-48 md:h-64 shrink-0 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1000x400/1a1a1a/e9b741?text=Service"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-base/80 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-[#1A1A1A] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal body */}
              <div className="overflow-y-auto p-8 md:p-12 flex-1">
                <div className="text-accent mb-4">
                  {iconMapLarge[selected.iconName as keyof typeof iconMapLarge]}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">{selected.title}</h2>
                <p className="text-foreground/60 text-lg leading-relaxed mb-10">{selected.description}</p>

                <div className="mb-10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-accent mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.offerings.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-foreground/5">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        <span className="font-medium text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-3 bg-accent text-[#1A1A1A] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-accent transition-all shadow-lg"
                >
                  GET A QUOTE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
