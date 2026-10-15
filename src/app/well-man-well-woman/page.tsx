import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Well Man & Well Woman MOT',
  description:
    'Our Most Comprehensive Full-Body Health Check combining hematology, organ function, lipids, diabetes, thyroid and essential vitamins.',
  alternates: {
    canonical: '/well-man-well-woman',
  },
  openGraph: {
    title: 'Well Man & Well Woman MOT - Xana Medtec',
    description: 'Our Most Comprehensive Full-Body Health Check.',
    url: 'https://www.xanamedtec.com/well-man-well-woman',
  },
};

export default function WellManWellWomanPage() {
  const test = testsData['well-man-well-woman'];
  return <TestPageTemplate test={test} />;
}
