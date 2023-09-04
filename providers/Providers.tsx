'use client';

import { CartProvider } from '@/contexts/CartProvider';
import { HomeProvider } from '@/contexts/HomeProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <CartProvider>{children}</CartProvider>
      </HomeProvider>
    </>
  );
};
