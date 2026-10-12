import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Stethoscope, Award, Users, Compass, Activity } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section, CtaBand } from '@/components/ui/Blocks';

export const metadata: Metadata = {
  title: 'International Distribution - Xana Medtec',
  description:
    'Partnering with accredited global healthcare distributors to deliver innovative medical device solutions worldwide. From market entry to clinical adoption.',
  openGraph: {
    title: 'International Distribution - Xana Medtec',
    description:
      'Partnering with accredited global healthcare distributors to deliver innovative medical device solutions worldwide.',
    images: ['/images/assets/03-intl-distribution-banner.png'],
  },
};

const coreServices = [
  {
    number: '01',
    title: 'Market Strategy & Entry',
    subtitle: 'Identify the opportunity. Build the pathway.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Distributor Network Development',
    subtitle: 'Find the right partner, not just a distributor.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Clinical Demonstrations & Product Trials',
    subtitle: 'Take the product from presentation to practice.',
    icon: Stethoscope,
  },
  {
    number: '04',
    title: 'Roadshows & Market Activation',
    subtitle: 'Create awareness. Generate engagement.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'Clinical & End-User Training',
    subtitle: 'Confidence drives adoption.',
    icon: Award,
  },
  {
    number: '06',
    title: 'Ongoing Distributor & Market Support',
    subtitle: 'Stay involved beyond the first sale.',
    icon: Activity,
  },
];

const products = [
  {
    href: '/anisys-go',
    image: '/images/assets/04-anisys-go-card.png',
    alt: 'Anisys Go System',
    label: 'Physiology & Biofeedback',
    title: 'Anisys Go',
    description:
      'A portable system for assessing anorectal function, with biofeedback therapy built in.',
  },
  {
    href: '/vein-finder',
    image: '/images/assets/05-vein-finder-card.png',
    alt: 'Vein Finder System',
    label: 'Near-Infrared Vascular Imaging',
    title: 'Vein Finder System',
    description:
      'Real-time vein mapping that helps clinicians find a vein at the first attempt.',
  },
];

export default function InternationalDistributionPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="International Distribution"
        lead="We connect medical device manufacturers with qualified distributors and clinical opinion leaders worldwide."
        image={{
          src: '/images/assets/03-intl-distribution-banner.png',
          alt: 'International Distribution Healthcare Context',
        }}
      >
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Get in Touch
        </ModalTriggerButton>
        <Link href="#services" className="btn btn-ghost">
          Our services
        </Link>
      </PageHero>

      {/* The two devices */}
      <section id="devices" className="scroll-mt-24">
        <Section title="Devices we distribute">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {products.map((product) => (
              <Link key={product.href} href={product.href} className="card group !p-1.5 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.125rem]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col items-start">
                  <div className="eyebrow !text-sm">{product.label}</div>
                  <h3 className="font-display h-md mt-3 mb-3">{product.title}</h3>
                  <p className="text-soft mb-8">{product.description}</p>
                  <span className="more mt-auto">
                    <span>
                      <ArrowRight />
                    </span>
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* Six core services */}
      <section id="services" className="scroll-mt-24">
        <Section band title="Six Core Services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {coreServices.map(({ number, title, subtitle, icon: Icon }) => (
              <div key={number} className="card !p-1.5 flex items-center gap-5">
                <span className="wash w-20 h-20 rounded-[1.125rem] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </span>
                <div className="py-2 pr-4">
                  <h3 className="label !text-sm">{title}</h3>
                  <p className="text-[15px] text-soft mt-1">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <CtaBand title="Ready to Expand Your Medical Device Reach?">
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Get in Touch
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
