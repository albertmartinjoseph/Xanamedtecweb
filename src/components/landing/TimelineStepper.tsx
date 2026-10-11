'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Market Opportunity',
    description: 'Identify the territory and the clinical need.',
  },
  {
    number: '02',
    title: 'Distributor Selection',
    description: 'The right partner, not just a distributor.',
  },
  {
    number: '03',
    title: 'Product Introduction',
    description: 'Positioning and partner onboarding.',
  },
  {
    number: '04',
    title: 'Clinical Demonstration',
    description: 'Healthcare professionals experience the technology.',
  },
  {
    number: '05',
    title: 'Trial / Evaluation',
    description: 'Real-world clinical environments.',
  },
  {
    number: '06',
    title: 'End-User Training',
    description: 'Confidence drives adoption.',
  },
  {
    number: '07',
    title: 'Distributor Sales Support',
    description: 'Never left alone with a new product.',
  },
  {
    number: '08',
    title: 'Market Development & Ongoing Growth',
    description: 'Feedback, engagement and sustainable growth.',
  },
];

export const TimelineStepper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [lineProgress, setLineProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when container enters middle of screen, end when bottom reaches middle
      const totalDist = rect.height;
      const currentDist = windowHeight * 0.6 - rect.top;
      const progress = Math.min(100, Math.max(0, (currentDist / totalDist) * 100));

      setLineProgress(progress);

      // Calculate which step is active (0 to 7)
      const stepIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor((progress / 100) * steps.length))
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-8">
      {/* Central Connecting Line (Desktop) / Left Line (Mobile) */}
      <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-white/15 rounded-full overflow-hidden">
        {/* Animated fill stroke in brand teal with glow */}
        <div
          className="w-full bg-[#20B2AA] shadow-[0_0_14px_rgba(32,178,170,0.9)] transition-all duration-300 ease-out origin-top"
          style={{ height: `${lineProgress}%` }}
        />
      </div>

      {/* Stepper items */}
      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => {
          const isPassed = index <= activeStep;
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.number}
              className={`relative flex items-start md:items-center ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-6 md:gap-12 transition-all duration-300`}
            >
              {/* Step Content Card */}
              <div
                className={`ml-14 md:ml-0 md:w-1/2 ${
                  isEven ? 'md:text-left' : 'md:text-right'
                }`}
              >
                <div
                  className={`rounded-[22px] p-6 sm:p-7 border transition-all duration-300 cursor-pointer ${
                    isPassed
                      ? 'bg-[#002D62]/90 backdrop-blur-xl border-[#20B2AA]/60 shadow-[0_12px_40px_-8px_rgba(32,178,170,0.3)] translate-y-[-2px]'
                      : 'bg-[#001D47]/70 backdrop-blur-md border-white/10 opacity-75 hover:opacity-100 hover:border-[#20B2AA]/40 hover:bg-[#002678]/80'
                  } hover:-translate-y-1 hover:shadow-[0_16px_40px_-6px_rgba(32,178,170,0.35)]`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 ${
                      isPassed
                        ? 'bg-[#20B2AA]/20 text-teal-300 border border-[#20B2AA]/30'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <span>Stage {step.number}</span>
                    {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Circular Node */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 z-10 ${
                  isPassed
                    ? 'bg-[#20B2AA] text-white shadow-[0_0_20px_rgba(32,178,170,0.85)] scale-110 border-2 border-white'
                    : 'bg-[#001D47] text-slate-400 border-2 border-white/20'
                }`}
              >
                {step.number}
              </div>

              {/* Spacer on desktop to maintain alignment */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
