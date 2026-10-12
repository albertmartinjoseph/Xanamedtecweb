import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Users, HeartPulse } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section, CtaBand } from '@/components/ui/Blocks';

export const metadata: Metadata = {
  title: 'Corporate Health Packages - Xana Medtec',
  description:
    'Workplace health assessments, employee diagnostic screenings, and corporate executive health MOT packages tailored for UK businesses.',
};

const packages = [
  {
    title: 'Workplace Blood Screenings',
    description:
      'On-site or in clinic: organ health, cholesterol and diabetes risk.',
    icon: Users,
  },
  {
    title: 'Executive Health MOT',
    description:
      'Cardiovascular, hormonal and full blood count profiling for leadership teams.',
    icon: HeartPulse,
  },
  {
    title: 'Occupational Compliance',
    description:
      'Hepatitis B immunity and laboratory clearances for healthcare, lab and industrial teams.',
    icon: ShieldCheck,
  },
];

export default function CorporateHealthPackagesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Corporate Health Packages"
        lead="Confidential on-site health screenings and executive health checks for your workforce."
        crumbs={[{ name: 'Clinical Services', href: '/clinical-services' }]}
        image={{ src: '/images/stock/care-team.jpg', alt: 'A clinical team reviewing notes together' }}
      />

      <Section band>
        <div className="max-w-xl mx-auto space-y-3">
          {packages.map(({ title, description, icon: Icon }) => (
            <div key={title} className="card !p-1.5 flex items-center gap-6">
              <span className="wash w-24 h-24 rounded-[1.125rem] flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7" strokeWidth={1.5} />
              </span>
              <div className="py-3 pr-5">
                <h3 className="label">{title}</h3>
                <p className="text-[15px] text-soft mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Discuss Your Corporate Wellness Requirements">
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Request a proposal
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
