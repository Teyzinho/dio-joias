'use client';

import { useEffect, useContext } from 'react';

import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/ui/Container';
import { FullProductInterface } from '@/types';
import { CartContext } from '@/contexts/CartProvider';
import { getProductsToCard } from '@/contexts/CartProvider/actions';
import Cart from '@/components/cart/Cart';
import Link from 'next/link';
import SecondaryButton from '@/components/ui/SecondaryButton';

const Carrinho = () => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const products: FullProductInterface[] = cartState.products;

  useEffect(() => {
    getProductsToCard(cartDispatch);
  }, [cartDispatch]);

  return (
    <main>
      <Navbar />

      <Container className="pt-16 text-neutral-700">
        <h1 className="text-3xl">Carrinho</h1>

        {products.length > 0 ? (
          <Cart products={products} />
        ) : (
          <>
            <div className="w-full mt-4 border-t-4 border-primary bg-white p-4">
              <p>Seu carrinho está vazio.</p>
            </div>

            <Link href="/" >
              <SecondaryButton className='mt-6'>Retornar para a loja</SecondaryButton>
            </Link>
          </>
        )}
      </Container>
    </main>
  );
};

export default Carrinho;
