import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Container from '@/components/global/Container';
import Navbar from '@/components/navbar/Navbar';

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
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Container className='py-16'>{children}</Container>
      </body>
    </html>
  );
}
