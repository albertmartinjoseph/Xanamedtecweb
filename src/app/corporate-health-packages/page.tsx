import React from 'react';
import type { Metadata } from 'next';
import { Building2, ShieldCheck, Users, HeartPulse, Award, ArrowRight } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export const metadata: Metadata = {
  title: 'Corporate Health Packages - Xana Medtec',
  description:
    'Workplace health assessments, employee diagnostic screenings, and corporate executive health MOT packages tailored for UK businesses.',
};

export default function CorporateHealthPackagesPage() {
  return (
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">
        <div className="container-boxed relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-teal-700 mb-6">
              EMPLOYEE WELLNESS & SCREENING
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002D62] tracking-tight mb-6">
              Corporate Health Packages
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              Empower your workforce with proactive, confidential on-site diagnostic screenings and executive health checks.
            </p>
          </div>
        </div>
      </section>

      <section className="container-boxed py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">Workplace Blood Screenings</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              On-site or clinic-based phlebotomy sessions measuring essential organ metrics, cholesterol fractions, and diabetes risk.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">Executive Health MOT</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              In-depth physiological, cardiovascular, hormonal, and full blood count profiling designed for key leadership personnel.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-3">Occupational Compliance</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Fast-track Hepatitis B immunity titers and clinical laboratory clearances for healthcare, lab, and industrial teams.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-gray-200 shadow-sm max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] mb-4">
            Discuss Your Corporate Wellness Requirements
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto mb-8">
            We provide bespoke packages, volume pricing, and dedicated coordinator support tailored to your organization.
          </p>
          <ModalTriggerButton variant="teal" size="lg">
            Request Corporate Proposal
          </ModalTriggerButton>
        </div>
      </section>
    </div>
  );
}
