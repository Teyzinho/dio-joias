import { FullProductInterface } from '@/types';
import Image from 'next/image';
import LinkUnderline from '../ui/LinkUnderline';

type Props = {
  product: FullProductInterface;
  index: number;
};

const CartIconProduct = ({ product, index }: Props) => {
  console.log('cardProduct', product);

  return (
    <div
      className={`flex w-full h-12  relative items-center justify-between border-black overflow-hidden ${
        index > 0 && 'border-t pt-2'
      }`}
    >
      <Image
        src={product.thumb.file_url}
        width={30}
        height={30}
        alt="productImage"
        className="object-cover"
      />

      <div className="flex flex-col w-36">
        <LinkUnderline className="text-xs">{product.title}</LinkUnderline>
        <span className="pt-2">R$ {product.value}</span>
      </div>

      <button className="w-6 h-6 flex items-center justify-center rounded-full border transition-all border-gray-300 text-gray-300 hover:border-primary">
        X
      </button>
    </div>
  );
};

export default CartIconProduct;
