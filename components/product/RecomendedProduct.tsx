'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../ui/Container';
import { FullProductInterface } from '@/types';
import SecondaryProductCard from './SecondaryProductCard';

type Props = {
  slug: string;
};

const RecomendedProduct = ({ slug }: Props) => {
  const [products, setProducts] = useState<null | FullProductInterface[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://job.risestudio.com.br/stocks/${slug}`,
        );
        setProducts(response.data.data.recomended);

        console.log(response.data.data.recomended);
      } catch (error) {}
    };

    fetchPosts();
  }, [slug]);

  return (
    <Container className="pt-8 pb-20">
      <h2 className="text-neutral-700 text-xl">Produtos relacionados</h2>

      {/* Produtos */}
      <div className="grid  sm:grid-cols-3 gap-5 pt-2">
        {products?.length === 0 && <p className='text-gray-500'>Não há produtos Relacionados</p>}
        {products?.map((product) => (
          <SecondaryProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default RecomendedProduct;
