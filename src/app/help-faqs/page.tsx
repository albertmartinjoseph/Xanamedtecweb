'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, CtaBand } from '@/components/ui/Blocks';

const faqs = [
  {
    q: 'How do I book a clinical blood test or health check?',
    a: 'You can book an appointment directly through our website by clicking the "Book Appointment" button or emailing info@xanamedtec.com. A dedicated clinical coordinator will confirm your preferred date and preparation requirements.',
  },
  {
    q: 'How quickly are diagnostic test results delivered?',
    a: 'Most routine pathology profiles (e.g. Thyroid, Biochemistry, Lipids & HbA1c) have a 24-hour turnaround. Specialized comprehensive panels (Well Man/Woman, Hormones) are processed within 24 to 48 hours. Results are delivered securely via email with doctor commentary.',
  },
  {
    q: 'Are your pathology laboratories accredited?',
    a: 'Yes. All samples are analyzed by UKAS (United Kingdom Accreditation Service) ISO 15189 accredited clinical pathology laboratories, ensuring the highest standards of diagnostic precision and quality assurance.',
  },
  {
    q: 'How does Xana Medtec partner with medical device manufacturers?',
    a: 'We act as a specialized market development partner. Rather than basic warehousing, we handle regulatory readiness, distributor matchmaking, key opinion leader demonstrations, clinical roadshows, and post-market clinical adoption to ensure sustainable uptake.',
  },
  {
    q: 'Can international distributors evaluate devices such as Anisys Go or the Vein Finder?',
    a: 'Yes. We work closely with vetted international healthcare distributors. We provide technical dossiers, evaluation units, clinician training materials, and co-marketing support for target territories.',
  },
  {
    q: 'Where is Xana Medtec located?',
    a: 'Our registered headquarters are located at Bartle House, Oxford Court, Manchester, M2 3WQ. Clinical referrals and distributor meetings are coordinated through this office.',
  },
];

export default function HelpFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Help & FAQs"
        lead="Answers about blood tests, clinic appointments and medical device distribution."
        image={{ src: '/images/stock/clinical-team.jpg', alt: 'Clinicians talking through notes on a clipboard' }}
      />

      <section className="section">
        <div className="shell-narrow space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="card !p-0">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isOpen ? 'glass-ink' : 'bg-tint'
                    }`}
                  >
                    <Plus className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-soft leading-relaxed animate-[fade_0.25s_ease_both]">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title="Have further questions?">
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Contact us
        </ModalTriggerButton>
      </CtaBand>
    </div>
  );
}
