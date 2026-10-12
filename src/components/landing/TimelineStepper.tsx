import React from 'react';

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
  return (
    <div className="relative">
      <span className="draw-x absolute top-0 left-0 z-10 h-0.5 w-full bg-gradient-to-r from-[#20B2AA] via-teal-300 to-[#20B2AA]" aria-hidden="true" />
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
      {steps.map((step) => (
        <li
          key={step.number}
          className="reveal group relative border-r border-b border-white/15 p-6 sm:p-7 transition-colors duration-500 hover:bg-white/[0.06]"
        >
          {/* Teal rule draws across the top of the cell on hover */}
          <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#20B2AA] transition-all duration-500 group-hover:w-full" />

          <span className="block font-serif text-5xl sm:text-6xl leading-none text-teal-300 mb-6" aria-hidden="true">
            {step.number}
          </span>

          <div className="eyebrow text-slate-400 mb-3">Stage {step.number}</div>

          <h3 className="text-xl font-semibold text-white leading-snug mb-2">
            {step.title}
          </h3>

          <p className="text-[15px] text-slate-300 leading-relaxed">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
    </div>
  );
};
