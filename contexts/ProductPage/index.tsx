import { ReactNode, createContext } from "react";

export const ProductPageContext = createContext({})

export const ProductPageProvider = ({ children }: { children: ReactNode }) => {

  <ProductPageContext.Provider value={{}}>
    {children}
  </ProductPageContext.Provider>
}
