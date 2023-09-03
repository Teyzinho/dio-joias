'use client';

import { ReactNode, useReducer } from 'react';
import { CartContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

type Props = {
  children: ReactNode;
};

const CardProvider = ({ children }: Props) => {
  const [cartState, cartDispatch] = useReducer(reducer, data);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
