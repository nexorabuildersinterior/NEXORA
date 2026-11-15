import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  const { title, category, image, tagline } = project;

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#EAE4D9] shadow-sm hover:shadow-xl hover:border-[#B8735C]/60 transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#F5EFE6]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#221F1D] border border-[#EAE4D9] backdrop-blur-md shadow-xs transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="w-2.5 h-2.5 text-[#B8735C]" />
            {category}
          </span>
        </div>

        {/* Bottom subtle gradient on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/85 via-[#221F1D]/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <h4 className="font-serif font-bold text-white text-base md:text-lg leading-snug group-hover:text-[#F5DEB3] transition-colors duration-300">
            {title}
          </h4>
          {tagline && (
            <p className="text-stone-300 text-xs mt-1 line-clamp-1 font-light">
              {tagline}
            </p>
          )}
        </div>

        {/* Hover inspect overlay icon */}
        <div className="absolute inset-0 bg-[#221F1D]/25 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white text-[#221F1D] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-5 h-5 text-[#B8735C]" />
          </div>
        </div>
      </div>
    </div>
  );
}
