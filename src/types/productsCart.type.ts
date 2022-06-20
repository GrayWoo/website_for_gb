import { Product } from "@/types/product.type";
export interface ProductCart extends Product {
  quantity: number;
}

export interface ProductCartRes {
  contents: ProductCart[];
}
