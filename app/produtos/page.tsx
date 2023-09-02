'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Categories from '@/components/category-product/Categories';
import CategoryContainer from '@/components/category-product/CategoryContainer';
import ProductsByCategories from '@/components/category-product/ProductsByCategories';
import Navbar from '@/components/navbar/Navbar';
import { ProductCardInterface } from '@/types';

const Products = () => {
  const [products, setProducts] = useState<null | ProductCardInterface[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://job.risestudio.com.br/pages/home?featured=true',
        );
        setProducts(response.data.data.featured);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar /> https://job.risestudio.com.br/stocks
      <CategoryContainer>
        <Categories />
        <ProductsByCategories />
      </CategoryContainer>
    </>
  );
};

export default Products;
