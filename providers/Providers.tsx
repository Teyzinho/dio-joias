'use client';

import { CartProvider } from '@/contexts/CartProvider';
import { CategoryProvider } from '@/contexts/CategoryProvider';
import { HomeProvider } from '@/contexts/HomeProvider';
import { ProductPageProvider } from '@/contexts/ProductPage';
import { ProductsProvider } from '@/contexts/ProductsProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <CategoryProvider>
          <ProductsProvider>
            <ProductPageProvider>
              <CartProvider>{children}</CartProvider>
            </ProductPageProvider>
          </ProductsProvider>
        </CategoryProvider>
      </HomeProvider>
    </>
  );
};
