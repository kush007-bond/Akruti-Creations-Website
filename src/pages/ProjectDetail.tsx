import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, FileText, Maximize2 } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = useMemo(() => {
    return projects.find(p => p.id === id);
  }, [id]);

  const allImages = useMemo(() => {
    if (!project) return [];
    return [project.image, ...(project.gallery || [])];
  }, [project]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev + 1) % allImages.length : null);
  }, [allImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null);
  }, [allImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-base min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-12 uppercase font-bold text-xs tracking-widest">
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
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-foreground/10 pl-8 mb-4">
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
                  <span key={tag} className="text-[10px] bg-foreground/5 px-2 py-1 rounded-full uppercase font-bold tracking-tighter">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cover image — shows complete image, clickable */}
      <motion.section
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex items-center justify-center bg-surface cursor-pointer"
        onClick={() => openLightbox(0)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[85vh] object-contain grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase italic underline decoration-accent decoration-4 underline-offset-8">The Challenge</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">{project.challenge}</p>
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
            <p className="text-xl text-foreground/70 leading-relaxed mb-12">{project.solution}</p>
            <div className="p-8 bg-surface text-foreground rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-accent hover:text-[#1A1A1A] transition-all border border-foreground/5">
              <div className="flex items-center gap-6">
                <FileText className="w-10 h-10" />
                <div>
                  <h4 className="font-bold text-lg">Project Technical Drawings</h4>
                  <p className="opacity-60 text-sm italic">Detailed structural blueprints .PDF (12.4 MB)</p>
                </div>
              </div>
              <MagneticButton>
                <div className="p-4 bg-foreground/10 rounded-full group-hover:bg-base group-hover:text-accent transition-colors">
                  <Maximize2 />
                </div>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery — clickable images */}
      <section className="bg-surface py-32 px-6 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery?.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: (i % 3) * 0.15 }}
                className="overflow-hidden rounded-2xl group relative cursor-pointer bg-base flex items-center justify-center"
                onClick={() => openLightbox(i + 1)}
              >
                <img
                  src={img}
                  alt={`${project.title} — ${i + 1}`}
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-[#1A1A1A] w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-40 text-center bg-base">
        <MagneticButton className="inline-block">
          <Link to="/contact" className="bg-accent text-[#1A1A1A] px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-transform shadow-2xl block">
            Build Something Like This
          </Link>
        </MagneticButton>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10 p-2"
            >
              <X size={32} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/50 text-sm font-mono z-10">
              {lightboxIndex + 1} / {allImages.length}
            </div>

            {/* Previous */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white z-10 p-2"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightboxIndex]}
              alt={`${project.title} — ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white z-10 p-2"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
