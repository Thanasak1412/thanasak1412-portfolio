import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Thanasak Srisaeng',
  description:
    "Welcome to the portfolio fo a skilled full stack web developer. Explore my expertise in frontend, backend architecture, and creating impactful digital experiences. Let's collaborate and build the web of tomorrow together!",
  keywords:
    'full stack web developer, frontend architecture, backend architecture, web applications, digital experiences',
  authors: {
    url: 'https://github.com/Thanasak1412',
    name: 'Thanasak Srisaeng',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
