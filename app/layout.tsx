import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { CounterStoreProvider } from '@/store/providers/sample-store-provider';
import { MockProvider } from '@/app/MswProvider';

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
          <MockProvider>{children}</MockProvider>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
