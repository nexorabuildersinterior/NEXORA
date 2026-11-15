import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-[#F4EFE6] text-[#5A5550] pt-16 pb-24 md:pb-12 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5DDD0]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-sm flex-shrink-0">
                <img
                  src="/images/logo/logo.jpeg"
                  alt="Nexora Builders and Interior Logo"
                  className="w-full h-full object-cover rounded-full bg-black"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-extrabold tracking-tight text-[#221F1D] block leading-none">
                  NEXORA
                </span>
                <span className="text-[9px] text-[#B8735C] font-bold tracking-[0.2em] uppercase block mt-1">
                  BUILDERS AND INTERIOR
                </span>
              </div>
            </Link>

            <p className="text-[#B8735C] text-xs font-serif italic">
              "Build Better • Live Better"
            </p>

            <p className="text-[#6A635E] text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Crafting bespoke residential interiors, precision modular kitchens, luxury wardrobes, and Pre-Engineered Building (PEB) steel structures.
            </p>

            <div className="pt-1">
              <button
                onClick={() => openWhatsApp({ serviceName: "Free Site Visit" })}
                className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-[#B8735C] hover:text-[#A5624C] font-bold tracking-wider uppercase transition group"
              >
                <span>Book Free Site Visit Today</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[#221F1D] font-serif font-semibold text-sm tracking-wider uppercase border-b border-[#E5DDD0] pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#B8735C] transition flex items-center justify-between">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#B8735C] transition flex items-center justify-between">
                  <span>Real Projects & Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B8735C] transition flex items-center justify-between">
                  <span>Services & Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B8735C] transition flex items-center justify-between">
                  <span>About Nexora</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B8735C] transition flex items-center justify-between">
                  <span>Contact & Studio Visit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Offerings */}
          <div className="space-y-3">
            <h4 className="text-[#221F1D] font-serif font-semibold text-sm tracking-wider uppercase border-b border-[#E5DDD0] pb-2">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#6A635E]">
              <li className="hover:text-[#221F1D] transition cursor-default">Modular Kitchens (From ₹1.99L)</li>
              <li className="hover:text-[#221F1D] transition cursor-default">Living Room Makeovers (From ₹1L)</li>
              <li className="hover:text-[#221F1D] transition cursor-default">Bespoke Master Bedrooms</li>
              <li className="hover:text-[#221F1D] transition cursor-default">Custom Cupboards & Wardrobes</li>
              <li className="hover:text-[#221F1D] transition cursor-default">PEB Work & Industrial Sheds</li>
            </ul>
          </div>

          {/* Column 4: Contact & Main Address */}
          <div className="space-y-3">
            <h4 className="text-[#221F1D] font-serif font-semibold text-sm tracking-wider uppercase border-b border-[#E5DDD0] pb-2">
              Studio & Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8735C] flex-shrink-0 mt-0.5" />
                <span className="text-[#403B37] font-medium">Dasna Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8735C] flex-shrink-0" />
                <a href={`tel:+${PHONE_NUMBER}`} className="text-[#403B37] hover:text-[#B8735C] font-semibold transition">
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8735C] flex-shrink-0" />
                <span className="text-[#403B37]">nexorabuildersinterior@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#6A635E] pt-1">
                <Clock className="w-4 h-4 text-[#B8735C] flex-shrink-0 mt-0.5" />
                <span>Mon – Sat: 10 AM – 7:30 PM<br/>(Sunday on Appointment)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8C847E] gap-4">
          <p>© {new Date().getFullYear()} Nexora Builders and Interior. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-[#221F1D] transition">
              Privacy Policy & Terms
            </Link>
            <span className="text-[#D4CCC0]">•</span>
            <span>Dasna Ghaziabad, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
