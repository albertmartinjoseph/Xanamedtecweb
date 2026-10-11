import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Thyroid Function Profile - Xana Medtec',
  description:
    'Comprehensive Thyroid & Metabolic Health panel measuring TSH, FT4, and FT3. Fast 24-hour results.',
  openGraph: {
    title: 'Thyroid Function Profile - Xana Medtec',
    description: 'Comprehensive Thyroid & Metabolic Health panel measuring TSH, FT4, and FT3.',
  },
};

export default function ThyroidProfilePage() {
  const test = testsData['thyroid-profile'];
  return <TestPageTemplate test={test} />;
}
