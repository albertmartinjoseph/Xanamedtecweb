'use client';

import React, { useEffect, useState } from 'react';
import { X, Mail, MapPin, Copy, Check } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode; // Optional slot for future forms
}

export const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  title = 'Get in Touch with Xana Medtec',
  subtitle = 'For appointments, clinical support, and international distribution inquiries.',
  children,
}) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'info@xanamedtec.com';
  const companyAddress = 'Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ';

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const previousActiveElement = React.useRef<HTMLElement | null>(null);

  // Store previous active element and auto-focus close button
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement | null;
      // Slight delay to allow animation frame
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  // Handle Escape key and Tab focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="glass-modal-title"
      aria-describedby="glass-modal-desc"
    >
      {/* Restrained Backdrop Blur (backdrop blur over page) */}
      <div
        className="fixed inset-0 bg-[#002D62]/45 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Translucent Panel with thin light border */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white/95 dark:bg-[#0b1424]/95 backdrop-blur-2xl rounded-[24px] border border-white/60 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,45,98,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-[#606367] dark:text-slate-200 hover:bg-[#002D62] dark:hover:bg-[#20B2AA] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/15 text-[#20B2AA] dark:text-teal-300 mb-2">
            Direct Contact
          </span>
          <h2 id="glass-modal-title" className="text-xl sm:text-2xl font-bold text-[#002D62] dark:text-white tracking-tight">
            {title}
          </h2>
          <p id="glass-modal-desc" className="mt-1 text-sm text-[#606367] dark:text-slate-300 leading-relaxed">{subtitle}</p>
        </div>

        {/* Contact Cards: Email & Location */}
        <div className="space-y-4">
          {/* Email Box */}
          <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#0f1b2e] border border-gray-100/90 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#20B2AA]/15 text-[#20B2AA] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-medium text-[#606367] dark:text-slate-400 uppercase tracking-wider">
                  Email Us
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base font-bold text-[#002D62] dark:text-teal-300 hover:text-[#20B2AA] transition-colors underline decoration-[#20B2AA]/40 underline-offset-4"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Small Copy Button */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#13223c] border border-gray-200 dark:border-white/15 text-xs font-semibold text-[#002D62] dark:text-slate-200 hover:border-[#20B2AA] hover:text-[#20B2AA] transition-all cursor-pointer shadow-2xs self-start sm:self-center"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#606367] dark:text-slate-300" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Location Box */}
          <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#0f1b2e] border border-gray-100/90 dark:border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#002D62]/10 dark:bg-white/10 text-[#002D62] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-[#20B2AA]" />
            </div>
            <div>
              <span className="block text-xs font-medium text-[#606367] dark:text-slate-400 uppercase tracking-wider">
                Headquarters
              </span>
              <p className="text-sm font-semibold text-[#002D62] dark:text-slate-100 mt-0.5 leading-snug">
                {companyAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Extensibility Slot (for future form if ever needed) */}
        {children && <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10">{children}</div>}

        {/* Modal Footer Note */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 text-center">
          <p className="text-xs text-[#606367] dark:text-slate-400">
            Clicking the email link will open your default email application.
          </p>
        </div>
      </div>
    </div>
  );
};
