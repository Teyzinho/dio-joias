import { data } from './data';

import * as types from './types';

export const reducer = (
  state: typeof data,
  action: {type : string , payload:any},
) => {
  switch (action.type) {
    case types.CART_LOADED: {
      return { ...state, products: action.payload, loading: false };
    }
    case types.CART_LOADING: {
      return { ...state, loading: true };
    }
    case types.CART_ADD: {
      return { ...state, products: action.payload, loading: false };
    }
    default:
      return state;
  }
};
