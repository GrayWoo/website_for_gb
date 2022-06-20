import { apiService } from "@/services/api.services";
import { CartRequest } from "@/types/cartRequest";
import { Product } from "@/types/product.type";
import { ProductCart, ProductCartRes } from "@/types/productsCart.type";
import { createStore } from "vuex";

export default createStore({
  state: {
    error: false,
    products: <Product[]>[],
    cartRes: <ProductCartRes>{},
    filteredProducts: <Product[]>[],
  },

  getters: {},
  mutations: {
    setProducts(state, products: Product[]) {
      state.products = products;
    },
    setCartProducts(state, res: ProductCartRes) {
      state.cartRes = res;
    },
    setError(state) {
      state.error = true;
    },
    clearError(state) {
      state.error = false;
    },

    setFilteredProducts(state, products: Product[]) {
      state.filteredProducts = products;
    },
  },
  actions: {
    getProducts({ commit }) {
      commit("clearError");
      return apiService
        .get<Product[]>("products")
        .then((res) => {
          commit("setProducts", res);
          commit("setFilteredProducts", res);
          return res;
        })
        .catch(() => commit("setError"));
    },

    getCart({ commit }) {
      commit("clearError");
      return apiService
        .get<ProductCartRes>("cart")
        .then((res) => {
          commit("setCartProducts", res);
          return res;
        })
        .catch(() => commit("setError"));
    },

    addInCart({ commit }, body: ProductCart) {
      commit("clearError");
      return apiService
        .post("cart", body)
        .then(() => this.dispatch("getCart"))
        .catch(() => commit("setError"));
    },

    putCart({ commit }, props: CartRequest) {
      commit("clearError");
      return apiService
        .put(`cart/${props.id}`, props.body)
        .then(() => this.dispatch("getCart"))
        .catch(() => commit("setError"));
    },

    delCart({ commit }, id: number) {
      commit("clearError");
      return apiService
        .delete(`cart/${id}`)
        .then(() => this.dispatch("getCart"))
        .catch(() => commit("setError"));
    },
  },
  modules: {},
});
