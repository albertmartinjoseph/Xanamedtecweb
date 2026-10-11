import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Lipids & HbA1C Profile - Xana Medtec',
  description:
    'Cardiovascular Risk & Glycemic Control MOT evaluating cholesterol fractions and 3-month blood glucose levels.',
  openGraph: {
    title: 'Lipids & HbA1C Profile - Xana Medtec',
    description: 'Cardiovascular Risk & Glycemic Control MOT.',
  },
};

export default function LipidsHbA1cPage() {
  const test = testsData['lipids-hba1c'];
  return <TestPageTemplate test={test} />;
}
