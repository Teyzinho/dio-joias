import { FullProductInterface } from '@/types';
import Image from 'next/image';
import LinkUnderline from '@/components/ui/LinkUnderline';
import { removeProductToCart } from '@/contexts/CartProvider/actions';

type Props = {
  product: FullProductInterface;
  index: number;
  cartDispatch: React.Dispatch<any>
};

const CartIconProduct = ({ product, index , cartDispatch }: Props) => {
  const handleDelete = () => {
    removeProductToCart(product.id , cartDispatch);
  };

  return (
    <div
      className={`flex w-full h-12  relative items-center justify-between border-black overflow-hidden ${
        index > 0 && 'border-t pt-2'
      }`}
    >
      <Image
        src={product.thumb.file_url}
        width={100}
        height={100}
        alt="productImage"
        className="object-cover h-[53px] w-[53px]"
      />

      <div className="flex flex-col w-36">
        <LinkUnderline href={`/produto/${product.slug}`} className="text-xs">{product.title}</LinkUnderline>
        <span className="pt-2">R$ { product.value }</span>
      </div>

      <button
        onClick={handleDelete}
        className="w-6 h-6 flex items-center justify-center rounded-full border transition duration-500 border-gray-300 text-gray-300 hover:border-primary"
      >
        X
      </button>
    </div>
  );
};

export default CartIconProduct;
