'use client';

import { CartContext } from '@/contexts/CartProvider';
import { addProductToCart } from '@/contexts/CartProvider/actions';

import { useContext, useState } from 'react';
import Spinner from './Spinner';
import LinkUnderline from './LinkUnderline';

type Props = {
  text: string;
  type?: 'button' | 'submit';
  productId: string;
};

const BuyButton = ({ text, type = 'button', productId }: Props) => {
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartContext = useContext(CartContext);
  const { cartDispatch } = cartContext;

  const handleCLick = async () => {
    if(status) return
    setIsLoading(true);
    try {
      const response = await addProductToCart(productId, 1, cartDispatch);
      if (response.success) {
        setStatus(true);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleCLick}
        type={type}
        disabled={isLoading}
        className="buy_button"
      >
        {status ? (
          <LinkUnderline className="no-underline" href="/carrinho">
            Ver Carrinho
          </LinkUnderline>
        ) : (
          text
        )}
        {isLoading && <Spinner />}
      </button>
    </>
  );
};

export default BuyButton;
