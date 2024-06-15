import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Container from '@/components/global/Container';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Comfee Store',
  description:
    'Welcome to Comfee Store, where comfort meets style. Discover our curated selection of furniture designed to create warm, inviting spaces in your home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <Container className='py-16'>{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
