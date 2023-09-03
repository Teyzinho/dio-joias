import { FullProductInterface } from '@/types';
import SecondaryButton from '../ui/SecondaryButton';

type Props = {
  products: FullProductInterface[];
};

const TotalPrice = ({ products }: Props) => {
  const calculateSubtotal = () => {
    if (!products || products.length === 0) {
      return 0;
    }

    const subtotal = products.reduce((acc, product) => acc + product.value, 0);
    return subtotal;
  };

  return (
    <>
      <table className="w-full text-left mt-8">
        <thead>
          <tr className="bg-white h-14 border ">
            <th className="px-4 font-normal">Total Carrinho</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="border h-24 max-h-24 ">
            <th className="font-bold px-6">Subtotal</th>
            <th className="font-bold px-6">R${calculateSubtotal()}</th>
          </tr>
          <tr className="border h-24 max-h-24 ">
            <th className="font-bold px-6">Entrega</th>
            <th className="font-bold px-6">Calcular entraga</th>
          </tr>
          <tr className="border h-24 max-h-24 ">
            <th className="font-bold px-6">Total</th>
            <th className="font-bold px-6">R${calculateSubtotal()}</th>
          </tr>
        </tbody>
      </table>

      <div className="border p-6 mb-8">
        <SecondaryButton className="w-full py-3">
          Continuar para a finalização de compra
        </SecondaryButton>
      </div>
    </>
  );
};

export default TotalPrice;
