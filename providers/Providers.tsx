'use client';

import { CartProvider } from '@/contexts/CartProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  );
};
