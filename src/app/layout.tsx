import type { Metadata } from 'next';
import { Manrope, DM_Serif_Display, Lexend } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const displaySerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display-serif',
  display: 'swap',
});

// Closest match to the lettering of the Xana wordmark; used only for the brand lockup
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['600', '800'],
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
    <html lang="en" className={`${manrope.variable} ${displaySerif.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-white text-[#1F2A3A] font-sans antialiased flex flex-col justify-between">
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

