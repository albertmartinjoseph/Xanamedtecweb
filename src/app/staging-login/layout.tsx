import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staging Login',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StagingLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
