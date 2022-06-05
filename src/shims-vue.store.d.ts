import { Store } from "vuex";
import { Product } from "./types/product.type";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    error: false;
    products: Product[];
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
