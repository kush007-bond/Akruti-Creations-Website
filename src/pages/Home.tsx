import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import Philosophy from '../components/home/Philosophy';
import Process from '../components/home/Process';
import Stats from '../components/home/Stats';
import Industries from '../components/home/Industries';
import FeaturedProject from '../components/home/FeaturedProject';
import CTA from '../components/home/CTA';
import ClientMarquee from '../components/home/ClientMarquee';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-base">
      <HeroCarousel />
      <Philosophy />
      <Process />
      <Stats />
      <ClientMarquee />
      <Industries />
      <FeaturedProject />
      <CTA />
    </div>
  );
};

export default Home;
