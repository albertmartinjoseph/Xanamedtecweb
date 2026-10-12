import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: '01', title: 'Market Opportunity', description: 'Identify the territory and the clinical need.' },
  { number: '02', title: 'Distributor Selection', description: 'The right partner, not just a distributor.' },
  { number: '03', title: 'Product Introduction', description: 'Positioning and partner onboarding.' },
  {
    number: '04',
    title: 'Clinical Demonstration',
    description: 'Healthcare professionals experience the technology.',
  },
  { number: '05', title: 'Trial / Evaluation', description: 'Real-world clinical environments.' },
  { number: '06', title: 'End-User Training', description: 'Confidence drives adoption.' },
  { number: '07', title: 'Distributor Sales Support', description: 'Never left alone with a new product.' },
  {
    number: '08',
    title: 'Market Development & Ongoing Growth',
    description: 'Feedback, engagement and sustainable growth.',
  },
];

/** The eight stages as numbered rows, read in order. */
export const TimelineStepper: React.FC = () => {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
      {steps.map((step) => (
        <li key={step.number} className="card !p-1.5 flex items-center gap-5">
          <span
            className="wash text-lg font-medium w-20 h-20 rounded-[1.125rem] flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div className="pr-4">
            <h3 className="label !text-sm">{step.title}</h3>
            <p className="text-[15px] text-soft mt-1">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};
