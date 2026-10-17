# Xana Medtec — TechBrein cPanel Static Deployment Guide

**Target Environment:** TechBrein Linux Shared Hosting (cPanel / Apache)  
**Website:** Xana Medtec Ltd (`xanamedtec.com` / `staging.xanamedtec.com`)  
**Deployment Method:** Static File Manager Upload (Zero Node.js / Zero SSH Required)  
**Generated Archive:** `app/xanamedtec-static.zip` (Ready for Direct Upload)

---

## 1. Architecture Overview

The Xana Medtec web application has been converted into a 100% static export (`output: 'export'`) with complete Apache `.htaccess` runtime orchestration:
* **No Node.js Server:** Phusion Passenger, PM2, and long-running Node processes are eliminated.
* **No SSH Required:** Deployment is performed entirely through cPanel File Manager.
* **All 52 WordPress Redirects Preserved:** Converted into permanent HTTP 301 rules in Apache `.htaccess`.
* **Contact Form Functionality:** Standalone `contact.php` script handles spam protection, validation, and dispatches HTML enquiry notifications to `info@xanamedtec.com` via PHP `mail()`.
* **IONOS Business Email Safety:** Complete instructions to preserve MX and DNS records without downtime.
* **SEO & Canonical URLs:** Fully preserved with pre-rendered XML sitemaps, robots.txt, and unique canonical tags.

---

## 2. Step-by-Step Deployment Instructions (via cPanel File Manager)

### Step 1: Locate or Build the Static Archive
The static deployment bundle is pre-built and packaged at:
```text
app/xanamedtec-static.zip
```
*(If you make changes in the future, simply run `npm run build` in the `app` directory and zip the contents of `out/`)*.

### Step 2: Access cPanel File Manager
1. Log into your **TechBrein cPanel Dashboard**.
2. Under the **Files** section, click **File Manager**.
3. In File Manager settings (top right gear icon), ensure **"Show Hidden Files (dotfiles)"** is checked so you can view `.htaccess`.
4. Navigate to your target document root:
   * For **Production (`xanamedtec.com`)**: navigate to `public_html/`.
   * For **Staging (`staging.xanamedtec.com`)**: navigate to your subdomain folder (e.g. `public_html/staging/` or `staging/`).

### Step 3: Upload and Extract
1. Click **Upload** in the top navigation bar.
2. Select or drag-and-drop `xanamedtec-static.zip`.
3. Once the upload bar turns green (100%), return to File Manager.
4. Select `xanamedtec-static.zip`, right-click and choose **Extract** (extract to `/public_html` or current directory).
5. Verify the following files appear directly at the root:
   * `.htaccess` (Apache routing, 301 redirects, security headers)
   * `index.html` (Homepage)
   * `404.html` (Custom branded 404 page)
   * `contact.php` (Serverless enquiry handler)
   * `sitemap.xml` & `robots.txt`
   * `_next/` (Compiled stylesheets, JavaScript chunks, fonts)
   * `images/` & `videos/` (All media assets)
6. Delete `xanamedtec-static.zip` to save disk space.

---

## 3. Preserving IONOS Business Email (CRITICAL)

Your business email accounts (`info@xanamedtec.com`, etc.) run on IONOS and **must remain operational and uninterrupted**.

### What to Verify in TechBrein cPanel:
1. **cPanel Zone Editor (DNS Records):**
   * Ensure your **MX Records** are NOT pointed to TechBrein or localhost.
   * Verify they point to your IONOS mail servers (e.g. `mx00.ionos.co.uk` / `mx01.ionos.co.uk` or `mx00.ionos.com` / `mx01.ionos.com`).
   * Ensure TXT records for **SPF** include IONOS (`include:_spf-eu.ionos.com` or similar) so outbound emails do not get marked as spam.
2. **cPanel Email Routing:**
   * In cPanel, search for **Email Routing** under the *Email* section.
   * Select `xanamedtec.com`.
   * Change the setting from *Automatically Detect Configuration* to **"Remote Mail Exchanger"**.
   * Click **Change**.
   *(This ensures that any email sent via `contact.php` from your server is delivered out to IONOS rather than attempting local mailbox delivery on cPanel).*

---

## 4. Staging Site Password Protection (`staging.xanamedtec.com`)

On Linux shared hosting without Node.js, staging password protection is achieved natively via cPanel's **Directory Privacy** tool:

1. In cPanel, search for **Directory Privacy** under *Files*.
2. Browse to the folder for `staging.xanamedtec.com`.
3. Check the box: **"Password protect this directory"**.
4. Enter a name for the protected directory (e.g. `Xana Medtec Review`).
5. Under *Create User*, enter:
   * **Username:** `client` (or your choice)
   * **Password:** Enter your desired review password
6. Click **Save**.

Apache will now challenge any visitor with HTTP Basic Authentication before serving any page.

---

## 5. Verification Checklist Post-Deployment

| Test Item | Verification Method | Expected Result |
|---|---|---|
| **Homepage** | Visit `https://xanamedtec.com/` | Loads instant modern static HTML/CSS with logo, navigation, and badges. |
| **Direct Route Refresh** | Visit `https://xanamedtec.com/about-us/` and press Ctrl+F5 | Page loads immediately; no 404 error. |
| **WordPress 301 Redirect** | Visit `https://xanamedtec.com/product/kidney-function-test` | Instantly redirects (HTTP 301) to `/biochemistry/`. |
| **WooCommerce Shop Redirect** | Visit `https://xanamedtec.com/shop` | Instantly redirects (HTTP 301) to `/tests-list-page/`. |
| **BookingPress Redirect** | Visit `https://xanamedtec.com/bookingpress-complete-payment` | Instantly redirects (HTTP 301) to `/`. |
| **Contact Form Submission** | Submit test enquiry on `https://xanamedtec.com/clinical-services/` | Displays "Enquiry Received" confirmation and dispatches email to `info@xanamedtec.com`. |
| **Custom 404** | Visit `https://xanamedtec.com/random-url-xyz` | Displays branded "Page Not Located" page with "Back to Homepage" and "Clinical Services" buttons. |
| **SSL / HTTPS** | Visit `http://xanamedtec.com` | Automatically redirects to `https://`. |
| **Sitemap XML** | Visit `https://xanamedtec.com/sitemap.xml` | Returns valid XML with all 19 canonical URLs. |
