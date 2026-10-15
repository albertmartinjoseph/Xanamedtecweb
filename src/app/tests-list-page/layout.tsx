import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Health Tests Directory',
  description:
    'Browse our complete directory of accredited clinical health tests and diagnostic pathology screens in Manchester and across the UK.',
  alternates: {
    canonical: '/tests-list-page',
  },
  openGraph: {
    title: 'Popular Health Tests Directory - Xana Medtec',
    description:
      'Browse our complete directory of accredited clinical health tests and diagnostic pathology screens.',
    url: 'https://www.xanamedtec.com/tests-list-page',
  },
};

export default function TestsListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
