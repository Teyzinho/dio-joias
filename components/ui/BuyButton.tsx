'use client';

import { CartContext } from '@/contexts/CartProvider';
import { addProductToCart } from '@/contexts/CartProvider/actions';
import { FullProductInterface } from '@/types';
import { ReactNode, useContext } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  product: FullProductInterface;
};

const BuyButton = ({
  children,
  type = 'button',
  className,
  product,
}: Props) => {

  const cartContext = useContext(CartContext);

  const {cartDispatch} = cartContext;

  console.log("cart Context",cartContext)

  const handleCLick = () => {
    addProductToCart(product , 1, cartDispatch);
  };

  return (
    <button
      onClick={handleCLick}
      type={type}
      className={` w-fit text-sm font-normal  leading-relaxed tracking-wide px-8 py-4 transition-all ${
        className ? className : 'text-white bg-primary'
      }`}
    >
      {children}
    </button>
  );
};

export default BuyButton;
