import { ProductsContext } from '@/contexts/ProductsProvider';
import { FullProductInterface } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const Variants = ({ product }: { product: FullProductInterface }) => {
  const router = useRouter();
  const [variants, setVariants] = useState<FullProductInterface[]>([]);
  const { productsData } = useContext(ProductsContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === product.slug || e.target.value === 'default') {
      return;
    }

    router.replace(`/produto/${e.target.value}`);
  };

  useEffect(() => {
    setVariants([]);
    if (product.variations.length > 0) {
      productsData.products.forEach((item) => {
        const hasVid = item?.variations[0]?.vId;
        if (
          hasVid &&
          item.variations[0]?.vId === product.variations[0]?.vId &&
          item.id !== product.id
        ) {
          setVariants((prevVariants) => [...prevVariants, item]);
        }
      });
    }
  }, [product, productsData]);

  return (
    <div>
      <p className="font-semibold">{product.variations[0].key}</p>

      <select
        onChange={handleChange}
        className="w-full font-normal text-gray-600 pl-2 py-3"
      >
        <option value={`${product.slug}`}>
          {product.variations[0].grid.key}
        </option>

        {variants.map((variant: any) => (
          <option value={`${variant.slug}`} key={`variant${variant.id}`}>
            {variant.variations[0].grid.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Variants;
