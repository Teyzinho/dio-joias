import { FullProductInterface } from '@/types';

import CartTable from './CartTable';
import TotalPrice from './TotalPrice';
import CartCupom from './CartCupom';

type Props = {
  products: FullProductInterface[];
};

const Cart = ({ products }: Props) => {
  return (
    <div>
      <CartTable products={products} />

      <CartCupom />

      <TotalPrice products={products} />
    </div>
  );
};

export default Cart;
