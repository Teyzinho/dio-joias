import { ReactNode, createContext } from "react";

export const CategoryContext = createContext({})

export const CategoryProvider = ({ children }: { children: ReactNode }) => {

  <CategoryContext.Provider value={{}}>
    {children}
  </CategoryContext.Provider>
}
