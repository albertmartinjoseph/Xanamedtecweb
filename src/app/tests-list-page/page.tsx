'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Clock, FlaskConical, Filter } from 'lucide-react';
import { testsData } from '@/data/testsData';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';

export default function TestsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const allTests = Object.values(testsData);

  const filteredTests = allTests.filter((test) => {
    const q = searchTerm.toLowerCase();
    return (
      test.name.toLowerCase().includes(q) ||
      test.subtitle.toLowerCase().includes(q) ||
      test.overview.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      {/* 1. Directory Banner */}
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-teal-700 mb-6">
              <span>Full Diagnostic Directory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002D62] tracking-tight leading-[1.1] mb-6">
              All Health & Blood Tests
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-8">
              Explore our comprehensive range of doctor-reviewed clinical pathology and screening packages with fast accredited turnaround.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tests by biomarker, organ, or condition (e.g. Thyroid, Kidney, Testosterone)..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-[#1F2A3A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#20B2AA] border border-[#002D62]/25"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Test Cards Grid */}
      <section className="container-boxed py-12 sm:py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm font-semibold text-[#4B5563]">
            Showing <span className="font-bold text-[#002D62]">{filteredTests.length}</span> tests
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-bold text-teal-600 hover:text-teal-800 underline"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map((test) => (
            <div
              key={test.slug}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 hover:border-[#20B2AA]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="eyebrow text-teal-700">
                    {test.turnaround}
                  </span>
                  <span className="text-2xl font-black text-[#002D62]">
                    {test.price}
                  </span>
                </div>

                <h2 className="font-sans text-lg font-bold text-[#002D62] tracking-tight mb-1 group-hover:text-teal-700 transition-colors">
                  {test.name}
                </h2>

                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {test.subtitle}
                </div>

                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {test.overview}
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

      {/* 3. Clinic Contact Banner */}
      <section className="container-boxed py-8">
        <ClinicContactBanner />
      </section>
    </div>
  );
}
