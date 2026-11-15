import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Award, Users, Clock, Sparkles, Shield, HeartHandshake, ArrowRight, Building2, Star } from 'lucide-react';
import IndustryExperience from '../components/IndustryExperience';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';

export default function About() {
  const stats = [
    { value: "200+", label: "Completed Interiors & PEB Projects" },
    { value: "100%", label: "Happy Clients & 5-Star Satisfaction" },
    { value: "10 Years", label: "Structural & Material Warranty" },
    { value: "5 Brands", label: "Team's Top Industry Pedigree" },
  ];

  const pillars = [
    {
      icon: Users,
      title: "Client-Centric Tailoring",
      desc: "Every design starts with how your family lives, cooks, rests, and entertains. 100% customized 3D spatial planning."
    },
    {
      icon: Award,
      title: "Architectural Precision",
      desc: "Factory-grade German edge-banding, computerized panel cuts, and certified moisture-resistant HDHMR substrates."
    },
    {
      icon: Clock,
      title: "On-Time Delivery Guarantee",
      desc: "We respect your time. Our structured project pipelines deliver verified handover without contractor delays."
    },
    {
      icon: Shield,
      title: "Transparent Fixed Pricing",
      desc: "Comprehensive itemized Bills of Quantities (BOQ) with brand specifications, thickness grades, and hardware models."
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#FAF7F2] min-h-screen transition-opacity duration-500 ease-out">
      <Helmet>
        <title>About Nexora Builders and Interior | Build Better • Live Better | Dasna, Ghaziabad</title>
        <meta name="description" content="Learn about Nexora Builders and Interior - premier interior and PEB engineering studio in Dasna, Ghaziabad. Our team brings top experience from Livspace, Galaxy Interior, Gyproc, Saint-Gobain, and Urban Club." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Header Section */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
            Studio Heritage & Ethos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#221F1D] tracking-tight">
            Crafting Sanctuaries in <span className="font-accent text-[#B8735C]">Dasna, Ghaziabad & NCR</span>
          </h1>
          <p className="text-[#6A635E] text-sm md:text-base font-light leading-relaxed">
            Building spaces that harmonize quiet luxury, generational durability, and commercial structural strength.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white p-6 sm:p-10 md:p-14 rounded-3xl border border-[#EAE4D9] shadow-[0_4px_30px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#F5EFE6]">
            <img 
              src="/images/livingroom/living-8.jpeg" 
              alt="Nexora Builders and Interior Real Site" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-serif font-bold text-[#D4AF37] block">Nexora Builders and Interior</span>
                <span className="text-[11px] text-stone-300">Dasna Ghaziabad, Uttar Pradesh</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B8735C] text-white">
                Live Better
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
                Our Story & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221F1D] leading-tight">
                Where Elite Craftsmanship Meets <span className="font-accent text-[#B8735C]">Local Accessibility</span>
              </h2>
            </div>

            <p className="text-[#6A635E] text-sm leading-relaxed font-light">
              Founded with the mission to <em>"Build Better • Live Better"</em>, <strong>Nexora Builders and Interior</strong> is headquartered in Dasna, Ghaziabad. We bridge the gap between high-end corporate architectural finishes and honest, accessible pricing.
            </p>

            <p className="text-[#6A635E] text-sm leading-relaxed font-light">
              Our core project leads, engineers, and master installers have extensive hands-on experience having worked with India's leading interior and infrastructure organizations—including <strong>Livspace, Galaxy Interior, Gyproc, Saint-Gobain, and Urban Club</strong>. This pedigree allows us to bring world-class false ceilings, precision modular cabinetry, and Pre-Engineered Building (PEB) steel structures to every site.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-[#3D3835] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8735C] flex-shrink-0" />
                <span>Modular Kitchens starting at ₹1,99,000 & Living Rooms at ₹1,00,000</span>
              </div>
              <div className="flex items-center gap-3 text-[#3D3835] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8735C] flex-shrink-0" />
                <span>100% Customized Bedroom, Cupboard & False Ceiling Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-[#3D3835] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8735C] flex-shrink-0" />
                <span>Full-Scale Pre-Engineered Building (PEB) Warehouse & Shed Fabrication</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp({ serviceName: "Meet With Project Lead" })}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B8735C] hover:bg-[#A5624C] text-white transition-all shadow-sm"
              >
                <span>Schedule Free Site Visit ({DISPLAY_PHONE})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Industry Experience Detailed Highlight */}
        <IndustryExperience />

        {/* Numerical Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4D9] text-center space-y-1 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1D] block">
                {s.value}
              </span>
              <span className="text-xs text-[#7A736E] font-medium tracking-wide block">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C]">
              Our Guiding Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1D]">
              Why Discerning Clients Choose <span className="font-accent text-[#B8735C]">Nexora</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-2xl border border-[#EAE4D9] hover:border-[#B8735C]/60 transition-all duration-300 space-y-4 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EAE4D9] text-[#B8735C] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-[#221F1D] text-base">{pillar.title}</h4>
                  <p className="text-[#6A635E] text-xs sm:text-sm leading-relaxed font-light">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
