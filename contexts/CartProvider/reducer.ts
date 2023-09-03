import { FullProductInterface } from '@/types';
import { DataInterface } from './data';

import * as types from './types';

export const reducer = (state: DataInterface, action: { type: string; payload: FullProductInterface }) => {

  console.log("action", action)
  console.log("action.type", action.type)

  switch (action.type) {
    case types.CART_LOADED: {
      console.log('CART_LOADED');
      return { ...state, products: action.payload, loading: false };
    }
    case types.CART_LOADING: {
      console.log('CART_LOADING');
      return { ...state, loading: true };
    }
    case types.CART_ADD: {
      console.log('CART_ADD');
      return { ...state, products: action.payload, loading: false };
    }
    case types.CART_REMOVE: {
      console.log('CART_REMOVE');
      return { ...state, products: action.payload, loading: false };
    }
  }
};
