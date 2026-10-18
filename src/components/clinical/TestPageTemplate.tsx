import React from 'react';
import Link from 'next/link';
import {
  Clock,
  FlaskConical,
  Coffee,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { TestDetail, testsData } from '@/data/testsData';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';

interface TestPageTemplateProps {
  test: TestDetail;
}

export const TestPageTemplate: React.FC<TestPageTemplateProps> = ({ test }) => {
  // Get 3 other tests for the related tests grid
  const relatedTests = Object.values(testsData)
    .filter((t) => t.slug !== test.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#070e1b] text-[#323232] dark:text-slate-100 font-sans">
      {/* 1. Test Hero Banner */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/85 to-[#002678]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
              <Link href="/clinical-services" className="hover:text-white transition-colors">
                Clinical Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/tests-list-page" className="hover:text-white transition-colors">
                Popular Health Tests
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#20B2AA]">{test.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>{test.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              {test.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              {test.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="text-3xl sm:text-4xl font-black text-white">
                {test.price}
              </div>
              <ModalTriggerButton variant="teal" size="lg" className="px-9 py-3.5 shadow-lg">
                Book This Test
              </ModalTriggerButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Test Parameters Strip */}
      <section className="relative z-20 -mt-10 container-boxed mb-16">
        <div className="bg-white dark:bg-[#0c1626] rounded-[24px] p-6 sm:p-8 border border-gray-200/90 dark:border-white/10 shadow-[0_12px_35px_-8px_rgba(0,45,98,0.08)] dark:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.5)] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#606367] dark:text-slate-400 uppercase font-semibold">Turnaround Time</div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">{test.turnaround}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 sm:border-l sm:border-r border-gray-100 dark:border-white/10 sm:px-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#606367] dark:text-slate-400 uppercase font-semibold">Sample Required</div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">{test.sampleType}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#606367] dark:text-slate-400 uppercase font-semibold">Preparation</div>
              <div className="font-bold text-[#002D62] dark:text-white text-sm sm:text-base">{test.fasting}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Overview, What It Measures, Who Should Take */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-8 sm:p-10 border border-gray-200/90 dark:border-white/10 shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 mb-4">
                CLINICAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white tracking-tight mb-4">
                About the {test.name}
              </h2>
              <p className="text-base sm:text-lg text-[#606367] dark:text-slate-300 leading-relaxed">
                {test.overview}
              </p>
            </div>

            {/* What It Measures */}
            <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-8 sm:p-10 border border-gray-200/90 dark:border-white/10 shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 mb-4">
                BIOMARKERS & PARAMETERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white tracking-tight mb-6">
                What This Test Measures
              </h2>
              <div className="space-y-4">
                {test.whatItMeasures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#081120] border border-slate-100 dark:border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#20B2AA] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#323232] dark:text-slate-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Take This Test */}
            <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-8 sm:p-10 border border-gray-200/90 dark:border-white/10 shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 mb-4">
                CLINICAL INDICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white tracking-tight mb-6">
                Who Should Take This Test?
              </h2>
              <div className="space-y-4">
                {test.whoShouldTake.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#081120] border border-slate-100 dark:border-white/10"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#002D62]/10 dark:bg-white/10 text-[#002D62] dark:text-teal-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base text-[#606367] dark:text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Instructions */}
            <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-8 sm:p-10 border border-gray-200/90 dark:border-white/10 shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 mb-4">
                PATIENT GUIDANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white tracking-tight mb-6">
                Test Preparation Instructions
              </h2>
              <div className="space-y-3">
                {test.preparation.map((prep, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#20B2AA] mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-[#606367] dark:text-slate-300 leading-relaxed">
                      {prep}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-7 border border-gray-200/90 dark:border-white/10 shadow-[0_10px_35px_-8px_rgba(0,45,98,0.08)] dark:shadow-[0_10px_35px_-8px_rgba(0,0,0,0.5)] sticky top-36">
              <div className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider mb-2">
                APPOINTMENT BOOKING
              </div>
              <div className="text-3xl font-black text-[#002D62] dark:text-white mb-1">
                {test.price}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Includes sample draw, accredited lab analysis & doctor commentary.
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 dark:border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#606367] dark:text-slate-400">Results Timeline:</span>
                  <span className="font-bold text-[#002D62] dark:text-slate-200">{test.turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#606367] dark:text-slate-400">Accreditation:</span>
                  <span className="font-bold text-[#002D62] dark:text-slate-200">UKAS Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#606367] dark:text-slate-400">Location:</span>
                  <span className="font-bold text-[#002D62] dark:text-slate-200">Manchester Clinic</span>
                </div>
              </div>

              <ModalTriggerButton variant="teal" size="lg" className="w-full py-3.5 shadow-md mb-4">
                Book Appointment
              </ModalTriggerButton>

              <p className="text-[11px] text-center text-slate-400">
                Direct booking via dedicated clinical coordinator. No waiting lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Clinic Contact Replacement Banner */}
      <section className="container-boxed py-8">
        <ClinicContactBanner />
      </section>

      {/* 5. Related Tests */}
      <section className="container-boxed py-16 sm:py-20 border-t border-gray-200/80 dark:border-white/10">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-bold text-[#002D62] dark:text-white tracking-tight">
            Related Health Screenings
          </h3>
          <Link
            href="/tests-list-page"
            className="text-sm font-bold text-[#20B2AA] hover:text-[#002D62] dark:hover:text-white transition-colors inline-flex items-center"
          >
            <span>View All Tests</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTests.map((rel) => (
            <div
              key={rel.slug}
              className="bg-white dark:bg-[#0c1626] rounded-[22px] p-6 border border-gray-200/90 dark:border-white/10 shadow-sm hover:border-[#20B2AA]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 px-2.5 py-0.5 rounded-full">
                    {rel.turnaround}
                  </span>
                  <span className="text-lg font-black text-[#002D62] dark:text-white">{rel.price}</span>
                </div>
                <h4 className="text-lg font-bold text-[#002D62] dark:text-white tracking-tight mb-2">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#606367] dark:text-slate-300 line-clamp-2 mb-4">
                  {rel.overview}
                </p>
              </div>

              <Link
                href={`/${rel.slug}`}
                className="inline-flex items-center font-bold text-xs text-[#20B2AA] hover:text-[#002D62] dark:hover:text-white transition-colors pt-3 border-t border-gray-100 dark:border-white/10"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
