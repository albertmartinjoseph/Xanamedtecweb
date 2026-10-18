import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Award,
  Search,
} from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';

export const metadata: Metadata = {
  title: 'Clinical Services',
  description:
    'Comprehensive diagnostic pathology and healthcare screening services. Fast, accredited clinical blood tests and health evaluations.',
  alternates: {
    canonical: '/clinical-services',
  },
  openGraph: {
    title: 'Clinical Services - Xana Medtec',
    description:
      'Comprehensive diagnostic pathology and healthcare screening services across Manchester and the UK.',
    url: 'https://www.xanamedtec.com/clinical-services',
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
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#070e1b] text-[#323232] dark:text-slate-100 font-sans transition-colors duration-200">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/85 to-[#002678]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>Accredited Pathology & Diagnostic Health</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Clinical & Diagnostic Services
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              Fast, accurate, and doctor-reviewed blood testing services. Gain comprehensive health insights with quick turnaround from UKAS-accredited laboratories.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <ModalTriggerButton variant="teal" size="lg" className="px-8 py-3.5 shadow-lg">
                Book an Appointment
              </ModalTriggerButton>
              <Link
                href="/blood-test-recommendation"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <Search className="w-4 h-4 mr-2 text-teal-300" />
                <span>Find Your Test</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars Strip */}
      <section className="relative z-20 -mt-10 container-boxed mb-16">
        <div className="bg-white dark:bg-[#0c1626] rounded-[24px] p-6 sm:p-8 border border-gray-200/90 dark:border-white/10 shadow-[0_12px_35px_-8px_rgba(0,45,98,0.08)] dark:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.4)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-white/10 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">Fast Turnaround</div>
              <div className="text-xs text-[#606367] dark:text-slate-300">24 to 48 hour electronic results</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 sm:border-l sm:border-r border-gray-100 dark:border-white/10 sm:px-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-white/10 text-blue-700 dark:text-teal-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">UKAS Accredited</div>
              <div className="text-xs text-[#606367] dark:text-slate-300">Certified laboratory quality standards</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-white/10 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">Clinical Expertise</div>
              <div className="text-xs text-[#606367] dark:text-slate-300">Doctor-reviewed diagnostic reports</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Tests Grid */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50 mb-3">
              POPULAR HEALTH SCREENINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] dark:text-white tracking-tight">
              Featured Health Tests
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/tests-list-page"
              className="inline-flex items-center font-bold text-sm text-[#20B2AA] hover:text-[#002D62] dark:hover:text-teal-300 transition-colors"
            >
              <span>View All Health Tests</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularTests.map((test) => (
            <div
              key={test.slug}
              className="bg-white dark:bg-[#0c1626] rounded-[26px] p-7 sm:p-8 border border-gray-200/90 dark:border-white/10 shadow-[0_4px_25px_-5px_rgba(0,45,98,0.06)] dark:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] hover:border-[#20B2AA]/50 dark:hover:border-[#20B2AA]/60 hover:shadow-[0_15px_40px_-8px_rgba(0,45,98,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    {test.sample}
                  </span>
                  <span className="text-xl font-black text-[#002D62] dark:text-white">
                    {test.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#002D62] dark:text-white tracking-tight mb-1 group-hover:text-[#20B2AA] transition-colors">
                  {test.name}
                </h3>

                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3">
                  {test.tagline}
                </div>

                <p className="text-sm text-[#606367] dark:text-slate-300 leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href={`/${test.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#002D62] dark:text-teal-300 hover:text-[#20B2AA] transition-colors"
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
      <section className="container-boxed py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50 mb-3">
            VERIFIED PATIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] dark:text-white tracking-tight mb-3">
            What Our Patients Say
          </h2>
          <p className="text-base text-[#606367] dark:text-slate-300">
            Trusted by individuals and healthcare providers across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0c1626] rounded-[24px] p-7 border border-gray-200/90 dark:border-white/10 shadow-[0_4px_25px_-5px_rgba(0,45,98,0.06)] dark:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#606367] dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#002D62] dark:text-white">{t.name}</span>
                <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full">
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
