'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

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
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">
        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-teal-700 mb-6">
              SUPPORT & GUIDANCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002D62] tracking-tight mb-6">
              Help & Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              Find answers regarding diagnostic pathology services, clinic appointments, and international medical device distribution partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="container-boxed py-12 sm:py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#002D62] cursor-pointer hover:text-[#20B2AA] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#20B2AA] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center max-w-xl mx-auto p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-[#002D62] mb-2">Have further questions?</h3>
          <p className="text-sm text-[#4B5563] mb-6">
            Our clinical and commercial teams in Manchester are ready to assist you.
          </p>
          <ModalTriggerButton variant="teal" size="md">
            Contact Us Directly
          </ModalTriggerButton>
        </div>
      </section>
    </div>
  );
}
