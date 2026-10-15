import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Zap, Activity, Armchair, HelpCircle } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'Vein Finder System',
  description:
    'Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Engineered to eliminate first-attempt venipuncture failures and support DIVA patients.',
  alternates: {
    canonical: '/vein-finder',
  },
  openGraph: {
    title: 'Vein Finder System - Xana Medtec',
    description:
      'Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Supports DIVA patients and compliant with NHS IPC non-contact standards.',
    url: 'https://www.xanamedtec.com/vein-finder',
    images: ['/images/assets/07-vein-finder-banner.png'],
  },
};

const clinicalBenefits = [
  'Supports DIVA patients, designed for paediatrics, neonatal, oncology, renal patients and people with obesity.',
  'Improves first-stick success, real-time vein visualisation helps reduce repeat attempts, procedure time and discomfort.',
  '91.7% reduction in cannulation attempts and risk of infection. Attempted cannulation increases the risk of infection to the patient.',
  'Portable, handheld & easy to use on diverse population. Detects vessel depth and offers seven monochromatic modes to help visual veins in a variety of diverse skin tones.',
  'Enhanced vascular clarity and depth of veins in real-time.',
  'Three functional settings for adults, paediatrics, and neonates.',
];

const technicalSpecs = [
  { parameter: 'Light Source', details: 'Dual Near-Infrared Light (850nm)' },
  { parameter: 'Projection Latency', details: '30 FPS (Zero-latency real-time mapping)' },
  { parameter: 'Detectable Vessel Size', details: '≤ 1.0 mm' },
  { parameter: 'Depth Range', details: '0-3 mm (Shallow) / >3 mm (Deep tissue)' },
  { parameter: 'Unit Mass', details: '400g (Balanced handheld unit)' },
  { parameter: 'Power Reserve', details: '6360mAh Rechargeable Li-ion (Full shift runtime)' },
  { parameter: 'Hygienic Standards', details: 'CE Marked / NHS IPC Non-contact compliant' },
];

export default function VeinFinderPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Page Banner with Image 07 and Title "Vein Finder System" */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/assets/07-vein-finder-banner.png"
            alt="Vein Finder System Handheld Banner"
            fill
            className="object-cover object-center opacity-65 scale-105"
            priority
          />
          {/* Subtle dark gradient overlay to ensure WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/80 to-[#002678]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent" />
        </div>

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>Medical Devices • Vascular Visualisation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Vein Finder System
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Engineered to eliminate first-attempt venipuncture failures and support Difficult Venous Access (DIVA) patients.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section: Clinical Benefits with Image 09 supporting visual */}
      <section className="container-boxed py-16 sm:py-24">
        <div className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.08)] mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              CLINICAL EVIDENCE & BENEFITS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] tracking-tight">
              Clinical Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: 6 Benefits */}
            <div className="lg:col-span-7 space-y-5">
              {clinicalBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-[#20B2AA]/40 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#20B2AA]/15 text-[#20B2AA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#20B2AA]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Benefit 0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-[#323232] font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Supporting Image 09 (vein projection in clinical setting) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
                <Image
                  src="/images/assets/09-vein-finder-projection.png"
                  alt="Vein Finder Real-time Vascular Projection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#20B2AA]/80 backdrop-blur-md px-3 py-1 rounded-full">
                    Real-time 1:1 In-Vivo Mapping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mounting Options (Merged into a unified card under the hardware image) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              FLEXIBLE WORKFLOW INTEGRATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight">
              Mounting & Deployment Options
            </h3>
          </div>

          {/* Unified Card: Featured Image Above, Both Text Boxes Merged Underneath */}
          <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-gray-200/90 shadow-[0_12px_45px_-10px_rgba(0,45,98,0.08)] max-w-4xl mx-auto">
            {/* Featured Hardware Image for Both Options */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/80 mb-10 flex items-center justify-center p-6 group">
              <Image
                src="/images/assets/10-mobile-trolley-mount.png"
                alt="Vein Finder Clinical Mounting and Deployment Hardware"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/60">
                  Clinical Hardware Configurations
                </span>
              </div>
            </div>

            {/* Merged Text Options Underneath the Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
              {/* Option 1: Mobile Trolley Mount */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 hover:border-[#20B2AA]/50 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 mb-3">
                  A&E / ICU / Wards
                </div>
                <h4 className="text-xl font-bold text-[#002D62] tracking-tight mb-2">
                  Mobile Trolley Mount
                </h4>
                <p className="text-sm text-[#606367] leading-relaxed">
                  Height-adjustable floor stand with lockable castor wheels, optimized for A&E, ICU, and ward mobility.
                </p>
              </div>

              {/* Option 2: Flexible Desktop Stand */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 hover:border-[#20B2AA]/50 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 mb-3">
                  Phlebotomy & Outpatient Desks
                </div>
                <h4 className="text-xl font-bold text-[#002D62] tracking-tight mb-2">
                  Flexible Desktop Stand
                </h4>
                <p className="text-sm text-[#606367] leading-relaxed">
                  Compact articulated mounting arm designed for phlebotomy stations and fixed clinical consultation desks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Table: Technical Specifications */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              TECHNICAL DATA
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight">
              Technical Specifications
            </h3>
          </div>

          <div className="bg-white rounded-[24px] overflow-hidden border border-gray-200/90 shadow-sm max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#002D62] text-white">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider border-b border-[#002D62]">
                      Specification Parameter
                    </th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider border-b border-[#002D62]">
                      Clinical Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {technicalSpecs.map((spec, index) => (
                    <tr
                      key={spec.parameter}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]/70'}
                    >
                      <td className="py-4 px-6 text-sm font-bold text-[#002D62]">
                        {spec.parameter}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#606367] font-medium">
                        {spec.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5. Consultation & Trial Request CTA */}
        <div className="bg-[#002D62] text-white rounded-[28px] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-4">
              HOSPITAL EVALUATION & SUPPLY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Request a Clinical Trial or Demonstration
            </h2>
            <p className="text-base text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Experience the Vein Finder System in your clinical ward, phlebotomy department, or pediatric unit. Contact us to schedule an on-site trial or request commercial distributor terms.
            </p>
            <ModalTriggerButton variant="teal" size="lg" className="px-9 py-3.5 shadow-lg">
              Book Demonstration or Inquire
            </ModalTriggerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
