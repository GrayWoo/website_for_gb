import { apiService } from "@/services/api.services";
import { Product } from "@/types/product.type";
import { createStore } from "vuex";

export default createStore({
  state: { error: false, products: <Product[]>[] },

  getters: {},
  mutations: {
    setProducts(state, products: Product[]) {
      state.products = products;
    },
    setError(state) {
      state.error = true;
    },
    clearError(state) {
      state.error = false;
    },
  },
  actions: {
    getProducts({ commit }) {
      commit("clearError");
      return apiService
        .get<Product[]>("products")
        .then((res) => {
          commit("setProducts", res);
          return res;
        })
        .catch(() => commit("setError"));
    },
  },
  modules: {},
});
