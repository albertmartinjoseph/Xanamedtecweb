'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('xana_cookie_consent');
    if (!consent) {
      // Small timeout for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('xana_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('xana_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 dark:bg-[#0b1424]/95 backdrop-blur-xl border border-gray-200/90 dark:border-white/10 shadow-[0_20px_45px_-10px_rgba(0,45,98,0.22)] dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)] rounded-[20px] p-5 sm:p-6 text-[#323232] dark:text-slate-100">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-xl bg-[#20B2AA]/15 text-[#20B2AA] shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#002D62] dark:text-white">Privacy & Cookie Preferences</h4>
            <p className="text-xs text-[#606367] dark:text-slate-300 mt-1 leading-relaxed">
              We use cookies to ensure optimal navigation and analyze site performance in accordance with UK GDPR.
              Read our{' '}
              <Link href="/privacy-policy" className="underline hover:text-[#20B2AA] text-[#002D62] dark:text-teal-300 font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 rounded-full bg-[#002D62] dark:bg-teal-600 hover:bg-[#20B2AA] dark:hover:bg-teal-500 text-white text-xs font-bold transition-colors cursor-pointer text-center"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="py-2 px-3 rounded-full border border-gray-200 dark:border-white/15 hover:bg-gray-100 dark:hover:bg-white/10 text-[#606367] dark:text-slate-300 text-xs font-medium transition-colors cursor-pointer text-center"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
};
