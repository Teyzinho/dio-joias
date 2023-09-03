
import { FullProductInterface, Recomended } from '@/types';
import ProductCard from './ProductCard';

type Props = {
  products?: FullProductInterface[]
}

const Products = ({products}: Props) => {

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
