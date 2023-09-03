"use client"

import { addProductToCart } from '@/contexts/CartProvider/actions';
import { FullProductInterface } from '@/types';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  product: FullProductInterface;
};

const BuyButton = ({ children, type = 'button', className ,product }: Props) => {

  const handleCLick = () => {
    addProductToCart(product)
  }

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
