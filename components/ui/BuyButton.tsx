'use client';

import { CartContext } from '@/contexts/CartProvider';
import { addProductToCart } from '@/contexts/CartProvider/actions';

import { useContext, useState } from 'react';

type Props = {
  text: string;
  type?: 'button' | 'submit';
  className?: string;
  productId: string;
};

const BuyButton = ({ text, type = 'button', className, productId }: Props) => {
  const [mesage, setMesage] = useState('');

  const cartContext = useContext(CartContext);
  const { cartDispatch, cartState } = cartContext;

  const handleCLick = () => {
    const response = addProductToCart(productId, 1, cartDispatch);
  };

  return (
    <button
      onClick={handleCLick}
      type={type}
      className={` w-fit text-sm font-normal leading-relaxed tracking-wide px-8 py-4 transition-all ${
        className ? className : 'text-white bg-primary'
      }`}
    >
      {text}
      {mesage}
    </button>
  );
};

export default BuyButton;
