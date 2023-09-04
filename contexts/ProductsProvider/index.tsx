import { ReactNode, createContext } from "react";

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }: { children: ReactNode }) => {

  <ProductsContext.Provider value={{}}>
    {children}
  </ProductsContext.Provider>
}
