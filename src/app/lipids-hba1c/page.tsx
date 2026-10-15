import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Lipids & HbA1C Profile',
  description:
    'Cardiovascular Risk & Glycemic Control MOT evaluating cholesterol fractions and 3-month blood glucose levels.',
  alternates: {
    canonical: '/lipids-hba1c',
  },
  openGraph: {
    title: 'Lipids & HbA1C Profile - Xana Medtec',
    description: 'Cardiovascular Risk & Glycemic Control MOT.',
    url: 'https://www.xanamedtec.com/lipids-hba1c',
  },
};

export default function LipidsHbA1cPage() {
  const test = testsData['lipids-hba1c'];
  return <TestPageTemplate test={test} />;
}
