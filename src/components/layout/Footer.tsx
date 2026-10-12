'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const aboutLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Clinical Services', href: '/clinical-services' },
  { name: 'All Health Tests', href: '/tests-list-page' },
  { name: 'Find Your Test', href: '/blood-test-recommendation' },
];

const deviceLinks = [
  { name: 'International Distribution', href: '/international-distribution' },
  { name: 'Anisys Go', href: '/anisys-go' },
  { name: 'Vein Finder', href: '/vein-finder' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-use' },
  { name: 'Help & FAQs', href: '/help-faqs' },
];

export const Footer: React.FC = () => {
  const { openModal } = useModal();

  const getInTouch = () =>
    openModal(
      'Get in Touch',
      'Whether you are a manufacturer or healthcare distributor, let’s discuss your roadmap.'
    );

  return (
    <footer>
      <div className="shell-wide pb-3">
       <div className="on-ink rounded-[2.5rem]">
        <div className="shell pt-14 sm:pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12">
          {/* Brand, statement and socials */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="relative block w-44 h-20 -mt-4 -ml-2">
              <Image
                src="/images/logo-dark-bg.png"
                alt="Xana Medtec Logo"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-4 text-[15px] text-soft leading-relaxed max-w-sm">
              A market development partner for medical device manufacturers scaling internationally, bridging the gap between market entry and clinical adoption.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/xana-medtec/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Xana Medtec LinkedIn Profile"
                className="w-11 h-11 rounded-xl border border-line flex items-center justify-center transition-colors hover:bg-white hover:text-ink"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/XanaMedtec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Xana Medtec X Account"
                className="w-11 h-11 rounded-xl border border-line flex items-center justify-center transition-colors hover:bg-white hover:text-ink"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="meta mb-5">Company</h3>
            <ul className="space-y-3 text-[15px]">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="meta mb-5">Medical Devices</h3>
            <ul className="space-y-3 text-[15px]">
              {deviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="meta mb-5">Contact</h3>
            <div className="space-y-3 text-[15px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span className="leading-relaxed">Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@xanamedtec.com" className="link">
                  info@xanamedtec.com
                </a>
              </div>
            </div>

            <button type="button" onClick={getInTouch} className="btn btn-sm mt-6">
              <span>Get in Touch</span>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="shell py-5 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-soft">
          <div>© {new Date().getFullYear()} Xana Medtec Ltd. Registered in England & Wales. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
       </div>
      </div>
    </footer>
  );
};
