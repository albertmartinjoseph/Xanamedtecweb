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

