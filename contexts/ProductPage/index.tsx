import { FullProductInterface } from '@/types';
import axios from 'axios';
import { ReactNode, createContext , useState } from 'react';

interface ProductPageProviderData {
  product?: FullProductInterface;
  isLoading: boolean;
}

interface ProductPageContextType {
  product: ProductPageProviderData;
  setProduct: React.Dispatch<React.SetStateAction<ProductPageProviderData>>;
}

const data: ProductPageProviderData = {
  product: undefined,
  isLoading: true,
};

export const ProductPageContext = createContext<ProductPageContextType>({
  product: data,
  setProduct: () => {},
});

export const fetchProductPage = async (
  setProduct: React.Dispatch<React.SetStateAction<ProductPageProviderData>>,
  slug: string,
) => {
  setProduct((prevData) => ({ ...prevData, isLoading: true }));
  try {
    const response = await axios.get(
      `https://job.risestudio.com.br/stocks/${slug}`,
    );

    setProduct({
      product: response.data.data,
      isLoading: false,
    });
  } catch (error) {
    console.error(error);
    setProduct((prevData) => ({ ...prevData, isLoading: false }));
  }
};

export const ProductPageProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState(data);

  return (
    <ProductPageContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductPageContext.Provider>
  );
};
