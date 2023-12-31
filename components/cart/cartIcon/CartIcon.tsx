'use client';

import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { FullProductInterface } from '@/types';
import CartIconProduct from './CartIconProduct';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { CartContext } from '@/contexts/CartProvider';
import { getProductsToCard } from '@/contexts/CartProvider/actions';

const CartIcon = () => {
  const context = useContext(CartContext);
  const { cartState, cartDispatch } = context;

  const products: FullProductInterface[] = cartState.products;

  useEffect(() => {
    getProductsToCard(cartDispatch);
  }, [cartDispatch]);

  // Função para calcular o subtotal
  const calculateSubtotal = () => {
    if (!products || products.length === 0) {
      return 0;
    }
    const subtotal = products.reduce((acc, product) => acc + product.value, 0);
    return subtotal.toFixed(2);
  };

  return (
    <div className="group relative">
      {/* Numero de */}
      <Link href="/carrinho">
        <div className="relative border-white rounded-sm h-9 w-9 lg:w-7 lg:h-7 flex items-center justify-center border-2 group-hover:bg-white transition duration-500">
          <span className="w-2.5 h-2.5 absolute rounded-tl-full rounded-tr-full border-l-2 border-r-2 border-t-2 border-neutral-50 -top-2" />
          <span className="text-xs font-semibold group-hover:text-black transition duration-500">
            {products?.length || 0}
          </span>
        </div>
      </Link>
      {/* Hover */}

      <div className="hidden group-hover:flex absolute -right-1 bg-white text-black text-xs w-72 border-gray-300 border-2 z-50 teste mt-2">
        <span className='seta'/>
        {products && products.length > 0 ? (
          <div className="w-full p-4 flex flex-col gap-y-2">
            {products.map((product, index) => (
              <CartIconProduct
                key={`productCard${product.id}${index}`}
                product={product}
                index={index}
                cartDispatch={cartDispatch}
              />
            ))}

            <p className="p-4 text-center font-bold border-y border-gray-200">
              SubTotal : R${calculateSubtotal()}
            </p>

            <div className="p-4 w-full">
              <Link href="/carrinho">
                <SecondaryButton className="w-full py-2.5">
                  Ver Carrinho
                </SecondaryButton>
              </Link>
              <SecondaryButton className="w-full mt-2 py-2.5">
                Finalizar Compra
              </SecondaryButton>
            </div>
          </div>
        ) : (
          <p className="p-4">Nenhum Produto no Carrinho.</p>
        )}
      </div>

    </div>
  );
};

export default CartIcon;
