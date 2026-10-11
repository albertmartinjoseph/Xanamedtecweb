'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, Stethoscope, Heart, Zap, Shield, Flame } from 'lucide-react';
import { testsData } from '@/data/testsData';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

const goals = [
  {
    id: 'fatigue',
    title: 'Fatigue & Low Energy',
    description: 'Feeling sluggish, brain fog, or persistent unexplained tiredness.',
    icon: Zap,
    recommendedSlug: 'thyroid-profile',
  },
  {
    id: 'heart',
    title: 'Heart & Metabolic Health',
    description: 'Check cholesterol fractions, arterial health, and blood sugar control.',
    icon: Heart,
    recommendedSlug: 'lipids-hba1c',
  },
  {
    id: 'vitality',
    title: 'Hormonal Balance & Vitality',
    description: 'Monitor testosterone, androgen levels, muscle recovery, or libido.',
    icon: Flame,
    recommendedSlug: 'testosterone-monitoring',
  },
  {
    id: 'organs',
    title: 'Kidney, Liver & Vital Organs',
    description: 'Baseline check of renal function, liver enzymes, and electrolytes.',
    icon: Stethoscope,
    recommendedSlug: 'biochemistry',
  },
  {
    id: 'full-mot',
    title: 'Complete Full-Body MOT',
    description: 'Our most comprehensive check covering blood count, organs, hormones, and vitamins.',
    icon: Shield,
    recommendedSlug: 'well-man-well-woman',
  },
];

export default function BloodTestRecommendationPage() {
  const [selectedGoal, setSelectedGoal] = useState<string>('full-mot');

  const currentGoal = goals.find((g) => g.id === selectedGoal) || goals[0];
  const recommendedTest = testsData[currentGoal.recommendedSlug];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans">
      {/* 1. Header Banner */}
      <section className="relative bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/85 to-[#002678]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#20B2AA]/20 via-transparent to-transparent pointer-events-none" />

        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
              <span>Interactive Clinical Guidance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Find Your Health Test
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              Not sure which blood test you need? Select your primary health interest below to discover the most relevant diagnostic profile for you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Matcher */}
      <section className="container-boxed py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Health Focus Selector */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl font-bold text-[#002D62] mb-6">
              Step 1: Select Your Primary Health Concern
            </h2>

            {goals.map((goal) => {
              const Icon = goal.icon;
              const isSelected = selectedGoal === goal.id;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`w-full text-left p-6 rounded-[22px] border transition-all duration-300 flex items-start gap-5 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#20B2AA] shadow-[0_10px_30px_-5px_rgba(32,178,170,0.25)] translate-x-2'
                      : 'bg-white/70 border-gray-200 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#20B2AA] text-white' : 'bg-slate-100 text-[#002D62]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002D62] text-base mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-xs text-[#606367] leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Recommended Test Card */}
          <div className="lg:col-span-6 sticky top-36">
            <h2 className="text-xl font-bold text-[#002D62] mb-6">
              Step 2: Recommended Clinical Profile
            </h2>

            {recommendedTest && (
              <div className="bg-white rounded-[28px] p-8 sm:p-10 border-2 border-[#20B2AA]/50 shadow-[0_15px_45px_-10px_rgba(0,45,98,0.12)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#20B2AA] text-white text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl">
                  Best Match
                </div>

                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                  {recommendedTest.turnaround}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-[#002D62] tracking-tight mb-2">
                  {recommendedTest.name}
                </h3>

                <p className="text-sm font-semibold text-slate-400 mb-6">
                  {recommendedTest.subtitle}
                </p>

                <p className="text-sm text-[#606367] leading-relaxed mb-6">
                  {recommendedTest.overview}
                </p>

                <div className="space-y-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#002D62]">
                    Key Biomarkers Tested:
                  </div>
                  {recommendedTest.whatItMeasures.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#323232]">
                      <CheckCircle2 className="w-4 h-4 text-[#20B2AA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-xs text-slate-400">Total Price</div>
                    <div className="text-3xl font-black text-[#002D62]">
                      {recommendedTest.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/${recommendedTest.slug}`}
                      className="px-5 py-3 rounded-full text-xs font-bold text-[#002D62] hover:bg-slate-100 transition-colors"
                    >
                      View Details
                    </Link>
                    <ModalTriggerButton variant="teal" size="md">
                      Book Test
                    </ModalTriggerButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
