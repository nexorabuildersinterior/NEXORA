import React from 'react';
import { MessageCircle, CheckCircle2, Clock, ArrowRight, Tag } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function ServiceCard({ service, showBookingButton = true }) {
  const { title, subtitle, description, image, highlights, turnaround, priceStarting } = service;

  return (
    <div className="group bg-white rounded-2xl border border-[#EAE4D9] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#B8735C]/60 transition-all duration-300 flex flex-col h-full">
      {/* Service Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EFE6]">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3.5 right-3.5 flex flex-col items-end gap-1.5">
          {turnaround && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-white/95 text-[#221F1D] border border-[#EAE4D9] backdrop-blur-md shadow-xs">
              <Clock className="w-3 h-3 text-[#B8735C]" />
              {turnaround}
            </span>
          )}
          {priceStarting && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#B8735C] text-white shadow-xs">
              <Tag className="w-2.5 h-2.5" />
              {priceStarting}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
        <div className="space-y-3">
          <div>
            {subtitle && (
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B8735C] block mb-1">
                {subtitle}
              </span>
            )}
            <h3 className="font-serif text-xl font-bold text-[#221F1D] group-hover:text-[#B8735C] transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-[#6A635E] text-xs sm:text-sm leading-relaxed font-light">
            {description}
          </p>

          {/* Highlights checklist */}
          {highlights && highlights.length > 0 && (
            <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#403B37] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8735C] flex-shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        {showBookingButton && (
          <button
            onClick={() => openWhatsApp({ serviceName: title })}
            className="cursor-pointer w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#B8735C] text-[#221F1D] hover:text-white border border-[#EAE4D9] hover:border-[#B8735C] font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 group-hover/btn:text-white transition-colors" />
            <span>Consult on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8A8179] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
          </button>
        )}
      </div>
    </div>
  );
}
