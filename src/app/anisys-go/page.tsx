import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Activity, Cpu, FileText, MapPin } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section, CtaBand } from '@/components/ui/Blocks';

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
    label: '13-Sensor Array',
    description: 'Records sphincter pressure and rectal sensitivity all the way round, at the same time.',
    icon: Cpu,
  },
  {
    label: 'Biofeedback Therapy',
    description: 'Visual exercise cues for pelvic floor re-education, in the clinic or the community.',
    icon: Activity,
  },
  {
    label: 'Detailed Reports',
    description: 'Instant PDF summaries and secure transfer to electronic patient records.',
    icon: FileText,
  },
  {
    label: 'Made in Manchester',
    description: 'Designed and validated by colorectal physiologists and healthcare specialists.',
    icon: MapPin,
  },
];

export default function AnisysGoPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Anisys Go"
        lead="A portable system that brings high-resolution anorectal manometry and guided biofeedback therapy closer to the patient."
        image={{ src: '/images/assets/06-anisys-go-banner.png', alt: 'Anisys Go Banner Kit' }}
        crumbs={[{ name: 'International Distribution', href: '/international-distribution' }]}
      >
        <ModalTriggerButton variant="teal" size="lg" modalTitle="Book Demonstration or Inquire" withArrow>
          Book Demonstration or Inquire
        </ModalTriggerButton>
      </PageHero>

      {/* What it is */}
      <section className="section">
        <div className="shell grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
          <div className="frame aspect-square !bg-white border border-line">
            <Image
              src="/images/assets/08-anisys-go-product.png"
              alt="Anisys Go Product Console and Sensor Handpiece"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-6"
              priority
            />
          </div>

          <div className="reveal">
            <div className="eyebrow mb-5">Developed in Manchester by clinicians</div>
            <h2 className="h-lg !animate-none">High-resolution anorectal physiology and biofeedback therapy.</h2>

            <p className="lead mt-6 mb-8">
              A smaller, more cost-effective and easier-to-use device that brings care closer to the patient&apos;s home.
            </p>

            {/* Mandatory external link line from spec */}
            <a href="https://www.anisys.co.uk/" target="_blank" rel="noopener noreferrer" className="more">
              <span>
                <ExternalLink />
              </span>
              <span>
                <span className="block text-sm font-normal text-soft">For more details visit:</span>
                https://www.anisys.co.uk/
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Four highlights */}
      <Section band title="Engineered for Clinical Precision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {highlights.map(({ label, description, icon: Icon }) => (
            <div key={label} className="card !p-1.5 flex items-center gap-5">
              <span className="wash w-20 h-20 rounded-[1.125rem] flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <div className="py-2 pr-4">
                <h3 className="label !text-sm">{label}</h3>
                <p className="text-[15px] text-soft mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Explore Anisys Go for Your Health System">
        <ModalTriggerButton variant="teal" size="lg" modalTitle="Book Demonstration or Inquire" withArrow>
          Book Demonstration or Inquire
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
