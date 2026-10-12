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
      className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-[fade_0.25s_ease_both]"
    >
      <div className="on-ink rounded-2xl p-6 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-accent shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display text-xl leading-tight">Privacy & Cookie Preferences</h4>
            <p className="text-[13px] text-soft mt-2 leading-relaxed">
              We use cookies to ensure optimal navigation and analyze site performance in accordance with UK GDPR.
              Read our{' '}
              <Link href="/privacy-policy" className="underline underline-offset-2 text-fg hover:text-accent">
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
            className="btn btn-sm flex-1"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="btn btn-ghost btn-sm"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
};
