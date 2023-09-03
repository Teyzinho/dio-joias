import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';

import Footer from '@/components/footer/Footer';
import { Providers } from '@/providers';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dio joias em Prata',
  description: 'Vendas e Fabricações de joias em prata',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={josefin.className}>

        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
