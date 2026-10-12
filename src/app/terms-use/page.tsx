import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use - Xana Medtec',
  description: 'Website Terms of Use and Legal Conditions for Xana Medtec Ltd.',
};

export default function TermsOfUsePage() {
  return (
    <div className="page-surface min-h-screen text-[#1F2A3A] font-sans">
      <section className="hero-light relative overflow-hidden pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">
        <div className="container-boxed relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#002D62] tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-[#4B5563] text-sm sm:text-base">
            Legal terms governing your use of the Xana Medtec website and services.
          </p>
        </div>
      </section>

      <section className="container-boxed py-16">
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-gray-200 shadow-sm max-w-4xl mx-auto space-y-8 text-[#4B5563] text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#002D62] mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Xana Medtec Ltd (located at xanamedtec.com), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use our site or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] mb-3">2. Corporate Identity</h2>
            <p>
              This website is operated by <strong>Xana Medtec Ltd</strong>, a private limited company registered in England and Wales. Registered office: <strong>Bartle House, Oxford Court, Manchester, M2 3WQ</strong>. Email: <a href="mailto:info@xanamedtec.com" className="text-teal-700 underline">info@xanamedtec.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] mb-3">3. Medical Disclaimer</h2>
            <p>
              The content provided on this website—including health test overviews, product specifications, and clinical articles—is provided for informational and clinical education purposes only. It does not constitute medical advice or substitute for consultation with a qualified medical doctor or registered healthcare provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] mb-3">4. Intellectual Property</h2>
            <p>
              All trademarks, product names, logos, graphics, and text on this site are the property of Xana Medtec Ltd or their respective licensors. You may not reproduce, distribute, or modify any materials without express written authorization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] mb-3">5. Governing Law</h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with this site shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-xs text-slate-400">
              For any legal inquiries, contact: Legal Dept, Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
