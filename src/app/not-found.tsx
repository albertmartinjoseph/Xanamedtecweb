import React from 'react';
import Link from 'next/link';
import { Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F9FA] px-4 py-20">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200/80">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 mb-6">
          404 Error • Page Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#002D62] mb-4 tracking-tight">
          Page Not Located
        </h1>
        <p className="text-[#606367] text-base sm:text-lg mb-8 leading-relaxed">
          The diagnostic page, clinical test, or resource you requested may have been relocated or updated. Please navigate using our main sections below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#002D62] text-white font-semibold hover:bg-[#20B2AA] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/clinical-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#002D62] font-semibold border border-gray-300 hover:border-[#002D62] transition-colors"
          >
            <Search className="w-4 h-4" />
            Clinical Services
          </Link>
        </div>
      </div>
    </div>
  );
}
