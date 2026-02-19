import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base/10 backdrop-blur-xl border-b border-surface/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-tighter text-surface hover:opacity-80 transition-opacity uppercase">
          A<span className="text-accent">K</span>RUTI
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold uppercase tracking-widest transition-colors py-2 px-1 ${
                  isActive ? 'text-accent' : 'text-surface/70 hover:text-surface'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <div className="h-4 w-px bg-surface/10 mx-2" />
          
          <Link 
            to="/portal" 
            className={`text-xs font-black uppercase tracking-[0.2em] px-4 py-2 border rounded-full transition-all ${
              location.pathname === '/portal' 
              ? 'bg-accent border-accent text-surface' 
              : 'border-surface/20 text-surface/60 hover:border-accent hover:text-accent'
            }`}
          >
            Studio
          </Link>
          
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base border-b border-surface/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-accent' : 'text-surface'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/portal" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-surface text-center py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Studio Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
