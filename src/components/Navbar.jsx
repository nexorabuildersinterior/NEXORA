import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { openWhatsApp, PHONE_NUMBER, DISPLAY_PHONE } from '../utils/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Main Header */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3 border-b border-[#EAE4D9]' 
          : 'bg-[#FAF7F2] py-3.5 border-b border-[#EAE4D9]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo/logo.jpeg"
                alt="Nexora Builders and Interior Logo"
                className="w-full h-full object-cover rounded-full bg-black"
              />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-extrabold tracking-tight text-[#221F1D] block leading-none">
                NEXORA
              </span>
              <span className="text-[9px] text-[#B8735C] font-bold tracking-[0.22em] uppercase block mt-1">
                BUILDERS & INTERIOR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-wide font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 transition-colors duration-200 text-sm ${
                    isActive 
                      ? 'text-[#B8735C] font-semibold' 
                      : 'text-[#5A5550] hover:text-[#221F1D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#B8735C] rounded-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="hidden lg:flex items-center gap-1.5 text-xs text-[#5A5550] hover:text-[#221F1D] font-medium px-3 py-2 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8735C]" />
              <span className="font-semibold">{DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={() => openWhatsApp({ serviceName: "Free Site Visit" })}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase bg-[#B8735C] hover:bg-[#A5624C] text-white active:scale-95 transition-all duration-200 shadow-sm"
            >
              <span>Free Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#221F1D] hover:bg-[#EAE4D9]/60 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EAE4D9] px-6 py-6 space-y-4 shadow-xl transition-all duration-300">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm py-2 px-3 rounded-lg transition ${
                    isActive
                      ? 'bg-[#EAE4D9]/80 text-[#B8735C] font-semibold'
                      : 'text-[#5A5550] hover:text-[#221F1D] hover:bg-[#EAE4D9]/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-[#EAE4D9] flex flex-col gap-2">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#221F1D] border border-[#EAE4D9] rounded-xl bg-white"
            >
              <Phone className="w-4 h-4 text-[#B8735C]" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
            <button
              onClick={() => openWhatsApp({ serviceName: "Mobile Menu Consultation" })}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold tracking-wide uppercase bg-[#B8735C] text-white shadow-sm cursor-pointer"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
