'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FullProductInterface, PaginationInterface } from '@/types';
import SecondaryProductCard from '../product/SecondaryProductCard';
import PaginationCalc from './PaginationCalc';

const ProductsByCategories = () => {
  const [products, setProducts] = useState<null | FullProductInterface[]>(null);
  const [pagination, setPagination] = useState<null | PaginationInterface>(
    null,
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://job.risestudio.com.br/stocks',
        );
        setProducts(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  if (!products && !pagination) {
    return <div>Loading</div>;
  }

  return (
    <section className="w-full lg:w-[78%] lg:pl-[60px] ">
      <h1 className="text-3xl text-primary">Produtos</h1>

      <div className="w-full flex flex-wrap justify-between items-center">
        {pagination && <PaginationCalc pagination={pagination} />}

        <select className="px-1 py-2.5 border border-gray-200 font-light focus:outline-none">
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
