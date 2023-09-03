import { FullProductInterface } from "@/types"


export interface CartProductsInterface extends FullProductInterface{
  quantity: number;
}

export interface DataInterface {
  products: CartProductsInterface[],
  loading: boolean
}

export const data = {
  products: [],
  loading:false,
}
