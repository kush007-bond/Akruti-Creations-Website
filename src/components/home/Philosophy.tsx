import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-40 px-6 bg-base text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8 uppercase">
              Creativity is our <span className="text-accent italic">PASSION.</span><br />
              Innovation our <span className="text-accent italic">CORE!</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8"
          >
            <p className="text-2xl text-foreground/70 font-medium leading-relaxed">
              Creativity runs in our blood. Akruti, our dynamic team not only consists of the best creators, but also experts at thought and innovation!
            </p>
            <p className="text-xl text-foreground/50 leading-relaxed">
              Being a creative house, our hands play with anything that can use an artistic touch. We let you focus on your core business while we handle the innovation!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
