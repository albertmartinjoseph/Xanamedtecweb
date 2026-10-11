# Xana Medtec – URL Mapping & 301 Redirect Specification

This document maps every single URL from `reference/01-site-inventory.md` to its new location or 301 redirect destination in the new headless architecture. Nothing will 404 silently.

---

## 1. Primary & Content Pages

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/` | Relocated | `/clinical-services/` | Former homepage moves to `/clinical-services/` as "Clinical Services". The root `/` becomes the new International Medical Distribution landing page. |
| `/about-us/` | Rebuilt Page | None (Live at `/about-us/`) | About Us page rebuilt with shared theme. Updated address, removed phone numbers. |
| `/about-xanamedtec/` | 301 Redirect | `/about-us/` | Legacy navigation link redirected to `/about-us/`. |
| `/corporate-health-packages/` | Unlisted Page | None (Live at `/corporate-health-packages/`) | Maintained as an unlisted live page (removed from footer navigation). |
| `/medical-devices/` | 301 Redirect | `/international-distribution/` | Old placeholder page redirected to the new International Distribution page. |
| `/help-faqs/` | Rebuilt Page | None (Live at `/help-faqs/`) | Rebuilt with clean FAQ accordion. Removed from top bar, kept in footer. |
| `/privacy-policy/` | Rebuilt Page | None (Live at `/privacy-policy/`) | Rebuilt with new address and purged phone numbers. |
| `/terms-use/` | Rebuilt Page | None (Live at `/terms-use/`) | Rebuilt with new address and purged phone numbers. |
| `/tests-list-page/` | Rebuilt Page | None (Live at `/tests-list-page/`) | Directory of all health tests with direct contact/booking CTA modal. |
| `/blood-test-recommendation/` | Rebuilt Page | None (Live at `/blood-test-recommendation/`) | Rebuilt as an interactive, accessible questionnaire. |

---

## 2. New Pages (Spec v2)

| New Route | Purpose | Page Status |
|---|---|---|
| `/` | New Landing Page | Live: International Medical Distribution hero, 01–08 connected timeline, two-way toggle tabs. |
| `/clinical-services/` | Clinical Services Hub | Live: Former homepage layout, popular tests grid, dashboard section, contact banner (testimonials job titles removed). |
| `/international-distribution/` | International Distribution | Live: Hero with dark overlay, Anisys Go & Vein Finder cards, 6 core services, 4 execution steps, contact modal trigger. |
| `/anisys-go/` | Anisys Go Product Page | Live: Device specifications, 13 sensors highlight tile, external link to anisys.co.uk. |
| `/vein-finder/` | Vein Finder System Page | Live: Vein Finder System, Clinical Benefits with visual projection, mobile trolley mount card, desktop stand card, specs table. |

---

## 3. Test Landing Pages & Services Custom Post Types

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/hepatitis-b-profile/` | Rebuilt Page | None (Live at `/hepatitis-b-profile/`) | Test landing page template entry. |
| `/biochemistry/` | Rebuilt Page | None (Live at `/biochemistry/`) | Test landing page template entry. |
| `/testosterone-monitoring/` | Rebuilt Page | None (Live at `/testosterone-monitoring/`) | Test landing page template entry. |
| `/thyroid-profile/` | Rebuilt Page | None (Live at `/thyroid-profile/`) | Test landing page template entry. |
| `/hormone-profile/` | Rebuilt Page | None (Live at `/hormone-profile/`) | Test landing page template entry. |
| `/lipids-hba1c/` | Rebuilt Page | None (Live at `/lipids-hba1c/`) | Test landing page template entry. |
| `/well-man-well-woman/` | Rebuilt Page | None (Live at `/well-man-well-woman/`) | Test landing page template entry. |
| `/all-man-all-woman/` | 301 Redirect | `/well-man-well-woman/` | Fixes the broken 404 URL from the original site. |
| `/services-archives/all-man-all-woman/` | 301 Redirect | `/well-man-well-woman/` | Old CPT archive URL redirected to valid test page. |
| `/services-archives/biochemistry/` | 301 Redirect | `/biochemistry/` | Old CPT archive URL redirected. |
| `/services-archives/hepatitis-b-profile/` | 301 Redirect | `/hepatitis-b-profile/` | Old CPT archive URL redirected. |
| `/services-archives/hormone-profile/` | 301 Redirect | `/hormone-profile/` | Old CPT archive URL redirected. |
| `/services-archives/testosterone-monitoring/` | 301 Redirect | `/testosterone-monitoring/` | Old CPT archive URL redirected. |
| `/services-archives/thyroid-profile/` | 301 Redirect | `/thyroid-profile/` | Old CPT archive URL redirected. |
| `/services-category/popular-health-tests/` | 301 Redirect | `/tests-list-page/` | Old category archive redirected to tests directory. |

---

## 4. Booking & Payment Endpoints (Decommissioned)

*No booking or payment data is imported. Per Item 4 of instructions, all booking and payment URLs are redirected to the home page (`/`).*

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/xana-medtec-booking/` | 301 Redirect | `/` | Old BookingPress appointment page redirected to home. |
| `/guest-checkout/` | 301 Redirect | `/` | Old guest booking/checkout page redirected to home. |
| `/bookingpress-complete-payment/` | 301 Redirect | `/` | Old payment completion endpoint redirected to home. |
| `/thank-you/` | 301 Redirect | `/` | Old booking confirmation page redirected to home. |
| `/appointment-reschedule/` | 301 Redirect | `/` | Old rescheduling endpoint redirected to home. |
| `/cancel-appointment/` | 301 Redirect | `/` | Old appointment cancellation endpoint redirected to home. |
| `/appointment-cancellation-confirmation/` | 301 Redirect | `/` | Old cancellation confirmation redirected to home. |
| `/cancel-payment/` | 301 Redirect | `/` | Old cancelled payment endpoint redirected to home. |

---

## 5. Account & Auth Endpoints (Decommissioned)

*No user or patient data is imported. All accounts endpoints redirect to the homepage by default (or to an external patient portal URL when provided by the owner).*

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/login/` | 301 Redirect | `/` | Redirects to home (or external results portal URL). |
| `/register/` | 301 Redirect | `/` | Redirects to home (or external results portal URL). |
| `/password-reset/` | 301 Redirect | `/` | Redirects to home (or external results portal URL). |
| `/account/` | 301 Redirect | `/` | Redirects to home (or external results portal URL). |
| `/user/` (and `/user/*`) | 301 Redirect | `/` | Redirects to home (or external results portal URL). |
| `/logout/` | 301 Redirect | `/` | Redirects to home (or external results portal URL). |

---

## 6. Shop, Product Categories & Individual Products (28 Products Decommissioned)

*WooCommerce is completely decommissioned. All product and shop URLs redirect either to the closest matching test landing page or to the comprehensive `/tests-list-page/`.*

### Shop Taxonomy

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/shop/` | 301 Redirect | `/tests-list-page/` | Shop root redirected to health tests directory. |
| `/cart/` | 301 Redirect | `/tests-list-page/` | Cart redirected to health tests directory. |
| `/checkout/` | 301 Redirect | `/tests-list-page/` | Checkout redirected to health tests directory. |
| `/product-category/all-tests/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/cognitive-healthcare/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/food-intolerance-gut-health-test/`| 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/general-health/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/gut-health/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/home-tests/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/hormones/` | 301 Redirect | `/hormone-profile/` | Semantic redirect to hormone test page. |
| `/product-category/mens-health/` | 301 Redirect | `/well-man-well-woman/` | Semantic redirect to Well Man test page. |
| `/product-category/sexual-health/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/supplements/` | 301 Redirect | `/tests-list-page/` | Category archive redirected. |
| `/product-category/womans-health/` | 301 Redirect | `/well-man-well-woman/` | Semantic redirect to Well Woman test page. |
| `/product-tag/*` (all product tags) | 301 Redirect | `/tests-list-page/` | All product tags redirected to tests list. |

### The 28 Individual Products

| Legacy Product URL | New URL / Action | 301 Redirect Target | Mapping Rationale |
|---|---|---|---|
| `/product/pcos-hormone-test/` | 301 Redirect | `/hormone-profile/` | Exact clinical match (PCOS / Hormones) |
| `/product/kidney-function-test/` | 301 Redirect | `/biochemistry/` | Exact clinical match (Renal / Biochemistry) |
| `/product/clarity/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/zone/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/serenity/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/progesterone-day-21-ovulation-test/` | 301 Redirect | `/hormone-profile/` | Exact clinical match (Hormones) |
| `/product/menopause-hormone-test/` | 301 Redirect | `/hormone-profile/` | Exact clinical match (Hormones) |
| `/product/male-sexual-health-sti/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/erectile-dysfunction-test/` | 301 Redirect | `/testosterone-monitoring/` | Exact clinical match (Testosterone / Men's Health) |
| `/product/prostate-profile/` | 301 Redirect | `/well-man-well-woman/` | Exact clinical match (Well Man) |
| `/product/testosterone-plus/` | 301 Redirect | `/testosterone-monitoring/` | Exact clinical match (Testosterone) |
| `/product/female-fertility-hormones/` | 301 Redirect | `/hormone-profile/` | Exact clinical match (Hormones) |
| `/product/testosterone-check/` | 301 Redirect | `/testosterone-monitoring/` | Exact clinical match (Testosterone) |
| `/product/food-intolerance-gut-health-test/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/pregnancy-test-beta-hcg/` | 301 Redirect | `/hormone-profile/` | Exact clinical match (Hormones) |
| `/product/heart-health/` | 301 Redirect | `/lipids-hba1c/` | Exact clinical match (Cardio / Lipids) |
| `/product/covid-antibodies-igg-vaccine-immune-response/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/male-hormones/` | 301 Redirect | `/testosterone-monitoring/` | Exact clinical match (Testosterone) |
| `/product/allergy-complete-295-allergens-tested/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/cholesterol-test/` | 301 Redirect | `/lipids-hba1c/` | Exact clinical match (Lipids profile) |
| `/product/diabetes-diagnosis-and-monitoring/` | 301 Redirect | `/lipids-hba1c/` | Exact clinical match (HbA1c monitoring) |
| `/product/vitamin-profile/` | 301 Redirect | `/biochemistry/` | Exact clinical match (Biochemistry profile) |
| `/product/vitamin-b12/` | 301 Redirect | `/biochemistry/` | Exact clinical match (Biochemistry profile) |
| `/product/iron-status/` | 301 Redirect | `/biochemistry/` | Exact clinical match (Biochemistry profile) |
| `/product/thyroid-health/` | 301 Redirect | `/thyroid-profile/` | Exact clinical match (Thyroid profile) |
| `/product/liver-function-test/` | 301 Redirect | `/biochemistry/` | Exact clinical match (Hepatic / Biochemistry) |
| `/product/general-health-test/` | 301 Redirect | `/tests-list-page/` | General test directory |
| `/product/female-sexual-health-sti/` | 301 Redirect | `/tests-list-page/` | General test directory |

---

## 7. Blog & Miscellaneous

| Legacy URL | New URL / Action | 301 Redirect Target | Mapping Notes |
|---|---|---|---|
| `/health-hub/` | 301 Redirect | `/clinical-services/` | Single blog post redirected to Clinical Services. |
| `/author/sadia/` | 301 Redirect | `/about-us/` | Author archive redirected to About Us team page. |
| `/feed/`, `/comments/feed/` | 301 Redirect | `/` | Old RSS feeds redirected to home. |
