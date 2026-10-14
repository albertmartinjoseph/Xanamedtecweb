import type { Metadata } from 'next';
import { Lato, Lexend } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lexend',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xanamedtec.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Xana Medtec – International Medical Distribution & Clinical Adoption',
    template: '%s | Xana Medtec',
  },
  description:
    'Partnering with accredited global healthcare distributors to deliver solutions worldwide. Comprehensive diagnostic support, equipment integration, and workflow assistance.',
  keywords: [
    'medical distribution',
    'clinical diagnostics',
    'healthcare equipment',
    'blood testing',
    'Xana Medtec',
    'medical technology',
  ],
  authors: [{ name: 'Xana Medtec Ltd' }],
  creator: 'Xana Medtec Ltd',
  publisher: 'Xana Medtec Ltd',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Xana Medtec – International Medical Distribution & Clinical Adoption',
    description:
      'Partnering with accredited global healthcare distributors to deliver solutions worldwide. Comprehensive diagnostic support, equipment integration, and workflow assistance.',
    url: siteUrl,
    siteName: 'Xana Medtec',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xana Medtec – International Medical Distribution & Clinical Adoption',
    description:
      'Partnering with accredited global healthcare distributors to deliver solutions worldwide.',
    creator: '@XanaMedtec',
    site: '@XanaMedtec',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-white text-[#323232] font-sans antialiased flex flex-col justify-between">
        <ModalProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <CookieBanner />
        </ModalProvider>
      </body>
    </html>
  );
}

