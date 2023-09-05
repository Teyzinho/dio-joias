import { FullProductInterface } from '@/types';

import CartTr from './CardTr';

type Props = {
  products: FullProductInterface[];
};

const CartTable = ({ products }: Props) => {
  return (
    <table className="w-full  text-left">
      <thead className='hidden lg:table-header-group'>
        <tr className="bg-white h-14">
          {/* Remove Product*/}
          <th className='lg:w-28'></th>
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
      <tbody >
        {products.map((product) => (
          <CartTr key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
