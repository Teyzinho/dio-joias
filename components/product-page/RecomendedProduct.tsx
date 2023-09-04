'use client';

import { useContext } from 'react';

import Container from '../ui/Container';
import { ProductPageContext } from '@/contexts/ProductPage';
import SecondaryProductCard from '../product/SecondaryProductCard';
import { Recomended } from '@/types';

const RecomendedProduct = () => {
  const { product: productData } = useContext(ProductPageContext);
  const { product, isLoading } = productData;
  const products: Recomended[] = product?.recomended ?? [];

  if (isLoading) {
    return '';
  }

  return (
    <Container className="pt-8 pb-20">
      <h2 className="text-neutral-700 text-xl">Produtos relacionados</h2>

      {/* Produtos */}
      <div className="grid  sm:grid-cols-3 gap-5 pt-2">
        {products?.length === 0 && (
          <p className="text-gray-500">Não há produtos Relacionados</p>
        )}
        {products?.map((product) => (
          <SecondaryProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default RecomendedProduct;
