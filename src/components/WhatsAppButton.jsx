import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppButton({ text = "Chat on WhatsApp", className = "" }) {
  return (
    <button
      onClick={() => openWhatsApp()}
      className={`cursor-pointer inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF7F2] text-[#221F1D] border border-[#EAE4D9] font-medium px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#B8735C] active:scale-95 ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-emerald-600" />
      <span>{text}</span>
    </button>
  );
}
