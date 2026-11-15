import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() => openWhatsApp()}
      aria-label="Chat with interior designer on WhatsApp"
      className="cursor-pointer fixed right-4 md:right-6 bottom-20 md:bottom-8 z-40 w-12 h-12 md:w-13 md:h-13 bg-white text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-[#EAE4D9] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current transition-colors" />
      <span className="sr-only">WhatsApp Chat</span>
    </button>
  );
}
