import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Sparkles, Stethoscope, Award, Users, Compass, Activity } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'International Distribution',
  description:
    'Partnering with accredited global healthcare distributors to deliver innovative medical device solutions worldwide. From market entry to clinical adoption.',
  alternates: {
    canonical: '/international-distribution',
  },
  openGraph: {
    title: 'International Distribution - Xana Medtec',
    description:
      'Partnering with accredited global healthcare distributors to deliver innovative medical device solutions worldwide.',
    url: 'https://www.xanamedtec.com/international-distribution',
    images: ['/images/assets/03-intl-distribution-banner.png'],
  },
};

const coreServices = [
  {
    number: '01',
    title: 'Market Strategy & Entry',
    subtitle: 'Identify the opportunity. Build the pathway.',
    description:
      'We assess market opportunities, identify potential applications and develop practical market-entry strategies tailored to your product and target territory.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Distributor Network Development',
    subtitle: 'Find the right partner, not just a distributor.',
    description:
      'We identify, assess and develop relationships with suitable distribution partners, building commercially and strategically aligned partnerships.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Clinical Demonstrations & Product Trials',
    subtitle: 'Take the product from presentation to practice.',
    description:
      'We support distributors and manufacturers with demonstrations, evaluations and trials so healthcare professionals can experience the technology in real clinical settings.',
    icon: Stethoscope,
  },
  {
    number: '04',
    title: 'Roadshows & Market Activation',
    subtitle: 'Create awareness. Generate engagement.',
    description:
      'We work with local distributors on product launches, hospital visits, roadshows and workshops that build momentum in the market.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'Clinical & End-User Training',
    subtitle: 'Confidence drives adoption.',
    description:
      'We support clinicians and end users with product training, practical demonstrations and guidance to use the technology correctly and confidently.',
    icon: Award,
  },
  {
    number: '06',
    title: 'Ongoing Distributor & Market Support',
    subtitle: 'Stay involved beyond the first sale.',
    description:
      'We work alongside distributors on sales development, product positioning, customer feedback and long-term market growth.',
    icon: Activity,
  },
];

const executionSteps = [
  {
    step: '01',
    title: 'Market Feasibility & Regulatory Readiness Assessment',
    detail: 'Evaluating territory-specific regulatory standards, clinical reimbursement pathways, and competitive landscape.',
  },
  {
    step: '02',
    title: 'Distributor Matchmaking & Contract Negotiation',
    detail: 'Rigorous vetting of distributor relationships to align on shared commercial goals, exclusivity, and accountability.',
  },
  {
    step: '03',
    title: 'Sales Enablement & Clinical Training',
    detail: 'Hands-on clinical application training, marketing collateral localization, and KOL endorsement initiatives.',
  },
  {
    step: '04',
    title: 'Post-Market Monitoring & Scale',
    detail: 'Routine clinical feedback gathering, post-market vigilance, and territory expansion roadmap execution.',
  },
];

export default function InternationalDistributionPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Full-width Banner with Image 03 behind text and dark overlay */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/assets/03-intl-distribution-banner.png"
            alt="International Distribution Healthcare Context"
            fill
            className="object-cover object-center opacity-45 mix-blend-luminosity scale-105"
            priority
          />
          {/* Gradients ensuring WCAG contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/80 to-[#002678]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent" />
        </div>

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>Global Healthcare Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              International Distribution
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              Connecting innovative medical device manufacturers with qualified distribution networks and clinical key opinion leaders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two Product Boxes Below Banner */}
      <section className="relative z-20 -mt-12 sm:-mt-16 container-boxed mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Product 1: Anisys Go */}
          <div className="bg-white rounded-[26px] p-8 sm:p-10 border border-gray-200/90 shadow-[0_12px_40px_-8px_rgba(0,45,98,0.09)] flex flex-col justify-between hover:shadow-[0_20px_50px_-8px_rgba(0,45,98,0.15)] hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-8 flex items-center justify-center p-4">
                <Image
                  src="/images/assets/04-anisys-go-card.png"
                  alt="Anisys Go System"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 mb-3">
                Physiology & Biofeedback
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-4">
                Anisys Go
              </h2>

              <p className="text-base text-[#606367] leading-relaxed mb-8">
                A comprehensive, portable system for the assessment of anorectal function and sensation, with biofeedback therapy functionality. Intuitive protocols align to international consensus guidance.
              </p>
            </div>

            <div>
              <Link
                href="/anisys-go"
                className="inline-flex items-center justify-between w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm bg-[#002D62] text-white hover:bg-[#20B2AA] transition-colors shadow-md group/btn"
              >
                <span>View Specifications</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product 2: Vein Finder System */}
          <div className="bg-white rounded-[26px] p-8 sm:p-10 border border-gray-200/90 shadow-[0_12px_40px_-8px_rgba(0,45,98,0.09)] flex flex-col justify-between hover:shadow-[0_20px_50px_-8px_rgba(0,45,98,0.15)] hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-8 flex items-center justify-center p-4">
                <Image
                  src="/images/assets/05-vein-finder-card.png"
                  alt="Vein Finder System"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 mb-3">
                Near-Infrared Vascular Imaging
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-4">
                Vein Finder System
              </h2>

              <p className="text-base text-[#606367] leading-relaxed mb-8">
                Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Engineered to eliminate first-attempt venipuncture failures and fully compliant with NHS IPC non-contact standards.
              </p>
            </div>

            <div>
              <Link
                href="/vein-finder"
                className="inline-flex items-center justify-between w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm bg-[#002D62] text-white hover:bg-[#20B2AA] transition-colors shadow-md group/btn"
              >
                <span>View Specifications</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Six Core Services */}
      <section className="container-boxed py-16 sm:py-24 border-t border-gray-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-4">
            END-TO-END CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002D62] tracking-tight mb-4">
            Six Core Services
          </h2>
          <p className="text-base sm:text-lg text-[#606367] leading-relaxed">
            Identify the opportunity, find the right partner and build the market, step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,45,98,0.05)] hover:border-[#20B2AA]/50 hover:shadow-[0_12px_32px_-6px_rgba(0,45,98,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold text-[#20B2AA] bg-[#20B2AA]/10 px-3 py-1 rounded-full">
                      SERVICE {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#002D62]/5 text-[#002D62] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#002D62]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#002D62] tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-teal-600 mb-3 uppercase tracking-wide">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#606367] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Section: Strategic Execution Framework */}
      <section className="bg-[#002D62] text-white py-20 sm:py-28 my-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />
        <div className="container-boxed relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-4">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Strategic Execution Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A structured, de-risked methodology designed to navigate regional clinical barriers and accelerate commercial uptake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#002678]/80 backdrop-blur-md rounded-[22px] p-7 border border-white/10 hover:border-[#20B2AA]/60 hover:bg-[#002D62] transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-[#20B2AA] mb-4 group-hover:scale-105 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Call to Action: Ready to Expand Your Medical Device Reach? */}
      <section className="container-boxed py-20 sm:py-28">
        <div className="bg-white rounded-[32px] p-8 sm:p-14 lg:p-18 border border-gray-200/90 shadow-[0_20px_50px_-10px_rgba(0,45,98,0.1)] text-center max-w-4xl mx-auto">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-6">
            PARTNER WITH US
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002D62] tracking-tight mb-6">
            Ready to Expand Your Medical Device Reach?
          </h2>

          <p className="text-base sm:text-lg text-[#606367] leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are a manufacturer looking to enter new territories or a distributor seeking pre-vetted medtech solutions, let&apos;s discuss your roadmap.
          </p>

          <ModalTriggerButton
            variant="teal"
            size="lg"
            className="px-10 py-4 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Get in Touch
          </ModalTriggerButton>
        </div>
      </section>
    </div>
  );
}
