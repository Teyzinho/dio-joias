import Navbar from '@/components/navbar/Navbar';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${roboto.className}`}>
      <Navbar />

      {children}
    </div>
  );
}
