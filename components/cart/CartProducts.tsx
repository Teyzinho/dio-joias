import { FullProductInterface } from '@/types';

import ProductItem from './ProductItem';

type Props = {
  products: FullProductInterface[];
};

const CartProducts = ({ products }: Props) => {
  return (
    <table className="w-full border-collapse  text-left lg:table">
      <thead>
        <tr className="bg-white h-14">
          {/* Remove Product*/}
          <th></th>
          {/* Thumb*/}
          <th></th>
          {/* Name  */}
          <th>Produto</th>
          {/* Price  */}
          <th>Preço</th>
          {/* Quantity  */}
          <th>Quantidade</th>
          {/* Subtotal  */}
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default CartProducts;
