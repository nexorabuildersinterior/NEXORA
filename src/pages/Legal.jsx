import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, AlertCircle } from 'lucide-react';

export default function Legal() {
  return (
    <div className="py-12 md:py-20 bg-[#FAF7F2] min-h-screen">
      <Helmet>
        <title>Legal Disclaimers & Privacy Policy | Nexora Builders and Interior</title>
        <meta name="description" content="Official Privacy Policy, Service Terms & Conditions, and Materials Disclaimer for Nexora Builders and Interior." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-[#EAE4D9] shadow-[0_4px_30px_rgba(0,0,0,0.03)] space-y-12">
          
          <div className="border-b border-[#F0EAE1] pb-6 space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8735C] block">
              Transparency & Governance
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#221F1D]">
              Terms of Engagement & <span className="font-accent text-[#B8735C]">Privacy</span>
            </h1>
            <p className="text-xs text-[#8C847E]">Effective Date: November 2026 • Nexora Builders and Interior</p>
          </div>

          {/* Section 1: Privacy Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#221F1D] border-b border-[#F0EAE1] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#B8735C] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Privacy & Data Handling</h2>
            </div>
            
            <p className="text-[#6A635E] text-sm leading-relaxed font-light">
              At Nexora Builders and Interior, we hold client privacy with the highest degree of confidentiality. Any information shared through our consultation forms, WhatsApp channels, or on-site visits is handled under strict professional standards:
            </p>
            <ul className="list-disc pl-5 text-[#6A635E] text-xs sm:text-sm space-y-2 font-light">
              <li>Contact details (Name, Contact Number, Site Locality, Architectural Preferences) are used exclusively to scope estimates and coordinate design reviews.</li>
              <li>We never sell, rent, license, or disclose client personal data to third-party telemarketers or external broker platforms.</li>
              <li>Photographs taken during project handover are published to our portfolio only upon written consent of the client, with privacy strictly preserved.</li>
            </ul>
          </div>

          {/* Section 2: Terms & Conditions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#221F1D] border-b border-[#F0EAE1] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#B8735C] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Turnkey Project Terms & Timelines</h2>
            </div>

            <p className="text-[#6A635E] text-sm leading-relaxed font-light">
              By engaging Nexora Builders and Interior for architectural interior or PEB execution, clients are protected by standardized service agreements:
            </p>
            <ul className="list-disc pl-5 text-[#6A635E] text-xs sm:text-sm space-y-2 font-light">
              <li><strong>Handover Guarantee:</strong> Timelines commence upon site civil readiness and final approved technical 3D CAD drawings.</li>
              <li><strong>Itemized Material Integrity:</strong> Substrates specified in the signed Bill of Quantities (BOQ) are guaranteed authentic, verifiable via batch codes and manufacturer warranty cards.</li>
              <li><strong>Intellectual Property:</strong> Bespoke 3D renderings and lighting layouts generated during preliminary stages remain intellectual property of Nexora Builders and Interior until formal commissioning.</li>
            </ul>
          </div>

          {/* Section 3: Material Representation Disclaimer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#221F1D] border-b border-[#F0EAE1] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#B8735C] flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Natural Material & Steel Specification Disclaimer</h2>
            </div>

            <p className="text-[#6A635E] text-sm leading-relaxed font-light">
              Natural quartz slabs, imported marble grains, and natural wood veneers carry inherent organic variations in vein texture and subtle tone shifts. Computer render monitors may present subtle luminance variations compared to physical illuminated stone on site. Physical swatch samples are provided to every client prior to fabrication. PEB structural steel is engineered to IS codes matching soil and wind load parameters.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
