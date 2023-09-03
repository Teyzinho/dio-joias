import { FullProductInterface } from '@/types';
import * as types from './types';
import { DataInterface } from './data';

// type AddProductToCart = {
//   product: FullProductInterface;
//   quantity: number;
//   cartDispatch: any;
// };

export const addProductToCart = (
  product: FullProductInterface,
  quantity = 1,
  cartDispatch: React.Dispatch<any>,
) => {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemInCart = cartItems.find((item: any) => item.id === product.id);

  // Se o item já estiver no carrinho, e a quantidade no carrinho for menor que a do stock
  if (itemInCart && itemInCart?.quantity >= product.amount) {
    itemInCart.quantity += quantity;
  }
  if (itemInCart?.quantity >= product.amount) {
    return alert(
      'não é possivel adicionar ao carrinho, Quantidade máxima atingida',
    );
  }

  cartItems.push({ ...product, quantity });

  cartDispatch({ type: types.CART_ADD, payload: cartItems });
  localStorage.setItem('cart', JSON.stringify(cartItems));
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
