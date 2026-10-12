import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section, CtaBand } from '@/components/ui/Blocks';

export const metadata: Metadata = {
  title: 'Vein Finder System - Xana Medtec',
  description:
    'Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Engineered to eliminate first-attempt venipuncture failures and support DIVA patients.',
  openGraph: {
    title: 'Vein Finder System - Xana Medtec',
    description:
      'Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Supports DIVA patients and compliant with NHS IPC non-contact standards.',
    images: ['/images/assets/07-vein-finder-banner.png'],
  },
};

const clinicalBenefits = [
  '91.7% reduction in cannulation attempts.',
  'Supports DIVA patients: paediatric, neonatal, oncology and renal patients, and people with obesity.',
  'Fewer repeat attempts, shorter procedures, less discomfort.',
  'Seven monochromatic modes show veins on a wide range of skin tones.',
  'Three settings: adults, paediatrics and neonates.',
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

const mountingOptions = [
  {
    title: 'Mobile Trolley Mount',
    description:
      'Height-adjustable floor stand with lockable castor wheels, for A&E, ICU and ward use.',
  },
  {
    title: 'Flexible Desktop Stand',
    description:
      'Compact articulated arm for phlebotomy stations and consultation desks.',
  },
];

export default function VeinFinderPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Vein Finder System"
        lead="Real-time vein mapping with near-infrared light. Built to avoid failed first attempts and to support Difficult Venous Access (DIVA) patients."
        image={{ src: '/images/assets/07-vein-finder-banner.png', alt: 'Vein Finder System Handheld Banner' }}
        crumbs={[{ name: 'International Distribution', href: '/international-distribution' }]}
      >
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Book Demonstration or Inquire
        </ModalTriggerButton>
      </PageHero>

      {/* Clinical benefits */}
      <section className="section">
        <div className="shell grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
          <div className="frame aspect-[4/5]">
            <Image
              src="/images/assets/09-vein-finder-projection.png"
              alt="Vein Finder Real-time Vascular Projection"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="reveal">
            <div className="eyebrow mb-5">Real-time 1:1 vein mapping</div>
            <h2 className="h-xl !animate-none mb-8">Clinical Benefits</h2>

            <ul className="space-y-4">
              {clinicalBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="w-2.5 h-2.5 rounded-[3px] bg-fg shrink-0 mt-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mounting options */}
      <Section band title="Mounting & Deployment Options">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
          <div className="frame min-h-80 !bg-white">
            <Image
              src="/images/assets/10-mobile-trolley-mount.png"
              alt="Vein Finder Clinical Mounting and Deployment Hardware"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain p-6"
            />
          </div>

          <div className="flex flex-col gap-5">
            {mountingOptions.map((option) => (
              <div key={option.title} className="card flex-1 flex flex-col justify-center">
                <h3 className="label">{option.title}</h3>
                <p className="text-soft mt-2">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical specifications */}
      <Section title="Technical Specifications">
        <dl className="reveal max-w-3xl mx-auto border-b border-line">
          {technicalSpecs.map((spec) => (
            <div key={spec.parameter} className="border-t border-line py-4 flex flex-col sm:flex-row sm:justify-between gap-x-8 gap-y-1">
              <dt className="font-medium">{spec.parameter}</dt>
              <dd className="text-soft sm:text-right">{spec.details}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand title="Request a Clinical Trial or Demonstration">
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Book Demonstration or Inquire
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
