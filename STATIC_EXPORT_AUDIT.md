# Xana Medtec — Static Export & cPanel Migration Audit

**Project:** Xana Medtec Ltd (`xanamedtec.com`)  
**Target Architecture:** Static HTML/CSS/JS export on TechBrein Linux Shared Hosting (Apache / cPanel)  
**Date:** October 2026  
**Status:** Phase 1 Complete (Audit & Inventory)

---

## 1. Executive Summary

This audit assesses the feasibility and technical migration pathway for converting the Xana Medtec Next.js 16 application into a 100% static export (`output: 'export'`). The converted bundle will be deployed directly via cPanel File Manager into `public_html` (or a staging subdomain directory) without requiring a running Node.js process, Phusion Passenger, or SSH access.

---

## 2. Comprehensive Codebase Classification Matrix

| Feature / Subsystem | Current Implementation | Static Compatibility Classification | Detailed Finding & Remediation Required |
|---|---|---|---|
| **Public Marketing & Service Pages (19 routes)** | React Server Components (`page.tsx`) in App Router | **Already static-compatible** | All 19 public pages (`/`, `/about-us`, `/clinical-services`, `/biochemistry`, etc.) contain zero dynamic request cookies or headers. They pre-render to pure static HTML (`○ (Static)`). |
| **Interactive Client Routes** | `'use client'` (`tests-list-page`, `help-faqs`, `blood-test-recommendation`) | **Already static-compatible** | Client components execute in the browser using pre-rendered HTML and client JS bundles. Layout wrappers supply static metadata and canonical URLs. |
| **Server Actions** | Zero instances found | **Already static-compatible** | Codebase contains zero `'use server'` directives. |
| **Server Headers / Cookies** | Zero instances of `next/headers` | **Already static-compatible** | No server component reads runtime cookies or request headers. |
| **Image Handling** | `next/image` with local static images in `/public` | **Requires modification** | Next.js default on-demand image optimization requires a Node.js server. Must set `images: { unoptimized: true }` in `next.config.ts`. Standard responsive `<img>` tags will be generated with lazy loading and full styling preserved. |
| **Static File / HTML Routing** | Default Next.js clean routes | **Requires modification** | Set `trailingSlash: true` in `next.config.ts` so all routes export as `/<slug>/index.html`. This ensures Apache directly serves `/about-us/` without requiring dynamic rewrite rules for direct browser reloads. |
| **Sitemap & Robots** | `src/app/sitemap.ts` & `src/app/robots.ts` | **Already static-compatible** | Next.js App Router exports both statically to `sitemap.xml` and `robots.txt` during `next build` when using static parameters. |
| **Contact / Enquiry Form** | Client component posting to `/api/contact` | **Requires replacement service** | Client `ContactEnquiryForm.tsx` posts to Node.js route `/api/contact`. On static Apache hosting, dynamic Node.js endpoints cannot execute. Replaced with dual-compatible approach: native cPanel `contact.php` script utilizing standard PHP `mail()`/SMTP, plus fallback support. |
| **Staging Middleware & Authentication** | `src/middleware.ts` + `/api/staging-auth` | **Cannot work with static hosting (Replaced by Apache Native)** | Next.js `middleware.ts` and dynamic API routes cannot run in static export mode. Replaced on cPanel with Apache `.htaccess` / `.htpasswd` (cPanel Directory Privacy), which is the standard, zero-overhead method for staging protection. |
| **Security Headers** | `headers()` in `next.config.ts` | **Requires modification (Move to `.htaccess`)** | Next.js ignores `headers()` in `output: 'export'`. All 7 enterprise security headers (HSTS, CSP/frame-ancestors, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) must be declared in Apache `.htaccess`. |
| **WordPress Legacy Redirects (52 rules)** | `redirects()` in `next.config.ts` | **Requires modification (Move to `.htaccess`)** | Next.js disallows `redirects()` with `output: 'export'`. All 52 legacy WooCommerce and BookingPress redirects must be implemented as Apache `Redirect 301` rules in `.htaccess`. |
| **Runtime Server (`server.js`)** | Phusion Passenger entry point | **Deprecated for Static Target** | Preserved in repository for optional Node.js setups, but omitted from static deployment archive. |
| **IONOS Business Email** | External MX records | **Must remain unchanged** | TechBrein cPanel DNS zone must preserve existing MX and TXT/SPF records pointing to IONOS. |

---

## 3. WordPress Legacy Redirect Inventory

Every legacy WordPress URL mapped in the system is detailed below. These will be converted into Apache 301 Permanent Redirect rules:

### 3.1 Primary Navigation & Service Archives (10 rules)
1. `/about-xanamedtec` → `/about-us`
2. `/medical-devices` → `/international-distribution`
3. `/all-man-all-woman` → `/well-man-well-woman`
4. `/services-archives/all-man-all-woman` → `/well-man-well-woman`
5. `/services-archives/biochemistry` → `/biochemistry`
6. `/services-archives/hepatitis-b-profile` → `/hepatitis-b-profile`
7. `/services-archives/hormone-profile` → `/hormone-profile`
8. `/services-archives/testosterone-monitoring` → `/testosterone-monitoring`
9. `/services-archives/thyroid-profile` → `/thyroid-profile`
10. `/services-category/popular-health-tests` → `/tests-list-page`

### 3.2 WooCommerce Products (28 rules)
1. `/product/pcos-hormone-test` → `/hormone-profile`
2. `/product/kidney-function-test` → `/biochemistry`
3. `/product/clarity` → `/tests-list-page`
4. `/product/zone` → `/tests-list-page`
5. `/product/serenity` → `/tests-list-page`
6. `/product/progesterone-day-21-ovulation-test` → `/hormone-profile`
7. `/product/menopause-hormone-test` → `/hormone-profile`
8. `/product/male-sexual-health-sti` → `/tests-list-page`
9. `/product/erectile-dysfunction-test` → `/testosterone-monitoring`
10. `/product/prostate-profile` → `/well-man-well-woman`
11. `/product/testosterone-plus` → `/testosterone-monitoring`
12. `/product/female-fertility-hormones` → `/hormone-profile`
13. `/product/testosterone-check` → `/testosterone-monitoring`
14. `/product/food-intolerance-gut-health-test` → `/tests-list-page`
15. `/product/pregnancy-test-beta-hcg` → `/hormone-profile`
16. `/product/heart-health` → `/lipids-hba1c`
17. `/product/covid-antibodies-igg-vaccine-immune-response` → `/tests-list-page`
18. `/product/male-hormones` → `/testosterone-monitoring`
19. `/product/allergy-complete-295-allergens-tested` → `/tests-list-page`
20. `/product/cholesterol-test` → `/lipids-hba1c`
21. `/product/diabetes-diagnosis-and-monitoring` → `/lipids-hba1c`
22. `/product/vitamin-profile` → `/biochemistry`
23. `/product/vitamin-b12` → `/biochemistry`
24. `/product/iron-status` → `/biochemistry`
25. `/product/thyroid-health` → `/thyroid-profile`
26. `/product/liver-function-test` → `/biochemistry`
27. `/product/general-health-test` → `/tests-list-page`
28. `/product/female-sexual-health-sti` → `/tests-list-page`

### 3.3 WooCommerce Catalog & Taxonomies (14 rules)
1. `/shop` → `/tests-list-page`
2. `/cart` → `/tests-list-page`
3. `/checkout` → `/tests-list-page`
4. `/product-category/all-tests` → `/tests-list-page`
5. `/product-category/cognitive-healthcare` → `/tests-list-page`
6. `/product-category/food-intolerance-gut-health-test` → `/tests-list-page`
7. `/product-category/general-health` → `/tests-list-page`
8. `/product-category/gut-health` → `/tests-list-page`
9. `/product-category/home-tests` → `/tests-list-page`
10. `/product-category/hormones` → `/hormone-profile`
11. `/product-category/mens-health` → `/well-man-well-woman`
12. `/product-category/sexual-health` → `/tests-list-page`
13. `/product-category/supplements` → `/tests-list-page`
14. `/product-category/womans-health` → `/well-man-well-woman`

### 3.4 BookingPress & Decommissioned Checkout (8 rules)
1. `/xana-medtec-booking` → `/` (or `/clinical-services`)
2. `/guest-checkout` → `/`
3. `/bookingpress-complete-payment` → `/`
4. `/thank-you` → `/`
5. `/appointment-reschedule` → `/`
6. `/cancel-appointment` → `/`
7. `/appointment-cancellation-confirmation` → `/`
8. `/cancel-payment` → `/`

### 3.5 WordPress Blog, RSS Feeds & Authors (4 rules)
1. `/health-hub` → `/clinical-services`
2. `/feed` → `/`
3. `/comments/feed` → `/`
4. `/author/(.*)` → `/about-us`

---

## 4. Phase 2 & 3 Action Plan

1. **Configure `output: 'export'`** in `next.config.ts`.
2. **Set `images: { unoptimized: true }`** and `trailingSlash: true`.
3. **Handle server-only files (`src/middleware.ts`, `src/app/api`)**:
   - For static export builds, Next.js requires removing or bypassing dynamic API routes and middleware.
   - We will implement a clean build mechanism that retains source files while enabling flawless `next build` -> `out/` export.
4. **Create `public/contact.php`**:
   - Production-grade, sanitizing PHP mail script configured for cPanel mail sending.
5. **Update `ContactEnquiryForm.tsx`**:
   - Directs submission to `/contact.php` (or relative path compatible with static Apache hosting).
6. **Generate `.htaccess` in `public/`**:
   - Complete ruleset including HTTPS redirect, 52 WordPress 301 redirects, clean routing, custom 404, security headers, and static asset cache expires.
7. **Build and Validate `out/`**:
   - Run full static compilation and verify all HTML files, assets, and `.htaccess`.
