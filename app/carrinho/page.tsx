'use client';

import { useEffect, useContext } from 'react';

import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/ui/Container';
import { FullProductInterface } from '@/types';
import CartProducts from '@/components/cart/CartProducts';
import SecondaryButton from '@/components/ui/SecondaryButton';
import Input from '@/components/ui/Input';
import TotalPrice from '@/components/cart/TotalPrice';
import { CartContext } from '@/contexts/CartProvider';
import { getProductsToCard } from '@/contexts/CartProvider/actions';

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

        {products && <CartProducts products={products} />}

        {/* Cupom e atualizarBtn */}
        <div className="flex w-full justify-between mt-2">
          <div className="flex gap-2">
            <Input type="text" placeHolder="Código do cupom" />
            <SecondaryButton>Aplicar cupom</SecondaryButton>
          </div>
          <SecondaryButton disabled={true}>Atualizar Carrinho</SecondaryButton>
        </div>

        {products && <TotalPrice products={products} />}
      </Container>
    </main>
  );
};

export default Carrinho;
