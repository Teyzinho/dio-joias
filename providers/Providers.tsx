'use client';

import { CartProvider } from '@/contexts/CartProvider';
import { CategoryProvider } from '@/contexts/CategoryProvider';
import { HomeProvider } from '@/contexts/HomeProvider';
import { ProductsProvider } from '@/contexts/ProductsProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <CategoryProvider>
          <ProductsProvider>
            <CartProvider>{children}</CartProvider>
          </ProductsProvider>
        </CategoryProvider>
      </HomeProvider>
    </>
  );
};
