import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System & Component Showcase',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
