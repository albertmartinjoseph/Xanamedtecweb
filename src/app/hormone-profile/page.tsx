import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Comprehensive Hormone Profile - Xana Medtec',
  description:
    'Female & Male Reproductive Endocrinology panel measuring Oestradiol, Progesterone, LH, FSH, and Prolactin. Fast accredited laboratory test.',
  openGraph: {
    title: 'Comprehensive Hormone Profile - Xana Medtec',
    description: 'Female & Male Reproductive Endocrinology panel.',
  },
};

export default function HormoneProfilePage() {
  const test = testsData['hormone-profile'];
  return <TestPageTemplate test={test} />;
}
