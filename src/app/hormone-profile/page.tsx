import React from 'react';
import type { Metadata } from 'next';
import { TestPageTemplate } from '@/components/clinical/TestPageTemplate';
import { testsData } from '@/data/testsData';

export const metadata: Metadata = {
  title: 'Comprehensive Hormone Profile',
  description:
    'Female & Male Reproductive Endocrinology panel measuring Oestradiol, Progesterone, LH, FSH, and Prolactin. Fast accredited laboratory test.',
  alternates: {
    canonical: '/hormone-profile',
  },
  openGraph: {
    title: 'Comprehensive Hormone Profile - Xana Medtec',
    description: 'Female & Male Reproductive Endocrinology panel.',
    url: 'https://www.xanamedtec.com/hormone-profile',
  },
};

export default function HormoneProfilePage() {
  const test = testsData['hormone-profile'];
  return <TestPageTemplate test={test} />;
}
