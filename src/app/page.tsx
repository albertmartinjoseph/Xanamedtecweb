'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { TimelineStepper } from '@/components/landing/TimelineStepper';
import { FlowingHexBackground } from '@/components/landing/FlowingHexBackground';
import { Tabs } from '@/components/ui/Tabs';
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
  type LucideIcon,
} from 'lucide-react';

interface Benefit {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const distributorBenefits: Benefit[] = [
  {
    number: '01',
    title: 'Exclusive Territory',
    description: 'Secured market exclusivity to protect and drive your local distribution growth.',
    icon: Award,
  },
  {
    number: '02',
    title: 'Regulatory Support',
    description: 'Comprehensive compliance and certification documentation ready for swift onboarding.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Sales & Training',
    description: 'Dedicated technical training and continuous marketing collateral for your team.',
    icon: BookOpen,
  },
];

const manufacturerBenefits: Benefit[] = [
  {
    number: '01',
    title: 'Targeted Placement',
    description: 'Match your technology with pre-vetted distributors seeking active clinical solutions.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Streamlined Logistics',
    description: 'End-to-end management from initial product trial to global supply chain rollout.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Accelerated Growth',
    description: 'Minimize time-to-market across target international healthcare networks.',
    icon: TrendingUp,
  },
];

const PartnerPanel: React.FC<{
  title: string;
  intro: string;
  benefits: Benefit[];
  cta: string;
  onCta: () => void;
}> = ({ title, intro, benefits, cta, onCta }) => (
  <div className="animate-in fade-in duration-200">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h3 className="font-serif font-normal text-3xl sm:text-4xl text-[#002D62] leading-tight mb-3">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">{intro}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-200 md:divide-x divide-y md:divide-y-0 divide-gray-200">
      {benefits.map(({ number, title: benefitTitle, description, icon: Icon }) => (
        <div key={number} className="group py-9 md:px-9">
          <div className="flex items-start justify-between mb-8">
            <span className="font-serif text-6xl leading-none text-teal-600">{number}</span>
            <Icon
              className="w-7 h-7 text-[#002D62]/40 transition-colors duration-300 group-hover:text-[#002D62]"
              strokeWidth={1.25}
            />
          </div>
          <h4 className="text-xl font-bold text-[#002D62] mb-2">{benefitTitle}</h4>
          <p className="text-base text-[#4B5563] leading-relaxed">{description}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <button
        type="button"
        onClick={onCta}
        className="group inline-flex items-center gap-4 rounded-full pl-8 pr-2 py-2 bg-[#002D62] text-white font-semibold text-base hover:bg-[#147F79] transition-colors duration-300 cursor-pointer"
      >
        <span>{cta}</span>
        <span className="w-11 h-11 rounded-full bg-white text-[#002D62] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  </div>
);

const pathways = [
  {
    href: '/international-distribution',
    label: 'Global Network',
    title: 'International Distribution',
    description: 'Partnering with accredited global healthcare distributors to deliver solutions worldwide.',
    cta: 'Explore Network',
    icon: Globe2,
  },
  {
    href: '/clinical-services',
    label: 'Diagnostic & Clinical',
    title: 'Clinical Services',
    description: 'Comprehensive diagnostic support, equipment integration, and workflow assistance.',
    cta: 'View Services',
    icon: Stethoscope,
  },
];

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      {/* 1. Hero: background video, headline anchored low */}
      <section className="hero-surface hero-home relative overflow-hidden bg-[#002D62] text-white min-h-[calc(100svh-3.75rem)] flex items-center py-12">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 saturate-[1.15]"
          >
            <source src="/videos/hero-banner.mp4" type="video/mp4" />
          </video>
          {/* Scrims keep the copy at WCAG AA contrast and leave the right side open */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/60 to-[#002D62]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D] via-[#002D62]/30 to-transparent" />
        </div>

        <div className="container-boxed relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Brand lockup: the symbol is artwork, the name is live text */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={231}
                height={255}
                preload
                className="w-16 sm:w-24 lg:w-28 h-auto"
              />
              <div className="font-wordmark inline-flex flex-col leading-none">
                <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight">
                  Xana
                </span>
                <span className="mt-2 sm:mt-3 rounded-lg bg-gradient-to-r from-[#0A7BD1] to-[#20B2AA] py-1 sm:py-1.5 text-center text-sm sm:text-xl font-semibold tracking-[0.32em] pl-[0.32em] text-white">
                  MEDTEC
                </span>
              </div>
            </div>

            <div className="eyebrow text-teal-300 mb-6">
              <span>International Medical Distribution</span>
            </div>

            <h1 className="display-xl text-white mb-6">
              From Market Entry to <span className="italic text-teal-300">Clinical Adoption</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-100 font-light leading-relaxed max-w-2xl">
              Your medical device deserves more than a distributor. It needs the right market strategy, the right partners and the right clinical support to succeed.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <span className="scroll-cue hidden sm:block absolute z-10 bottom-0 left-1/2 w-px h-14 overflow-hidden bg-white/25" aria-hidden="true" />
      </section>

      {/* 2. Two ways in: one bordered panel split by a hairline, each half a link */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 bg-white border border-gray-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {pathways.map(({ href, label, title, description, cta, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden flex flex-col p-8 sm:p-10 lg:p-12 transition-colors duration-500 hover:bg-[#002D62]"
            >
              {/* Brand mark watermark, comes forward on hover */}
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={231}
                height={255}
                className="pointer-events-none absolute -right-10 -bottom-14 w-56 h-auto opacity-[0.07] transition-all duration-700 group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-6"
              />
              <div className="relative flex items-center justify-between mb-10 sm:mb-14">
                <span className="eyebrow text-teal-700 transition-colors duration-500 group-hover:text-teal-300">
                  {label}
                </span>
                <Icon
                  className="w-9 h-9 text-[#002D62] transition-colors duration-500 group-hover:text-teal-300"
                  strokeWidth={1.1}
                />
              </div>

              <h2 className="relative text-3xl sm:text-4xl text-[#002D62] transition-colors duration-500 group-hover:text-white mb-4">
                {title}
              </h2>

              <p className="relative text-base sm:text-lg text-[#4B5563] transition-colors duration-500 group-hover:text-slate-200 leading-relaxed max-w-md mb-10">
                {description}
              </p>

              <div className="relative mt-auto inline-flex items-center gap-4 font-semibold text-[#002D62] transition-colors duration-500 group-hover:text-white">
                <span>{cta}</span>
                <span className="w-11 h-11 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. WHAT MAKES US DIFFERENT: the eight stages as one hairline grid */}
      <FlowingHexBackground className="py-14 sm:py-20">
        <div className="container-boxed">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="eyebrow text-teal-300 mb-5">WHAT MAKES US DIFFERENT</span>
            <h2 className="text-4xl sm:text-5xl text-white mb-5">
              We Stay With the Product
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Most market-entry companies stop at the distributor. We don’t. Commercial strategy and clinical adoption work best together.
            </p>
          </div>

          <TimelineStepper />
        </div>
      </FlowingHexBackground>

      {/* 4. One Partner, Two Ways to Win */}
      <section className="bg-[#F4F8FB] border-t border-gray-200">
      <div className="container-boxed py-14 sm:py-20">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="eyebrow text-teal-700 mb-5">Strategic Collaboration</span>
          <h2 className="text-4xl sm:text-5xl text-[#002D62] mb-5">
            One Partner, Two Ways to Win
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
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
                <PartnerPanel
                  title="Distributor Partnership Network"
                  intro="Scale your portfolio with certified, cutting-edge med-tech solutions tailored for your region."
                  benefits={distributorBenefits}
                  cta="Join Distribution Network"
                  onCta={() =>
                    openModal(
                      'Distributor Partnership Inquiry',
                      'Partner with Xana Medtec to distribute certified innovative medical devices in your territory.'
                    )
                  }
                />
              ),
            },
            {
              id: 'manufacturer',
              label: 'For Manufacturer',
              content: (
                <PartnerPanel
                  title="Global Market Expansion"
                  intro="Connect your healthcare innovations directly with vetted international distribution partners."
                  benefits={manufacturerBenefits}
                  cta="Discuss Your Roadmap"
                  onCta={() =>
                    openModal(
                      'Manufacturer Expansion Roadmap',
                      'Discuss how Xana Medtec can take your medical technology from market entry to clinical adoption.'
                    )
                  }
                />
              ),
            },
          ]}
        />
      </div>
      </section>
    </div>
  );
}
