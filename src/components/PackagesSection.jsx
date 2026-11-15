import React from 'react';
import { Check, ArrowRight, Sparkles, Phone, MessageCircle, Star } from 'lucide-react';
import { packagesData } from '../data/services';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';

export default function PackagesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 transition-opacity duration-500 ease-out">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EAE4D9] text-[#B8735C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
            Transparent Pricing • Direct Factory Execution
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#221F1D] tracking-tight">
          Specialized Packages & <span className="font-accent text-[#B8735C]">Starting Rates</span>
        </h2>
        <p className="text-[#6A635E] text-sm md:text-base font-light leading-relaxed">
          Factory-direct modular engineering and industrial steel construction. Select an offering below or request a custom quotation tailored to your exact floor plan.
        </p>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-3xl bg-white border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              pkg.popular
                ? 'border-[#B8735C] shadow-[0_12px_40px_rgba(184,115,92,0.12)] ring-2 ring-[#B8735C]/20'
                : 'border-[#EAE4D9] shadow-sm hover:shadow-md'
            }`}
          >
            {/* Top image preview */}
            <div className="relative h-44 w-full overflow-hidden bg-stone-100">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                  pkg.popular 
                    ? 'bg-[#B8735C] text-white' 
                    : 'bg-white/90 backdrop-blur-md text-[#221F1D]'
                }`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Title on image bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-serif font-bold text-lg leading-tight drop-shadow-sm">
                  {pkg.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Price block */}
                <div className="border-b border-[#F0EAE1] pb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#221F1D]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#8C847E] font-medium">
                      {pkg.priceSuffix}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A736E] mt-1 font-light">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Features checklist */}
                <ul className="space-y-2.5 text-xs text-[#5A5550]">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#B8735C]">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp({ package: pkg.title })}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#B8735C] hover:bg-[#A5624C] text-white shadow-sm'
                      : 'bg-[#FAF7F2] hover:bg-[#221F1D] text-[#221F1D] hover:text-white border border-[#EAE4D9]'
                  }`}
                >
                  <span>Book Free Site Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Free Site Visit Studio Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#221F1D] via-[#2D2824] to-[#1C1A18] text-white p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5DEB3] text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span>5-Star Satisfaction • 100% Happy Clients</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Book Your <span className="text-[#D4AF37]">Free Site Visit</span> Today!
            </h3>
            
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Our lead interior architect will visit your site, take laser measurements, and prepare a personalized 3D spatial layout and BOQ estimate.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-300 pt-1">
              <span>📍 Studio: Dasna Ghaziabad, Uttar Pradesh, India</span>
              <span>•</span>
              <span>📞 {DISPLAY_PHONE}</span>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => openWhatsApp({ serviceName: "Free Site Visit Booking" })}
              className="cursor-pointer px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {DISPLAY_PHONE}</span>
            </button>
            <a
              href={`tel:+919958810865`}
              className="cursor-pointer px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
