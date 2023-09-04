'use client';

import { CartProvider } from '@/contexts/CartProvider';
import { HomeProvider } from '@/contexts/HomeProvider';
import { ProductsProvider } from '@/contexts/ProductsProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </HomeProvider>
    </>
  );
};
