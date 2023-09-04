import axios from 'axios';
import { ReactNode, createContext, useState, useEffect } from 'react';

import { CategoriesInterface } from '@/types';
interface CategoriesProviderData {
  categories: CategoriesInterface[];
  isLoading: boolean;
}
interface CategoriesContextType {
  categories: CategoriesProviderData;
  setCategories: React.Dispatch<React.SetStateAction<CategoriesProviderData>>;
}

const data: CategoriesProviderData = {
  categories: [],
  isLoading: true,
};

export const CategoryContext = createContext<CategoriesContextType>({
  categories: data,
  setCategories: () => {},
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState(data);

  const fetchCategories = async () => {
    setCategories((prevData) => ({ ...prevData, isLoading: true }));
    try {
      const response = await axios.get(
        'https://job.risestudio.com.br/categories',
      );
      setCategories({
        categories: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
