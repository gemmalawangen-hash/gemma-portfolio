import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pb-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="h-0.5 w-full bg-gradient-to-r from-brand-pink via-brand-pastel-orange to-brand-orange mb-10 rounded-full"></div>
        <div className="flex flex-col items-center text-center">
          <div className="font-serif text-2xl font-bold text-brand-pink mb-6">
            Gemma Lawangen
          </div>
          
          <div className="flex gap-6 mb-8 text-brand-orange">
            <a href="#" className="hover:text-brand-pink transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex gap-8 text-[12px] uppercase font-bold tracking-widest text-gray-400">
            <Link to="/" className="hover:text-brand-pink">Home</Link>
            <Link to="/portfolio" className="hover:text-brand-pink">Portfolio</Link>
            <Link to="/contact" className="hover:text-brand-pink">Privacy Policy</Link>
          </div>
          
          <p className="mt-8 text-xs text-gray-300">
            © {new Date().getFullYear()} Gemma Lawangen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
