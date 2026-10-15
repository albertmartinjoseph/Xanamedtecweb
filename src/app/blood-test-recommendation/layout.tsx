import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blood Test Recommendation Guide',
  description:
    'Use our guided diagnostic tool to identify the right clinical pathology panel based on your specific wellness goals and health priorities.',
  alternates: {
    canonical: '/blood-test-recommendation',
  },
  openGraph: {
    title: 'Blood Test Recommendation Guide - Xana Medtec',
    description:
      'Identify the right clinical pathology panel based on your specific wellness goals.',
    url: 'https://www.xanamedtec.com/blood-test-recommendation',
  },
};

export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
