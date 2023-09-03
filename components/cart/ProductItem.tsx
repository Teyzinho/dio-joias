import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { removeProductToCart } from '@/contexts/CartProvider/actions';

import { FullProductInterface } from '@/types';
import { CartContext } from '@/contexts/CartProvider';

type Props = {
  product: FullProductInterface;
};

const ProductItem = ({ product }: Props) => {
  const { cartDispatch } = useContext(CartContext);

  const handleDelete = () => {
    removeProductToCart(product.id, cartDispatch);
  };

  return (
    <tr className="border h-24 max-h-24">
      {/* Remove Product*/}
      <td className=" ">
        <button
          onClick={handleDelete}
          className="flex items-center justify-center mx-auto w-6 h-6 border rounded-full border-gray-300 text-gray-300 font-light hover:bg-white hover:border-primary hover:text-primary transition-all"
        >
          X
        </button>
      </td>
      {/* thumb*/}
      <td className="">
        <Link href={`/produto/${product.slug}`}>
          <Image
            src={product.thumb.file_url}
            width={70}
            height={70}
            alt={product.title}
            className="object-cover h-wit "
          />
        </Link>
      </td>
      {/* Name  */}
      <td className="">
        <Link
          className="text-primary transition-all text-base font-bold hover:text-lightPrimary"
          href={`/produto/${product.slug}`}
        >
          {product.title}
        </Link>
      </td>
      {/* Price  */}
      <td className="">R${product.value}</td>
      {/* Quantity  */}
      <td className="">
        <input
          className="w-12 h-9 font-normal text-gray-400 text-center"
          min={1}
          type="number"
          name="number"
          value={1}
        />
      </td>
      {/* Subtotal  */}
      <td className="">{product.value}</td>
    </tr>
  );
};

export default ProductItem;
