'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { TimelineStepper } from '@/components/landing/TimelineStepper';
import { Section, Words } from '@/components/ui/Blocks';
import { ArrowRight } from 'lucide-react';

// The four things a visitor can come here for, in plain words
const pathways: {
  href: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    href: '/international-distribution',
    title: 'International Distribution',
    description: 'For manufacturers and distributors',
    image: '/images/assets/03-intl-distribution-banner.png',
  },
  {
    href: '/international-distribution#devices',
    title: 'Medical Devices',
    description: 'For hospitals and clinics',
    image: '/images/assets/07-vein-finder-banner.png',
  },
  {
    href: '/clinical-services',
    title: 'Health Tests',
    description: 'Doctor-reviewed blood tests for patients',
    image: '/images/stock/care-team.jpg',
  },
  {
    href: '/blood-test-recommendation',
    title: 'Find Your Test',
    description: 'Not sure? Get a recommendation',
    image: '/images/stock/consultation.jpg',
  },
];

const devices = [
  {
    href: '/anisys-go',
    image: '/images/assets/06-anisys-go-banner.png',
    alt: 'Anisys Go Banner Kit',
    eyebrow: '13 sensors, in real time',
    title: 'Anisys Go',
    description: 'A portable system for assessing anorectal function, with biofeedback therapy built in.',
  },
  {
    href: '/vein-finder',
    image: '/images/assets/05-vein-finder-card.png',
    alt: 'Vein Finder System',
    eyebrow: '91.7% fewer cannulation attempts',
    title: 'Vein Finder System',
    description: 'Real-time vein mapping that helps clinicians find a vein at the first attempt.',
  },
];

const partners = [
  {
    label: 'For Distributors',
    title: 'Distributor Partnership Network',
    points: ['Exclusive territory', 'Regulatory support', 'Sales and training'],
    cta: 'Join the network',
    modal: [
      'Distributor Partnership Inquiry',
      'Partner with Xana Medtec to distribute certified innovative medical devices in your territory.',
    ],
  },
  {
    label: 'For Manufacturers',
    title: 'Global Market Expansion',
    points: ['Targeted placement', 'Streamlined logistics', 'Accelerated growth'],
    cta: 'Discuss your roadmap',
    modal: [
      'Manufacturer Expansion Roadmap',
      'Discuss how Xana Medtec can take your medical technology from market entry to clinical adoption.',
    ],
  },
];

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen">
      {/* 1. Hero: the film fills the screen, one statement on it. On scroll it
          settles into a rounded frame. */}
      <section className="hero-film relative min-h-svh flex flex-col items-center justify-center overflow-hidden text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-banner.mp4" type="video/mp4" />
        </video>
        {/* A veil of white so ink type reads on the film */}
        <div className="absolute inset-0 bg-white/55" />

        <div className="shell relative py-32">
          <h1 className="display max-w-5xl mx-auto">
            <Words>From Market Entry to Clinical Adoption</Words>
          </h1>
        </div>

        <div className="fade-in absolute bottom-10 inset-x-0 px-5 flex flex-wrap justify-center gap-3">
          <Link href="/international-distribution" className="btn">
            <span>Explore distribution</span>
            <ArrowRight />
          </Link>
          <Link href="/clinical-services" className="btn btn-ghost">
            <span>Book a health test</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* 2. Wayfinding: say who you are, go straight there */}
      <Section
        band
        eyebrow="Healthcare Testing Company of the Year 2023"
        title="What are you looking for?"
        intro="Your medical device deserves more than a distributor. It needs the right strategy, partners and clinical support."
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pathways.map(({ href, title, description, image }) => (
            <Link key={title} href={href} className="card group !p-2 flex flex-col">
              <span className="relative block overflow-hidden rounded-[1.125rem] aspect-[16/10]">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 440px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="flex items-center gap-4 px-4 py-5">
                <span className="flex-1 min-w-0">
                  <span className="label">{title}</span>
                  <span className="block text-soft mt-1">{description}</span>
                </span>
                <ArrowRight className="w-5 h-5 shrink-0 text-soft transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. The two devices: large picture, short statement */}
      <section className="section space-y-14 lg:space-y-20 overflow-hidden">
        {devices.map((device, i) => (
          <Link
            key={device.href}
            href={device.href}
            className="group shell grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 items-center"
          >
            <div className={`frame aspect-[4/3] ${i % 2 ? 'lg:order-2' : ''}`}>
              <Image
                src={device.image}
                alt={device.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="reveal">
              <div className="eyebrow mb-4">{device.eyebrow}</div>
              <h2 className="h-xl !animate-none">{device.title}</h2>
              <p className="lead mt-4 mb-7 max-w-md">{device.description}</p>
              <span className="more">
                <span>
                  <ArrowRight />
                </span>
                Learn more
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* 4. What makes us different: the eight stages */}
      <Section
        band
        title="We Stay With the Product"
        intro="Most market-entry companies stop at the distributor. We don’t."
      >
        <TimelineStepper />
      </Section>

      {/* 5. One partner, two ways to win */}
      <Section title="One Partner, Two Ways to Win">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {partners.map(({ label, title, points, cta, modal }) => (
            <div key={label} className="card !p-7 sm:!p-10 flex flex-col items-start">
              <div className="eyebrow">{label}</div>
              <h3 className="font-display h-md mt-4">{title}</h3>

              <ul className="mt-6 mb-8 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-4">
                    <span className="w-2.5 h-2.5 rounded-[3px] bg-fg shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={() => openModal(modal[0], modal[1])} className="btn mt-auto">
                <span>{cta}</span>
                <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
