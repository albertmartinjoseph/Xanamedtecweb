import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and UK GDPR data compliance for Xana Medtec Ltd.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy - Xana Medtec',
    description: 'Privacy Policy and UK GDPR data compliance for Xana Medtec Ltd.',
    url: 'https://www.xanamedtec.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#070e1b] text-[#323232] dark:text-slate-100 font-sans transition-colors duration-200">
      <section className="bg-[#002D62] text-white pt-36 sm:pt-40 lg:pt-44 pb-20">
        <div className="container-boxed">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-200 text-sm sm:text-base">
            Last Updated: October 2026 • Compliant with UK Data Protection Act 2018 & UK GDPR
          </p>
        </div>
      </section>

      <section className="container-boxed py-16">
        <div className="bg-white dark:bg-[#0c1626] rounded-[26px] p-8 sm:p-14 border border-gray-200/90 dark:border-white/10 shadow-sm max-w-4xl mx-auto space-y-8 text-[#606367] dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#002D62] dark:text-white mb-3">1. Overview & Data Controller</h2>
            <p>
              Xana Medtec Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting and respecting your personal privacy. This Privacy Notice describes how we collect, store, handle, and process personal data when you visit our website, submit inquiries, or utilize our clinical diagnostic referral services.
            </p>
            <p className="mt-3">
              The Data Controller is <strong>Xana Medtec Ltd</strong>, registered in England and Wales, with principal offices located at <strong>Bartle House, Oxford Court, Manchester, M2 3WQ</strong>. You may contact our Data Protection Officer at <a href="mailto:info@xanamedtec.com" className="text-[#20B2AA] underline">info@xanamedtec.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] dark:text-white mb-3">2. Information We Collect</h2>
            <p>We may collect and process the following categories of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contact Information:</strong> Name, professional title, business organization, email address, and postal address.</li>
              <li><strong>Clinical Inquiries:</strong> Diagnostic screening requests, device demonstration bookings, and distribution partnership proposals.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, and operating system.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] dark:text-white mb-3">3. How We Use Your Data</h2>
            <p>Your information is used strictly under lawful bases (Article 6 UK GDPR):</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To fulfill commercial contracts and respond to partnership inquiries (Contractual necessity).</li>
              <li>To coordinate clinical pathology appointments and sample collections (Legitimate interests).</li>
              <li>To comply with statutory healthcare records standards and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] dark:text-white mb-3">4. Security & Data Retention</h2>
            <p>
              We implement industry-standard encryption, SSL transport security, and strict access controls. Diagnostic data and patient inquiries are held in accordance with NHS Records Management Code of Practice standards and are never sold to third-party commercial marketing platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#002D62] dark:text-white mb-3">5. Your Legal Rights</h2>
            <p>
              Under UK GDPR, you retain the right to access, rectify, erase, or restrict processing of your personal data. You may also lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at ico.org.uk.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 dark:border-white/10">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              For any privacy queries, please write to: Data Privacy Officer, Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ, or email <a href="mailto:info@xanamedtec.com" className="text-[#20B2AA] underline">info@xanamedtec.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
