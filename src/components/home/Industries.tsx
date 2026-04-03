import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  "Real Estate", "Automotive", "Entertainment", "Government",
  "Hospitality", "Tech Giants", "Education", "Retail Brands"
];

const Industries: React.FC = () => {
  return (
    <section className="py-20 md:py-40 px-6 section-yellow">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "100px" }}
          className="text-center mb-24"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Reach</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mt-4">INDUSTRIES WE SHAPE</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, borderColor: "#E9B741" }}
              className="p-5 md:p-8 border border-foreground/10 bg-surface rounded-2xl text-center group transition-all shadow-sm"
            >
              <div className="w-12 h-1 bg-foreground/10 group-hover:bg-accent mx-auto mb-6 transition-colors"></div>
              <span className="text-lg font-bold tracking-tight text-foreground/80 group-hover:text-foreground">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
