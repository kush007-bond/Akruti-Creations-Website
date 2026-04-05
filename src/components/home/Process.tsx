import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Target, Hammer, Zap } from 'lucide-react';

const processSteps = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "CONCEPTUALIZE",
    desc: "Every project begins with a deep dive into the brand's DNA and the physical constraints of the space.",
    step: "01"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "STRATEGIZE",
    desc: "We map out the technical feasibility, material selection, and logistics for flawless execution.",
    step: "02"
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "PRODUCE",
    desc: "Our in-house production team brings the vision to life using high-grade materials and precision engineering.",
    step: "03"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "INSTALL",
    desc: "From massive stage sets to delicate print finishes, we handle the final touch in the real world.",
    step: "04"
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-40 px-6 bg-base border-y border-surface/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">How we work</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-8">THE <br/><span className="italic text-accent">LIFECYCLE</span> OF A PROJECT.</h2>
            <p className="text-lg text-foreground/60 font-medium">
              We bridge the gap between abstract design and physical reality through a rigorous four-stage workflow.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-3xl overflow-hidden shadow-xl">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-base p-6 md:p-12 transition-colors group hover:bg-accent/5"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black text-foreground/5 group-hover:text-accent/20 transition-colors">{item.step}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight text-foreground">{item.title}</h4>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
