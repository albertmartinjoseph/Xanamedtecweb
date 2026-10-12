'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { LinkedInIcon, XIcon } from '@/components/icons/SocialIcons';
import { ArrowRight, ChevronDown, Menu, X as CloseIcon } from 'lucide-react';

interface NavItem {
  name: string;
  desc?: string;
  href: string;
}

const devices: NavItem[] = [
  {
    name: 'International Distribution',
    desc: 'Market entry and partner network',
    href: '/international-distribution',
  },
  { name: 'Anisys Go', desc: 'Anorectal physiology and biofeedback', href: '/anisys-go' },
  { name: 'Vein Finder', desc: 'Real-time vein mapping', href: '/vein-finder' },
];

const healthTests: NavItem[] = [
  { name: 'Clinical Services', desc: 'Blood tests and health checks', href: '/clinical-services' },
  { name: 'All Health Tests', desc: 'Browse every test and price', href: '/tests-list-page' },
  { name: 'Find Your Test', desc: 'Not sure? Get a recommendation', href: '/blood-test-recommendation' },
];

const popularTests: NavItem[] = [
  { name: 'Hepatitis B Profile', href: '/hepatitis-b-profile' },
  { name: 'Biochemistry', href: '/biochemistry' },
  { name: 'Testosterone Monitoring', href: '/testosterone-monitoring' },
  { name: 'Thyroid Profile', href: '/thyroid-profile' },
  { name: 'Hormone Profile', href: '/hormone-profile' },
  { name: 'Lipids HbA1C', href: '/lipids-hba1c' },
  { name: 'Well Man & Well Woman', href: '/well-man-well-woman' },
];

const profile: NavItem[] = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
];

const menus = [
  { id: 'devices', label: 'Medical devices' },
  { id: 'tests', label: 'Health tests' },
  { id: 'profile', label: 'My profile' },
] as const;

type MenuId = (typeof menus)[number]['id'];

// One entry in a desktop dropdown: name, with a plain-words line under it
const MenuLink: React.FC<NavItem> = ({ href, name, desc }) => (
  <Link href={href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-tint">
    <span className="block font-medium">{name}</span>
    {desc && <span className="block text-sm text-soft mt-0.5">{desc}</span>}
  </Link>
);

export const Header: React.FC = () => {
  const { openModal } = useModal();
  const [open, setOpen] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Gentle delay on leave so moving from trigger to panel doesn't flicker
  const show = (id: MenuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(id);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  };

  const bookAppointment = () => {
    setOpen(null);
    setMobileOpen(false);
    openModal('Book Appointment', 'Connect directly with our clinical phlebotomy team.');
  };

  // Any link inside a menu closes it
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) {
      setOpen(null);
      setMobileOpen(false);
    }
  };

  const panels: Record<MenuId, React.ReactNode> = {
    devices: (
      <div className="w-80 p-2">
        {devices.map((item) => (
          <MenuLink key={item.href} {...item} />
        ))}
      </div>
    ),
    tests: (
      <div className="flex">
        <div className="w-80 p-2">
          {healthTests.map((item) => (
            <MenuLink key={item.href} {...item} />
          ))}
        </div>
        <div className="w-64 p-2 border-l border-line bg-tint">
          <div className="meta px-4 pt-3 pb-2">Popular tests</div>
          {popularTests.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-1.5 text-[15px] transition-colors hover:text-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    ),
    profile: (
      <div className="w-44 p-2">
        {profile.map((item) => (
          <MenuLink key={item.href} {...item} />
        ))}
      </div>
    ),
  };

  return (
    <>
      {/* Three floating pieces over the page: the logo tile, the links, the action */}
      <header
        className="fixed top-0 inset-x-0 z-40 p-3 sm:p-5 flex items-center justify-between gap-3 pointer-events-none [&>*]:pointer-events-auto"
        onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}
      >
        <Link
          href="/"
          className="relative block w-36 h-14 shrink-0 rounded-[1.125rem] glass"
        >
          <Image
            src="/images/logo-light-bg.png"
            alt="Xana Medtec Logo"
            fill
            sizes="144px"
            priority
            className="object-contain p-1"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden lg:flex items-center h-14 px-2 rounded-[1.125rem] glass text-base"
          onClick={closeOnLink}
        >
          <Link href="/about-us" className="rounded-xl px-4 py-2 transition-colors hover:bg-ink/5">
            About us
          </Link>

          {menus.map((menu) => (
            <div key={menu.id} className="relative" onMouseEnter={() => show(menu.id)} onMouseLeave={hide}>
              <button
                type="button"
                onClick={() => setOpen(open === menu.id ? null : menu.id)}
                aria-expanded={open === menu.id}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 cursor-pointer transition-colors hover:bg-ink/5 ${
                  open === menu.id ? 'bg-ink/5' : ''
                }`}
              >
                <span>{menu.label}</span>
                <ChevronDown className={`w-4 h-4 text-soft ${open === menu.id ? 'rotate-180' : ''}`} />
              </button>

              {open === menu.id && (
                <div className="absolute left-0 top-full pt-4 animate-[fade_0.2s_ease_both]">
                  <div className="overflow-hidden rounded-3xl bg-white shadow-[0_1.5rem_3rem_-1rem_rgba(17,26,34,0.3)]">
                    {panels[menu.id]}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/help-faqs" className="rounded-xl px-4 py-2 transition-colors hover:bg-ink/5">
            Help
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={bookAppointment} className="btn btn-brand hidden sm:inline-flex">
            <span>Book appointment</span>
            <ArrowRight />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden w-14 h-14 rounded-[1.125rem] glass-ink flex items-center justify-center cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu: every destination visible in one scroll, nothing hidden.
          Lives outside the header because the header's backdrop-filter would
          otherwise contain its fixed positioning. */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto animate-[fade_0.2s_ease_both]"
          role="dialog"
          aria-modal="true"
          onClick={closeOnLink}
        >
          <div className="flex items-center justify-between p-3 sm:p-5 shrink-0">
            <div className="relative w-36 h-14">
              <Image
                src="/images/logo-light-bg.png"
                alt="Xana Medtec"
                fill
                sizes="144px"
                className="object-contain p-1"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="w-14 h-14 rounded-[1.125rem] glass-ink flex items-center justify-center cursor-pointer"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="shell flex-1 py-6 space-y-8">
            <Link href="/about-us" className="block font-display text-3xl">
              About Us
            </Link>

            {[
              { label: 'Medical Devices', items: devices },
              { label: 'Health Tests', items: [...healthTests, ...popularTests] },
              { label: 'My Profile', items: profile },
            ].map((group) => (
              <div key={group.label}>
                <div className="meta mb-3">{group.label}</div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="block font-display text-2xl">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/help-faqs" className="block font-display text-3xl">
              Help
            </Link>
          </nav>

          <div className="shell pb-8 flex items-center gap-3">
            <button type="button" onClick={bookAppointment} className="btn flex-1">
              <span>Book Appointment</span>
              <ArrowRight />
            </button>
            <a
              href="https://www.linkedin.com/company/xana-medtec/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xana Medtec LinkedIn Profile"
              className="w-14 h-14 rounded-[1.125rem] border border-line flex items-center justify-center hover:text-accent transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/XanaMedtec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xana Medtec X Account"
              className="w-14 h-14 rounded-[1.125rem] border border-line flex items-center justify-center hover:text-accent transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
