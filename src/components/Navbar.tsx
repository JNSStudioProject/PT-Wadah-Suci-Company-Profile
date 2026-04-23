'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import clsx from 'clsx';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3 top-0' : 'bg-transparent py-5 top-8'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className={clsx('font-bold text-xl tracking-tight', scrolled ? 'text-slate-900' : 'text-white')}>
            Wajah baru
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Tentang Kami', href: '#tentang-kami' },
            { name: 'Bisnis & Layanan', href: '#bisnis-layanan' },
            { name: 'Keberlanjutan', href: '#keberlanjutan' },
            { name: 'Hubungan Investor', href: '#hubungan-investor' },
            { name: 'Media', href: '#media' }
          ].map((item) => (
            <a href={item.href} key={item.name} className="group relative cursor-pointer flex items-center">
              <span className={clsx('text-sm font-semibold transition-colors', scrolled ? 'text-slate-700 hover:text-red-600' : 'text-white/90 hover:text-white')}>
                {item.name}
              </span>
              {item.name !== 'Tentang Kami' && item.name !== 'Bisnis & Layanan' && item.name !== 'Keberlanjutan' && item.name !== 'Hubungan Investor' && item.name !== 'Media' && <ChevronDown className={clsx("ml-1 w-4 h-4", scrolled ? 'text-slate-400' : 'text-white/70')} />}
            </a>
          ))}
        </div>

        {/* Tools */}
        <div className="hidden md:flex items-center space-x-4">
          <div className={clsx("flex items-center space-x-1 cursor-pointer", scrolled ? 'text-slate-700' : 'text-white')}>
            <Globe className="w-4 h-4" />
            <span className="text-sm font-bold">ID</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className={clsx("w-6 h-6", scrolled ? 'text-slate-900' : 'text-white')} />
          ) : (
            <Menu className={clsx("w-6 h-6", scrolled ? 'text-slate-900' : 'text-white')} />
          )}
        </button>
      </div>
    </nav>
  );
};
