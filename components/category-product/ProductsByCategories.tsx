'use client';

import { useContext } from 'react';
import SecondaryProductCard from '../product/SecondaryProductCard';
import PaginationCalc from './PaginationCalc';
import { ProductsContext } from '@/contexts/ProductsProvider';

const ProductsByCategories = () => {
  const { productsData } = useContext(ProductsContext);
  const { pagination, products, isLoading } = productsData;

  if (isLoading && productsData) {
    return;
  }

  return (
    <section className="w-full lg:w-[78%] lg:pl-[60px] ">
      <h1 className="text-3xl text-primary">Produtos</h1>
      <div className="w-full pt-10 sm:pt-0 gap-y-4 flex flex-wrap justify-between items-center">
        {pagination && <PaginationCalc pagination={pagination} />}

        <select className="px-1 lg:text-base text-xs py-2.5 border border-gray-200 font-light focus:outline-none">
          <option>Ordernar Por Popularidade</option>
          <option>Ordernar Por Mais recente</option>
          <option>Ordernar Por preço: Maior para o Menor</option>
          <option>Ordernar Por preço: Menor para o Maior</option>
        </select>

      </div>

      {/* Produtos */}
      <div className="grid  sm:grid-cols-3 gap-5 pt-10">
        {products?.map((product) => (
          <SecondaryProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsByCategories;
