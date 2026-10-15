import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Help Center',
  description:
    'Find answers to common questions about our clinical tests, appointment scheduling, laboratory processing, and diagnostic equipment.',
  alternates: {
    canonical: '/help-faqs',
  },
  openGraph: {
    title: 'Frequently Asked Questions - Xana Medtec',
    description:
      'Find answers to common questions about clinical tests, appointments, and diagnostic equipment.',
    url: 'https://www.xanamedtec.com/help-faqs',
  },
};

export default function HelpFaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
