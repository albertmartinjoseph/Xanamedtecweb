import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Testosterone Monitoring',
  description:
    'Endocrine & Androgen Optimization Profile. Accurate total and free testosterone blood test with fast turnaround.',
  alternates: {
    canonical: '/testosterone-monitoring',
  },
  openGraph: {
    title: 'Testosterone Monitoring - Xana Medtec',
    description: 'Endocrine & Androgen Optimization Profile.',
    url: 'https://www.xanamedtec.com/testosterone-monitoring',
  },
};

export default function TestosteroneMonitoringPage() {
  const test = testsData['testosterone-monitoring'];
  return <TestPageTemplate test={test} />;
}
