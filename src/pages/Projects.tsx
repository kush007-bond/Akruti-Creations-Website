import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { projects, type Project } from '../data/projects';

type Filter = { label: string; test: (p: Project) => boolean };

const FILTERS: Filter[] = [
  { label: 'All',              test: ()  => true },
  { label: 'Branding',         test: (p) => p.tags.some(t => ['Logo Design', 'Brand Identity', 'Brand Launch', 'Branding', 'Visual Systems'].includes(t)) },
  { label: 'Events',           test: (p) => p.tags.some(t => ['Stage Design', 'Event Production', 'Event Marketing', 'Film Industry', 'Stall Design', 'Poster Design'].includes(t)) },
  { label: 'Print & Stationery', test: (p) => p.tags.some(t => ['Print', 'Brochure Design', 'Brochure', 'Banner Design', 'Leaflet Design', 'Catalogue Design', 'Voucher Design', 'Menu Design', 'Cover Design', 'Certificate Design', 'Standee Design', 'Visiting Cards', 'Invitation Design', 'Stationery', 'Stationery Suite'].includes(t)) },
  { label: 'Packaging',        test: (p) => p.tags.some(t => ['Packaging Design', 'Label Design'].includes(t)) },
  { label: 'Digital',          test: (p) => p.tags.some(t => ['Web Design', 'UI/UX', 'Digital Branding'].includes(t)) },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const currentFilter = FILTERS.find(f => f.label === activeFilter) ?? FILTERS[0];
  const filteredProjects = projects.filter(currentFilter.test);

  return (
    <div className="pt-32 pb-20 px-6">
      <header className="max-w-7xl mx-auto mb-10 md:mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-8 md:mb-12 uppercase">
            THE <span className="text-accent italic">WORKS</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium">
            Evidence of our capability. We bring complex visions to life through design and engineering.
          </p>
        </motion.div>
      </header>

      {/* Filter bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto mb-12 md:mb-20 flex items-center gap-4"
      >
        <div className="flex-1 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-3 pb-1" style={{ width: 'max-content' }}>
            {FILTERS.map(f => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
                  activeFilter === f.label
                    ? 'bg-accent text-[#1A1A1A] border-accent shadow-lg'
                    : 'border-foreground/20 text-foreground/50 hover:border-accent hover:text-accent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative shrink-0">
          <select
            value={activeFilter}
            onChange={e => setActiveFilter(e.target.value)}
            className="appearance-none bg-surface border border-foreground/20 text-foreground text-[10px] font-black uppercase tracking-widest px-4 py-2 pr-8 rounded-full cursor-pointer focus:outline-none focus:border-accent hover:border-accent transition-colors"
          >
            {FILTERS.map(f => (
              <option key={f.label} value={f.label}>{f.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-foreground/50 pointer-events-none" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {filteredProjects.length === 0 ? (
          <p className="md:col-span-12 text-center text-foreground/40 text-lg py-20">No projects found.</p>
        ) : (
          filteredProjects.map((project, idx) => {
            const colSpan =
              project.size === 'large' ? 'md:col-span-12' :
              project.size === 'medium' ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '100px' }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className={`${colSpan} group cursor-pointer`}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-8 bg-surface/5 aspect-[16/9]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                      onError={e => { e.currentTarget.src = 'https://placehold.co/1200x800/1a1a1a/e9b741?text=Akruti+Project'; }}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-accent text-base px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                        {project.category.split(',')[0].trim()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 uppercase">{project.title}</h3>
                  <p className="text-lg text-foreground/60 max-w-xl font-medium">{project.description}</p>
                </Link>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Projects;
