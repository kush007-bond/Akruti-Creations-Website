import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <header className="max-w-7xl mx-auto mb-32 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-12 uppercase">
            THE <span className="text-accent italic">WORKS</span>
          </h1>
          <p className="text-2xl text-surface/60 max-w-2xl font-medium">
            Evidence of our capability. We bring complex visions to life through design and engineering.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {projects.map((project, idx) => {
          const colSpan = project.size === 'large' ? 'md:col-span-12' : project.size === 'medium' ? 'md:col-span-7' : 'md:col-span-5';
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className={`${colSpan} group cursor-pointer`}
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-8 bg-surface/5 aspect-[16/9]">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/e9b741?text=Akruti+Project"; }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent text-surface px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold tracking-tight mb-4 uppercase"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-surface/60 max-w-xl font-medium"
                >
                  {project.description}
                </motion.p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
