import { apiService } from "@/services/api.services";
import { Product } from "@/types/product.type";
import { createStore } from "vuex";

export default createStore({
  state: { error: false, products: <Product[]>[] },

  getters: {},
  mutations: {
    setProducts(state, { products }) {
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
      apiService
        .get<Product[]>("products")
        .then((res) => {
          commit("setProducts", res);
        })
        .catch(() => commit("setError"));
      this.state.products;
    },
  },
  modules: {},
});
