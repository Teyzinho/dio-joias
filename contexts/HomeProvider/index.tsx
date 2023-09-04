import { BannerInterface, FullProductInterface } from '@/types';
import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
interface HomeProviderData {
  banner?: BannerInterface;
  products: FullProductInterface[];
  isLoading: boolean;
}

interface HomeContextType {
  homeData: HomeProviderData;
  setHomeData: React.Dispatch<React.SetStateAction<HomeProviderData>>;
}

const data: HomeProviderData = {
  banner: undefined,
  products: [],
  isLoading: true,
};

export const HomeContext = createContext<HomeContextType>({
  homeData: data,
  setHomeData: () => {},
});


export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [homeData, setHomeData] = useState(data);

  const fetchHomeData = async () => {
    setHomeData((prevData) => ({ ...prevData, isLoading: true }));
    try {
      const response = await axios.get(
        'https://job.risestudio.com.br/pages/home?featured=true',
      );

      setHomeData({
        banner: response.data.data.page.banner,
        products: response.data.data.featured,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      setHomeData((prevData) => ({ ...prevData, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchHomeData(); // Chama fetchHomeData quando o componente for montado
  }, []);

  return (
    <HomeContext.Provider value={{ homeData, setHomeData }}>
      {children}
    </HomeContext.Provider>
  );
};
