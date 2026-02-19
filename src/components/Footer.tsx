import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-base py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase">
            AKRUTI CREATIONS
          </h3>
          <p className="text-base/60 max-w-xs mb-8">
            An end-to-end brand experience partner specializing in design, print, events, and spatial installations.
          </p>
        </div>

        <div>
          <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
          <address className="not-italic text-base/60 space-y-2">
            <p>#82/2, 1st Floor, Byraveshwara Nagar,</p>
            <p>Nagarabavi Main Road, Bangalore - 560 072.</p>
            <p className="pt-4">+91 998677 5656</p>
            <p>team@akruticreations.com</p>
          </address>
        </div>

        <div>
          <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Navigation</h4>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/" className="text-base/60 hover:text-accent transition-colors">Home</Link>
            <Link to="/projects" className="text-base/60 hover:text-accent transition-colors">Projects</Link>
            <Link to="/services" className="text-base/60 hover:text-accent transition-colors">Services</Link>
            <Link to="/contact" className="text-base/60 hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-base/10 flex flex-col md:row justify-between items-center text-xs text-base/40">
        <p>&copy; {new Date().getFullYear()} Akruti Creations. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
