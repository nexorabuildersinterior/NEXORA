import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#EAE4D9] flex items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      {/* Call button */}
      <a
        href={`tel:+${PHONE_NUMBER}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-transparent text-[#221F1D] font-semibold text-xs tracking-wider uppercase hover:bg-[#EAE4D9]/40 transition active:bg-[#EAE4D9] border-r border-[#EAE4D9]"
      >
        <Phone className="w-4 h-4 text-[#B8735C]" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase transition active:brightness-95 cursor-pointer shadow-xs"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
}
