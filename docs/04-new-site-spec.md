# Xana Medtec – Site Changes and New Pages (spec v2, 11 Oct 2026)

This file is the owner's brief for the changes. Where it conflicts with `03-antigravity-build-brief.md` or `01-site-inventory.md`, THIS file wins. Do not rewrite the copy below except for the typo fixes marked [FIX]. Anything marked [CONFIRM] must be asked, not assumed.

Decisions already made by the owner (v2): product name is spelled **Anisys Go** everywhere; landing label is **International Medical Distribution**; company address is **Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ**; LinkedIn is `https://www.linkedin.com/company/xana-medtec/home/`; the phone number is removed everywhere including legal pages; the three stat tiles (Up to 40% / 30 FPS / NHS IPC) are NOT on the Vein Finder page.

---

## 0. Design rules (apply to every new page)

- Use the site's REAL theme: palette, fonts, button style, radius, spacing from `/reference/design-tokens.json` (extract from the existing site first). Do not invent a new palette.
- The owner pasted a hero reference (dark navy background, small teal uppercase label, very large bold white geometric sans heading, lighter body text). Match that look for the new landing hero. [CONFIRM] if the navy/teal in that reference differs from the site tokens; show both and ask which to use.
- It must not look like generic AI output. No purple/blue gradients, no neon glow, no emoji as icons, no random drop shadows, no glass effect except the one modal. One consistent radius, one border style, thin lines, generous whitespace, real typographic hierarchy. Icons: one consistent line-icon set (e.g. Lucide) or plain numerals, never mixed styles.
- **The pages must feel alive** (owner request). Build this with restrained, purposeful motion, at most one flourish per section:
  - Scroll reveal: fade + 24px upward, 600ms ease-out, staggered 80ms, and elements fade out gently when they leave only where it helps; never replay jarringly.
  - Image banners: very slow zoom/pan (1.0 to 1.06 over ~24s) and subtle parallax (images move ~0.9x). Disable parallax on mobile.
  - Headlines: line-by-line mask reveal on load. The small pill label on the landing hero may carry one soft pulsing dot.
  - Cards: 2-4px lift, border/colour change, arrow nudges 4px right on hover; card images zoom 1.04.
  - Numbers (13 sensors, the 01-08 steps) count up or draw in when visible.
  - Numbered timeline: the connecting line fills as the user scrolls and the current step highlights.
  - Header: shrinks slightly and gains a hairline shadow on scroll; thin scroll-progress line in the brand colour.
  - Buttons: smooth hover fill, arrow slide. Tabs: cross-fade with a smooth height change. Route changes: short fade.
  - Implement with IntersectionObserver + CSS (or Framer Motion if React). Respect `prefers-reduced-motion` (remove movement, keep opacity). No animation over 800ms except the slow banner zoom. No layout shift. Keep performance: animate only transform and opacity.
- Fully responsive (desktop, tablet, 390px mobile), keyboard accessible, visible focus states, WCAG AA contrast, semantic headings, alt text on every image, lazy-load below-the-fold images.
- Every new page needs title, meta description, canonical, Open Graph and Twitter tags in the same pattern as existing pages (title suffix "- Xana Medtec").

---

## 1. Menu (header)

```
About Us
Medical Devices
   International Distribution      -> /international-distribution/
   Anisys Go                       -> /anisys-go/
   Vein Finder                     -> /vein-finder/
Clinical Services
   Popular Test                    -> submenu with the existing 7 tests:
        Hepatitis B Profile, Biochemistry, Testosterone Monitoring, Thyroid Profile,
        Hormone Profile, Lipids HbA1C, Well Man & Well Woman (same URLs as today)
   View All Health Tests           -> /tests-list-page/
   Find Your Test                  -> /blood-test-recommendation/
   Book Appointment                -> /guest-checkout/   (same target as today)
My Profile
   Login                           -> /login/
   Register                        -> /register/
```

- "Clinical Services" replaces "Tests & Services". The old mega menu is replaced by this dropdown. "Book Appointment" and "Find Your Test" are no longer top-level.
- The menu must be a CMS-editable content type.
- "Medical Devices" is a dropdown parent. The existing `/medical-devices/` page is only a "Coming soon" placeholder (meta description "Coming soon", a heading and one paragraph) and is not linked from the menu today. Default: the parent opens the dropdown only; `/medical-devices/` gets a 301 redirect to `/international-distribution/`. [CONFIRM]

## 2. Global changes (header, footer, everywhere)

1. **Phone number removed everywhere, including the Privacy Policy and Terms**: search the whole site, templates, footer, top bar, schema/JSON-LD, page content, legal pages, emails, and every `tel:` link for `033340404518`, `0333 4040 518`, `03334040518`. Report every place found.
2. **Company address replaced everywhere** with:
   **Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ.**
   Old values to find and replace: "First Floor, 103-105 Market Street, Manchester, M11NN" (also written "Clinic Address: First floor 103-105 Market Street,Manchester,M11NN") and "Albert Square, 1Albert Square, First floor, Manchester, M2 3FU". Also update or remove the Google Maps link `https://goo.gl/maps/eERiRGYfPNwSrEWu9` (it points to the old address), the JSON-LD/Yoast data, legal pages and email templates. Report every place where the old address appeared in an appointment, booking, clinic-finder or "where to go" context, so the owner can check that patients are not sent to the wrong place. [CONFIRM] those.
3. **LinkedIn** becomes `https://www.linkedin.com/company/xana-medtec/home/` everywhere (header, footer, JSON-LD `sameAs`, any other link). Replace both the old company link and the personal-style profile link `https://uk.linkedin.com/in/xana-medtec-680aa81a9`.
4. **Social icons: LinkedIn and X only**, in the header and the footer. X is `https://x.com/XanaMedtec`. Remove Facebook and Instagram everywhere, including the structured data `sameAs` list, and change the old `twitter.com/XanaMedtec` references to x.com.
5. **Header top bar**: remove "Help & FAQs", the clinic address, the opening hours and the phone number. Keep only the LinkedIn and X icons (keep the bar slim, or move the icons into the main header if that looks cleaner).
6. **Footer**:
   - Under "About Us": remove "Corporate Health Packages". (The page `/corporate-health-packages/` still exists; [CONFIRM] whether to keep it published, unlisted, or redirect.)
   - Rename the "Links" column to **"Medical Devices"** and put **International Distribution** under it.
   - Remove the "Call Us Today" phone block from Quick Contact. Keep the email (`info@xanamedtec.com`) and show the new address.
   - Keep "Help & FAQs" in the footer legal row (the owner only asked to remove it from the header).
7. **Logo**: two SVG files supplied (see section 8): one for dark backgrounds, one for light backgrounds. Replace the logo in header, footer, cookie banner, Open Graph and email templates. Derive a favicon from the hexagon icon. Quality note: the light-background logo has ragged edges and dark halo artifacts around the hexagon in my render (it is an auto-traced file, 1.5MB, 3,170 paths). Check how it looks at real header size and report. If it looks rough, ask the owner for the original vector or a high-resolution PNG.

## 3. URL plan

| URL | What |
|---|---|
| `/` | NEW landing page (section 4) |
| `/clinical-services/` | The CURRENT homepage, moved here and renamed "Clinical Services". Keep its content and design as is. |
| `/international-distribution/` | NEW (section 5) |
| `/anisys-go/` | NEW (section 6) |
| `/vein-finder/` | NEW (section 7) |

Because the root URL changes purpose, Clinical Services must be linked from the landing page, header and footer, and the Yoast/meta data of the old homepage must move with it to `/clinical-services/`. Update the sitemap.

---

## 4. New landing page `/`

**Small box / pill label above the headline:** International Medical Distribution

**H1:** From Market Entry to Clinical Adoption

**Intro:** Your medical device deserves more than a distributor. It needs the right market strategy, the right partners and the right clinical support to succeed.

**Two navigation boxes directly below (cards, whole card clickable):**

1. Title: International Distribution
   Text: Partnering with accredited global healthcare distributors to deliver solutions worldwide.
   Link text: Explore Network → (arrow) → `/international-distribution/`
2. Title: Clinical Services
   Text: Comprehensive diagnostic support, equipment integration, and workflow assistance.
   Link text: View Services → (arrow) → `/clinical-services/`

**Section: WHAT MAKES US DIFFERENT**
H2: We Stay With the Product
Text: Most market-entry companies stop at the distributor. We don't. Commercial strategy and clinical adoption work best together.

Eight numbered steps, shown as a connected timeline/stepper (line draws in on scroll; vertical on mobile):

1. Market Opportunity – Identify the territory and the clinical need.
2. Distributor Selection – The right partner, not just a distributor.
3. Product Introduction – Positioning and partner onboarding.
4. Clinical Demonstration – Healthcare professionals experience the technology.
5. Trial / Evaluation – Real-world clinical environments.
6. End-User Training – Confidence drives adoption.
7. Distributor Sales Support – Never left alone with a new product.
8. Market Development & Ongoing Growth – Feedback, engagement and sustainable growth.

**Section: One Partner, Two Ways to Win** (inside one panel, with a two-button toggle; default tab = "For Distributor"; cross-fade between panels; accessible tabs with arrow-key navigation)

Tab "For Distributor":
- Heading: Distributor Partnership Network
- Text: Scale your portfolio with certified, cutting-edge med-tech solutions tailored for your region.
- 01 Exclusive Territory – Secured market exclusivity to protect and drive your local distribution growth.
- 02 Regulatory Support – Comprehensive compliance and certification documentation ready for swift onboarding.
- 03 Sales & Training – Dedicated technical training and continuous marketing collateral for your team.

Tab "For Manufacturer":
- Heading: Global Market Expansion
- Text: Connect your healthcare innovations directly with vetted international distribution partners.
- 01 Targeted Placement – Match your technology with pre-vetted distributors seeking active clinical solutions.
- 02 Streamlined Logistics – End-to-end management from initial product trial to global supply chain rollout.
- 03 Accelerated Growth – Minimize time-to-market across target international healthcare networks.

The page content ends after this section; then the normal footer.

---

## 5. `/international-distribution/`

**Banner:** full-width, image `03-intl-distribution-banner` (doctor with holographic health icons in a hospital) behind the text, with a dark overlay so the text stays readable. Banner H1: International Distribution

**Two product boxes below the banner (image + text + button):**

1. Image `04-anisys-go-card`. Name: Anisys Go
   Text: A comprehensive, portable system for the assessment of anorectal function and sensation, with biofeedback therapy functionality. Intuitive protocols align to international consensus guidance.
   Button: View Specifications → `/anisys-go/`
2. Image `05-vein-finder-card`. Name: Vein Finder System
   Text: Real-time 1:1 vascular mapping using dual 850nm near-infrared light. Engineered to eliminate first-attempt venipuncture failures and fully compliant with NHS IPC non-contact standards.
   Button: View Specifications → `/vein-finder/`

**Section: Six core services**
Intro: Identify the opportunity, find the right partner and build the market, step by step.


01 Market Strategy & Entry – Identify the opportunity. Build the pathway. – We assess market opportunities, identify potential applications and develop practical market-entry strategies tailored to your product and target territory.

02 Distributor Network Development – Find the right partner, not just a distributor. – We identify, assess and develop relationships with suitable distribution partners, building commercially and strategically aligned partnerships.

03 Clinical Demonstrations & Product Trials – Take the product from presentation to practice. – We support distributors and manufacturers with demonstrations, evaluations and trials so healthcare professionals can experience the technology in real clinical settings.

04 Roadshows & Market Activation – Create awareness. Generate engagement. – We work with local distributors on product launches, hospital visits, roadshows and workshops that build momentum in the market.

05 Clinical & End-User Training – Confidence drives adoption. – We support clinicians and end users with product training, practical demonstrations and guidance to use the technology correctly and confidently.

06 Ongoing Distributor & Market Support – Stay involved beyond the first sale. – We work alongside distributors on sales development, product positioning, customer feedback and long-term market growth.

**Section: Strategic Execution Framework** (4 numbered steps)
01 Market Feasibility & Regulatory Readiness Assessment
02 Distributor Matchmaking & Contract Negotiation
03 Sales Enablement & Clinical Training
04 Post-Market Monitoring & Scale

**Closing call to action:**
H2: Ready to Expand Your Medical Device Reach?
Text: Whether you are a manufacturer looking to enter new territories or a distributor seeking pre-vetted medtech solutions, let's discuss your roadmap.
Button: Get in Touch → opens a **glassmorphic modal** (backdrop blur over the page, translucent panel, thin light border, restrained) showing the company's current email and location:
- Email: info@xanamedtec.com (mailto link)
- Location: Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ.
Modal behaviour: close button, Esc to close, click outside to close, focus trap, focus returns to the button, fade/scale-in 250ms.

---

## 6. `/anisys-go/`

**Banner:** image `06-anisys-go-banner` with the page title "Anisys Go".

**Heading:** High-resolution anorectal physiology and biofeedback therapy.

**Text:** A smaller, more cost-effective and easier-to-use device that brings care closer to the patient's home. Developed in Manchester by clinicians, it uses 13 sensors to record sphincter function and rectal sensitivity in real time, with detailed colour-mapped reports and secure transfer to electronic patient records.

Place the product image `08-anisys-go-product` beside or under the text.

**Four highlight tiles** (attractive: large figure or icon + label; count-up on "13"):
- 13 sensors
- Biofeedback therapy
- Detailed reports
- Made in Manchester

**Link line:** For more details visit https://www.anisys.co.uk/ (hyperlink the URL; opens in a new tab with `rel="noopener noreferrer"`).

---

## 7. `/vein-finder/`

**Banner:** image `07-vein-finder-banner` with the title "Vein Finder System".

(No stat tiles on this page. The owner removed the "Up to 40% / 30 FPS / NHS IPC" block. "30 FPS" still appears in the specification table, and "NHS IPC" in the specification table and in the card text on the International Distribution page, which stays as written.)

**Section: Clinical Benefits** (six items; use image `09-vein-finder-projection` as a supporting visual beside them)
1. Supports DIVA patients, designed for paediatrics, neonatal, oncology, renal patients and people with obesity.
2. Improves first-stick success, real-time vein visualisation helps reduce repeat attempts, procedure time and discomfort.
3. 91.7% reduction in cannulation attempts and risk of infection. Attempted cannulation increases the risk of infection to the patient. [FIX "canulation"]
4. Portable, handheld & easy to use on diverse population. Detects vessel depth and offers seven monochromatic modes to help visual veins in a variety of diverse skin tones.
5. Enhanced vascular clarity and depth of veins in real-time.
6. Three functional settings for adults, paediatrics, and neonates.

**Mounting options** (two cards):
- Mobile Trolley Mount – Height-adjustable floor stand with lockable castor wheels, optimized for A&E, ICU, and ward mobility. Image: `10-mobile-trolley-mount`.
- Flexible Desktop Stand – Compact articulated mounting arm designed for phlebotomy stations and fixed clinical consultation desks. Image: NOT SUPPLIED yet. Do not use a placeholder or stock image; build the card so it looks complete without an image and add the image when the owner uploads it. [CONFIRM]

**Table: Technical Specifications** (column headers: "Specification Parameter" | "Clinical Details")

| Specification Parameter | Clinical Details |
|---|---|
| Light Source | Dual Near-Infrared Light (850nm) [FIX "Noar"] |
| Projection Latency | 30 FPS (Zero-latency real-time mapping) |
| Detectable Vessel Size | ≤ 1.0 mm |
| Depth Range | 0-3 mm (Shallow) / >3 mm (Deep tissue) [FIX "Shalow", "Doop"] |
| Unit Mass | 400g (Balanced handheld unit) |
| Power Reserve | 6360mAh Rechargeable Li-ion (Full shift runtime) [FIX "LI-on"] |
| Hygienic Standards | CE Marked / NHS IPC Non-contact compliant |

---

## 8. Supplied assets (numbered files in `/reference/assets/`)

| File | Use | Size / note |
|---|---|---|
| `01-logo-dark-bg.svg` | Logo for dark backgrounds (white "Xana", teal hexagon and MEDTEC pill). Use in the navy hero and any dark footer. | Vector, ~700x357. Looks clean. |
| `02-logo-light-bg.svg` | Logo for light backgrounds (black "Xana", gradient hexagon). | Vector, 1.5MB. Ragged edges and dark halo around the hexagon in my render; test at header size. |
| `03-intl-distribution-banner.png` | International Distribution page banner | 1266x522. Overlay needed; slightly soft above 1440px wide. |
| `04-anisys-go-card.png` | Anisys Go box on the International Distribution page | 697x663 |
| `05-vein-finder-card.png` | Vein Finder box on the International Distribution page | 700x700 |
| `06-anisys-go-banner.png` | Anisys Go page banner (kit on teal background) | 1048x528. Upscales ~1.4x on wide screens; use cover with a gentle overlay. |
| `07-vein-finder-banner.png` | Vein Finder page banner (handheld device scanning an arm) | 1260x407. Very wide crop; keep the subject on the left and the text on the right. |
| `08-anisys-go-product.png` | Product image inside the Anisys Go page | 1000x938 |
| `09-vein-finder-projection.png` | Supporting image for Clinical Benefits | 1057x1600, portrait. |
| `10-mobile-trolley-mount.png` | Mobile Trolley Mount card | 696x868, white background; place on a white or very light card. |

Not supplied: image of the Flexible Desktop Stand; a dedicated favicon (derive from the hexagon in `01`). Missing images must be flagged, not replaced silently.

## 9. Still open (ask the owner in one message)

1. `/medical-devices/` placeholder: redirect to International Distribution (default) or make a hub page.
2. `/corporate-health-packages/`: keep, unlist or redirect.
3. Flexible Desktop Stand image.
4. Old address in appointment/clinic contexts (section 2.2): show the owner the list before finishing.
5. Logo quality (section 2.7): request originals if the light-background logo looks rough.
6. Image rights: `03` looks like a stock photo and `04, 06, 08` look like manufacturer product photos. The owner should confirm the licence or permission to use them.
7. Image `09` shows a brand name ("ZD Medical") projected onto the arm, and image `05` shows the words "Vein Finder". Ask the owner if the visible "ZD Medical" name is acceptable on the site.
8. Medical and regulatory claims (section 10).

## 10. Content to flag, not change

These are clinical or regulatory claims: "91.7% reduction in cannulation attempts and risk of infection", "fully compliant with NHS IPC non-contact standards", "CE Marked", "eliminate first-attempt venipuncture failures". Keep the owner's wording, but ask the owner to confirm the source or manufacturer approval for each before launch (UK advertising and medical device rules apply). The "Up to 40%" claim is removed from the site.

## 11. Acceptance

- Every block of copy above appears exactly as written (after the marked typo fixes). "Anisys" is spelled this way everywhere; search the whole site for "Anysis" and confirm zero results.
- Menu matches section 1 on desktop and mobile; no broken links.
- No phone number and no old address found anywhere (attach the search results). LinkedIn and X are the only social links, and LinkedIn points to the company URL in section 2.3.
- New pages screenshot-checked at 1440px and 390px; Lighthouse accessibility and performance reported; animations verified with reduced-motion on.
- Existing pages unchanged except for the header, footer and homepage move described here.