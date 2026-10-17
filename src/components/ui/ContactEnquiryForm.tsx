'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ContactEnquiryFormProps {
  defaultCategory?: 'clinical' | 'distribution' | 'devices';
  onSuccess?: () => void;
  className?: string;
}

export const ContactEnquiryForm: React.FC<ContactEnquiryFormProps> = ({
  defaultCategory = 'clinical',
  onSuccess,
  className = '',
}) => {
  const [category, setCategory] = useState<'clinical' | 'distribution' | 'devices'>(defaultCategory);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
    _honey_url: '', // Honeypot spam trap
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Spam honeypot trap
    if (formData._honey_url) {
      setSubmitted(true);
      return;
    }

    if (!formData.consent) {
      setError('Please agree to the privacy consent to submit your enquiry.');
      return;
    }

    setSubmitting(true);

    try {
      // Send to contact handler (prefers static /contact.php on cPanel Apache, falls back to /api/contact in local dev)
      let res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          enquiryType: category,
          recipient: 'info@xanamedtec.com',
        }),
      });

      // If /contact.php is not found (e.g. running under next dev), fall back to /api/contact
      if (res.status === 404) {
        res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            enquiryType: category,
            recipient: 'info@xanamedtec.com',
          }),
        });
      }

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || 'Unable to send message. Please email info@xanamedtec.com directly.');
      }

      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Submission failed. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4">
        <CheckCircle2 className="w-16 h-16 text-[#20B2AA] mx-auto mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-[#002D62] mb-2">Enquiry Received</h3>
        <p className="text-[#606367] max-w-md mx-auto">
          Thank you for getting in touch. Your message has been routed to our team at{' '}
          <strong className="text-[#002D62]">info@xanamedtec.com</strong>. We will respond promptly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Category Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#002D62] mb-2">
          Enquiry Purpose
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { id: 'clinical', label: 'Clinical & Health Tests' },
            { id: 'distribution', label: 'International Distribution' },
            { id: 'devices', label: 'Medical Devices (Anisys / Vein)' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id as 'clinical' | 'distribution' | 'devices')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all ${
                category === item.id
                  ? 'border-[#20B2AA] bg-[#20B2AA]/10 text-[#002D62] font-bold shadow-sm'
                  : 'border-gray-200 text-[#606367] hover:border-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Honeypot anti-spam field (hidden from genuine users) */}
      <input
        type="text"
        name="_honey_url"
        maxLength={100}
        value={formData._honey_url}
        onChange={(e) => setFormData({ ...formData, _honey_url: e.target.value })}
        className="hidden opacity-0 pointer-events-none absolute"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#606367] mb-1">Full Name *</label>
          <input
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#20B2AA] focus:ring-1 focus:ring-[#20B2AA] text-sm text-[#323232]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#606367] mb-1">Email Address *</label>
          <input
            type="email"
            required
            maxLength={150}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#20B2AA] focus:ring-1 focus:ring-[#20B2AA] text-sm text-[#323232]"
          />
        </div>
      </div>

      {/* Phone & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#606367] mb-1">Phone Number (Optional)</label>
          <input
            type="tel"
            maxLength={50}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 7123 456789"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#20B2AA] focus:ring-1 focus:ring-[#20B2AA] text-sm text-[#323232]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#606367] mb-1">Organization / Clinic</label>
          <input
            type="text"
            maxLength={100}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Manchester Health Trust"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#20B2AA] focus:ring-1 focus:ring-[#20B2AA] text-sm text-[#323232]"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-[#606367] mb-1">Message / Requirements *</label>
        <textarea
          required
          rows={3}
          maxLength={5000}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your enquiry, requested testing services, or distribution region..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#20B2AA] focus:ring-1 focus:ring-[#20B2AA] text-sm text-[#323232]"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="consent-check"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#20B2AA] focus:ring-[#20B2AA] cursor-pointer"
        />
        <label htmlFor="consent-check" className="text-xs text-[#606367] leading-relaxed cursor-pointer">
          I consent to Xana Medtec Ltd processing my information to respond to this enquiry in accordance with the{' '}
          <Link href="/privacy-policy" className="text-[#002D62] font-semibold underline hover:text-[#20B2AA]">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <Button variant="submit" size="md" type="submit" disabled={submitting} className="w-full">
          {submitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
        </Button>
      </div>
    </form>
  );
};
