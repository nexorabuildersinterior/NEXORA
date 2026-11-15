import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle, Star, Palette, Clock, Tag, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { openWhatsApp, DISPLAY_PHONE, PHONE_NUMBER } from '../utils/whatsapp';

export default function Home() {
  // 6 curated featured projects across categories for the homepage teaser
  const featuredProjects = [
    projectsData.find(p => p.id === 1),  // Kitchen
    projectsData.find(p => p.id === 15), // Living Room
    projectsData.find(p => p.id === 22), // Bedroom
    projectsData.find(p => p.id === 30), // Wardrobe
    projectsData.find(p => p.id === 3),  // Kitchen 2
    projectsData.find(p => p.id === 38), // PEB
  ].filter(Boolean);

  const coreServicesTeaser = [
    {
      title: "Modular Kitchen Design",
      desc: "Waterproof HDHMR, Blum/Hettich hydraulic hardware, and acrylic gloss finishes.",
      image: "/images/kitchen/kitchen-1.jpeg",
      link: "/services"
    },
    {
      title: "Living Room Makeover",
      desc: "Backlit marble feature walls, acoustic fluted louvers, and floating TV consoles.",
      image: "/images/livingroom/living-24.jpeg",
      link: "/services"
    },
    {
      title: "Bespoke Bedroom Design",
      desc: "Designer padded headboards, ambient warm cove lighting, and restful suites.",
      image: "/images/bedroom/bedroom-6.jpeg",
      link: "/services"
    },
    {
      title: "Custom Cupboards & Wardrobes",
      desc: "Floor-to-ceiling loft storage, tinted profile glass, and internal organizers.",
      image: "/images/cupboard/wardrobe-5.jpeg",
      link: "/services"
    },
    {
      title: "PEB Work & Steel Structures",
      desc: "High-tensile steel industrial sheds, logistics warehouses, and commercial roofing.",
      image: "/images/peb/peb-1.jpg",
      link: "/services"
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16 transition-opacity duration-500 ease-out">
      <Helmet>
        <title>Nexora Builders and Interior | Build Better • Live Better | Dasna, Ghaziabad</title>
        <meta name="description" content="Nexora Builders and Interior in Dasna, Ghaziabad offers bespoke modular kitchens, living lounges, master bedrooms, custom wardrobes, and PEB industrial structures." />
      </Helmet>

      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Key Pillars Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#EAE4D9] shadow-[0_8px_30px_rgba(0,0,0,0.06)] grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#F0EAE1]">
          
          <div className="flex items-center gap-3.5 pt-2 lg:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center flex-shrink-0 text-[#B8735C]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#221F1D] text-sm sm:text-base">Premium Quality</h4>
              <p className="text-xs text-[#6A635E] mt-0.5 leading-relaxed font-light">Certified HDHMR & Blum hardware.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center flex-shrink-0 text-[#B8735C]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#221F1D] text-sm sm:text-base">On-Time Delivery</h4>
              <p className="text-xs text-[#6A635E] mt-0.5 leading-relaxed font-light">Guaranteed handover timelines.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center flex-shrink-0 text-[#B8735C]">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#221F1D] text-sm sm:text-base">Transparent Pricing</h4>
              <p className="text-xs text-[#6A635E] mt-0.5 leading-relaxed font-light">Fixed itemized BOQ estimates.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center flex-shrink-0 text-[#B8735C]">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#221F1D] text-sm sm:text-base">Customized Designs</h4>
              <p className="text-xs text-[#6A635E] mt-0.5 leading-relaxed font-light">100% personalized 3D spatial layout.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. About Studio Overview (Generic Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE4D9] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE4D9] text-[#B8735C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Welcome to Nexora</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#221F1D] tracking-tight">
              Build Better, <span className="font-accent text-[#B8735C]">Live Better</span>
            </h2>
            <p className="text-[#6A635E] text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Headquartered in <strong>Dasna Ghaziabad</strong>, Nexora Builders and Interior is a full-service design and engineering firm specializing in bespoke residential interiors, modular kitchens, luxury wardrobes, and heavy industrial Pre-Engineered Building (PEB) structures.
            </p>
            <p className="text-[#6A635E] text-xs sm:text-sm font-light leading-relaxed">
              Our team combines world-class craftsmanship with honest pricing. We eliminate contractor ambiguity through transparent itemized estimates, precision factory cutting, and guaranteed delivery timelines.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8735C] hover:text-[#8E4C36] transition-colors group"
              >
                <span>Learn More About Our Team & Pedigree</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-stone-100">
            <img
              src="/images/livingroom/living-8.jpeg"
              alt="Nexora Interior Design"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 4. Core Services & Specializations (Overview Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#221F1D] tracking-tight">
              Our Core <span className="font-accent text-[#B8735C]">Specialties</span>
            </h2>
            <p className="text-[#6A635E] text-xs sm:text-sm font-light">
              Explore our primary areas of expertise. View our dedicated services page for full specifications, materials, and pricing packages.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8735C] hover:text-[#8E4C36] transition-colors py-2 group flex-shrink-0"
          >
            <span>View All Services & Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Card Teaser Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {coreServicesTeaser.map((serv, i) => (
            <Link
              key={i}
              to={serv.link}
              className="group bg-white rounded-2xl p-5 border border-[#EAE4D9] hover:border-[#B8735C] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src={serv.image}
                    alt={serv.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>
                <h3 className="font-serif font-bold text-base text-[#221F1D] group-hover:text-[#B8735C] transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-[#6A635E] font-light leading-relaxed line-clamp-2">
                  {serv.desc}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-bold text-[#B8735C] uppercase tracking-wider flex items-center gap-1 group-hover:gap-1.5 transition-all">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Team Pedigree / Experience Strip (Livspace, Galaxy Interior, Gyproc, Saint-Gobain, Urban Club) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAE4D9] space-y-6 text-center">
          <div className="max-w-2xl mx-auto space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8735C] block">
              Proven Team Experience
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#221F1D]">
              Our Team Has Worked With Industry Leaders
            </h3>
            <p className="text-xs text-[#6A635E] font-light">
              Our master craftsmen, engineers, and project leads bring previous on-site experience from India's most respected interior and construction giants:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {["Livspace", "Galaxy Interior", "Gyproc", "Saint-Gobain", "Urban Club"].map((brand, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full bg-white border border-[#EAE4D9] text-xs font-bold text-[#221F1D] shadow-2xs hover:border-[#B8735C] hover:text-[#B8735C] transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>

          <div className="pt-1">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs text-[#B8735C] hover:underline font-semibold uppercase tracking-wider"
            >
              <span>Read About Our Pedigree & Standards</span> &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Real Projects (Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block mb-1">
              Curated Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#221F1D] tracking-tight">
              Featured <span className="font-accent text-[#B8735C]">Real Works</span>
            </h2>
            <p className="text-[#6A635E] text-xs sm:text-sm font-light mt-1">
              A glimpse into our recent modular kitchens, living consoles, master bedrooms, and PEB structures.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8735C] hover:text-[#8E4C36] transition-colors py-2 group flex-shrink-0"
          >
            <span>View Full Portfolio Gallery ({projectsData.length}+ Works)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 7. Book Free Site Visit Banner (Single Authority Place for Studio & Contact) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#221F1D] via-[#2D2824] to-[#1C1A18] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5DEB3] text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span>5-Star Satisfaction • 100% Happy Clients</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Book Your <span className="text-[#D4AF37]">Free Site Visit</span> Today!
              </h3>
              
              <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                Our lead architect will visit your site, take exact laser measurements, and discuss your lifestyle aesthetic and layout.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-stone-300 pt-1">
                <span>📍 Studio: Dasna Ghaziabad, Uttar Pradesh, India</span>
                <span>•</span>
                <span>📞 {DISPLAY_PHONE}</span>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => openWhatsApp({ serviceName: "Free Site Visit Booking" })}
                className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {DISPLAY_PHONE}</span>
              </button>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="cursor-pointer px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
