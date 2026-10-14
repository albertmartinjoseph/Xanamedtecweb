import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xanamedtec.com';
  const currentDate = new Date().toISOString();

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    // Core Navigation & Discovery
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/clinical-services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/tests-list-page', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },

    // Health Test Detail Pages
    { path: '/hepatitis-b-profile', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/biochemistry', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/hormone-profile', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/testosterone-monitoring', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/thyroid-profile', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/lipids-hba1c', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/well-man-well-woman', priority: 0.85, changeFrequency: 'monthly' },

    // Diagnostic Equipment & B2B Solutions
    { path: '/corporate-health-packages', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/international-distribution', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/anisys-go', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/vein-finder', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blood-test-recommendation', priority: 0.7, changeFrequency: 'monthly' },

    // Support & Legal
    { path: '/help-faqs', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-use', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
