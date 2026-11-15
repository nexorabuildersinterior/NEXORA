import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Building2, Briefcase, UserCheck } from 'lucide-react';

export const industryBrands = [
  {
    name: "Livspace",
    role: "Modular Kitchens & Turnkey Handover",
    badge: "Former Employee & Site Experience",
    experienceDetail: "Hands-on experience in German modular production, Blum fittings, and standardized 45-day residential delivery.",
    tag: "Modular Kitchen Specialist",
    icon: "🛋️"
  },
  {
    name: "Galaxy Interior",
    role: "Luxury Residential & Millwork",
    badge: "Past Work & Project Craftsmanship",
    experienceDetail: "Execution of premium fluted wooden louvers, backlit onyx/marble feature walls, and bespoke luxury lounges.",
    tag: "Luxury Interior Specialist",
    icon: "✨"
  },
  {
    name: "Gyproc",
    role: "False Ceilings & Acoustic Drywalls",
    badge: "Certified Gypsum Ceiling Work",
    experienceDetail: "Design and installation of crack-free multi-level gypsum ceilings, thermal insulation, and concealed cove lighting.",
    tag: "Ceiling & Drywall Specialist",
    icon: "🏛️"
  },
  {
    name: "Saint-Gobain",
    role: "Architectural Glass & Mirrors",
    badge: "Glass & Glazing Mastery",
    experienceDetail: "Precision installation of tinted fluted glass, lacquered glass kitchen splashbacks, and toughened partitions.",
    tag: "Glass & Material Specialist",
    icon: "🪞"
  },
  {
    name: "Urban Club",
    role: "Verified Site Quality & Safety",
    badge: "Professional Service Standards",
    experienceDetail: "Strict quality inspection checklists, dust-free execution, and 5-star customer satisfaction benchmarks.",
    tag: "Service & Quality Specialist",
    icon: "⭐"
  },
];

export default function IndustryExperience({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8735C] block">
            Past Employee & Work Experience
          </span>
          <h3 className="font-serif font-bold text-lg md:text-xl text-[#221F1D]">
            Companies & Employers We Have Worked With
          </h3>
          <p className="text-xs text-[#6A635E] mt-1 font-light">
            Our team brings hands-on experience as former employees and project leads from top industry giants.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {industryBrands.map((b, i) => (
            <div
              key={i}
              className="px-4 py-2.5 rounded-xl border bg-[#FAF7F2] border-[#EAE4D9] flex items-center gap-2.5 shadow-2xs hover:scale-105 transition-transform"
            >
              <span className="text-sm">{b.icon}</span>
              <div className="text-left">
                <span className="font-bold text-xs text-[#221F1D] block">{b.name}</span>
                <span className="text-[10px] text-[#B8735C] font-semibold block">{b.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="past-experience" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] py-14 sm:py-20 border-y border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EAE4D9] text-[#B8735C]">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              Past Experience & Company Background
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#221F1D] tracking-tight">
            Companies & Previous Employers <span className="font-accent text-[#B8735C]">We Have Worked With</span>
          </h2>
          <p className="text-[#6A635E] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Our master craftsmen, site engineers, and project leads are former employees and have extensive on-site work experience with India's top interior and construction brands:
          </p>
        </div>

        {/* 5 Brand / Past Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {industryBrands.map((brand, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-[#EAE4D9] hover:border-[#B8735C] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xl">{brand.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF7F2] text-[#8C7A6B] border border-[#EAE4D9]">
                    {brand.tag}
                  </span>
                </div>

                {/* Brand Name */}
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#221F1D] tracking-tight group-hover:text-[#B8735C] transition-colors">
                    {brand.name}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B8735C] mt-1 bg-amber-50/70 px-2 py-0.5 rounded border border-amber-200/50">
                    <UserCheck className="w-3 h-3" />
                    <span>{brand.badge}</span>
                  </div>
                </div>

                {/* Work description */}
                <p className="text-xs text-[#6A635E] font-light leading-relaxed">
                  {brand.experienceDetail}
                </p>
              </div>

              {/* Specialization footer */}
              <div className="pt-3 border-t border-[#F0EAE1] flex items-center gap-1.5 text-[11px] text-[#403B37] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{brand.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility & Past Employee Guarantee Strip */}
        <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-6 border border-[#EAE4D9] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4D9] text-[#B8735C] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#221F1D]">
                Big-Brand Standards at Direct Local Rates
              </h4>
              <p className="text-xs text-[#6A635E] font-light">
                Our team brings the exact engineering, false ceiling, and modular standards learned at Livspace, Galaxy Interior, Gyproc, Saint-Gobain, and Urban Club directly to your home in Dasna, Ghaziabad & NCR.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#221F1D] border border-[#EAE4D9]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8735C]" /> Verified Industry Experience
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
