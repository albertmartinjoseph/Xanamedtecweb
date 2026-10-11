'use client';

import React from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import { TimelineStepper } from '@/components/landing/TimelineStepper';
import { FlowingHexBackground } from '@/components/landing/FlowingHexBackground';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';
import {
  ArrowRight,
  Globe2,
  Stethoscope,
  ShieldCheck,
  Award,
  BookOpen,
  Target,
  Truck,
  TrendingUp,
} from 'lucide-react';

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Hero Section (Spec Section 4: Dark Navy, Background Video, Geometric Typography, Small Teal Pill) */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-36 sm:pb-40 lg:pb-44 overflow-hidden">
        {/* Background Video Layer from Reference Folder - Vivid & Colorful */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85 saturate-[1.3] contrast-[1.08] scale-105 transition-opacity duration-1000"
          >
            <source src="/videos/hero-banner.mp4" type="video/mp4" />
          </video>
          {/* Gradients: dark high-contrast scrim on left for WCAG AA readability, open on right for vivid video colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/70 to-[#002D62]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-transparent to-[#002D62]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent" />
        </div>

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            {/* Small box / pill label above the headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>International Medical Distribution</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              From Market Entry to Clinical Adoption
            </h1>

            {/* Intro Copy */}
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              Your medical device deserves more than a distributor. It needs the right market strategy, the right partners and the right clinical support to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two Navigation Boxes Directly Below Hero (Cards, Whole Card Clickable) */}
      <section className="relative z-20 -mt-16 sm:-mt-20 container-boxed mb-20 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: International Distribution */}
          <Link
            href="/international-distribution"
            className="group block bg-white rounded-[24px] p-8 sm:p-10 border border-gray-200/90 shadow-[0_10px_35px_-5px_rgba(0,45,98,0.08)] hover:shadow-[0_20px_45px_-5px_rgba(0,45,98,0.14)] hover:border-[#20B2AA]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#002D62]/10 text-[#002D62] group-hover:bg-[#20B2AA]/15 group-hover:text-[#20B2AA] flex items-center justify-center transition-colors">
                <Globe2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                Global Network
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight group-hover:text-[#002678] transition-colors mb-3">
              International Distribution
            </h2>

            <p className="text-sm sm:text-base text-[#606367] leading-relaxed mb-6">
              Partnering with accredited global healthcare distributors to deliver solutions worldwide.
            </p>

            <div className="inline-flex items-center font-bold text-sm text-[#20B2AA] group-hover:text-[#1a938c] transition-colors">
              <span>Explore Network</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 2: Clinical Services */}
          <Link
            href="/clinical-services"
            className="group block bg-white rounded-[24px] p-8 sm:p-10 border border-gray-200/90 shadow-[0_10px_35px_-5px_rgba(0,45,98,0.08)] hover:shadow-[0_20px_45px_-5px_rgba(0,45,98,0.14)] hover:border-[#20B2AA]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#20B2AA]/10 text-[#20B2AA] group-hover:bg-[#002D62]/10 group-hover:text-[#002D62] flex items-center justify-center transition-colors">
                <Stethoscope className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full">
                Diagnostic & Clinical
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight group-hover:text-[#002678] transition-colors mb-3">
              Clinical Services
            </h2>

            <p className="text-sm sm:text-base text-[#606367] leading-relaxed mb-6">
              Comprehensive diagnostic support, equipment integration, and workflow assistance.
            </p>

            <div className="inline-flex items-center font-bold text-sm text-[#20B2AA] group-hover:text-[#1a938c] transition-colors">
              <span>View Services</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Section: WHAT MAKES US DIFFERENT (01-08 Connected Timeline with Flowing Hexagonal Contour Background) */}
      <FlowingHexBackground className="py-20 sm:py-28 my-8 shadow-2xl">
        <div className="container-boxed">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-4">
              WHAT MAKES US DIFFERENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              We Stay With the Product
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Most market-entry companies stop at the distributor. We don’t. Commercial strategy and clinical adoption work best together.
            </p>
          </div>

          {/* 8 Numbered Connected Steps Timeline */}
          <TimelineStepper />
        </div>
      </FlowingHexBackground>

      {/* 4. Section: One Partner, Two Ways to Win (Tabs inside one panel) */}
      <section className="container-boxed py-16 sm:py-24 border-t border-gray-200/80 mb-12">
        <div className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.08)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#002D62]/10 text-[#002D62] mb-3">
              Strategic Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002D62] tracking-tight mb-3">
              One Partner, Two Ways to Win
            </h2>
            <p className="text-sm sm:text-base text-[#606367]">
              Tailored commercial pathways designed specifically for international medical distributors and device manufacturers.
            </p>
          </div>

          <Tabs
            defaultTab="distributor"
            tabs={[
              {
                id: 'distributor',
                label: 'For Distributor',
                content: (
                  <div className="pt-6 animate-in fade-in duration-200">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                      <h3 className="text-2xl font-bold text-[#002D62] tracking-tight mb-2">
                        Distributor Partnership Network
                      </h3>
                      <p className="text-sm sm:text-base text-[#606367]">
                        Scale your portfolio with certified, cutting-edge med-tech solutions tailored for your region.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            01
                          </span>
                          <Award className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Exclusive Territory
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          Secured market exclusivity to protect and drive your local distribution growth.
                        </p>
                      </Card>

                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            02
                          </span>
                          <ShieldCheck className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Regulatory Support
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          Comprehensive compliance and certification documentation ready for swift onboarding.
                        </p>
                      </Card>

                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            03
                          </span>
                          <BookOpen className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Sales & Training
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          Dedicated technical training and continuous marketing collateral for your team.
                        </p>
                      </Card>
                    </div>

                    <div className="text-center mt-10">
                      <button
                        type="button"
                        onClick={() =>
                          openModal(
                            'Distributor Partnership Inquiry',
                            'Partner with Xana Medtec to distribute certified innovative medical devices in your territory.'
                          )
                        }
                        className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider rounded-[24px] px-7 py-3.5 bg-[#002D62] text-white hover:bg-[#20B2AA] transition-colors shadow-md group cursor-pointer"
                      >
                        <span>Join Distribution Network</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ),
              },
              {
                id: 'manufacturer',
                label: 'For Manufacturer',
                content: (
                  <div className="pt-6 animate-in fade-in duration-200">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                      <h3 className="text-2xl font-bold text-[#002D62] tracking-tight mb-2">
                        Global Market Expansion
                      </h3>
                      <p className="text-sm sm:text-base text-[#606367]">
                        Connect your healthcare innovations directly with vetted international distribution partners.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            01
                          </span>
                          <Target className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Targeted Placement
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          Match your technology with pre-vetted distributors seeking active clinical solutions.
                        </p>
                      </Card>

                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            02
                          </span>
                          <Truck className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Streamlined Logistics
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          End-to-end management from initial product trial to global supply chain rollout.
                        </p>
                      </Card>

                      <Card className="hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-[#20B2AA] uppercase tracking-wider bg-[#20B2AA]/10 px-2.5 py-1 rounded-lg">
                            03
                          </span>
                          <TrendingUp className="w-5 h-5 text-[#20B2AA]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#002D62] mb-2">
                          Accelerated Growth
                        </h4>
                        <p className="text-sm text-[#606367] leading-relaxed">
                          Minimize time-to-market across target international healthcare networks.
                        </p>
                      </Card>
                    </div>

                    <div className="text-center mt-10">
                      <button
                        type="button"
                        onClick={() =>
                          openModal(
                            'Manufacturer Expansion Roadmap',
                            'Discuss how Xana Medtec can take your medical technology from market entry to clinical adoption.'
                          )
                        }
                        className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider rounded-[24px] px-7 py-3.5 bg-[#002D62] text-white hover:bg-[#20B2AA] transition-colors shadow-md group cursor-pointer"
                      >
                        <span>Discuss Your Roadmap</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
