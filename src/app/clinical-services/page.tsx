import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, Search } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';
import { PageHero, Section } from '@/components/ui/Blocks';
import { TestList } from '@/components/clinical/TestList';

export const metadata: Metadata = {
  title: 'Clinical Services - Xana Medtec',
  description:
    'Comprehensive diagnostic pathology and healthcare screening services. Fast, accredited clinical blood tests and health evaluations.',
  openGraph: {
    title: 'Clinical Services - Xana Medtec',
    description:
      'Comprehensive diagnostic pathology and healthcare screening services across Manchester and the UK.',
  },
};

const popularTests = [
  {
    slug: 'hepatitis-b-profile',
    name: 'Hepatitis B Profile',
    tagline: 'Immunity & Infection Screening',
    description:
      'Evaluates presence of antibodies or surface antigens to determine immune status or active infection.',
    price: '£49.00',
    turnaround: '24-48 Hours',
    sample: 'Blood (Serum)',
  },
  {
    slug: 'biochemistry',
    name: 'Biochemistry Profile',
    tagline: 'Kidney, Liver & Vital Organ Health',
    description:
      'Comprehensive biochemical assessment analyzing renal function, hepatic enzymes, electrolytes, and metabolic markers.',
    price: '£69.00',
    turnaround: '24-48 Hours',
    sample: 'Blood (Serum)',
  },
  {
    slug: 'testosterone-monitoring',
    name: 'Testosterone Monitoring',
    tagline: 'Hormonal Balance & Vitality',
    description:
      'Accurate total and free testosterone quantification for men and women assessing endocrine balance.',
    price: '£59.00',
    turnaround: '24-48 Hours',
    sample: 'Blood (Serum)',
  },
  {
    slug: 'thyroid-profile',
    name: 'Thyroid Function Profile',
    tagline: 'Metabolic & Endocrine Screening',
    description:
      'Measures TSH, Free T4, and Free T3 to detect hyperthyroidism, hypothyroidism, and autoimmune fluctuations.',
    price: '£55.00',
    turnaround: '24 Hours',
    sample: 'Blood (Serum)',
  },
  {
    slug: 'hormone-profile',
    name: 'Comprehensive Hormone Profile',
    tagline: 'Female & Male Reproductive Health',
    description:
      'Detailed panel evaluating oestradiol, progesterone, LH, FSH, and prolactin for reproductive and fertility insights.',
    price: '£85.00',
    turnaround: '24-48 Hours',
    sample: 'Blood (Serum)',
  },
  {
    slug: 'lipids-hba1c',
    name: 'Lipids & HbA1C Profile',
    tagline: 'Cardiovascular & Diabetes Screening',
    description:
      'Combined lipid fraction profile (cholesterol, HDL, LDL, triglycerides) alongside glycemic HbA1c control.',
    price: '£65.00',
    turnaround: '24 Hours',
    sample: 'Blood (Serum & Whole Blood)',
  },
  {
    slug: 'well-man-well-woman',
    name: 'Well Man & Well Woman',
    tagline: 'Full Body Health MOT',
    description:
      'Our most comprehensive health assessment combining hematology, biochemistry, organ profiles, and hormone metrics.',
    price: '£149.00',
    turnaround: '48 Hours',
    sample: 'Blood (Multi-vial)',
  },
];

const testimonials = [
  {
    name: 'Atia Ahmed',
    review:
      'Very professional and gentle phlebotomy experience. Results arrived promptly the next morning with an easy-to-understand breakdown.',
    rating: 5,
  },
  {
    name: 'Elena Velikanova',
    review:
      'Outstanding service from start to finish. The team were welcoming, attentive, and extremely thorough with clinical questions.',
    rating: 5,
  },
  {
    name: 'Paul Durrant',
    review:
      'Quick, stress-free appointment. Far more efficient than waiting weeks for standard diagnostic reviews. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Rehilah Isabella',
    review:
      'Excellent diagnostic support and fast result delivery. Highly professional clinical environment and great communication throughout.',
    rating: 5,
  },
];

export default function ClinicalServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Clinical & Diagnostic Services"
        lead="Fast, accurate, doctor-reviewed blood tests, with results from UKAS-accredited laboratories."
        image={{ src: '/images/stock/consultation.jpg', alt: 'A doctor talking with a patient' }}
      >
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Book an Appointment
        </ModalTriggerButton>
        <Link href="/blood-test-recommendation" className="btn btn-ghost">
          <Search />
          <span>Find Your Test</span>
        </Link>
      </PageHero>

      {/* Popular tests */}
      <Section
        band
        eyebrow="UKAS accredited · Results in 24 to 48 hours"
        title="Popular Health Tests"
      >
        <TestList
          items={popularTests.map((t) => ({
            slug: t.slug,
            name: t.name,
            sub: t.tagline,
            desc: t.description,
            meta: t.turnaround,
            price: t.price,
          }))}
        />

        <div className="mt-12 flex justify-center">
          <Link href="/tests-list-page" className="more">
            <span>
              <ArrowRight />
            </span>
            View all health tests
          </Link>
        </div>
      </Section>

      {/* Patient reviews (real feedback & star ratings) */}
      <Section title="What Our Patients Say">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="card flex flex-col">
              <div className="flex items-center gap-1 text-amber-400 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <blockquote className="font-display text-xl leading-snug">&ldquo;{t.review}&rdquo;</blockquote>

              <figcaption className="meta mt-auto pt-8">{t.name} · Verified Patient</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <ClinicContactBanner />
    </div>
  );
}
