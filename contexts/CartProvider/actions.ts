import { FullProductInterface } from '@/types';
import * as types from './types';
import { DataInterface } from './data';

type AddProductToCart = {
  cart: DataInterface;
  product: FullProductInterface;
};

export const addProductToCart = (product: FullProductInterface , quantity: number = 1) => {

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemInCart = cartItems.find((item: any) => item.id === product.id);

  if (itemInCart && itemInCart?.quantity >= product.amount) {
    // Se o item já estiver no carrinho, e a quantidade no carrinho for menor que a do stock
    itemInCart.quantity += quantity;
  }

  if(itemInCart?.quantity >= product.amount){
    return console.log('não é possivel adicionar ao carrinho')
  }

  cartItems.push({ ...product, quantity });

  localStorage.setItem('cart', JSON.stringify(cartItems));

};

export const removeProductToCart = (productId : string) => {

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const updatedCart = cartItems.filter((item: FullProductInterface) => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

}
