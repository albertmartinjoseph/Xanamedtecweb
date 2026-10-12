import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/Blocks';

export const metadata: Metadata = {
  title: 'Terms of Use - Xana Medtec',
  description: 'Website Terms of Use and Legal Conditions for Xana Medtec Ltd.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Terms of Use" lead="Legal terms governing your use of the Xana Medtec website and services." />

      <section className="section">
        <div className="shell">
        <div className="max-w-3xl mx-auto text-soft text-base leading-relaxed [&_strong]:text-fg [&_strong]:font-medium">
          <div className="pb-10">
            <h2 className="h-md text-fg mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Xana Medtec Ltd (located at xanamedtec.com), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use our site or services.
            </p>
          </div>

          <div className="pb-10">
            <h2 className="h-md text-fg mb-3">2. Corporate Identity</h2>
            <p>
              This website is operated by <strong>Xana Medtec Ltd</strong>, a private limited company registered in England and Wales. Registered office: <strong>Bartle House, Oxford Court, Manchester, M2 3WQ</strong>. Email: <a href="mailto:info@xanamedtec.com" className="text-accent underline underline-offset-4">info@xanamedtec.com</a>.
            </p>
          </div>

          <div className="pb-10">
            <h2 className="h-md text-fg mb-3">3. Medical Disclaimer</h2>
            <p>
              The content provided on this website—including health test overviews, product specifications, and clinical articles—is provided for informational and clinical education purposes only. It does not constitute medical advice or substitute for consultation with a qualified medical doctor or registered healthcare provider.
            </p>
          </div>

          <div className="pb-10">
            <h2 className="h-md text-fg mb-3">4. Intellectual Property</h2>
            <p>
              All trademarks, product names, logos, graphics, and text on this site are the property of Xana Medtec Ltd or their respective licensors. You may not reproduce, distribute, or modify any materials without express written authorization.
            </p>
          </div>

          <div className="pb-10">
            <h2 className="h-md text-fg mb-3">5. Governing Law</h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with this site shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <p className="meta">
              For any legal inquiries, contact: Legal Dept, Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ.
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
