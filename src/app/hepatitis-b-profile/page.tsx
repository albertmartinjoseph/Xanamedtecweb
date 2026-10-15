import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Hepatitis B Profile',
  description:
    'Immunity Status & Viral Infection Screening. Fast 24-48 hour accredited laboratory blood test in Manchester.',
  alternates: {
    canonical: '/hepatitis-b-profile',
  },
  openGraph: {
    title: 'Hepatitis B Profile - Xana Medtec',
    description: 'Immunity Status & Viral Infection Screening.',
    url: 'https://www.xanamedtec.com/hepatitis-b-profile',
  },
};

export default function HepatitisBPage() {
  const test = testsData['hepatitis-b-profile'];
  return <TestPageTemplate test={test} />;
}
