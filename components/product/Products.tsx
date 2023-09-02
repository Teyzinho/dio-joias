
import { ProductCardInterface, Recomended } from '@/types';
import ProductCard from './ProductCard';

type Props = {
  products?: ProductCardInterface[]
}

const Products = ({products}: Props) => {

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      {products && products.map((post) => (
        <ProductCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Products;
