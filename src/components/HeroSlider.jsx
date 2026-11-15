import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { MessageCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const heroSlides = [
    {
      badge: "NEXORA BUILDERS AND INTERIOR",
      mainTitle: "Build Better,",
      accentTitle: "Live Better",
      subtitle: "Bespoke modular kitchens, designer living lounges, master bedrooms, and complete turnkey interior execution in Dasna, Ghaziabad & NCR.",
      image: "/images/livingroom/living-8.jpeg",
      cta: "Book Free Site Visit",
      tag: "5 Star Client Satisfaction",
      highlight: "1 BHK from ₹1.5L • 2 BHK from ₹2.5L"
    },
    {
      badge: "PRECISION MODULAR CRAFT",
      mainTitle: "German Hardware &",
      accentTitle: "Modular Kitchens",
      subtitle: "Engineered with boiling waterproof HDHMR boards, Blum/Hettich soft-close fittings, and exquisite quartz worktops.",
      image: "/images/kitchen/kitchen-1.jpeg",
      cta: "Explore Custom Kitchens",
      tag: "Special Package from ₹1,99,000",
      highlight: "10-Year Anti-Borer Warranty"
    },
    {
      badge: "CURATED BEDROOM & WARDROBE",
      mainTitle: "Elevated Living Designed Around",
      accentTitle: "Your Lifestyle",
      subtitle: "Hotel-grade master bedroom suites, fluted acoustic panelling, and full-height loft wardrobes tailored to perfection.",
      image: "/images/bedroom/bedroom-6.jpeg",
      cta: "View Real Projects",
      tag: "100% In-House Factory Fabrication",
      highlight: "On-Time Delivery Guaranteed"
    },
    {
      badge: "HEAVY INDUSTRIAL & COMMERCIAL",
      mainTitle: "Pre-Engineered Building",
      accentTitle: "PEB Structures",
      subtitle: "Turnkey design, steel truss fabrication, and on-site erection for industrial sheds, warehouses, and commercial spaces.",
      image: "/images/peb/peb-1.jpg",
      cta: "Get PEB Quotation",
      tag: "High-Tensile Structural Steel",
      highlight: "End-to-End Civil & Steel Works"
    }
  ];

  return (
    <section className="relative w-full h-[540px] md:h-[620px] lg:h-[680px] overflow-hidden bg-[#FAF7F2]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={`${slide.mainTitle} ${slide.accentTitle}`} 
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[7000ms] ease-out" 
            />

            {/* Warm Charcoal Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/90 via-[#221F1D]/55 to-black/30 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-5">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#D4AF37]/50 backdrop-blur-md shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F5DEB3]">
                    {slide.badge}
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white leading-[1.18] tracking-tight max-w-3xl mx-auto drop-shadow-md">
                  {slide.mainTitle} <span className="font-accent text-[#D4AF37]">{slide.accentTitle}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Offer Highlight Pill */}
                {slide.highlight && (
                  <div className="inline-block">
                    <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#B8735C]/90 text-white backdrop-blur-sm shadow-xs border border-white/20">
                      ⚡ {slide.highlight}
                    </span>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                  <button
                    onClick={() => openWhatsApp({ serviceName: slide.mainTitle })}
                    className="cursor-pointer px-7 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase bg-[#B8735C] hover:bg-[#A5624C] text-white active:scale-95 transition-all duration-200 shadow-lg flex items-center gap-2"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openWhatsApp()}
                    className="cursor-pointer px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-white/95 hover:bg-white text-[#221F1D] border border-white/80 backdrop-blur-md transition-all duration-200 flex items-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                    <span>WhatsApp {DISPLAY_PHONE}</span>
                  </button>
                </div>

                {/* Trust mini-pill */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#FAF7F2]/90 font-medium tracking-wider uppercase">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {slide.tag}
                  </span>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
