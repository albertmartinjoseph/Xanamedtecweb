import type { NextConfig } from "next";

const portalUrl = process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || '/';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // 1. Primary & Navigation Legacy Redirects
      { source: '/about-xanamedtec', destination: '/about-us', permanent: true },
      { source: '/medical-devices', destination: '/international-distribution', permanent: true },

      // 2. Service CPT & Inactive Categories
      { source: '/all-man-all-woman', destination: '/well-man-well-woman', permanent: true },
      { source: '/services-archives/all-man-all-woman', destination: '/well-man-well-woman', permanent: true },
      { source: '/services-archives/biochemistry', destination: '/biochemistry', permanent: true },
      { source: '/services-archives/hepatitis-b-profile', destination: '/hepatitis-b-profile', permanent: true },
      { source: '/services-archives/hormone-profile', destination: '/hormone-profile', permanent: true },
      { source: '/services-archives/testosterone-monitoring', destination: '/testosterone-monitoring', permanent: true },
      { source: '/services-archives/thyroid-profile', destination: '/thyroid-profile', permanent: true },
      { source: '/services-category/popular-health-tests', destination: '/tests-list-page', permanent: true },

      // 3. Booking & Payment Endpoints (Decommissioned -> /)
      { source: '/xana-medtec-booking', destination: '/', permanent: true },
      { source: '/guest-checkout', destination: '/', permanent: true },
      { source: '/bookingpress-complete-payment', destination: '/', permanent: true },
      { source: '/thank-you', destination: '/', permanent: true },
      { source: '/appointment-reschedule', destination: '/', permanent: true },
      { source: '/cancel-appointment', destination: '/', permanent: true },
      { source: '/appointment-cancellation-confirmation', destination: '/', permanent: true },
      { source: '/cancel-payment', destination: '/', permanent: true },

      // 4. Account & Auth Endpoints (Decommissioned -> / or external portal)
      { source: '/login', destination: portalUrl, permanent: true },
      { source: '/register', destination: portalUrl, permanent: true },
      { source: '/password-reset', destination: portalUrl, permanent: true },
      { source: '/account', destination: portalUrl, permanent: true },
      { source: '/user', destination: portalUrl, permanent: true },
      { source: '/user/:path*', destination: portalUrl, permanent: true },
      { source: '/logout', destination: portalUrl, permanent: true },

      // 5. Shop Taxonomy (Decommissioned -> /tests-list-page or matched test)
      { source: '/shop', destination: '/tests-list-page', permanent: true },
      { source: '/cart', destination: '/tests-list-page', permanent: true },
      { source: '/checkout', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/all-tests', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/cognitive-healthcare', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/food-intolerance-gut-health-test', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/general-health', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/gut-health', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/home-tests', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/hormones', destination: '/hormone-profile', permanent: true },
      { source: '/product-category/mens-health', destination: '/well-man-well-woman', permanent: true },
      { source: '/product-category/sexual-health', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/supplements', destination: '/tests-list-page', permanent: true },
      { source: '/product-category/womans-health', destination: '/well-man-well-woman', permanent: true },
      { source: '/product-tag/:path*', destination: '/tests-list-page', permanent: true },

      // 6. The 28 Individual Products -> matched test or /tests-list-page
      { source: '/product/pcos-hormone-test', destination: '/hormone-profile', permanent: true },
      { source: '/product/kidney-function-test', destination: '/biochemistry', permanent: true },
      { source: '/product/clarity', destination: '/tests-list-page', permanent: true },
      { source: '/product/zone', destination: '/tests-list-page', permanent: true },
      { source: '/product/serenity', destination: '/tests-list-page', permanent: true },
      { source: '/product/progesterone-day-21-ovulation-test', destination: '/hormone-profile', permanent: true },
      { source: '/product/menopause-hormone-test', destination: '/hormone-profile', permanent: true },
      { source: '/product/male-sexual-health-sti', destination: '/tests-list-page', permanent: true },
      { source: '/product/erectile-dysfunction-test', destination: '/testosterone-monitoring', permanent: true },
      { source: '/product/prostate-profile', destination: '/well-man-well-woman', permanent: true },
      { source: '/product/testosterone-plus', destination: '/testosterone-monitoring', permanent: true },
      { source: '/product/female-fertility-hormones', destination: '/hormone-profile', permanent: true },
      { source: '/product/testosterone-check', destination: '/testosterone-monitoring', permanent: true },
      { source: '/product/food-intolerance-gut-health-test', destination: '/tests-list-page', permanent: true },
      { source: '/product/pregnancy-test-beta-hcg', destination: '/hormone-profile', permanent: true },
      { source: '/product/heart-health', destination: '/lipids-hba1c', permanent: true },
      { source: '/product/covid-antibodies-igg-vaccine-immune-response', destination: '/tests-list-page', permanent: true },
      { source: '/product/male-hormones', destination: '/testosterone-monitoring', permanent: true },
      { source: '/product/allergy-complete-295-allergens-tested', destination: '/tests-list-page', permanent: true },
      { source: '/product/cholesterol-test', destination: '/lipids-hba1c', permanent: true },
      { source: '/product/diabetes-diagnosis-and-monitoring', destination: '/lipids-hba1c', permanent: true },
      { source: '/product/vitamin-profile', destination: '/biochemistry', permanent: true },
      { source: '/product/vitamin-b12', destination: '/biochemistry', permanent: true },
      { source: '/product/iron-status', destination: '/biochemistry', permanent: true },
      { source: '/product/thyroid-health', destination: '/thyroid-profile', permanent: true },
      { source: '/product/liver-function-test', destination: '/biochemistry', permanent: true },
      { source: '/product/general-health-test', destination: '/tests-list-page', permanent: true },
      { source: '/product/female-sexual-health-sti', destination: '/tests-list-page', permanent: true },

      // 7. Blog & Feeds
      { source: '/health-hub', destination: '/clinical-services', permanent: true },
      { source: '/author/:path*', destination: '/about-us', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
