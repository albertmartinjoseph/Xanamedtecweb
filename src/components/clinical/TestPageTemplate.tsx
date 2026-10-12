import React from 'react';
import { TestDetail, testsData } from '@/data/testsData';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';
import { PageHero, Section } from '@/components/ui/Blocks';
import { TestList } from './TestList';

interface TestPageTemplateProps {
  test: TestDetail;
}

export const TestPageTemplate: React.FC<TestPageTemplateProps> = ({ test }) => {
  // Get 3 other tests for the related tests grid
  const relatedTests = Object.values(testsData)
    .filter((t) => t.slug !== test.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <PageHero
        title={test.name}
        lead={test.subtitle}
        crumbs={[
          { name: 'Clinical Services', href: '/clinical-services' },
          { name: 'All Health Tests', href: '/tests-list-page' },
        ]}
      >
        <ModalTriggerButton variant="teal" size="lg" withArrow>
          Book this test
        </ModalTriggerButton>
      </PageHero>

      {/* Main content beside a pinned booking panel */}
      <section className="section">
        <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-7 space-y-14">
            <div>
              <h2 className="h-md mb-4">About the {test.name}</h2>
              <p className="lead">{test.overview}</p>
            </div>

            <div>
              <h2 className="h-md mb-6">What This Test Measures</h2>
              <ul className="space-y-4">
                {test.whatItMeasures.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-[3px] bg-fg shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="h-md mb-6">How to Prepare</h2>
              <ul className="space-y-4">
                {test.preparation.map((prep) => (
                  <li key={prep} className="flex items-start gap-4 text-soft">
                    <span className="w-2.5 h-2.5 rounded-[3px] bg-brand-teal shrink-0 mt-2" />
                    {prep}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pinned booking panel */}
          <aside className="lg:col-span-5">
            <div className="wash rounded-[2rem] p-8 sm:p-10 lg:sticky lg:top-28">
              <div className="text-5xl font-medium">{test.price}</div>

              <dl className="mt-8 mb-8 border-b border-line">
                {[
                  { label: 'Results', value: test.turnaround },
                  { label: 'Sample', value: test.sampleType },
                  { label: 'Preparation', value: test.fasting },
                  { label: 'Laboratory', value: 'UKAS accredited' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-6 border-t border-line py-3.5">
                    <dt className="text-soft">{label}</dt>
                    <dd className="font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              <ModalTriggerButton variant="teal" size="lg" className="w-full" withArrow>
                Book appointment
              </ModalTriggerButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Related tests */}
      <Section band title="Related Health Tests">
        <TestList
          items={relatedTests.map((rel) => ({
            slug: rel.slug,
            name: rel.name,
            desc: rel.overview,
            meta: rel.turnaround,
            price: rel.price,
          }))}
          detailsLabel="Learn More"
          book={false}
          clamp
        />
      </Section>
    </div>
  );
};
