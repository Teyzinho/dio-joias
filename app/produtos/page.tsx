

import Categories from '@/components/category-product/Categories';
import CategoryContainer from '@/components/category-product/CategoryContainer';
import ProductsByCategories from '@/components/category-product/ProductsByCategories';
import Navbar from '@/components/navbar/Navbar';

const Products = () => {


  return (
    <>
      <Navbar />
      <CategoryContainer>
        <Categories />
        <ProductsByCategories />
      </CategoryContainer>
    </>
  );
};

export default Products;
