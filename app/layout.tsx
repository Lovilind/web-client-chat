import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_component/header';
import Footer from './_component/footer';
import { CounterStoreProvider } from './_store/providers/sample-store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterStoreProvider>
          <Header />
          {children}
          <Footer />
        </CounterStoreProvider>
      </body>
    </html>
  );
}
