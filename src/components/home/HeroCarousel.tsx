import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

// Import local assets
import bannerArt from '../../assets/images/abstract-digital-art-composition-blending-traditio.jpeg';
import bannerInnovation from '../../assets/images/cinematic-motion-blur-style-banner-showing-creativ.jpeg';
import bannerWorkspace from '../../assets/images/minimalist-creative-workspace-flat-lay-sleek-macbo.jpeg';

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop",
    tagline: "Imagine. Create. Design.",
    title: "WE SHAPE",
    titleAccent: "YOUR VISION",
    description: "A dynamic team of creators, thinkers and innovators specializing in design, print and web."
  },
  {
    image: bannerArt,
    tagline: "Creativity is our passion",
    title: "ARTISTIC",
    titleAccent: "EXCELLENCE",
    description: "Bringing a unique, out-of-the-box touch to every project we conceptualize and produce."
  },
  {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    tagline: "Design | Print | Event",
    title: "IMPACTFUL",
    titleAccent: "EXPERIENCES",
    description: "From massive stage sets to delicate print finishes, we handle every detail of the real world."
  },
  {
    image: bannerInnovation,
    tagline: "Innovation our core",
    title: "DYNAMIC",
    titleAccent: "SOLUTIONS",
    description: "Strategic customization and high-tech hardware ensuring unrivalled quality for your brand."
  },
  {
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
    tagline: "Creativity is our Passion",
    title: "INNOVATION",
    titleAccent: "OUR CORE",
    description: "Strategic customization of our services based on your unique business model."
  },
  {
    image: bannerWorkspace,
    tagline: "Creative Workspace",
    title: "STUDIO",
    titleAccent: "OF IDEAS",
    description: "A team of creators and thinkers dedicated to enhancing user experience for your business."
  }
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + carouselData.length) % carouselData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-surface">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full">
            <img
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] brightness-[0.4]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-4xl"
              >
                <span className="text-accent font-black tracking-[0.4em] text-xs mb-6 block uppercase">
                  {carouselData[currentIndex].tagline}
                </span>
                <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-10 text-base">
                  {carouselData[currentIndex].title} <br />
                  <span className="text-accent italic">{carouselData[currentIndex].titleAccent}</span>
                </h1>
                <p className="text-xl md:text-2xl text-base/60 max-w-2xl mb-12 font-medium leading-tight">
                  {carouselData[currentIndex].description}
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <MagneticButton>
                    <Link to="/projects" className="inline-flex items-center gap-4 bg-accent text-surface px-10 py-5 rounded-full font-bold hover:bg-base transition-all group shadow-xl">
                      EXPLORE WORKS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </MagneticButton>
                  <Link to="/contact" className="inline-flex items-center gap-4 border-2 border-base/20 text-base px-10 py-5 rounded-full font-bold hover:border-accent hover:text-accent transition-all">
                    GET IN TOUCH
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-6 md:right-20 flex gap-4 z-20">
        <button
          onClick={() => paginate(-1)}
          className="w-14 h-14 rounded-full border border-base/20 flex items-center justify-center text-base hover:bg-accent hover:border-accent hover:text-surface transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-14 h-14 rounded-full border border-base/20 flex items-center justify-center text-base hover:bg-accent hover:border-accent hover:text-surface transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentIndex === idx ? "w-12 bg-accent" : "w-2 bg-base/20 hover:bg-base/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
