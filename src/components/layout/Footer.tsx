'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import { Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openModal } = useModal();

  return (
    <footer className="relative overflow-hidden bg-[#001F47] after:pointer-events-none after:absolute after:-right-16 after:-bottom-24 after:w-[26rem] after:aspect-[231/255] after:bg-[url(/images/logo-mark.png)] after:bg-contain after:bg-no-repeat after:opacity-[0.06] text-white pt-14 sm:pt-16 pb-10 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#20B2AA] before:to-transparent">
      <div className="container-boxed relative z-10">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Address & Socials */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-block relative">
              <div className="relative w-56 sm:w-64 h-14 sm:h-16 -ml-3 sm:-ml-4">
                <Image
                  src="/images/logo-dark-bg.png"
                  alt="Xana Medtec Logo"
                  fill
                  sizes="256px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Xana Medtec is a market development partner for innovative medical device manufacturers scaling internationally. Moving beyond basic distribution agreements, we bridge the gap between market entry and sustainable clinical adoption. By combining strategy with targeted clinical engagement, we work alongside manufacturers and local distributors across the entire lifecycle-turning early interest into routine medical practice and long-term commercial success.
            </p>

            <div className="pt-2">
              <span className="eyebrow text-teal-300 mb-4">
                Official Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/xana-medtec/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xana Medtec LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#002D62] flex items-center justify-center transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/XanaMedtec"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xana Medtec X Account"
                  className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#002D62] flex items-center justify-center transition-colors"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: About Us (Corporate Health Packages removed per spec) */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="eyebrow text-teal-300">
              About Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/about-us" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Company Overview & Team
                </Link>
              </li>
              <li>
                <Link href="/clinical-services" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Clinical Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/tests-list-page" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Directory of Health Tests
                </Link>
              </li>
              <li>
                <Link href="/blood-test-recommendation" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Find Your Recommended Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Devices (Renamed from Links per spec) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="eyebrow text-teal-300">
              Medical Devices
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/international-distribution" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  International Distribution
                </Link>
              </li>
              <li>
                <Link href="/anisys-go" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Anisys Go (Anorectal Physiology)
                </Link>
              </li>
              <li>
                <Link href="/vein-finder" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
                  Vein Finder System
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      'Distributor Network Inquiry',
                      'Connect with our international medical distribution team.'
                    )
                  }
                  className="text-teal-300 hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact (Phone numbers removed; email & address preserved) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="eyebrow text-teal-300">
              Quick Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <a
                  href="mailto:info@xanamedtec.com"
                  className="text-white hover:text-teal-300 transition-colors font-medium underline underline-offset-4 decoration-teal-400/50"
                >
                  info@xanamedtec.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  openModal(
                    'Get in Touch',
                    'Whether you are a manufacturer or healthcare distributor, let’s discuss your roadmap.'
                  )
                }
                className="inline-flex items-center justify-center font-semibold transition-colors duration-300 cursor-pointer text-sm rounded-full px-6 py-2.5 bg-white text-[#002D62] hover:bg-[#20B2AA] hover:text-white group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Xana Medtec Ltd. Registered in England & Wales. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-use" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
              Terms of Use
            </Link>
            <Link href="/help-faqs" className="hover:text-white underline-offset-4 hover:underline decoration-[#20B2AA] transition-colors">
              Help & FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
