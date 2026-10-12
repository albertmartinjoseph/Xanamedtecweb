'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Stethoscope, Heart, Zap, Shield, Flame } from 'lucide-react';
import { testsData } from '@/data/testsData';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero } from '@/components/ui/Blocks';

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
    <div className="min-h-screen">
      <PageHero
        title="Find Your Health Test"
        lead="Not sure which blood test you need? Choose your main health concern and we will show the most relevant test."
        crumbs={[{ name: 'Clinical Services', href: '/clinical-services' }]}
        image={{ src: '/images/stock/consultation.jpg', alt: 'A doctor talking with a patient' }}
      />

      <section className="section">
        <div className="shell grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
          <div>
            <div className="eyebrow mb-6">1. Choose your main health concern</div>

            <div className="space-y-3">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const isSelected = selectedGoal === goal.id;
                return (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    aria-pressed={isSelected}
                    className={`card !animate-none !p-1.5 w-full text-left flex items-center gap-5 cursor-pointer ${
                      isSelected ? '!border-fg' : ''
                    }`}
                  >
                    <span className="wash w-20 h-20 rounded-[1.125rem] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1">
                      <span className="label !text-sm">{goal.title}</span>
                      <span className="block text-[15px] text-soft mt-1">{goal.description}</span>
                    </span>
                    <span
                      className={`w-5 h-5 mr-4 rounded-md border-2 shrink-0 ${
                        isSelected ? 'border-fg bg-fg shadow-[inset_0_0_0_3px_white]' : 'border-line'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="eyebrow mb-6">2. Your recommended test</div>

            {recommendedTest && (
              <div key={recommendedTest.slug} className="wash rounded-[2rem] p-8 sm:p-10 animate-[fade_0.25s_ease_both]">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="eyebrow !text-sm">Best match</span>
                  <span className="meta">{recommendedTest.turnaround}</span>
                </div>

                <h3 className="font-display h-lg mb-3">{recommendedTest.name}</h3>

                <p className="text-soft mb-8">{recommendedTest.subtitle}</p>

                <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-7">
                  <div>
                    <div className="meta">Total price</div>
                    <div className="text-4xl font-medium mt-1">{recommendedTest.price}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href={`/${recommendedTest.slug}`} className="btn btn-ghost">
                      Details
                    </Link>
                    <ModalTriggerButton variant="teal" size="md" withArrow>
                      Book
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
