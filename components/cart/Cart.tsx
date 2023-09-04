import { FullProductInterface } from '@/types';

import Input from '../ui/Input';
import SecondaryButton from '../ui/SecondaryButton';
import CartTable from './CartTable';
import TotalPrice from './TotalPrice';

type Props = {
  products: FullProductInterface[];
};

const Cart = ({ products }: Props) => {
  return (
    <div>
      <CartTable products={products} />

      {/* Cupom e atualizarBtn */}
      <div className="flex flex-col gap-y-4 lg:flex-row w-full justify-between pt-2 border px-4">
        <div className="flex gap-2">
          <Input className="w-full lg:w-fit" type="text" placeHolder="Código do cupom" />
          <SecondaryButton className="w-full lg:w-fit">Aplicar cupom</SecondaryButton>
        </div>
        <SecondaryButton className="w-full lg:w-fit" disabled={true}>Atualizar Carrinho</SecondaryButton>
      </div>

      <TotalPrice products={products} />

    </div>
  );
};

export default Cart;
