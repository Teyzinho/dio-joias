import { FullProductInterface } from '@/types';
import * as types from './types';
import axios from 'axios';

export const addProductToCart = async (
  productId: string,
  quantity = 1,
  cartDispatch: React.Dispatch<any>,
) => {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemInCart = cartItems.find((item: any) => item.id === productId);

  const response = await axios.get(
    `https://job.risestudio.com.br/stocks/${productId}`,
  );
  const product : FullProductInterface = response.data.data


  // Se o item já estiver no carrinho, e a quantidade no carrinho for menor que a do stock
  if (itemInCart) {

    if (itemInCart.quantity >= product.amount) {
      return { success: false, message: 'Quantidade máxima atingida' };
    }

    itemInCart.quantity += quantity;
  }

  cartItems.push({ ...product, quantity });

  cartDispatch({ type: types.CART_ADD, payload: cartItems });
  localStorage.setItem('cart', JSON.stringify(cartItems));

  return {success : true}
};

export const getProductsToCard = (cartDispatch: React.Dispatch<any>) => {
  const cartProducts = JSON.parse(localStorage.getItem('cart') || '[]');

  cartDispatch({ type: types.CART_ADD, payload: cartProducts });
};

export const removeProductToCart = (
  productId: string,
  cartDispatch: React.Dispatch<any>,
) => {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const updatedCart = cartItems.filter(
    (item: FullProductInterface) => item.id !== productId,
  );
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  cartDispatch({ type: types.CART_ADD, payload: updatedCart });
  return 'Produto deletado ao carrinho com sucesso';
};
