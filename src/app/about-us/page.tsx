import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Award, MapPin, Mail, HeartPulse } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Xana Medtec is a market development partner for innovative medical device manufacturers scaling internationally.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us - Xana Medtec',
    description:
      'Bridging the gap between medical device market entry and sustainable clinical adoption.',
    url: 'https://www.xanamedtec.com/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Page Banner */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/85 to-[#002678]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>Our Mission & Vision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              About Xana Medtec
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              A specialized market development partner bridging the divide between breakthrough medical innovations and sustainable clinical practice.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Achievements & Industry Recognition */}
      <section className="relative z-20 -mt-10 sm:-mt-12 container-boxed mb-12">
        <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.08)] flex flex-col items-center">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-6 self-start sm:self-center">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Industry Recognition & Achievements</span>
          </div>

          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 p-2 sm:p-4 border border-gray-100 flex justify-center items-center">
            <Image
              src="/images/about/company-achievements.png"
              alt="Xana Medtec - Healthcare Testing Company of the Year 2023 UK Award Winner by Global Healthcare & Pharma"
              width={1024}
              height={354}
              priority
              className="w-full h-auto max-h-[380px] object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 3. Mission Statement Card */}
      <section className="container-boxed mb-20">
        <div className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.08)]">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-6">
            CORE MISSION
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002D62] tracking-tight leading-tight mb-8">
            Moving beyond basic distribution agreements to build routine medical adoption.
          </h2>

          <p className="text-base sm:text-lg text-[#606367] leading-relaxed mb-6 font-medium">
            Xana Medtec is a market development partner for innovative medical device manufacturers scaling internationally. Moving beyond basic distribution agreements, we bridge the gap between market entry and sustainable clinical adoption.
          </p>

          <p className="text-base sm:text-lg text-[#606367] leading-relaxed">
            By combining strategy with targeted clinical engagement, we work alongside manufacturers and local distributors across the entire lifecycle—turning early interest into routine medical practice and long-term commercial success.
          </p>
        </div>
      </section>

      {/* 3. Three Core Pillars */}
      <section className="container-boxed py-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">
              Strategic Alignment
            </h3>
            <p className="text-sm text-[#606367] leading-relaxed">
              We align regulatory requirements, reimbursement pathways, and hospital procurement criteria with qualified international distributor networks.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">
              Clinical Engagement
            </h3>
            <p className="text-sm text-[#606367] leading-relaxed">
              We connect healthcare professionals with real clinical trials, in-hospital demonstrations, and KOL advocacy to build genuine clinical trust.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">
              Long-Term Adoption
            </h3>
            <p className="text-sm text-[#606367] leading-relaxed">
              We remain actively involved well beyond the first sale, supporting continuous clinician training, distributor enablement, and market scale.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Headquarters & Contact Section */}
      <section className="container-boxed py-12 mb-24">
        <div className="bg-[#002D62] text-white rounded-[28px] p-8 sm:p-14 lg:p-16 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              HEADQUARTERS
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Connect With Our Manchester Team
            </h2>

            <div className="space-y-4 mb-10 text-slate-200 text-sm sm:text-base">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[#20B2AA] shrink-0" />
                <span>Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-[#20B2AA] shrink-0" />
                <a href="mailto:info@xanamedtec.com" className="hover:text-white underline">
                  info@xanamedtec.com
                </a>
              </div>
            </div>

            <ModalTriggerButton variant="teal" size="lg" className="px-10 py-3.5 shadow-lg">
              Get in Touch
            </ModalTriggerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
