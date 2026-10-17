'use client';

import React from 'react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Tabs } from '@/components/ui/Tabs';
import { ClinicContactBanner } from '@/components/ui/ClinicContactBanner';
import {
  Sparkles,
  Layers,
  Palette,
  Mail,
  MapPin,
  CheckCircle2,
  Building2,
} from 'lucide-react';

export default function Stage2ShowcasePage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#323232] font-sans pb-24">
      {/* Top Banner */}
      <div className="bg-[#002D62] text-white py-3 px-4 border-b border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse"></span>
            <span className="font-semibold text-teal-300">STAGE 2 BUILD COMPLETE:</span>
            <span>Global Header, Top Bar, Section 1 Navigation Menu, Footer & GDPR Consent</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span>Next.js 16 + Tailwind CSS v4</span>
            <span>•</span>
            <span>Production Ready (Node.js)</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-white border-b border-gray-200/80 py-12">
        <div className="container-boxed">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="mb-3">
                <Badge variant="teal" withDot={true}>
                  Stage 2: Navigation & Global Shell
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002D62] tracking-tight">
                Global Header, Navigation & Footer Integration
              </h1>
              <p className="mt-2 text-base text-[#606367] max-w-2xl leading-relaxed">
                The global shell is now live. Check out the top bar, sticky shrinking header with scroll-progress indicator, Section 1 multi-level dropdowns, full 4-column footer, and GDPR cookie consent.
              </p>
            </div>

            {/* Quick Test Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button
                variant="accent"
                size="lg"
                withArrow={true}
                onClick={() => openModal('Book Appointment', 'Connect directly with our clinical phlebotomy team.')}
              >
                Book Appointment
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => openModal('Get in Touch', 'Whether distributor or manufacturer, let’s discuss your roadmap.')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container-boxed mt-12 space-y-16">
        {/* Section 1: Official Brand Logos */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#20B2AA]/10 text-[#20B2AA]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">1. Official High-Resolution Logos</h2>
              <p className="text-xs text-[#606367]">Replaced previous auto-traced 1.5MB SVG with the clean uploaded assets.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dark background logo */}
            <div className="bg-[#002D62] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-teal-300 font-semibold mb-4 uppercase tracking-wider">
                For Dark Backgrounds (Navy Hero & Dark Footer)
              </span>
              <div className="relative w-64 h-24">
                <Image
                  src="/images/logo-dark-bg.png"
                  alt="Xana Medtec Logo for Dark Background"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Light background logo */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-[#606367] font-semibold mb-4 uppercase tracking-wider">
                For Light Backgrounds (Main Header & Cookie Banner)
              </span>
              <div className="relative w-64 h-24">
                <Image
                  src="/images/logo-light-bg.png"
                  alt="Xana Medtec Logo for Light Background"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real Brand Colors & Tokens */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#002D62]/10 text-[#002D62]">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">2. Verified Brand Color Palette</h2>
              <p className="text-xs text-[#606367]">Mapped directly from design-tokens.json into Tailwind configuration.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#002D62] shadow-sm flex items-end p-2 text-white font-mono text-xs font-bold">
                #002D62
              </div>
              <div className="text-xs font-bold text-[#002D62]">Primary Navy</div>
              <div className="text-[11px] text-[#606367]">1,308 occurrences</div>
            </div>

            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#20B2AA] shadow-sm flex items-end p-2 text-white font-mono text-xs font-bold">
                #20B2AA
              </div>
              <div className="text-xs font-bold text-[#002D62]">Accent Teal</div>
              <div className="text-[11px] text-[#606367]">Buttons & Badges</div>
            </div>

            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#002678] shadow-sm flex items-end p-2 text-white font-mono text-xs font-bold">
                #002678
              </div>
              <div className="text-xs font-bold text-[#002D62]">Deep Navy</div>
              <div className="text-[11px] text-[#606367]">Input borders</div>
            </div>

            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#23CCAD] shadow-sm flex items-end p-2 text-white font-mono text-xs font-bold">
                #23CCAD
              </div>
              <div className="text-xs font-bold text-[#002D62]">Mint Accent</div>
              <div className="text-[11px] text-[#606367]">Elementor kit</div>
            </div>

            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#606367] shadow-sm flex items-end p-2 text-white font-mono text-xs font-bold">
                #606367
              </div>
              <div className="text-xs font-bold text-[#002D62]">Body Slate</div>
              <div className="text-[11px] text-[#606367]">Paragraphs</div>
            </div>

            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-[#F8F9FA] border border-gray-200 flex items-end p-2 text-[#323232] font-mono text-xs font-bold">
                #F8F9FA
              </div>
              <div className="text-xs font-bold text-[#002D62]">Surface Light</div>
              <div className="text-[11px] text-[#606367]">Section backgrounds</div>
            </div>
          </div>
        </section>

        {/* Section 3: Button Styles & Interactive States */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#20B2AA]/10 text-[#20B2AA]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">3. Authentic Button Components</h2>
              <p className="text-xs text-[#606367]">Hover states, pill radius tokens, and micro-motion arrow animations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  withArrow={true}
                  onClick={() => openModal()}
                >
                  Primary Navy Pill
                </Button>
                <Button
                  variant="accent"
                  size="md"
                  withArrow={true}
                  onClick={() => openModal()}
                >
                  Accent Teal Pill
                </Button>
                <Button variant="outline" size="md" onClick={() => openModal()}>
                  Outline Pill
                </Button>
              </div>
              <p className="text-xs text-[#606367]">
                Pill CTA radius is strictly 24px/40px matching Elementor CSS rules. Arrows slide 4px on hover.
              </p>
            </div>

            {/* In context on dark card */}
            <div className="bg-[#002D62] p-6 rounded-[20px] text-white space-y-3">
              <span className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                Hero Dark Background Contrast
              </span>
              <p className="text-sm text-slate-200">
                Buttons styled specifically for high-contrast presentation on navy surfaces.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="accent"
                  size="md"
                  withArrow={true}
                  onClick={() => openModal('Explore Network', 'International Distribution Network')}
                >
                  Explore Network
                </Button>
                <Button
                  variant="white"
                  size="md"
                  onClick={() => openModal()}
                >
                  Clinical Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Glassmorphic Modal Showcase */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#002D62]/10 text-[#002D62]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#002D62]">4. Glassmorphic Contact Modal (No Form)</h2>
                <p className="text-xs text-[#606367]">
                  Pure direct contact display: mailto link with copy button and official headquarters address.
                </p>
              </div>
            </div>

            <Button
              variant="accent"
              size="md"
              withArrow={true}
              onClick={() => openModal()}
            >
              Open Contact Modal
            </Button>
          </div>

          <div className="bg-[#F8F9FA] rounded-[20px] p-6 border border-gray-200/70">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20B2AA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#002D62]">Direct Email Link + Copy Button</h4>
                  <p className="text-xs text-[#606367] mt-1">
                    Displays <strong>info@xanamedtec.com</strong> as an active mailto link plus a small copy button with instant &quot;Copied!&quot; clipboard feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20B2AA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#002D62]">Headquarters Address</h4>
                  <p className="text-xs text-[#606367] mt-1">
                    Displays <strong>Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Clinic Finder Replacement Banner */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#20B2AA]/10 text-[#20B2AA]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">5. Clinic Finder Section (Replacement)</h2>
              <p className="text-xs text-[#606367]">
                Replaced the previous 3-field form with a short line and a button that opens the contact modal.
              </p>
            </div>
          </div>

          <ClinicContactBanner
            onOpenModal={() =>
              openModal(
                'Partner Clinics & Appointments',
                'Contact our clinical team to locate your nearest partner phlebotomy clinic.'
              )
            }
          />
        </section>

        {/* Section 6: Interactive Two-Button Toggle Tabs */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <SectionHeading
            badge="Section 4 Preview"
            title="One Partner, Two Ways to Win"
            subtitle="Two-button toggle tabs for Distributor vs. Manufacturer with smooth transitions."
            align="center"
            className="mb-8"
          />

          <Tabs
            defaultTab="distributor"
            tabs={[
              {
                id: 'distributor',
                label: 'For Distributor',
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">01</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Exclusive Territory</h3>
                      <p className="text-sm text-[#606367]">
                        Secured market exclusivity to protect and drive your local distribution growth.
                      </p>
                    </Card>

                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">02</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Regulatory Support</h3>
                      <p className="text-sm text-[#606367]">
                        Comprehensive compliance and certification documentation ready for swift onboarding.
                      </p>
                    </Card>

                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">03</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Sales & Training</h3>
                      <p className="text-sm text-[#606367]">
                        Dedicated technical training and continuous marketing collateral for your team.
                      </p>
                    </Card>
                  </div>
                ),
              },
              {
                id: 'manufacturer',
                label: 'For Manufacturer',
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">01</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Targeted Placement</h3>
                      <p className="text-sm text-[#606367]">
                        Match your technology with pre-vetted distributors seeking active clinical solutions.
                      </p>
                    </Card>

                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">02</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Streamlined Logistics</h3>
                      <p className="text-sm text-[#606367]">
                        End-to-end management from initial product trial to global supply chain rollout.
                      </p>
                    </Card>

                    <Card>
                      <span className="text-xs font-bold text-[#20B2AA] uppercase tracking-wider">03</span>
                      <h3 className="text-lg font-bold text-[#002D62] mt-1 mb-2">Accelerated Growth</h3>
                      <p className="text-sm text-[#606367]">
                        Minimize time-to-market across target international healthcare networks.
                      </p>
                    </Card>
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Section 7: Corrected Menu Hierarchy (Section 1 of Spec) */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#002D62]/10 text-[#002D62]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">7. Global Navigation Architecture (Section 1 of Spec)</h2>
              <p className="text-xs text-[#606367]">
                Top level: About Us; Medical Devices; Clinical Services (Popular Test submenu with 7 tests, View All, Find Your Test, Book Appointment); My Profile.
              </p>
            </div>
          </div>

          <div className="bg-[#002D62] text-white p-6 rounded-2xl shadow-inner">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-4">
              Desktop Header Navigation Bar Layout
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              {/* Item 1 */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white text-base mb-2">1. About Us</div>
                <div className="text-xs text-slate-300">
                  Direct Link: <code className="text-teal-300">/about-us/</code>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white text-base mb-2">2. Medical Devices ▾</div>
                <ul className="text-xs text-slate-300 space-y-1 pl-2 border-l border-teal-400/40">
                  <li>• International Distribution (<code className="text-teal-300">/international-distribution/</code>)</li>
                  <li>• Anisys Go (<code className="text-teal-300">/anisys-go/</code>)</li>
                  <li>• Vein Finder (<code className="text-teal-300">/vein-finder/</code>)</li>
                </ul>
              </div>

              {/* Item 3 */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white text-base mb-2">3. Clinical Services ▾</div>
                <div className="text-xs text-teal-300 font-semibold mb-1">Popular Test (Submenu Flyout):</div>
                <ul className="text-[11px] text-slate-300 space-y-0.5 pl-2 border-l border-teal-400/40 mb-2">
                  <li>1. Hepatitis B Profile</li>
                  <li>2. Biochemistry</li>
                  <li>3. Testosterone Monitoring</li>
                  <li>4. Thyroid Profile</li>
                  <li>5. Hormone Profile</li>
                  <li>6. Lipids HbA1C</li>
                  <li>7. Well Man & Well Woman</li>
                </ul>
                <div className="text-xs text-slate-300 space-y-1 pt-1 border-t border-white/10">
                  <div>• View All Health Tests (<code className="text-teal-300">/tests-list-page/</code>)</div>
                  <div>• Find Your Test (<code className="text-teal-300">/blood-test-recommendation/</code>)</div>
                  <div>• Book Appointment (Modal trigger)</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white text-base mb-2">4. My Profile ▾</div>
                <ul className="text-xs text-slate-300 space-y-1 pl-2 border-l border-teal-400/40 mb-3">
                  <li>• Login (<code className="text-teal-300">/login/</code>)</li>
                  <li>• Register (<code className="text-teal-300">/register/</code>)</li>
                </ul>
                <div className="text-[11px] text-amber-300/90 bg-amber-400/10 p-2 rounded-lg border border-amber-300/20">
                  Option to redirect to homepage, point to external portal URL, or remove.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Patient Testimonials (Job Titles Purged) */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#20B2AA]/10 text-[#20B2AA]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#002D62]">8. Patient Testimonials (Template Job Titles Purged)</h2>
                <p className="text-xs text-[#606367]">
                  Preserved authentic reviews and names; removed placeholder job titles (&quot;Legacy Integration Producer&quot;, &quot;Product Designer&quot;).
                </p>
              </div>
            </div>
            <Badge variant="teal">6 Reviews Verified</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Елена Великанова',
                quote:
                  'I recently had a great experience with Xana Medtec for medical testing. From the moment I arrived, the staff was welcoming and professional, making me feel at ease...',
                removedRole: 'Legacy Integration Producer',
              },
              {
                name: 'Mohsin Khan',
                quote:
                  'A very good and reliable service. Gutmap health tests are far beyond anything the NHS can provide. All definitely recommend to others.',
                removedRole: 'Product Designer',
              },
              {
                name: 'Paul Durrant',
                quote:
                  'I went along to the opening of Xana Medtec\'s new health clinic in Manchester and they offered me a health screening kit test for inflammation...',
                removedRole: 'Tech Engineer',
              },
              {
                name: 'Re\'hilah Isabella',
                quote:
                  'I recently had a blood, vitamin and mineral test from Xana Medtec. I was pleased with the service and knowledge the team held regards gut and yeast infections...',
                removedRole: 'Interaction Designer',
              },
              {
                name: 'Oscar Gagoh',
                quote:
                  'Very professional, gentle and caring. My two daughters even commented how gentle and thorough they are.',
                removedRole: 'Designer',
              },
              {
                name: 'Atia Ahmed',
                quote:
                  'Amazing service from Xana Medtec staff! I have had the well women blood test from here, the staff went out of there way to make sure i was comfortable...',
                removedRole: 'Product Designer',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] rounded-[18px] p-6 border border-gray-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                  <p className="text-xs text-[#323232] italic leading-relaxed mb-4">
                    &quot;{review.quote}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/60">
                  <div className="font-bold text-sm text-[#002D62]">{review.name}</div>
                  <div className="text-[10px] text-red-500 font-mono mt-0.5">
                    Purged template role: <span className="line-through">{review.removedRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Regulatory Claims & ZD Medical Status */}
        <section className="bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002D62]">9. Unapproved Claims & OEM Branding Status</h2>
              <p className="text-xs text-[#606367]">
                Kept strictly as written in the spec, clearly flagged as pending final client approval.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 text-sm">Clinical & Regulatory Claims</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 uppercase">
                  Pending Client Approval
                </span>
              </div>
              <ul className="text-xs text-amber-950 space-y-2">
                <li>• <em>&quot;91.7% reduction in cannulation attempts and risk of infection&quot;</em></li>
                <li>• <em>&quot;Fully compliant with NHS IPC non-contact standards&quot;</em></li>
                <li>• <em>&quot;CE Marked&quot;</em></li>
                <li>• <em>&quot;Eliminate first-attempt venipuncture failures&quot;</em></li>
              </ul>
              <p className="text-[11px] text-amber-800 pt-1">
                Preserved as requested; flagged for client sign-off before public indexing.
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 text-sm">OEM Branding (ZD Medical)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 uppercase">
                  Pending Client Approval
                </span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                Image 09 (Vein Finder Projection) contains visible OEM brand projection (&quot;ZD Medical&quot;).
                Maintained in position and flagged for owner confirmation before final asset deployment.
              </p>
              <div className="text-[11px] text-amber-800 pt-1">
                Status: Flagged in documentation and specs.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
