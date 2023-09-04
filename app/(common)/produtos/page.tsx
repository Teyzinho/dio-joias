

import Categories from '@/components/category-product/Categories';
import CategoryContainer from '@/components/category-product/CategoryContainer';
import ProductsByCategories from '@/components/category-product/ProductsByCategories';

const Products = () => {

  return (
    <>
      <CategoryContainer>
        <Categories />
        <ProductsByCategories />
      </CategoryContainer>
    </>
  );
};

export default Products;
