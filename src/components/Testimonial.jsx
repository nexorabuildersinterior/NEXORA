import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonial({ testimonial }) {
  const { name, location, comment, rating = 5, projectType, date } = testimonial;

  return (
    <div className="relative bg-white p-7 rounded-2xl border border-[#EAE4D9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-[#B8735C]/50 transition-all duration-300 flex flex-col justify-between h-full group">
      {/* Quotation watermark */}
      <div className="absolute top-6 right-6 text-[#F0EAE1] group-hover:text-[#B8735C]/15 transition-colors pointer-events-none">
        <Quote className="w-12 h-12" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Rating Stars + Project Type */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-[#B8735C]">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#B8735C] text-[#B8735C]" />
            ))}
          </div>
          {projectType && (
            <span className="text-[10px] font-semibold tracking-wider text-[#6A635E] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#EAE4D9]">
              {projectType}
            </span>
          )}
        </div>

        {/* Comment quote */}
        <p className="text-[#3D3835] text-sm leading-relaxed font-light italic">
          "{comment}"
        </p>
      </div>

      {/* Author info */}
      <div className="relative z-10 border-t border-[#F0EAE1] pt-4 mt-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-serif font-bold text-[#221F1D] text-sm">{name}</h4>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="Verified Client" />
          </div>
          <p className="text-[#7A736E] text-xs mt-0.5">{location}</p>
        </div>
        {date && (
          <span className="text-[11px] text-[#8C847E]">{date}</span>
        )}
      </div>
    </div>
  );
}
