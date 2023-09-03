import { FullProductInterface } from '@/types';
import * as types from './types';
import { DataInterface } from './data';

type AddProductToCart = {
  cart?: DataInterface;
  product: FullProductInterface;
  quantity: number;
  cartDispatch: any;
};

export const addProductToCart = (product , quantity = 1 , cartDispatch )=> {

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemInCart = cartItems.find((item: any) => item.id === product.id);

  // Se o item já estiver no carrinho, e a quantidade no carrinho for menor que a do stock
  if (itemInCart && itemInCart?.quantity >= product.amount) {
    itemInCart.quantity += quantity;
  }
  if(itemInCart?.quantity >= product.amount){
    return console.log('não é possivel adicionar ao carrinho')
  }

  cartItems.push({ ...product, quantity });

  cartDispatch({ type: types.CART_ADD , payload: cartItems });
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const getProductsToCard = (cartDispatch) => {
  const cartProducts = JSON.parse(localStorage.getItem('cart') || '[]');

  cartDispatch({ type: types.CART_ADD , payload: cartProducts });
}

export const removeProductToCart = (productId : string) => {

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const updatedCart = cartItems.filter((item: FullProductInterface) => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

}
