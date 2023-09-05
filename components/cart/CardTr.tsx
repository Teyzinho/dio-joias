import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { removeProductToCart } from '@/contexts/CartProvider/actions';

import { FullProductInterface } from '@/types';
import { CartContext } from '@/contexts/CartProvider';

type Props = {
  product: FullProductInterface;
};

const CardTr = ({ product }: Props) => {
  const { cartDispatch } = useContext(CartContext);

  const handleDelete = () => {
    removeProductToCart(product.id, cartDispatch);
  };

  return (
    <tr className="cart_tr">
      {/* Remove Product*/}
      <td className="cart_x ">
        <button
          onClick={handleDelete}
          className="flex items-center justify-center lg:mx-auto w-6 h-6 border rounded-full border-gray-300 text-gray-300 font-light hover:bg-white hover:border-primary hover:text-primary transition duration-500"
        >
          X
        </button>
      </td>

      {/* thumb*/}
      <td className="cart_img ">
        <Link href={`/produto/${product.slug}`}>
            <Image
              src={product.thumb.file_url}
              width={70}
              height={70}
              alt={product.title}
              className="object-cover h-[70px]"
            />
        </Link>
      </td>

      {/* Name  */}
      <td>
        <p>Name:</p>
        <Link
          className="text-primary  text-base font-bold hover:text-lightPrimary"
          href={`/produto/${product.slug}`}
        >
          {product.title}
        </Link>
      </td>

      {/* Price  */}
      <td>
        <p>Preço:</p>R${product.value}
      </td>

      {/* Quantity  */}
      <td>
        <p>Quantidade:</p>
        <input
          className="w-12 h-9 font-normal text-gray-400 text-center"
          min={1}
          type="number"
          name="number"
          value={1}
        />
      </td>

      {/* Subtotal  */}
      <td>
        <p>Subtotal:</p>
        {product.value}
      </td>
    </tr>
  );
};

export default CardTr;
