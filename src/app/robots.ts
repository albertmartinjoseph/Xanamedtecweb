import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xanamedtec.com';
  const isPreviewOrStaging =
    process.env.VERCEL_ENV === 'preview' || process.env.STAGING === 'true';

  if (isPreviewOrStaging) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/staging-login', '/api/', '/showcase'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
