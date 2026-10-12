import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Activity, Cpu, FileText, MapPin, ArrowRight } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'Anisys Go - Xana Medtec',
  description:
    'High-resolution anorectal physiology and biofeedback therapy. A portable system developed in Manchester using 13 sensors for real-time assessment.',
  openGraph: {
    title: 'Anisys Go - Xana Medtec',
    description:
      'High-resolution anorectal physiology and biofeedback therapy developed in Manchester by clinicians.',
    images: ['/images/assets/06-anisys-go-banner.png'],
  },
};

const highlights = [
  {
    figure: '13',
    suffix: 'Sensors',
    label: 'High-Resolution Array',
    description: 'Simultaneous circumferential sensor recording of sphincter pressure and rectal sensitivity.',
    icon: Cpu,
  },
  {
    figure: 'Interactive',
    suffix: '',
    label: 'Biofeedback Therapy',
    description: 'Visual exercise cues empowering pelvic floor re-education directly in the clinic or community.',
    icon: Activity,
  },
  {
    figure: 'Colour-Mapped',
    suffix: '',
    label: 'Detailed Reports',
    description: 'Instant PDF summaries and secure digital data integration for electronic patient health records.',
    icon: FileText,
  },
  {
    figure: 'UK Innovated',
    suffix: '',
    label: 'Made in Manchester',
    description: 'Designed and validated by leading colorectal physiologists and healthcare specialists.',
    icon: MapPin,
  },
];

export default function AnisysGoPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Page Banner with Image 06 and Title "Anisys Go" */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/assets/06-anisys-go-banner.png"
            alt="Anisys Go Banner Kit"
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
              <span>Medical Devices • Diagnostic Physiology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Anisys Go
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              A breakthrough portable system bringing high-resolution anorectal manometry and guided biofeedback therapy closer to the patient.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Feature & Product Visual Section */}
      <section className="container-boxed py-16 sm:py-24">
        <div className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.08)] mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Authentic Copy */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 mb-4">
                CLINICAL PORTABILITY
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] tracking-tight leading-tight mb-6">
                High-resolution anorectal physiology and biofeedback therapy.
              </h2>

              <p className="text-base sm:text-lg text-[#606367] leading-relaxed mb-8">
                A smaller, more cost-effective and easier-to-use device that brings care closer to the patient&apos;s home. Developed in Manchester by clinicians, it uses 13 sensors to record sphincter function and rectal sensitivity in real time, with detailed colour-mapped reports and secure transfer to electronic patient records.
              </p>

              {/* Mandatory External Link Line from Spec */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-sm font-semibold text-[#323232]">
                  For more details visit:
                </span>
                <a
                  href="https://www.anisys.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#20B2AA] hover:text-[#002D62] transition-colors underline underline-offset-4"
                >
                  <span>https://www.anisys.co.uk/</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Product Image 08 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 p-6 border border-gray-100 shadow-sm flex items-center justify-center group">
                <Image
                  src="/images/assets/08-anisys-go-product.png"
                  alt="Anisys Go Product Console and Sensor Handpiece"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Four Highlight Tiles (Large Figure / Icon + Label) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              TECHNOLOGY ADVANTAGES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight">
              Engineered for Clinical Precision
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[24px] p-7 border border-gray-200/90 shadow-[0_4px_25px_-5px_rgba(0,45,98,0.06)] hover:border-[#20B2AA]/50 hover:shadow-[0_12px_35px_-8px_rgba(0,45,98,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#20B2AA]/10 text-[#20B2AA] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">0{i + 1}</span>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-2xl sm:text-3xl font-black text-[#002D62] tracking-tight">
                        {tile.figure}
                      </span>
                      {tile.suffix && (
                        <span className="text-sm font-bold text-[#20B2AA] uppercase">
                          {tile.suffix}
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-bold text-[#323232] mb-3">
                      {tile.label}
                    </div>

                    <p className="text-xs text-[#606367] leading-relaxed">
                      {tile.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Consultation CTA */}
        <div className="bg-[#002D62] text-white rounded-[28px] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-4">
              DISTRIBUTION & CLINICAL EVALUATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Explore Anisys Go for Your Health System
            </h2>
            <p className="text-base text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our clinical specialists to request technical dossiers, organize an in-hospital clinical demonstration, or discuss international territorial distribution.
            </p>
            <ModalTriggerButton
              variant="teal"
              size="lg"
              className="px-9 py-3.5 shadow-lg"
              modalTitle="Book Demonstration or Inquire"
            >
              Book Demonstration or Inquire
            </ModalTriggerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
