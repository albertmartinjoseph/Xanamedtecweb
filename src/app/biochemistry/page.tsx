import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Biochemistry Profile - Xana Medtec',
  description:
    'Comprehensive Kidney, Liver, Bone & Vital Biomarker Profile. Fast 24-48 hour accredited laboratory blood test.',
  openGraph: {
    title: 'Biochemistry Profile - Xana Medtec',
    description: 'Comprehensive Kidney, Liver, Bone & Vital Biomarker Profile.',
  },
};

export default function BiochemistryPage() {
  const test = testsData['biochemistry'];
  return <TestPageTemplate test={test} />;
}
