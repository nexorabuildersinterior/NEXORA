import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import IndustryExperience from '../components/IndustryExperience';
import PackagesSection from '../components/PackagesSection';
import { servicesData } from '../data/services';
import { Sparkles, Compass, Layers, CheckCircle2, Shield, Clock, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Services() {
  const processSteps = [
    { 
      num: "01", 
      icon: Compass,
      title: 'Free Site Visit & Spatial Audit', 
      desc: 'Our lead architect visits your site, takes laser measurements, and discusses your vision and spatial lifestyle needs.' 
    },
    { 
      num: "02", 
      icon: Layers,
      title: '3D Concept & Transparent BOQ', 
      desc: 'Visualize every angle with photorealistic 3D renders, material swatches, and a complete itemized quotation with zero hidden costs.' 
    },
    { 
      num: "03", 
      icon: Shield,
      title: 'Factory Crafting & On-Time Handover', 
      desc: 'Modular cabinetry and steel components are precision-cut in factory environments and installed seamlessly on-site.' 
    },
  ];

  const materialHighlights = [
    { title: "HDHMR & Marine Grade Ply", desc: "100% boiling water-proof and anti-termite core substrates for lifetime durability." },
    { title: "Blum & Hettich Hardware", desc: "Hydraulic soft-close hinges, tandem pull-outs, and heavy-duty concealed drawer slides." },
    { title: "Saint-Gobain Glass & Mirrors", desc: "Premium architectural tinted glass, fluted acoustic panels, and anti-glare mirrors." },
    { title: "Gyproc False Ceilings", desc: "Crack-resistant gypsum ceilings, ambient perimeter cove lighting, and thermal insulation." },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#FAF7F2] min-h-screen transition-opacity duration-500 ease-out">
      <Helmet>
        <title>Interior Services & PEB Work | Nexora Builders and Interior</title>
        <meta name="description" content="Bespoke modular kitchens, custom wardrobes, living lounges, bedroom designs, and Pre-Engineered Building (PEB) work in Dasna, Ghaziabad & NCR." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
            Residential & Industrial Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#221F1D] tracking-tight">
            Our Services & <span className="font-accent text-[#B8735C]">Specializations</span>
          </h1>
          <p className="text-[#6A635E] text-sm md:text-base font-light leading-relaxed">
            From bespoke modular kitchens and luxury living rooms to heavy pre-engineered industrial steel buildings (PEB), we deliver uncompromising engineering and aesthetics.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} showBookingButton={true} />
          ))}
        </div>

        {/* Packages Section */}
        <div className="pt-4">
          <PackagesSection />
        </div>

        {/* Industry Experience Banner */}
        <IndustryExperience />

        {/* 3-Step Execution Process */}
        <div className="bg-[#F4EFE6] text-[#221F1D] rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden border border-[#E5DDD0]">
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8735C]">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#221F1D]">
              The Nexora <span className="font-accent text-[#B8735C]">Execution Process</span>
            </h2>
            <p className="text-[#6A635E] text-xs sm:text-sm font-light">
              Predictable, stress-free delivery from your first sketch to final installation.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative bg-white border border-[#EAE4D9] p-8 rounded-2xl flex flex-col justify-between space-y-6 group hover:border-[#B8735C]/60 transition-colors shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#B8735C]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center text-[#B8735C] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-[#221F1D]">
                      {step.title}
                    </h4>
                    <p className="text-[#6A635E] text-xs sm:text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A635E]">
            <span className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4 text-[#B8735C]" /> On-Time Guaranteed Handover Timelines
            </span>
            <button
              onClick={() => openWhatsApp({ serviceName: "Execution Process Inquiry" })}
              className="text-[#B8735C] hover:underline uppercase tracking-wider font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Book your Free Site Visit with our team</span> &rarr;
            </button>
          </div>
        </div>

        {/* Material Standards & Craftsmanship */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE4D9] shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C]">
              Certified Materials Only
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1D]">
              Substrates & Brands We Trust: <span className="font-accent text-[#B8735C]">Zero Compromise</span>
            </h3>
            <p className="text-[#6A635E] text-xs sm:text-sm font-light">
              Leveraging our team's hands-on experience with Saint-Gobain, Gyproc, and top hardware suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialHighlights.map((mat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D9] space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#B8735C]" />
                <h4 className="font-serif font-bold text-[#221F1D] text-sm">{mat.title}</h4>
                <p className="text-[#6A635E] text-xs leading-relaxed font-light">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
