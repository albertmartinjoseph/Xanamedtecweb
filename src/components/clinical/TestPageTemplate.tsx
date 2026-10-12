import React from 'react';
import Link from 'next/link';
import {
  Clock,
  FlaskConical,
  Coffee,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight,
  PhoneCall,
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
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      {/* 1. Test Hero Banner */}
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4B5563] mb-6">
              <Link href="/clinical-services" className="hover:text-[#002D62] transition-colors">
                Clinical Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/tests-list-page" className="hover:text-[#002D62] transition-colors">
                Popular Health Tests
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-teal-700">{test.name}</span>
            </div>

            <div className="eyebrow text-teal-700 mb-6">
              <span>{test.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002D62] tracking-tight leading-[1.1] mb-4">
              {test.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-8">
              {test.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="text-3xl sm:text-4xl font-black text-[#002D62]">
                {test.price}
              </div>
              <ModalTriggerButton variant="teal" size="lg" className="px-9 py-3.5">
                Book This Test
              </ModalTriggerButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Test Parameters Strip */}
      <section className="relative z-20 container-boxed mt-12 mb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#4B5563] uppercase font-semibold">Turnaround Time</div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">{test.turnaround}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 sm:border-l sm:border-r border-gray-100 sm:px-6">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#4B5563] uppercase font-semibold">Sample Required</div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">{test.sampleType}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#4B5563] uppercase font-semibold">Preparation</div>
              <div className="font-bold text-[#002D62] text-sm sm:text-base">{test.fasting}</div>
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
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <span className="eyebrow text-teal-700 mb-4">
                CLINICAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-4">
                About the {test.name}
              </h2>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                {test.overview}
              </p>
            </div>

            {/* What It Measures */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <span className="eyebrow text-blue-700 mb-4">
                BIOMARKERS & PARAMETERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-6">
                What This Test Measures
              </h2>
              <div className="space-y-4">
                {test.whatItMeasures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#20B2AA] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1F2A3A] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Take This Test */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <span className="eyebrow text-teal-700 mb-4">
                CLINICAL INDICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-6">
                Who Should Take This Test?
              </h2>
              <div className="space-y-4">
                {test.whoShouldTake.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#002D62]/10 text-[#002D62] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Instructions */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <span className="eyebrow text-teal-700 mb-4">
                PATIENT GUIDANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight mb-6">
                Test Preparation Instructions
              </h2>
              <div className="space-y-3">
                {test.preparation.map((prep, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#20B2AA] mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {prep}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-200 sticky top-24">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
                APPOINTMENT BOOKING
              </div>
              <div className="text-3xl font-black text-[#002D62] mb-1">
                {test.price}
              </div>
              <div className="text-xs text-slate-500 mb-6">
                Includes sample draw, accredited lab analysis & doctor commentary.
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563]">Results Timeline:</span>
                  <span className="font-bold text-[#002D62]">{test.turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563]">Accreditation:</span>
                  <span className="font-bold text-[#002D62]">UKAS Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563]">Location:</span>
                  <span className="font-bold text-[#002D62]">Manchester Clinic</span>
                </div>
              </div>

              <ModalTriggerButton variant="teal" size="lg" className="w-full py-3.5 shadow-md mb-4">
                Book Appointment
              </ModalTriggerButton>

              <p className="text-xs text-center text-slate-400">
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
      <section className="container-boxed py-12 sm:py-16 border-t border-gray-200">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-bold text-[#002D62] tracking-tight">
            Related Health Screenings
          </h3>
          <Link
            href="/tests-list-page"
            className="text-sm font-bold text-teal-700 hover:text-[#002D62] transition-colors inline-flex items-center"
          >
            <span>View All Tests</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTests.map((rel) => (
            <div
              key={rel.slug}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#20B2AA]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                    {rel.turnaround}
                  </span>
                  <span className="text-lg font-black text-[#002D62]">{rel.price}</span>
                </div>
                <h4 className="text-lg font-bold text-[#002D62] tracking-tight mb-2">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#4B5563] line-clamp-2 mb-4">
                  {rel.overview}
                </p>
              </div>

              <Link
                href={`/${rel.slug}`}
                className="inline-flex items-center font-bold text-xs text-teal-700 hover:text-[#002D62] transition-colors pt-3 border-t border-gray-100"
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
