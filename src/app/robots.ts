import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xanamedtec.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/staging-login',
          '/api/',
          '/showcase',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
