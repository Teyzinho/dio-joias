
import Navbar from '@/components/navbar/Navbar';
import FullProduct from '@/components/product-page/FullProduct';
import RecomendedProduct from '@/components/product-page/RecomendedProduct';

import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'] ,subsets: ['latin'] })

type Props = {
  params: {
    slug: string;
  };
};
const Product = ({ params }: Props) => {
  return (
    <>
      <Navbar />

      <main className={`${roboto.className}`}>
        <FullProduct slug={params.slug} />
        <RecomendedProduct />
      </main>
    </>
  );
};

export default Product;
