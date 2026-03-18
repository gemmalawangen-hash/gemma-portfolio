import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SAMPLE WORKS', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-light-orange py-4 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-brand-pink tracking-tight">
        Gemma Lawangen
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center text-[14px] uppercase tracking-[1px] font-bold">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link-hover transition-colors pb-1 ${
              location.pathname === link.path ? 'text-brand-pink border-b-2 border-brand-pink' : 'text-gray-600 hover:text-brand-pink'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-brand-pink"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-brand-light-orange p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-[14px] uppercase tracking-[1px] font-bold ${
                  location.pathname === link.path ? 'text-brand-pink' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
