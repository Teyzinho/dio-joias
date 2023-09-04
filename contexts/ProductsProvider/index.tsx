import { FullProductInterface, PaginationInterface } from '@/types';
import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface ProductsProviderData {
  pagination?: PaginationInterface;
  products: FullProductInterface[];
  isLoading: boolean;
}
interface ProductsContextType {
  productsData: ProductsProviderData;
  setProductsData: React.Dispatch<React.SetStateAction<ProductsProviderData>>;
}

const data: ProductsProviderData = {
  pagination: undefined,
  products: [],
  isLoading: true,
};

export const ProductsContext = createContext<ProductsContextType>({
  productsData: data,
  setProductsData: () => {},
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [productsData, setProductsData] = useState(data);

  const fetchProducts = async () => {
    setProductsData((prevData) => ({ ...prevData, isLoading: true }));
    try {
      const response = await axios.get('https://job.risestudio.com.br/stocks');
      setProductsData({
        pagination: response.data.pagination,
        products: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductsContext.Provider>
  );
};
