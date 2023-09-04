
import FullProduct from '@/components/product-page/FullProduct';
import RecomendedProduct from '@/components/product-page/RecomendedProduct';



type Props = {
  params: {
    slug: string;
  };
};
const Product = ({ params }: Props) => {
  return (
    <>
      <main >
        <FullProduct slug={params.slug} />
        <RecomendedProduct />
      </main>
    </>
  );
};

export default Product;
