'use client';

import { CartProvider } from '@/contexts/CartProvider';
import { CategoryProvider } from '@/contexts/CategoryProvider';
import { HomeProvider } from '@/contexts/HomeProvider';
import { ModalProvider } from '@/contexts/ModalProvider';
import { ProductPageProvider } from '@/contexts/ProductPage';
import { ProductsProvider } from '@/contexts/ProductsProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <CategoryProvider>
          <ProductsProvider>
            <ProductPageProvider>
              <ModalProvider>
                <CartProvider>{children}</CartProvider>
              </ModalProvider>
            </ProductPageProvider>
          </ProductsProvider>
        </CategoryProvider>
      </HomeProvider>
    </>
  );
};
