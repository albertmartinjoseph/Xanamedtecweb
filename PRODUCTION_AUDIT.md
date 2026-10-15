# Xana Medtec — Production Readiness & Deployment Audit

**Document Date:** October 2026  
**Project:** Xana Medtec Ltd (`xanamedtec.com`)  
**Technology Stack:** Next.js 16.4.0 (Turbopack, App Router), React 19.3.0, TypeScript 5, Tailwind CSS v4  
**Target Environment:** cPanel Node.js Hosting / Linux Server (replacing legacy WordPress / IONOS / Vercel)  

---

## Executive Summary

A comprehensive production readiness audit and remediation was performed on the Xana Medtec web application. Keystatic CMS dependencies and residual configurations have been purged without reintroduction. Critical SEO blockers—including an inherited homepage canonical override across all internal pages, artificial sitemap timestamps, a missing contact API endpoint, an unescaped apostrophe build error, and development preview indexing risks—were identified and remediated. The project has been fully configured for standard cPanel Node.js hosting via a native `server.js` startup entry point and validated across automated test suites (`npm ci`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, and live HTTP endpoint testing).

---

## 1. Issues Found & Root Causes

| ID | Category | Severity | Issue Description & Root Cause |
|---|---|---|---|
| **ISS-01** | **SEO / Indexing** | **CRITICAL** | **Inherited Root Canonical Overriding All Pages:** The root `layout.tsx` declared `alternates: { canonical: '/' }`. Because individual pages did not define their own `alternates`, Next.js inherited `'/'` for all 19 public pages (e.g., `/about-us`, `/clinical-services`, `/tests-list-page` all pointed to `https://www.xanamedtec.com/` as their canonical link). This would have caused Google to treat all internal diagnostic and service pages as duplicates of the homepage. |
| **ISS-02** | **SEO / Sitemap** | **MEDIUM** | **Artificial Sitemap Timestamps:** `src/app/sitemap.ts` generated `lastModified: new Date().toISOString()`, assigning the current build timestamp to all pages on every build, violating search engine guidelines. |
| **ISS-03** | **SEO / Preview** | **MEDIUM** | **Preview Environment Indexing Risk:** Preview deployments (e.g. Vercel preview or staging mode) risked being crawled without an environment-aware robots condition. |
| **ISS-04** | **SEO / Metadata** | **LOW** | **Double Branding in Page Titles:** Several pages (e.g., `About Us - Xana Medtec`) were combined with the layout's title template `%s \| Xana Medtec`, producing redundant titles such as `About Us - Xana Medtec \| Xana Medtec`. |
| **ISS-05** | **Client Pages** | **MEDIUM** | **Missing Metadata on Client Routes:** `tests-list-page`, `help-faqs`, and `blood-test-recommendation` were `'use client'` components and lacked metadata exports, falling back to the homepage generic title and description. |
| **ISS-06** | **Forms / API** | **HIGH** | **Missing `/api/contact` Endpoint:** `ContactEnquiryForm.tsx` posted to `/api/contact`, which did not exist (404). Submissions simulated success via catch fallback without saving or routing enquiries. |
| **ISS-07** | **Code Quality** | **HIGH** | **Unescaped Entity in JSX:** `src/app/international-distribution/page.tsx` contained unescaped `let's` at line 310, triggering an ESLint `react/no-unescaped-entities` error. |
| **ISS-08** | **Error Handling** | **MEDIUM** | **Missing Custom 404 Template:** No `src/app/not-found.tsx` existed. Non-existent URLs fell back to default unbranded Next.js black/white error output. |
| **ISS-09** | **Hosting / cPanel** | **HIGH** | **Missing cPanel Startup File:** cPanel Node.js Application Manager (Phusion Passenger) requires an application startup entry point (`server.js`). Only `next start` CLI existed. |
| **ISS-10** | **Dev Tools** | **MEDIUM** | **ESLint File Scanning Bottleneck:** `npm run lint` was scanning untracked directories (`reference/site/` HTTrack mirror and `scratch/`), causing lint processes to stall. |

---

## 2. Issues Fixed & Remediations Applied

1. **Per-Page Unique Canonical Tags:**
   * Updated `src/app/about-us/page.tsx`, `clinical-services`, `biochemistry`, `hepatitis-b-profile`, `hormone-profile`, `lipids-hba1c`, `testosterone-monitoring`, `thyroid-profile`, `well-man-well-woman`, `corporate-health-packages`, `international-distribution`, `anisys-go`, `vein-finder`, `privacy-policy`, and `terms-use` with explicit `alternates: { canonical: '/<slug>' }`.
   * Created server-side layout wrappers (`layout.tsx`) for interactive client routes:
     * `src/app/tests-list-page/layout.tsx` (`canonical: '/tests-list-page'`)
     * `src/app/help-faqs/layout.tsx` (`canonical: '/help-faqs'`)
     * `src/app/blood-test-recommendation/layout.tsx` (`canonical: '/blood-test-recommendation'`)
   * Removed title double-branding by supplying concise page titles that integrate cleanly with `%s | Xana Medtec`.

2. **Sitemap Dynamic Compliance:**
   * Removed artificial `lastModified: currentDate` from `src/app/sitemap.ts`. The sitemap now outputs clean XML containing all 19 valid public URLs with proper `priority` and `changeFrequency`.

3. **Preview & Staging Robots Protection:**
   * Updated `src/app/robots.ts` and `src/app/layout.tsx` with an `isPreviewOrStaging` check (`process.env.VERCEL_ENV === 'preview' || process.env.STAGING === 'true'`).
   * When on preview or staging: outputs `Disallow: /` and `robots: { index: false, follow: false }`.
   * When in production: allows all public pages (`Allow: /`), disallows internal routes (`/staging-login`, `/api/`, `/showcase`), and links to `https://www.xanamedtec.com/sitemap.xml`.

4. **Production Contact API Endpoint (`/api/contact`):**
   * Created `src/app/api/contact/route.ts` with:
     * Honeypot bot protection (`_honey_url`)
     * Name, email regex, message, and privacy consent validation
     * Structured production logging (timestamp, enquiry category, contact details)
     * HTTP 200 structured JSON response (`{ success: true, message: ... }`)
     * HTTP 400 validation error responses
   * Updated `src/middleware.ts` to allow `/api/contact` requests through staging gates.

5. **Custom Branded 404 Page:**
   * Created `src/app/not-found.tsx` styled with Xana Medtec's Navy (`#002D62`) and Teal (`#20B2AA`) branding, complete with navigational links to the Homepage and Clinical Services.

6. **cPanel Node.js Application Startup File:**
   * Created `server.js` using Next.js programmatic HTTP server API.
   * Dynamically binds to `process.env.PORT` (or 3000) and `process.env.HOSTNAME`.
   * Fully compatible with CloudLinux Phusion Passenger, cPanel Node.js App Manager, PM2, Docker, and standalone VPS setups.

7. **JSX Entity Fix & ESLint Scope Optimization:**
   * Fixed unescaped entity in `international-distribution/page.tsx` (`let&apos;s`).
   * Placed top-level `ignores` in `eslint.config.mjs` excluding `node_modules`, `.next`, `reference`, `scratch`, and `server.js`.
   * Updated `package.json` lint script to `"lint": "eslint src"`.

---

## 3. Files Modified & Added

| File Path | Action | Description |
|---|---|---|
| `server.js` | **Created** | Phusion Passenger / cPanel custom Node.js entry point. |
| `src/app/not-found.tsx` | **Created** | Branded 404 error page. |
| `src/app/api/contact/route.ts` | **Created** | Contact & appointment enquiry API endpoint with input validation. |
| `src/app/tests-list-page/layout.tsx` | **Created** | Server metadata and canonical tag for Tests Directory. |
| `src/app/help-faqs/layout.tsx` | **Created** | Server metadata and canonical tag for FAQs. |
| `src/app/blood-test-recommendation/layout.tsx` | **Created** | Server metadata and canonical tag for Recommendation tool. |
| `src/app/staging-login/layout.tsx` | **Created** | Noindex metadata for staging login route. |
| `src/app/showcase/layout.tsx` | **Created** | Noindex metadata for developer showcase route. |
| `src/app/robots.ts` | **Modified** | Added preview/staging environment detection and production crawling rules. |
| `src/app/sitemap.ts` | **Modified** | Omitted artificial `lastModified` timestamps; validated all 19 public routes. |
| `src/app/layout.tsx` | **Modified** | Added preview/staging robots toggles and metadataBase. |
| `src/middleware.ts` | **Modified** | Allowed `/api/contact`, `/robots.txt`, and `/sitemap.xml` in staging bypass. |
| `eslint.config.mjs` | **Modified** | Configured top-level global ignores for `scratch`, `reference`, `server.js`. |
| `package.json` | **Modified** | Scoped `lint` script to `eslint src`. |
| `src/app/international-distribution/page.tsx` | **Modified** | Fixed unescaped entity (`let&apos;s`) and added canonical `/international-distribution`. |
| `src/app/about-us/page.tsx` | **Modified** | Cleaned title and added canonical `/about-us`. |
| `src/app/clinical-services/page.tsx` | **Modified** | Cleaned title and added canonical `/clinical-services`. |
| `src/app/corporate-health-packages/page.tsx` | **Modified** | Cleaned title and added canonical `/corporate-health-packages`. |
| `src/app/biochemistry/page.tsx` | **Modified** | Cleaned title and added canonical `/biochemistry`. |
| `src/app/hepatitis-b-profile/page.tsx` | **Modified** | Cleaned title and added canonical `/hepatitis-b-profile`. |
| `src/app/hormone-profile/page.tsx` | **Modified** | Cleaned title and added canonical `/hormone-profile`. |
| `src/app/lipids-hba1c/page.tsx` | **Modified** | Cleaned title and added canonical `/lipids-hba1c`. |
| `src/app/testosterone-monitoring/page.tsx` | **Modified** | Cleaned title and added canonical `/testosterone-monitoring`. |
| `src/app/thyroid-profile/page.tsx` | **Modified** | Cleaned title and added canonical `/thyroid-profile`. |
| `src/app/well-man-well-woman/page.tsx` | **Modified** | Cleaned title and added canonical `/well-man-well-woman`. |
| `src/app/anisys-go/page.tsx` | **Modified** | Cleaned title and added canonical `/anisys-go`. |
| `src/app/vein-finder/page.tsx` | **Modified** | Cleaned title and added canonical `/vein-finder`. |
| `src/app/privacy-policy/page.tsx` | **Modified** | Cleaned title and added canonical `/privacy-policy`. |
| `src/app/terms-use/page.tsx` | **Modified** | Cleaned title and added canonical `/terms-use`. |

---

## 4. Tests Performed & Actual Results

| Test Step | Command Executed | Actual Result | Status |
|---|---|---|---|
| **Clean Dependency Install** | `npm ci` | 358 packages audited, 0 lockfile mismatches. | **PASSED** |
| **Type Check** | `npx tsc --noEmit` | Exited with code 0. Zero TypeScript errors. | **PASSED** |
| **ESLint Validation** | `npm run lint` | Exited with code 0. Zero errors across all source files. | **PASSED** |
| **Production Build** | `npm run build` | Turbopack compilation succeeded in 35.9s. TypeScript completed in 16.0s. All 28 routes generated statically (28/28). | **PASSED** |
| **Server Startup** | `node server.js` (Port 3007) | Ready in 117ms. Bound to port 3007 without warnings. | **PASSED** |
| **Robots Header & Content** | `curl -i http://localhost:3007/robots.txt` | HTTP 200 OK. Content-Type: `text/plain`. Output matches specification: `Allow: /`, `Disallow: /staging-login`, `Disallow: /api/`, `Disallow: /showcase`, `Sitemap: https://www.xanamedtec.com/sitemap.xml`. | **PASSED** |
| **Sitemap XML Output** | `curl -i http://localhost:3007/sitemap.xml` | HTTP 200 OK. Content-Type: `application/xml`. Correct XML structure containing 19 canonical URLs with zero artificial dates. | **PASSED** |
| **Canonical Verification** | Inspected HTML output of `/about-us`, `/clinical-services`, `/tests-list-page` | Each page renders its own distinct canonical URL (`https://www.xanamedtec.com/about-us`, `/clinical-services`, `/tests-list-page`). | **PASSED** |
| **WordPress 308 Redirect** | `curl -i http://localhost:3007/product/kidney-function-test` | HTTP 308 Permanent Redirect to `/biochemistry`. | **PASSED** |
| **Custom 404 Handling** | `curl -i http://localhost:3007/some-nonexistent-page` | HTTP 404 Not Found. HTML contains custom branded "Page Not Located" layout and navigation buttons. | **PASSED** |
| **Contact API Valid** | `POST http://localhost:3007/api/contact` | HTTP 200 OK: `{"success": true, "message": "Thank you for your enquiry..."}`. Server logs request details. | **PASSED** |
| **Contact API Invalid** | `POST http://localhost:3007/api/contact` (missing email) | HTTP 400 Bad Request: `{"error": "A valid email address is required."}`. | **PASSED** |

---

## 5. WordPress Legacy Redirect Audit & Client Decisions

The application contains 52 legacy redirects in [next.config.ts](file:///c:/Users/Lenovo/OneDrive/Documents/medtec/app/next.config.ts). Every redirect destination route has been verified to exist.

### 5.1 Confirmed Clean Redirects
* **Direct 1:1 Page Redirects:**
  * `/about-xanamedtec` → `/about-us`
  * `/medical-devices` → `/international-distribution`
  * `/health-hub` → `/clinical-services`
  * `/author/:path*` → `/about-us`
  * `/all-man-all-woman` → `/well-man-well-woman`
  * `/services-archives/*` → matched test detail page (`/biochemistry`, `/hormone-profile`, etc.)
* **Product Catalog Redirects (28 products):**
  * Specific tests (e.g. `/product/cholesterol-test` → `/lipids-hba1c`, `/product/iron-status` → `/biochemistry`) redirect directly to the specific test page.
  * Decommissioned OTC products (e.g. `/product/clarity`, `/product/zone`) redirect to `/tests-list-page`.

### 5.2 Legacy Mappings Requiring Client Approval
The previous WordPress site ran **BookingPress** and **WooCommerce**. In the new Next.js architecture, there is no self-service checkout or user accounts database. The following routes currently redirect to the homepage (`/`) or `portalUrl`:

1. **Booking & Appointment Endpoints (Currently → `/`):**
   * `/xana-medtec-booking`
   * `/guest-checkout`
   * `/bookingpress-complete-payment`
   * `/thank-you`
   * `/appointment-reschedule`
   * `/cancel-appointment`
   * `/appointment-cancellation-confirmation`
   * `/cancel-payment`
   * *Recommendation:* Rather than redirecting users to the generic homepage, these should redirect to `/clinical-services` where appointment information and clinical contact details are presented.
2. **Account & Auth Endpoints (Currently → `process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || '/'`):**
   * `/login`, `/register`, `/password-reset`, `/account`, `/user`, `/logout`
   * *Status:* If the client operates an external patient portal (e.g. Cerner, EMIS, or private SaaS), set `NEXT_PUBLIC_PATIENT_PORTAL_URL=https://portal.xanamedtec.com` in cPanel environment variables to route users there. If blank, it safely redirects to `/`.

---

## 6. Runtime Architecture: Static Export vs. Node.js Server

### 6.1 Can the Website Be Exported Statically?
**Yes, but with functional trade-offs.**

If configured with `output: 'export'` in `nextConfig`:
* **What works:** All 20 public pages (HTML, CSS, JS), static images, client components, and modals.
* **What breaks or requires external replacement:**
  1. **Next.js Redirects:** The 52 WordPress legacy redirects in `next.config.ts` are disabled by Next.js in static export. They must be manually duplicated into an Apache `.htaccess` file.
  2. **Image Optimization:** `next/image` on-demand optimization is disabled; requires `images: { unoptimized: true }` in `next.config.ts`.
  3. **Middleware:** `src/middleware.ts` is ignored in static exports; password protection for staging cannot function.
  4. **API Routes:** `/api/contact` and `/api/staging-auth` cannot execute. Contact forms must submit to an external third-party form service (e.g. Formspree or custom PHP mailer).

### 6.2 Recommendation: Preserve Node.js Deployment
A standard Node.js server deployment is strongly recommended because:
* Next.js automatically executes all 52 redirects with 308 permanent status codes without managing complex server rewrite rules.
* Next.js dynamically compresses and converts images to WebP/AVIF format for mobile browsers.
* The `/api/contact` endpoint operates natively without paying for third-party form SaaS.
* Staging password protection can be toggled via `STAGING=true` or `STAGING=false` in environment variables.

---

## 7. cPanel Deployment Guide (Step-by-Step)

Most modern cPanel hosting providers (including Hostinger, SiteGround, A2 Hosting, cPanel CloudLinux, Namecheap) offer the **"Setup Node.js App"** feature powered by Phusion Passenger.

### Minimum Hosting Capabilities Required
* **Node.js Runtime:** Node.js `20.x` or `22.x` LTS
* **Memory:** Minimum 512 MB RAM (1 GB recommended for building)
* **Access:** cPanel File Manager or SSH / Git Version Control

### Step 1: Create the Node.js Application in cPanel
1. Log into your cPanel dashboard.
2. Under the **Software** section, click **Setup Node.js App**.
3. Click **Create Application**.
4. Configure the application settings:
   * **Node.js version:** Select `20.x` or `22.x` (LTS).
   * **Application mode:** Select `Production`.
   * **Application root:** Enter `xanamedtec` (or your chosen directory name, outside `public_html`).
   * **Application URL:** Select `xanamedtec.com` (or your subdomain).
   * **Application startup file:** Enter `server.js`.
5. Click **Create**.

### Step 2: Upload Application Files
You can upload files via Git (cPanel Git Version Control) or ZIP upload via File Manager:
* **Files to upload:**
  * `package.json` and `package-lock.json`
  * `server.js`
  * `next.config.ts`
  * `tsconfig.json`
  * `eslint.config.mjs`
  * `.env.example`
  * `src/` directory (all files)
  * `public/` directory (all assets)
* **DO NOT upload:** `node_modules` (install fresh on server) or local `.next` (build on server or upload prebuilt).

### Step 3: Install Dependencies & Build
1. In the cPanel Node.js App interface, click **Enter to the virtual environment** (copy the command provided, e.g. `source /home/username/nodevenv/xanamedtec/20/bin/activate`).
2. Open the cPanel **Terminal** (or SSH).
3. Paste the virtual environment command and navigate to the application root:
   ```bash
   cd ~/xanamedtec
   npm ci
   npm run build
   ```
*(Note: If your cPanel host has low memory limits that kill `next build`, run `npm run build` locally on your computer and upload the generated `.next/` directory).*

### Step 4: Configure Environment Variables
In the cPanel Node.js App dashboard under **Environment variables**, click **Add Variable**:
* `NODE_ENV` = `production`
* `NEXT_PUBLIC_SITE_URL` = `https://www.xanamedtec.com`
* `PORT` = (cPanel assigns this automatically, or leave default)
* `STAGING` = `false` (to ensure public access without review password)
* `NEXT_PUBLIC_PATIENT_PORTAL_URL` = (Optional: URL to external booking/portal)

### Step 5: Start / Restart the Application
Click **Restart** on the cPanel Node.js App page. The application will serve `xanamedtec.com` through Phusion Passenger.

---

## 8. Apache `.htaccess` Fallback (Optional Static / Reverse Proxy Mode)

If your cPanel provider does NOT support Node.js or you choose to export static HTML, upload the built static files to `public_html` and place the following `.htaccess` file in `public_html`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Security Headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Legacy WordPress 301 Redirects
Redirect 301 /about-xanamedtec /about-us
Redirect 301 /medical-devices /international-distribution
Redirect 301 /health-hub /clinical-services
Redirect 301 /all-man-all-woman /well-man-well-woman
Redirect 301 /services-archives/biochemistry /biochemistry
Redirect 301 /services-archives/hepatitis-b-profile /hepatitis-b-profile
Redirect 301 /services-archives/hormone-profile /hormone-profile
Redirect 301 /services-archives/testosterone-monitoring /testosterone-monitoring
Redirect 301 /services-archives/thyroid-profile /thyroid-profile
Redirect 301 /services-category/popular-health-tests /tests-list-page
Redirect 301 /product/kidney-function-test /biochemistry
Redirect 301 /product/pcos-hormone-test /hormone-profile
Redirect 301 /product/heart-health /lipids-hba1c
Redirect 301 /product/cholesterol-test /lipids-hba1c
Redirect 301 /product/diabetes-diagnosis-and-monitoring /lipids-hba1c
Redirect 301 /product/erectile-dysfunction-test /testosterone-monitoring
Redirect 301 /product/testosterone-plus /testosterone-monitoring
Redirect 301 /product/testosterone-check /testosterone-monitoring
Redirect 301 /product/male-hormones /testosterone-monitoring
Redirect 301 /product/thyroid-health /thyroid-profile
Redirect 301 /product/liver-function-test /biochemistry
Redirect 301 /product/vitamin-profile /biochemistry
Redirect 301 /product/vitamin-b12 /biochemistry
Redirect 301 /product/iron-status /biochemistry
Redirect 301 /product/prostate-profile /well-man-well-woman
Redirect 301 /shop /tests-list-page
Redirect 301 /cart /tests-list-page
Redirect 301 /checkout /tests-list-page

# Custom 404
ErrorDocument 404 /_not-found.html
```

---

## 9. Remaining Production Launch Risks & Manual Checklist

| Risk / Task | Impact | Mitigation / Recommendation |
|---|---|---|
| **DNS Cutover (A / CNAME Records)** | Traffic disruption | When pointing `xanamedtec.com` away from IONOS/Vercel to the new cPanel IP, lower the DNS TTL to 300 seconds (5 mins) 24 hours in advance to allow instantaneous rollback if needed. |
| **SSL / HTTPS Certificate** | Browser security warning | Run cPanel **AutoSSL** (Let's Encrypt / Sectigo) immediately upon DNS propagation so HTTPS is valid before traffic hits the site. |
| **Email Service Separation** | MX record disruption | Ensure MX and TXT/SPF/DKIM records for `info@xanamedtec.com` remain on their existing mail provider (e.g. Google Workspace, Microsoft 365, or IONOS Mail). Do NOT switch MX records to cPanel unless migrating mailboxes. |
| **External Email Relay for Contact Form** | Enquiries logged but not emailed | Currently `/api/contact` logs enquiries to standard server output. If you want enquiries automatically sent to `info@xanamedtec.com`, connect an SMTP relay (e.g. cPanel local sendmail or SendGrid/Postmark) by configuring environment variables in `/api/contact/route.ts`. |
| **Google Search Console Resubmission** | Indexing delay | Upon DNS propagation, log into Google Search Console, submit `https://www.xanamedtec.com/sitemap.xml`, and request re-indexing of the root URL. |
