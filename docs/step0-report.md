# Xana Medtec – Step 0 Technical Audit & Discovery Report

**Date:** 11 October 2026  
**Status:** Step 0 Complete – Ready for Owner Alignment & Decisions  

---

## 1. Executive Summary

As required by Step 0 of the build brief, a comprehensive technical and aesthetic discovery has been executed on the existing web property (`xanamedtec.com`), the HTTrack static mirror (`/reference/site`), and the supplied brand assets (`/reference/assets`). No production application build has been started.

### Key Deliverables Completed:
1. **Design Tokens Extracted:** Created [`/reference/design-tokens.json`](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/reference/design-tokens.json) containing authentic typographic scales, brand palettes, button variants, containers, and breakpoints parsed from Chemlabs and Elementor Kit-3909 CSS.
2. **Full-Page Screenshot Library:** Captured **46 full-page reference screenshots** (desktop at 1440px and mobile at 390px) into [`/reference/screenshots/`](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/reference/screenshots/).
3. **Inventory Discrepancies & Section J Verification:** Confirmed redirect behaviors for all ambiguous routes in [`/reference/01-site-inventory.md`](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/reference/01-site-inventory.md) and identified a critical existing 404 error on the live site.
4. **Dynamic / JavaScript Content Audit:** Identified all widgets requiring headless backend replacement.
5. **Asset Quality & Spec Sizing Audit:** Profiled all 10 assets in `/reference/assets/` against their intended layout roles.
6. **Legacy Contact & Address Compliance Scan:** Cataloged all occurrences of old phone numbers, addresses, Google Maps links, and obsolete social handles.

---

## 2. Real Design Tokens Extracted

All design tokens have been compiled into [`/reference/design-tokens.json`](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/reference/design-tokens.json). The authentic styles reverse-engineered from the CSS are:

### Typography
- **Primary Body & Headings Font:** `"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` (Dominant across the site with **1,063 declarations** in the Elementor stylesheet).
- **Secondary Display Fonts:** `"Lexend", sans-serif` (linked via Google Fonts in `<head>`), `"Roboto", sans-serif`, and `"Roboto Slab", serif`.
- **Type Hierarchy:**
  - `Display / Hero Heading`: 40px – 45px (line-height: 45px, bold 700)
  - `H1 / Section Titles`: 35px (line-height: 45px, bold 700)
  - `H2 / Subheadings`: 26px – 30px (line-height: 35px, bold 700)
  - `H3 / Card Headings`: 18px – 22px (semibold 600 / bold 700)
  - `Body Standard`: 15px – 16px (line-height: 24px, medium 500 / regular 400)
  - `Muted / Captions`: 12px – 14px (line-height: 20px)

### Color Palette
- **Primary Brand Navy:** `#002D62` (Headings, primary CTA buttons, dark containers, card accents — **1,308 declarations**).
- **Deep Navy / Secondary Blue:** `#002678` / `#002679` (Borders, input outlines, dark backgrounds).
- **Primary Brand Accent (Teal):** `#20B2AA` (LightSeaGreen — CTAs, active menu indicators, badges, hover fills).
- **Teal Alpha Scale:** `rgba(32, 178, 170, 0.8)` (`#20B2AACC`), `0.5` (`#20B2AA80`), `0.3` (`#20B2AA4D`), `0.2` (`#20B2AA33`), `0.1` (`#20B2AA1A`).
- **Secondary Accents:** Mint/Teal `#23CCAD` (Elementor kit accent `fd56777`), Pastel Yellow `#FDEC8A` (star ratings/highlights), Accent Green `#61CE70`.
- **Neutrals & Text:**
  - Body Text: `#606367` (Slate grey)
  - Muted Text / Footer: `#6B7280` (Cool grey)
  - Heading / Dark: `#323232`
  - Subtle Borders: `rgba(107, 114, 128, 0.3)` (`#6B72804D`) and `#ECECEC`
  - Backgrounds: `#FFFFFF` (pure white), `#F8F9FA` (light background), `#E5E5E5F2` (translucent dropdown menu fill).

### Button Styles
1. **Primary Button (Navy Pill CTA):**
   - Font: `"Lato"`, 15px, weight 500
   - Background: `#002D62` | Text: `#FFFFFF` | Border: `1px solid #002D62`
   - Border Radius: `24px` | Padding: `10px 35px 10px 30px`
   - Hover: Background `#20B2AA`, Border `#20B2AA`, Text `#FFFFFF`
2. **Accent Button (Teal Pill CTA):**
   - Font: `"Lato"`, 16px, weight 700
   - Background: `#20B2AA` | Text: `#FFFFFF` | Border: `none`
   - Border Radius: `40px` | Padding: `15px 50px`
   - Hover: Background `#002D62`, Text `#FFFFFF`
3. **Form Submit Button:**
   - Font: `"Lato"`, 20px, weight 500
   - Background: `#20B2AA` | Text: `#FFFFFF` | Border Radius: `20px` | Padding: `10px 50px`
   - Hover: Background `#002D62`, Text `#FFFFFF`

### Container Widths & Breakpoints
- **Container Max-Width (Boxed):** `1140px` (Elementor standard boxed container).
- **Container Max-Width (Wide/Hero):** `1320px` / `1400px` / `100%`.
- **Breakpoints:**
  - Mobile: `max-width: 767px`
  - Tablet Portrait: `min-width: 768px` and `max-width: 1024px`
  - Tablet Landscape / Laptop: `max-width: 1366px`
  - Standard Desktop: `1440px`
  - Ultra-wide: `1700px`

---

## 3. Inventory & Route Verification (Section J Resolved)

All questions left open in section J of `reference/01-site-inventory.md` have been inspected and answered:

| URL Tested | Result | Target / Status | Action for New Site |
|---|---|---|---|
| `/about-xanamedtec/` | **Redirects** | `/about-us/` (via meta refresh / 301) | Implement 301 redirect to `/about-us/` |
| `/services-archives/biochemistry/` | **Redirects** | `/biochemistry/` | Implement 301 redirect |
| `/services-archives/hepatitis-b-profile/` | **Redirects** | `/hepatitis-b-profile/` | Implement 301 redirect |
| `/services-archives/hormone-profile/` | **Redirects** | `/hormone-profile/` | Implement 301 redirect |
| `/services-archives/testosterone-monitoring/` | **Redirects** | `/testosterone-monitoring/` | Implement 301 redirect |
| `/services-archives/thyroid-profile/` | **Redirects** | `/thyroid-profile/` | Implement 301 redirect |
| `/services-archives/all-man-all-woman/` | **Redirects to 404** | Redirects to `/all-man-all-woman/` which returns **404 Page Not Found** | **CRITICAL BUG ON CURRENT SITE:** Old homepage cards linked here. The real landing page is `/well-man-well-woman/`. We must add 301 redirects from both `/services-archives/all-man-all-woman/` and `/all-man-all-woman/` to `/well-man-well-woman/`. |
| `/services-category/popular-health-tests/` | **Redirects** | `/tests-list-page/` | Implement 301 redirect |
| `/xana-medtec-booking/` | **Redirects** | `/guest-checkout/` | Implement 301 redirect |
| `/author/sadia/` | **Redirects** | `/user/_e120982bda121c887e/` -> `/` | Implement 301 redirect to `/` |

---

## 4. Screenshot Audit

A total of **46 screenshots** were captured using a headless Chromium browser at 1440px (desktop) and 390px (mobile) viewports, now stored in [`/reference/screenshots/`](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/reference/screenshots/):

- `home-desktop.png`, `home-mobile.png`
- `about-us-desktop.png`, `about-us-mobile.png`
- `corporate-health-packages-desktop.png`, `corporate-health-packages-mobile.png`
- `help-faqs-desktop.png`, `help-faqs-mobile.png`
- `privacy-policy-desktop.png`, `privacy-policy-mobile.png`
- `terms-use-desktop.png`, `terms-use-mobile.png`
- `tests-list-page-desktop.png`, `tests-list-page-mobile.png`
- `blood-test-recommendation-desktop.png`, `blood-test-recommendation-mobile.png`
- The 7 Test Landing Pages (Desktop & Mobile):
  - `hepatitis-b-profile`
  - `biochemistry`
  - `testosterone-monitoring`
  - `thyroid-profile`
  - `hormone-profile`
  - `lipids-hba1c`
  - `well-man-well-woman`
- Booking & Account Pages:
  - `guest-checkout`
  - `xana-medtec-booking`
  - `login`
  - `register`
  - `password-reset`
- Redirect verification pages:
  - `about-xanamedtec`
  - `services-archives-biochemistry`
  - `all-man-all-woman` (verifies the live 404 behavior)

### Pages Missing in Static HTTrack Copy
The following pages were not captured by HTTrack or returned 404s in the crawl:
1. `/medical-devices/` (Spec mentions this was a 1-paragraph "Coming soon" placeholder added in Aug 2026).
2. WooCommerce Shop pages: `/shop/`, individual `/product/<slug>/` pages, `/product-category/<slug>/`, cart, checkout.
3. Blog post: `/health-hub/` ("What is PCOS?").
4. Backend-protected booking endpoints: `/bookingpress-complete-payment/`, `/thank-you/`, `/appointment-reschedule/`, `/cancel-appointment/`, `/appointment-cancellation-confirmation/`, `/cancel-payment/`.
5. Authenticated user pages: `/account/`, `/logout/`.

*(Note: Live site `xanamedtec.com` timed out on external connection during discovery, making the local `/reference/site` mirror our definitive reference).*

---

## 5. Dynamic JavaScript Features & Blank/Missing Elements

In `/reference/site`, several components are driven by client-side JavaScript or server PHP APIs:

1. **Clinic Finder on Homepage ("Find Your Nearest Clinic And Schedule An Appointment"):**
   - **Discovery:** Despite the heading, this is **NOT a clinic locator map or search box**. It is an Elementor inquiry lead form (`form_id: 57dcb78`) containing three inputs: Name, Email, Phone/Message, and a "Submit" button.
   - **Status:** Requires decision on where form submissions should be routed in the headless architecture.
2. **Interactive Blood Test Questionnaire (`/blood-test-recommendation/`):**
   - Built with an Elementor Pro multi-step interactive quiz. Without the JS state manager, only the first step or static indicators render. Needs a clean modern React form component.
3. **Appointment Booking Engine (`/guest-checkout/`):**
   - Powered by BookingPress plugin with frontend JS making REST calls to `/wp-json/bookingpress/...`. In static files, the calendar dates and service selection spinners cannot load slots.
4. **User Auth & Results Dashboard (`/login/`, `/register/`, `/password-reset/`, `/user/`):**
   - Powered by Ultimate Member. Forms are non-functional static shells without active WordPress authentication.
5. **Carousels (Hero Banner & Testimonial Slider):**
   - Powered by Swiper.js. Static HTML renders slides stacked or inert without active JS initialization.
6. **Cookie Consent Banner & Modal:**
   - Powered by GDPR Cookie Consent plugin scripts.

---

## 6. Supplied Assets Quality & Sizing Audit (`/reference/assets/`)

Each asset was analyzed against its intended role in `04-new-site-spec.md`:

| File | Specs / Dimensions | File Size | Usage in Spec | Quality & Usability Assessment |
|---|---|---|---|---|
| `01-logo-dark-bg.svg` | Vector (700x357 vb) | 54.1 KB (137 paths) | Dark hero & dark footer | **Clean & sharp.** Production-ready vector with low path count. |
| `02-logo-light-bg.svg` | Vector (1756x895 vb) | **1.55 MB** (3,170 paths) | Light header, cookie banner | **POOR QUALITY / WARNING:** Extremely heavy auto-traced raster file with 3,170 micro-paths. Produces ragged outlines and dark halo fringing around the teal hexagon and black typography at header scale (40-60px height). **Recommendation: Request original Illustrator .ai / vector or clean high-res PNG.** |
| `03-intl-distribution-banner.png` | 1266 x 522 px | 688.1 KB | International Distribution banner | **Narrow for full-width:** At standard 1440px and 1920px viewports, 1266px width requires ~1.14x to 1.52x upscaling, resulting in softness. Dark overlay specified in spec will help mitigate blur, but 1920px+ asset is preferable. Stock image licensing confirmation needed. |
| `04-anisys-go-card.png` | 697 x 663 px | 341.0 KB | International Distribution card | **Good.** Adequate resolution for ~500px column card width. |
| `05-vein-finder-card.png` | 700 x 700 px | 684.9 KB | International Distribution card | **Good resolution.** Shows "Vein Finder" label on device. OEM branding approval needed. |
| `06-anisys-go-banner.png` | 1048 x 528 px | 366.0 KB | Anisys Go page banner | **Sub-optimal resolution:** 1048px is too narrow for standard desktop full-width banners (>1440px). Will stretch 1.37x–1.83x. Recommend placing inside a max-width container or with background teal extension. |
| `07-vein-finder-banner.png` | 1260 x 407 px | 418.4 KB | Vein Finder page banner | **Wide crop (3.1:1 ratio):** Slight upscale needed on >1260px screens. Subject positioned on left, text must sit on right. |
| `08-anisys-go-product.png` | 1000 x 938 px | 487.6 KB | Anisys Go inline product | **Excellent.** Sharp and clear for inline display (~500px). |
| `09-vein-finder-projection.png` | 1057 x 1600 px | 645.1 KB | Vein Finder clinical benefits | **High quality.** Note: Prominently projects OEM brand name **"ZD Medical"** onto the arm. Confirm if brand name is acceptable to show. |
| `10-mobile-trolley-mount.png` | 696 x 868 px | 102.0 KB | Vein Finder trolley mount card | **Good.** White background requires white card surface. |
| *Missing: Desktop Stand* | Not supplied | — | Vein Finder desktop mount | Card must be designed to display cleanly without an image until asset is provided. |
| *Missing: Favicon* | Not supplied | — | Site favicon | Must be generated/cropped from teal hexagon in `01-logo-dark-bg.svg`. |

---

## 7. Legacy Contact & Compliance Audit

A complete scan of all 145 files in `/reference/site/` identified legacy information that must be systematically purged or replaced:

1. **Phone Numbers Found (92 files):**
   - `0333 4040 518` / `033340404518` appears in header top bar, footer Quick Contact, Privacy Policy, Terms of Use, booking headers, and Yoast JSON-LD schema across 92 files.
   - Action: Completely remove all phone numbers and `tel:` links as specified.
2. **Old Company Addresses Found (32 files):**
   - `First Floor, 103-105 Market Street, Manchester, M11NN` (and variants with `Clinic Address:`).
   - `Albert Square, 1 Albert Square, First floor, Manchester, M2 3FU`.
   - Action: Replace everywhere with **Xana Medtec Ltd, Bartle House, Oxford Court, Manchester, M2 3WQ**.
3. **Google Maps Link:**
   - Link `https://goo.gl/maps/eERiRGYfPNwSrEWu9` points to the old Market Street address. Must be updated or removed.
4. **Social Links Found (128 files):**
   - Facebook (`facebook.com/...`) and Instagram (`instagram.com/...`) links in top bar, footer, and schema `sameAs`.
   - Obsolete Twitter URL (`twitter.com/XanaMedtec`).
   - Personal LinkedIn URL (`uk.linkedin.com/in/xana-medtec-680aa81a9`).
   - Action: Retain ONLY LinkedIn (`https://www.linkedin.com/company/xana-medtec/home/`) and X (`https://x.com/XanaMedtec`).

---

## 8. Decisions & Confirmation Questions Required Before Building

Before proceeding with Phase 1 (frontend and CMS build), the following decisions and confirmations must be answered by the project owner:

### Architecture & Service Decisions
1. **Appointments & Bookings (8 pages):**
   - Current site uses BookingPress for appointments, payments, rescheduling, and cancellations.
   - Which solution do you want for the rebuild:
     - Option A: Keep a hosted appointment tool (Cal.com, Calendly, or Acuity) embedded or linked.
     - Option B: Custom booking flow with Stripe integration and headless database.
     - Option C: Retain a headless WordPress instance exclusively for the booking API.
2. **Patient Accounts & Health Results Dashboard (5 pages):**
   - Current site uses Ultimate Member to show sensitive patient blood test results (UK GDPR / health data).
   - How should test results be delivered to patients going forward:
     - Option A: Modern auth (Clerk / Supabase / Auth0) with secure results portal.
     - Option B: Existing third-party pathology lab results portal (if one exists).
     - Option C: Defer patient login until Phase 2.
3. **E-Commerce / Shop (28 products, cart, checkout):**
   - WooCommerce was not captured in the static mirror.
   - What platform should power the 28 health tests:
     - Option A: Shopify Headless (Storefront API).
     - Option B: Stripe Checkout with products managed in Payload CMS.
     - Option C: Medusa.js.
     - Option D: Defer shop until clinical services pages are live.
4. **Homepage "Clinic Finder" Form:**
   - Currently an inquiry lead-capture form (`form_id: 57dcb78`) with Name, Email, Phone, and Submit button.
   - Should this remain an email inquiry/lead capture block, or do you have actual clinic locations to show on an interactive map?
5. **Testimonial Slider Data:**
   - Job titles on existing testimonials (e.g., "Legacy Integration Producer", "Product Designer") are theme demo placeholders, and one name does not match the review. Please provide confirmed client names, titles, and review quotes, or confirm if we should hide roles.

### Spec [CONFIRM] Questions
6. **Hero Reference Colors [CONFIRM]:**
   - The reference image for the new landing hero shows dark navy with teal accents. The site tokens extracted are Navy `#002D62` and Teal `#20B2AA`. Should we use the exact site tokens `#002D62` and `#20B2AA` for the new landing hero, or does the reference image specify a different navy/teal shade you prefer?
7. **`/medical-devices/` Route [CONFIRM]:**
   - Confirm whether `/medical-devices/` should issue a 301 permanent redirect to `/international-distribution/`, or if it should exist as a hub page.
8. **`/corporate-health-packages/` [CONFIRM]:**
   - The page is removed from footer navigation. Should the URL `/corporate-health-packages/` remain published, unlisted (hidden from navigation), or 301 redirected?
9. **Asset & OEM Approvals [CONFIRM]:**
   - **Logo 02:** Please confirm if original vector artwork (.ai / clean .svg) or high-res transparent PNG can be supplied to replace the 1.55MB auto-traced `02-logo-light-bg.svg`.
   - **OEM Brand "ZD Medical":** Image `09-vein-finder-projection.png` displays "ZD Medical" projected on the arm. Is displaying this OEM name approved for the site?
   - **Image Rights:** Please confirm commercial licenses for banner images `03`, `04`, `06`, `07`, `08`.
   - **Flexible Desktop Stand:** Confirm that card should be built with an icon/typography layout until the hardware photo is supplied.
10. **Clinical & Regulatory Claims [CONFIRM]:**
    - Confirm regulatory approval / substantiation for UK advertising standards on the claims:
      - *"91.7% reduction in cannulation attempts and risk of infection"*
      - *"Fully compliant with NHS IPC non-contact standards"*
      - *"CE Marked"*
      - *"Eliminate first-attempt venipuncture failures"*
11. **Hosting & Tech Stack Confirmation:**
    - Brief proposes **Next.js (App Router) + Tailwind CSS** with **Payload CMS**. Please confirm approval to proceed with this stack in `/app`.
