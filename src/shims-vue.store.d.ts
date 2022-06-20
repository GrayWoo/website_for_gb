import { Store } from "vuex";
import { Product } from "./types/product.type";
import { ProductCart } from "./types/productsCart.type";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    error: false;
    products: Product[];
    cartRes: ProductCartRes;
    filteredProducts: Product[];
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
