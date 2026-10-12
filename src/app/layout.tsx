import type { Metadata } from 'next';
import { IBM_Plex_Sans, Marcellus } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';

const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex', display: 'swap' });

// A light flared roman for statements
const serif = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Xana Medtec – International Medical Distribution & Clinical Adoption',
  description:
    'Partnering with accredited global healthcare distributors to deliver solutions worldwide. Comprehensive diagnostic support, equipment integration, and workflow assistance.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plex.variable} ${serif.variable}`}>
      <body className="min-h-screen font-sans antialiased flex flex-col justify-between">
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

