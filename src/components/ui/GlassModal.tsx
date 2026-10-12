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

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
    >
      {/* Restrained Backdrop Blur (backdrop blur over page) */}
      <div
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Translucent Panel with thin light border */}
      <div className="on-paper relative w-full max-w-xl rounded-3xl p-7 sm:p-10 z-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] animate-[fade_0.2s_ease_both]">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full border border-line hover:bg-tint transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-10">
          <span className="label mb-5">
            Direct Contact
          </span>
          <h2 className="h-md">
            {title}
          </h2>
          <p className="mt-3 text-[15px] text-soft leading-relaxed">{subtitle}</p>
        </div>

        {/* Contact Cards: Email & Location */}
        <div className="border-b border-line">
          {/* Email Box */}
          <div className="border-t border-line py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="meta block">
                  Email Us
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-display text-lg hover:text-accent transition-colors"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Small Copy Button */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="btn btn-ghost btn-sm self-start sm:self-center"
            >
              {copied ? (
                <>
                  <Check />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Location Box */}
          <div className="border-t border-line py-5 flex items-start gap-3">
            <div className="text-accent shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="meta block">
                Headquarters
              </span>
              <p className="text-[15px] mt-1 leading-snug">
                {companyAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Extensibility Slot (for future form if ever needed) */}
        {children && <div className="mt-6">{children}</div>}

        {/* Modal Footer Note */}
        <div className="mt-6">
          <p className="meta">
            Clicking the email link will open your default email application.
          </p>
        </div>
      </div>
    </div>
  );
};
