import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Search,
} from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';

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
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      {/* 1. Hero Banner */}
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-teal-700 mb-6">
              <span>Accredited Pathology & Diagnostic Health</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002D62] tracking-tight leading-[1.1] mb-6">
              Clinical & Diagnostic Services
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-8">
              Fast, accurate, and doctor-reviewed blood testing services. Gain comprehensive health insights with quick turnaround from UKAS-accredited laboratories.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <ModalTriggerButton variant="teal" size="lg" className="px-8 py-3.5">
                Book an Appointment
              </ModalTriggerButton>
              <Link
                href="/blood-test-recommendation"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-bold text-sm bg-white text-[#002D62] hover:bg-[#002D62] hover:text-white transition-colors border border-[#002D62]/25"
              >
                <Search className="w-4 h-4 mr-2 text-teal-700" />
                <span>Find Your Test</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars Strip */}
      <section className="relative z-20 container-boxed mt-12 mb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">Fast Turnaround</div>
              <div className="text-xs text-[#4B5563]">24 to 48 hour electronic results</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 sm:border-l sm:border-r border-gray-100 sm:px-6">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">UKAS Accredited</div>
              <div className="text-xs text-[#4B5563]">Certified laboratory quality standards</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">Clinical Expertise</div>
              <div className="text-xs text-[#4B5563]">Doctor-reviewed diagnostic reports</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Tests Grid */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="eyebrow text-teal-700 mb-3">
              POPULAR HEALTH SCREENINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] tracking-tight">
              Featured Health Tests
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/tests-list-page"
              className="inline-flex items-center font-bold text-sm text-teal-700 hover:text-[#002D62] transition-colors"
            >
              <span>View All Health Tests</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTests.map((test) => (
            <div
              key={test.slug}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 hover:border-[#20B2AA]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-2xl uppercase tracking-wider">
                    {test.sample}
                  </span>
                  <span className="text-xl font-black text-[#002D62] shrink-0">
                    {test.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#002D62] tracking-tight mb-1 group-hover:text-teal-700 transition-colors">
                  {test.name}
                </h3>

                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {test.tagline}
                </div>

                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/${test.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#002D62] hover:text-[#20B2AA] transition-colors"
                >
                  <span>Test Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <ModalTriggerButton variant="teal" size="sm" className="px-4 py-2">
                  Book Test
                </ModalTriggerButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Clinic Appointment Contact Banner (Replacing legacy clinic finder) */}
      <section className="container-boxed py-8">
        <ClinicContactBanner />
      </section>

      {/* 5. Patient Reviews Section (Preserving real feedback & star ratings) */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-teal-700 mb-3">
            VERIFIED PATIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] tracking-tight mb-3">
            What Our Patients Say
          </h2>
          <p className="text-base text-[#4B5563]">
            Trusted by individuals and healthcare providers across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-[#002D62]">{t.name}</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
