import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.title === activeFilter);

  return (
    <div className="pt-32 pb-20 px-6">
      <header className="max-w-7xl mx-auto mb-10 md:mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-8 md:mb-12 uppercase">
            THE <span className="text-accent italic">WORKS</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium">
            Evidence of our capability. We bring complex visions to life through design and engineering.
          </p>
        </motion.div>
      </header>

      {/* Filter bar — horizontal scroll capsules + dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto mb-12 md:mb-20 flex items-center gap-4"
      >
        {/* Scrollable capsule row */}
        <div
          className="flex-1 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3 pb-1" style={{ width: 'max-content' }}>
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
                activeFilter === 'All'
                  ? 'bg-accent text-[#1A1A1A] border-accent shadow-lg'
                  : 'border-foreground/20 text-foreground/50 hover:border-accent hover:text-accent'
              }`}
            >
              All
            </button>
            {projects.map(project => (
              <button
                key={project.id}
                onClick={() => setActiveFilter(project.title)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
                  activeFilter === project.title
                    ? 'bg-accent text-[#1A1A1A] border-accent shadow-lg'
                    : 'border-foreground/20 text-foreground/50 hover:border-accent hover:text-accent'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown fallback */}
        <div className="relative shrink-0">
          <select
            value={activeFilter}
            onChange={e => setActiveFilter(e.target.value)}
            className="appearance-none bg-surface border border-foreground/20 text-foreground text-[10px] font-black uppercase tracking-widest px-4 py-2 pr-8 rounded-full cursor-pointer focus:outline-none focus:border-accent hover:border-accent transition-colors"
          >
            <option value="All">All Projects</option>
            {projects.map(project => (
              <option key={project.id} value={project.title}>{project.title}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-foreground/50 pointer-events-none" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {filteredProjects.map((project, idx) => {
          const colSpan = project.size === 'large' ? 'md:col-span-12' : project.size === 'medium' ? 'md:col-span-7' : 'md:col-span-5';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "100px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className={`${colSpan} group cursor-pointer`}
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-8 bg-surface/5 aspect-[16/9]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/e9b741?text=Akruti+Project"; }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent text-base px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "100px" }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-4xl font-bold tracking-tight mb-4 uppercase"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "100px" }}
                  transition={{ delay: 0.15 }}
                  className="text-lg text-foreground/60 max-w-xl font-medium"
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
