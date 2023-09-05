import { ReactNode, createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';
import { DataInterface } from './data';

type Props = {
  children: ReactNode;
};

type ContextType = {
  cartState: DataInterface;
  cartDispatch: React.Dispatch<any>;
};

export const CartContext = createContext<ContextType>({
  cartState: data,
  cartDispatch: () => {},
});

export const CartProvider = ({ children }: Props) => {
  const [cartState, cartDispatch] = useReducer(reducer, data);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
