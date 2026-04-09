import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar({ onGetStarted }: { onGetStarted: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'The Edge', href: '/the-edge' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between px-8 py-4 rounded-2xl border transition-all duration-500 backdrop-blur-xl",
          isScrolled 
            ? "bg-black/80 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
        )}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(0,255,153,0.3)] group-hover:scale-110 transition-transform duration-500">
              g
            </div>
            <span className="text-2xl font-black tracking-[-0.05em] text-white">g2m.xyz</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-white",
                  location.pathname === link.href ? "text-accent" : "text-gray-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={onGetStarted}
              className="bg-white text-black px-8 py-3 rounded-xl text-sm font-black hover:bg-accent transition-all hover:shadow-[0_0_30px_rgba(0,255,153,0.3)] active:scale-95"
            >
              Get Started
            </button>
          </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-gray-400 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                <button className="text-left text-xl font-bold text-gray-400">
                  Client Login
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onGetStarted();
                  }}
                  className="bg-accent text-black px-6 py-4 rounded-2xl text-center font-black text-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
