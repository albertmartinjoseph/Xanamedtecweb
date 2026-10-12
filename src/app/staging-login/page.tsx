'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

function StagingLoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || '/';

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Please enter the password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/staging-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(redirectTarget);
        router.refresh();
      } else {
        setError(data.error || 'Incorrect review password.');
      }
    } catch {
      setError('Unable to authenticate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="on-ink min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      
      <div className="relative z-10 w-full max-w-md">
        {/* Brand Logo */}
        <div className="mb-8">
          <div className="relative w-48 h-12">
            <Image
              src="/images/logo-dark-bg.png"
              alt="Xana Medtec Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-line bg-surface-2 p-8 sm:p-10">
          <div className="mb-8">
            <Lock className="w-6 h-6 text-accent mb-6" strokeWidth={1.25} />
            <div className="label mb-4 flex">
              <Sparkles className="w-3 h-3" />
              <span>Private Client Review</span>
            </div>
            <h1 className="h-lg mb-3">
              Protected Preview Access
            </h1>
            <p className="text-sm text-soft leading-relaxed">
              This preview environment is reserved for client review. Enter your access password to unlock.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="meta block mb-2"
              >
                Review Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  className="field"
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 border border-rose-400/50 text-rose-200 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg w-full"
            >
              <span>{loading ? 'Verifying...' : 'Unlock Preview'}</span>
              <ArrowRight />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-line">
            <p className="text-[13px] text-soft">
              Controlled via staging environment variables. Access is retained for 30 days once entered.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="meta mt-6">
          © {new Date().getFullYear()} Xana Medtec Ltd. Confidential review.
        </div>
      </div>
    </div>
  );
}

export default function StagingLoginPage() {
  return (
    <Suspense fallback={<div className="on-ink min-h-screen" />}>
      <StagingLoginContent />
    </Suspense>
  );
}
