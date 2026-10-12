'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, ArrowRight, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-[#001D47] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002D62] via-[#001D47] to-[#07172E] pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#20B2AA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#002678]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-12">
            <Image
              src="/images/logo-dark-bg.png"
              alt="Xana Medtec Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 sm:p-10 ">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#20B2AA]/20 text-[#20B2AA] border border-[#20B2AA]/30 mb-4 shadow-sm">
              <Lock className="w-6 h-6" />
            </div>
            <div className="eyebrow text-teal-300 mb-3">
              <Sparkles className="w-3 h-3 text-teal-300" />
              <span>Private Client Review</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
              Protected Preview Access
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This preview environment is reserved for client review. Enter your access password to unlock.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
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
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent transition-all"
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-full font-bold text-sm bg-[#20B2AA] text-white hover:bg-[#1a938c] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? 'Verifying...' : 'Unlock Preview'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Controlled via staging environment variables. Access is retained for 30 days once entered.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center mt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Xana Medtec Ltd. Confidential review.
        </div>
      </div>
    </div>
  );
}

export default function StagingLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#001D47]" />}>
      <StagingLoginContent />
    </Suspense>
  );
}
