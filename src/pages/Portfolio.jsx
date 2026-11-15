import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Sparkles, MessageCircle } from 'lucide-react';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [index, setIndex] = useState(-1);

  const categories = ['All', 'Kitchen', 'Living Room', 'Bedroom', 'Wardrobe', 'PEB Work'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const slides = filteredProjects.map(p => ({
    src: p.image,
    title: p.title,
    description: `${p.category} • ${p.tagline || ''}`
  }));

  return (
    <div className="py-12 md:py-20 bg-[#FAF7F2] min-h-screen transition-opacity duration-500 ease-out">
      <Helmet>
        <title>Portfolio & Real Works Gallery | Nexora Builders and Interior</title>
        <meta name="description" content="Explore authentic completed projects by Nexora Builders and Interior: modular kitchens, living lounges, bespoke wardrobes, bedroom designs, and PEB structures in Dasna, Ghaziabad & NCR." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Section */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
            Authentic On-Site Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#221F1D] tracking-tight">
            Our Real <span className="font-accent text-[#B8735C]">Work & Projects</span>
          </h1>
          <p className="text-[#6A635E] text-sm md:text-base font-light leading-relaxed">
            Every photo shown here is from our authentic completed sites. Select a category below to browse our real modular kitchens, living lounges, bedrooms, wardrobes, and PEB industrial structures.
          </p>
        </div>

        {/* Category Filters with smooth transition */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? 'bg-[#B8735C] text-white shadow-md scale-102'
                    : 'bg-white text-[#5A5550] border border-[#EAE4D9] hover:border-[#B8735C]/60 hover:text-[#221F1D] hover:bg-[#FAF7F2]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] text-[#8C7A6B]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Image Grid with smooth transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-300">
          {filteredProjects.map((item, idx) => (
            <div key={item.id} className="transition-all duration-300 transform hover:scale-[1.01]">
              <ProjectCard
                project={item}
                onClick={() => setIndex(idx)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Custom Project Callout */}
        <div className="mt-16 bg-[#F4EFE6] p-8 md:p-12 rounded-3xl border border-[#E5DDD0] text-center max-w-3xl mx-auto shadow-xs space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#221F1D]">
            Inspired by One of Our <span className="font-accent text-[#B8735C]">Designs</span>?
          </h3>
          <p className="text-[#6A635E] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Every space we execute is customized to your exact floor plan, lifestyle, and budget. Contact our design team for a free site visit and 3D concept.
          </p>
          <button
            onClick={() => openWhatsApp({ serviceName: `Portfolio Inquiry - ${activeCategory}` })}
            className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B8735C] hover:bg-[#A5624C] text-white active:scale-95 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Inquire About Similar Design ({DISPLAY_PHONE})</span>
          </button>
        </div>

        {/* High-res Image Lightbox Modal */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </div>
  );
}
