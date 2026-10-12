'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { testsData } from '@/data/testsData';
import { PageHero } from '@/components/ui/Blocks';
import { TestList } from '@/components/clinical/TestList';

export default function TestsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const allTests = Object.values(testsData);

  const filteredTests = allTests.filter((test) => {
    const q = searchTerm.toLowerCase();
    return (
      test.name.toLowerCase().includes(q) ||
      test.subtitle.toLowerCase().includes(q) ||
      test.overview.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen">
      <PageHero
        title="All Health & Blood Tests"
        lead="Doctor-reviewed blood tests and screening packages with fast, accredited results."
        crumbs={[{ name: 'Clinical Services', href: '/clinical-services' }]}
        image={{ src: '/images/stock/care-team.jpg', alt: 'A clinical team reviewing notes together' }}
      >
        <label className="relative block w-full max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-soft" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tests, e.g. Thyroid, Kidney, Testosterone"
            className="field !pl-13"
          />
        </label>
      </PageHero>

      <section className="section band"><div className="shell">
        <div className="flex items-center justify-between mb-6">
          <div className="meta">
            Showing <span className="text-fg font-semibold">{filteredTests.length}</span> tests
          </div>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="link text-sm text-accent cursor-pointer">
              Clear search
            </button>
          )}
        </div>

        <TestList
          items={filteredTests.map((test) => ({
            slug: test.slug,
            name: test.name,
            sub: test.subtitle,
            desc: test.overview,
            meta: test.turnaround,
            price: test.price,
          }))}
        />

        <p className="mt-10 text-soft">
          Not sure which test you need?{' '}
          <Link href="/blood-test-recommendation" className="link text-accent font-semibold">
            Find Your Test
          </Link>
        </p>
      </div></section>
    </div>
  );
}
