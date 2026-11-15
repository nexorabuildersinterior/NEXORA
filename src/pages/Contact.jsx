import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../utils/whatsapp';

export default function Contact() {
  return (
    <div className="py-12 md:py-20 bg-[#FAF7F2] min-h-screen">
      <Helmet>
        <title>Contact Studio & Book Free Site Visit | Nexora Builders and Interior</title>
        <meta name="description" content="Visit Nexora Builders and Interior studio in Dasna, Ghaziabad, Uttar Pradesh or call +91 99588 10865 for an on-site design consultation and free 3D estimate." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
            Initiate Conversation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#221F1D] tracking-tight">
            Connect With Our <span className="font-accent text-[#B8735C]">Design & Engineering Studio</span>
          </h1>
          <p className="text-[#6A635E] text-sm md:text-base font-light leading-relaxed">
            Whether you are planning a turnkey residential makeover or a pre-engineered industrial shed (PEB), our team is ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Office Details + Maps */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone card */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE4D9] shadow-xs hover:border-[#B8735C]/60 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center text-[#B8735C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#221F1D] text-base">Direct Studio Line</h3>
                  <a 
                    href={`tel:+${PHONE_NUMBER}`} 
                    className="text-[#B8735C] text-sm font-bold hover:underline block mt-1"
                  >
                    {DISPLAY_PHONE}
                  </a>
                  <p className="text-[11px] text-[#8C847E] mt-1 font-light">Available Mon–Sat: 10 AM – 7:30 PM</p>
                </div>
              </div>

              {/* Email card */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE4D9] shadow-xs hover:border-[#B8735C]/60 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center text-[#B8735C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#221F1D] text-base">Inquiry Desk</h3>
                  <a 
                    href="mailto:contact@nexorabuilders.com" 
                    className="text-[#6A635E] text-sm hover:text-[#B8735C] transition-colors block mt-1 font-medium"
                  >
                    contact@nexorabuilders.com
                  </a>
                  <p className="text-[11px] text-[#8C847E] mt-1 font-light">Fast WhatsApp response guaranteed</p>
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-6 bg-white rounded-2xl border border-[#EAE4D9] shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center text-[#B8735C] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8735C] block">
                    Visit Our Studio
                  </span>
                  <h3 className="font-serif font-bold text-[#221F1D] text-base">
                    Dasna Ghaziabad, Uttar Pradesh, India
                  </h3>
                  <p className="text-[#6A635E] text-xs sm:text-sm leading-relaxed font-light">
                    Serving Dasna, Ghaziabad, Hapur, Noida, Greater Noida, and the entire Delhi-NCR region.
                  </p>
                  <p className="text-[#8C847E] text-xs font-light">
                    (Free parking on site • Consultations available by appointment)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EAE1] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE4D9] flex items-center justify-center text-[#B8735C] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#221F1D] text-sm">Consultation Hours</h4>
                  <p className="text-[#6A635E] text-xs mt-0.5 font-light">
                    Monday to Saturday: 10:00 AM – 7:30 PM
                  </p>
                  <p className="text-[#8C847E] text-xs mt-0.5 font-light">
                    Sunday: Dedicated site visits by prior booking only
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed (Dasna, Ghaziabad) */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-[#EAE4D9] shadow-xs relative">
              <iframe
                title="Nexora Builders and Interior Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55982.95540321287!2d77.49479344445802!3d28.67912328775249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf302a0a2df33%3A0xe53be03aa4da2aa6!2sDasna%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5 sticky top-28">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
