'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X as CloseIcon,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const popularTests = [
  { name: 'Hepatitis B Profile', href: '/hepatitis-b-profile' },
  { name: 'Biochemistry', href: '/biochemistry' },
  { name: 'Testosterone Monitoring', href: '/testosterone-monitoring' },
  { name: 'Thyroid Profile', href: '/thyroid-profile' },
  { name: 'Hormone Profile', href: '/hormone-profile' },
  { name: 'Lipids HbA1C', href: '/lipids-hba1c' },
  { name: 'Well Man & Well Woman', href: '/well-man-well-woman' },
];

export const Header: React.FC = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown active states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  // Mobile accordion states
  const [mobileDevicesOpen, setMobileDevicesOpen] = useState(false);
  const [mobileClinicalOpen, setMobileClinicalOpen] = useState(false);
  const [mobileTestsOpen, setMobileTestsOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener for sticky shrink, hairline shadow and scroll-progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle desktop dropdown hover with gentle delay to prevent flickering
  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubmenu(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#071328] transition-all duration-300">
      {/* 1. Header Top Bar (Purged phone, clinic address, hours, Help & FAQs; kept LinkedIn & X only) */}
      <div className="bg-[#002D62] text-white py-2 px-4 border-b border-white/10 text-xs">
        <div className="container-boxed flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
            <span className="font-semibold text-white">Xana Medtec</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">International Medical Distribution & Diagnostics</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 hidden md:inline">Connect with us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/xana-medtec/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xana Medtec on LinkedIn"
                className="text-slate-300 hover:text-[#20B2AA] transition-colors p-1"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/XanaMedtec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xana Medtec on X"
                className="text-slate-300 hover:text-[#20B2AA] transition-colors p-1"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Shrinks slightly on scroll + hairline shadow) */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 shadow-[0_4px_20px_-4px_rgba(0,45,98,0.08)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] border-b border-gray-150 dark:border-white/10'
            : 'py-4 border-b border-gray-100 dark:border-white/10'
        }`}
      >
        <div className="container-boxed flex items-center justify-between">
          {/* Logo with light and dark mode visibility variants */}
          <Link href="/" className="relative flex items-center shrink-0">
            <div className="relative w-48 sm:w-56 h-12 sm:h-14">
              <Image
                src="/images/logo-light-bg.png"
                alt="Xana Medtec Logo"
                fill
                priority
                className="object-contain object-left dark:hidden"
              />
              <Image
                src="/images/logo-dark-bg.png"
                alt="Xana Medtec Logo"
                fill
                priority
                className="object-contain object-left hidden dark:block"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Section 1 of Spec) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-[#323232] dark:text-slate-100">
            {/* 1. About Us */}
            <Link
              href="/about-us"
              className="px-3 py-2 rounded-full text-[#323232] dark:text-slate-100 hover:text-[#002D62] dark:hover:text-[#20B2AA] hover:bg-[#F8F9FA] dark:hover:bg-white/5 transition-colors"
            >
              About Us
            </Link>

            {/* 2. Medical Devices (Dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('devices')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'devices' ? null : 'devices')}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-[#323232] dark:text-slate-100 hover:text-[#002D62] dark:hover:text-[#20B2AA] hover:bg-[#F8F9FA] dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-expanded={openDropdown === 'devices'}
              >
                <span>Medical Devices</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === 'devices' ? 'rotate-180 text-[#20B2AA]' : 'text-gray-400 dark:text-slate-400'
                  }`}
                />
              </button>

              {/* Devices Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1.5 w-64 bg-white dark:bg-[#0b162c] rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,45,98,0.15)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] border border-gray-100 dark:border-white/10 p-2 z-50 transition-all duration-200 ${
                  openDropdown === 'devices'
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
                }`}
              >
                <Link
                  href="/international-distribution"
                  className="flex flex-col p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA] transition-colors group/item"
                >
                  <span className="font-bold text-[#002D62] dark:text-white group-hover/item:text-[#20B2AA] text-sm">
                    International Distribution
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400 mt-0.5">
                    Global market entry & partner network
                  </span>
                </Link>

                <Link
                  href="/anisys-go"
                  className="flex flex-col p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA] transition-colors group/item"
                >
                  <span className="font-bold text-[#002D62] dark:text-white group-hover/item:text-[#20B2AA] text-sm">
                    Anisys Go
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400 mt-0.5">
                    High-resolution anorectal physiology
                  </span>
                </Link>

                <Link
                  href="/vein-finder"
                  className="flex flex-col p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA] transition-colors group/item"
                >
                  <span className="font-bold text-[#002D62] dark:text-white group-hover/item:text-[#20B2AA] text-sm">
                    Vein Finder
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400 mt-0.5">
                    Zero-latency real-time 1:1 vascular mapping
                  </span>
                </Link>
              </div>
            </div>

            {/* 3. Clinical Services (Dropdown with nested 7-test flyout) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('clinical')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'clinical' ? null : 'clinical')}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-[#323232] dark:text-slate-100 hover:text-[#002D62] dark:hover:text-[#20B2AA] hover:bg-[#F8F9FA] dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-expanded={openDropdown === 'clinical'}
              >
                <span>Clinical Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === 'clinical' ? 'rotate-180 text-[#20B2AA]' : 'text-gray-400 dark:text-slate-400'
                  }`}
                />
              </button>

              {/* Clinical Services Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1.5 w-72 bg-white dark:bg-[#0b162c] rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,45,98,0.15)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] border border-gray-100 dark:border-white/10 p-2 z-50 transition-all duration-200 ${
                  openDropdown === 'clinical'
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
                }`}
              >
                {/* Popular Test with Flyout Submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenSubmenu(true)}
                  onMouseLeave={() => setOpenSubmenu(false)}
                >
                  <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 text-[#002D62] dark:text-white hover:text-[#20B2AA] transition-colors cursor-pointer font-bold text-sm group/pop">
                    <span>Popular Test</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover/pop:text-[#20B2AA] group-hover/pop:translate-x-0.5 transition-transform" />
                  </div>

                  {/* Flyout Submenu (7 Popular Tests) */}
                  <div
                    className={`absolute top-0 left-full ml-1 w-64 bg-white dark:bg-[#0b162c] rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,45,98,0.18)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] border border-gray-100 dark:border-white/10 p-2 z-50 transition-all duration-150 ${
                      openSubmenu
                        ? 'opacity-100 visible translate-x-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-x-1 pointer-events-none'
                    }`}
                  >
                    <div className="px-2 py-1 text-[11px] font-bold text-[#606367] dark:text-slate-400 uppercase tracking-wider border-b border-gray-100 dark:border-white/10 mb-1">
                      The 7 Featured Profiles
                    </div>
                    {popularTests.map((test) => (
                      <Link
                        key={test.href}
                        href={test.href}
                        className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#323232] dark:text-slate-200 hover:text-[#002D62] dark:hover:text-[#20B2AA] hover:bg-[#F8F9FA] dark:hover:bg-white/5 transition-colors"
                      >
                        {test.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="my-1 border-t border-gray-100 dark:border-white/10" />

                <Link
                  href="/tests-list-page"
                  className="flex flex-col p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA] transition-colors group/item"
                >
                  <span className="font-bold text-[#002D62] dark:text-white group-hover/item:text-[#20B2AA] text-sm">
                    View All Health Tests
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400">
                    Browse our comprehensive diagnostic directory
                  </span>
                </Link>

                <Link
                  href="/blood-test-recommendation"
                  className="flex flex-col p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA] transition-colors group/item"
                >
                  <span className="font-bold text-[#002D62] dark:text-white group-hover/item:text-[#20B2AA] text-sm">
                    Find Your Test
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400">
                    Interactive recommendation guidance
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      'Book Clinical Appointment',
                      'Arrange a consultation or blood test at our accredited partner clinics.'
                    )
                  }
                  className="w-full text-left flex flex-col p-2.5 rounded-xl hover:bg-[#20B2AA]/10 transition-colors group cursor-pointer"
                >
                  <span className="font-bold text-[#20B2AA] text-sm flex items-center gap-1">
                    Book Appointment
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-[#606367] dark:text-slate-400">
                    Direct clinical booking & consultation
                  </span>
                </button>
              </div>
            </div>
          </nav>

          {/* Desktop Right Actions: Direct Modal Trigger Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                openModal(
                  'Book Appointment',
                  'Connect directly with our clinical phlebotomy team.'
                )
              }
              className="inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider rounded-[24px] px-5 py-2.5 bg-[#20B2AA] text-white hover:bg-[#1a938c] shadow-[0_4px_14px_rgba(32,178,170,0.35)] hover:shadow-[0_6px_20px_rgba(32,178,170,0.45)] group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-xl text-[#002D62] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Hairline Scroll-Progress Indicator */}
      <div className="w-full h-[2px] bg-transparent">
        <div
          className="h-full bg-[#20B2AA] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 4. Mobile Drawer Menu (Responsive for 390px mobile & tablets) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#002D62]/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-[#071328] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l dark:border-white/10">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-white/10">
                <div className="relative w-44 h-11">
                  <Image
                    src="/images/logo-light-bg.png"
                    alt="Xana Medtec"
                    fill
                    className="object-contain object-left dark:hidden"
                  />
                  <Image
                    src="/images/logo-dark-bg.png"
                    alt="Xana Medtec"
                    fill
                    className="object-contain object-left hidden dark:block"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-full text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <nav className="mt-6 space-y-2 text-sm font-semibold">
                {/* 1. About Us */}
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-[#323232] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA]"
                >
                  About Us
                </Link>

                {/* 2. Medical Devices Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileDevicesOpen(!mobileDevicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[#323232] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA]"
                  >
                    <span>Medical Devices</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileDevicesOpen ? 'rotate-180 text-[#20B2AA]' : 'text-gray-400 dark:text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileDevicesOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 dark:bg-white/5 rounded-xl mt-1">
                      <Link
                        href="/international-distribution"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                      >
                        • International Distribution
                      </Link>
                      <Link
                        href="/anisys-go"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                      >
                        • Anisys Go
                      </Link>
                      <Link
                        href="/vein-finder"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                      >
                        • Vein Finder
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. Clinical Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileClinicalOpen(!mobileClinicalOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[#323232] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#002D62] dark:hover:text-[#20B2AA]"
                  >
                    <span>Clinical Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileClinicalOpen ? 'rotate-180 text-[#20B2AA]' : 'text-gray-400 dark:text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileClinicalOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 dark:bg-white/5 rounded-xl mt-1">
                      {/* Nested Popular Tests */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileTestsOpen(!mobileTestsOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#002D62] dark:text-teal-300"
                        >
                          <span>Popular Test (7 Profiles)</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              mobileTestsOpen ? 'rotate-180 text-[#20B2AA]' : 'text-gray-400 dark:text-slate-400'
                            }`}
                          />
                        </button>
                        {mobileTestsOpen && (
                          <div className="pl-4 py-1 space-y-1">
                            {popularTests.map((test) => (
                              <Link
                                key={test.href}
                                href={test.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-2 py-1 text-[11px] text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                              >
                                {test.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link
                        href="/tests-list-page"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                      >
                        • View All Health Tests
                      </Link>
                      <Link
                        href="/blood-test-recommendation"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#606367] dark:text-slate-300 hover:text-[#002D62] dark:hover:text-teal-300"
                      >
                        • Find Your Test
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/10 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('Book Appointment', 'Connect directly with our clinical phlebotomy team.');
                }}
                className="w-full py-3 rounded-full bg-[#20B2AA] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1a938c] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-slate-400 pt-2">
                <a
                  href="https://www.linkedin.com/company/xana-medtec/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20B2AA] transition-colors p-2"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/XanaMedtec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20B2AA] transition-colors p-2"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
