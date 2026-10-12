import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Award, MapPin, Mail, HeartPulse } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section, CtaBand } from '@/components/ui/Blocks';

export const metadata: Metadata = {
  title: 'About Us - Xana Medtec',
  description:
    'Xana Medtec is a market development partner for innovative medical device manufacturers scaling internationally.',
  openGraph: {
    title: 'About Us - Xana Medtec',
    description:
      'Bridging the gap between medical device market entry and sustainable clinical adoption.',
  },
};

const pillars = [
  {
    title: 'Strategic Alignment',
    description:
      'Regulation, reimbursement and procurement, aligned with qualified distributors.',
    icon: Target,
  },
  {
    title: 'Clinical Engagement',
    description:
      'Trials, in-hospital demonstrations and key opinion leaders.',
    icon: HeartPulse,
  },
  {
    title: 'Long-Term Adoption',
    description:
      'Training and support well beyond the first sale.',
    icon: Award,
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="About Xana Medtec"
        lead="A market development partner bridging the gap between breakthrough medical innovations and everyday clinical practice."
        image={{ src: '/images/stock/clinical-team.jpg', alt: 'Clinicians talking through notes on a clipboard' }}
      />

      {/* Core mission */}
      <Section
        title="Beyond distribution agreements: we build routine medical adoption."
        intro="Xana Medtec is a market development partner for innovative medical device manufacturers scaling internationally. We bridge the gap between market entry and sustainable clinical adoption."
      >
        <div className="max-w-xl mx-auto space-y-3">
          {pillars.map(({ title, description, icon: Icon }) => (
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

      {/* Industry recognition */}
      <Section className="!pt-0" title="Healthcare Testing Company of the Year 2023">
        <div className="card !p-4 sm:!p-8 max-w-4xl mx-auto">
          <Image
            src="/images/about/company-achievements.png"
            alt="Xana Medtec - Healthcare Testing Company of the Year 2023 UK Award Winner by Global Healthcare & Pharma"
            width={1024}
            height={354}
            priority
            className="w-full h-auto rounded-xl"
          />
        </div>
      </Section>

      {/* Headquarters & contact */}
      <CtaBand title="Connect With Our Manchester Team">
        <div className="space-y-2 text-soft">
          <div className="flex items-center justify-center gap-2.5">
            <MapPin className="w-5 h-5 text-accent shrink-0" />
            <span>Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Mail className="w-5 h-5 text-accent shrink-0" />
            <a href="mailto:info@xanamedtec.com" className="link text-fg">
              info@xanamedtec.com
            </a>
          </div>
        </div>

        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Get in Touch
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
