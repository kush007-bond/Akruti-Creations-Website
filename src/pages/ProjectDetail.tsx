import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, FileText, Share2 } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const project = useMemo(() => {
    return projects.find(p => p.id === id);
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-base min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-surface/60 hover:text-accent transition-colors mb-12 uppercase font-bold text-xs tracking-widest">
          <ArrowLeft size={16} /> Back to Works
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20"
        >
          <div className="lg:col-span-8">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8 uppercase">
              {project.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 1 ? "text-accent italic" : ""}>{word} </span>
              ))}
            </h1>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-surface/10 pl-8 mb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">Client</span>
              <p className="font-bold">{project.client}</p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">Year</span>
              <p className="font-bold">{project.year}</p>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">Services</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] bg-surface/5 px-2 py-1 rounded-full uppercase font-bold tracking-tighter">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.section 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-[80vh] w-full overflow-hidden"
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase italic underline decoration-accent decoration-4 underline-offset-8">The Challenge</h2>
            <p className="text-xl text-surface/70 leading-relaxed">{project.challenge}</p>
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase italic underline decoration-accent decoration-4 underline-offset-8">The Solution</h2>
            <p className="text-xl text-surface/70 leading-relaxed mb-12">{project.solution}</p>
            <div className="p-8 bg-surface text-base rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-accent hover:text-surface transition-all">
              <div className="flex items-center gap-6">
                <FileText className="w-10 h-10" />
                <div>
                  <h4 className="font-bold text-lg">Project Technical Drawings</h4>
                  <p className="opacity-60 text-sm italic">Detailed structural blueprints .PDF (12.4 MB)</p>
                </div>
              </div>
              <MagneticButton>
                <div className="p-4 bg-base/10 rounded-full group-hover:bg-surface group-hover:text-accent transition-colors">
                  <Maximize2 />
                </div>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="bg-surface py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.gallery?.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
                className="aspect-[3/4] overflow-hidden rounded-2xl group relative"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Share2 className="text-surface" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-40 text-center">
        <MagneticButton className="inline-block">
          <Link to="/contact" className="bg-accent text-surface px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter">
            Build Something Like This
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
};

export default ProjectDetail;
