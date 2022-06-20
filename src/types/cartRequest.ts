import { ProductCart } from "./productsCart.type";

export interface CartRequest {
  body: ProductCart;
  id: number;
}
