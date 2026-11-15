import React from 'react';
import { useForm } from 'react-hook-form';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import { MessageCircle, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    openWhatsApp(data);
    reset();
  };

  return (
    <div className="bg-white p-7 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-[#EAE4D9] relative">
      {/* Header Accent */}
      <div className="mb-6 space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
          Complimentary Consultation
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#221F1D]">
          Book a <span className="font-accent text-[#B8735C]">Free Site Visit</span>
        </h3>
        <p className="text-[#6A635E] text-xs sm:text-sm font-light">
          Share your requirements for a free 3D design concept and itemized BOQ estimate.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#403B37] mb-1.5">
            Full Name <span className="text-[#B8735C]">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl focus:bg-white focus:border-[#B8735C] focus:ring-2 focus:ring-[#B8735C]/20 outline-none text-[#221F1D] text-sm transition-all placeholder:text-[#A39B94]"
            placeholder="e.g. Ramesh Kumar"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone & City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#403B37] mb-1.5">
              Phone Number <span className="text-[#B8735C]">*</span>
            </label>
            <input
              {...register('phone', { 
                required: 'Phone number is required', 
                pattern: { value: /^[0-9]{10}$/, message: 'Enter valid 10-digit number' } 
              })}
              type="tel"
              className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl focus:bg-white focus:border-[#B8735C] focus:ring-2 focus:ring-[#B8735C]/20 outline-none text-[#221F1D] text-sm transition-all placeholder:text-[#A39B94]"
              placeholder="10-digit mobile"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#403B37] mb-1.5">
              Locality / City <span className="text-[#B8735C]">*</span>
            </label>
            <input
              {...register('city', { required: 'City is required' })}
              type="text"
              className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl focus:bg-white focus:border-[#B8735C] focus:ring-2 focus:ring-[#B8735C]/20 outline-none text-[#221F1D] text-sm transition-all placeholder:text-[#A39B94]"
              placeholder="Dasna, Ghaziabad, Hapur, Noida..."
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#403B37] mb-1.5">
            Service Required <span className="text-[#B8735C]">*</span>
          </label>
          <select
            {...register('service', { required: 'Select a service' })}
            className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl focus:bg-white focus:border-[#B8735C] focus:ring-2 focus:ring-[#B8735C]/20 outline-none text-[#221F1D] text-sm transition-all"
          >
            <option value="">Select Service / Category</option>
            <option value="Modular Kitchen Design (from ₹1,99,000)">Modular Kitchen Design (from ₹1,99,000)</option>
            <option value="Living Room Makeover (from ₹1,00,000)">Living Room Makeover (from ₹1,00,000)</option>
            <option value="Bespoke Bedroom Design">Bespoke Bedroom Design</option>
            <option value="Custom Cupboards & Wardrobes">Custom Cupboards & Wardrobes</option>
            <option value="PEB Work (Pre-Engineered Buildings & Sheds)">PEB Work (Pre-Engineered Buildings & Sheds)</option>
            <option value="Complete Home Interior Renovation">Complete Home Interior Renovation</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="cursor-pointer w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#B8735C] hover:bg-[#A5624C] text-white active:scale-[0.99] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2"
        >
          <span>Submit & Connect on WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-[#EAE4D9]"></div>
          <span className="flex-shrink mx-4 text-[#8C847E] text-[10px] font-bold uppercase tracking-widest">Instant Reach</span>
          <div className="flex-grow border-t border-[#EAE4D9]"></div>
        </div>

        {/* Direct WhatsApp button */}
        <button
          type="button"
          onClick={() => openWhatsApp()}
          className="cursor-pointer w-full py-3 px-6 rounded-xl font-semibold text-xs tracking-wider uppercase bg-[#FAF7F2] text-[#221F1D] hover:bg-white border border-[#EAE4D9] hover:border-[#B8735C] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
          <span>Chat Directly: {DISPLAY_PHONE}</span>
        </button>

        {/* Trust micro-badges */}
        <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#7A736E]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free Site Measurement
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8735C]" /> 100% Confidential
          </span>
        </div>
      </form>
    </div>
  );
}
