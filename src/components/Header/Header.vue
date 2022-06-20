<template>
  <header>
    <nav class="navbar navbar-expand-lg container">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <router-link class="logo" to="/">Navbar-LOGO</router-link>
          </div>

          <form class="d-flex" role="search">
            <input
              v-model="text"
              @input="filter(text)"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <CartMin />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";
import CartMinVue from "../Basket/CartMin.vue";

export default defineComponent({
  name: "HeaderVue",
  components: {
    CartMin: CartMinVue,
  },
  data() {
    return { text: "" };
  },

  computed: {
    products: function (): Product[] {
      return this.$store.state.products;
    },
  },

  methods: {
    filter(value: string) {
      let regexp = new RegExp(value, "i");
      const filtered = this.products.filter((el) =>
        regexp.test(el.product_name)
      );

      this.$store.commit("setFilteredProducts", filtered);
    },
  },
});
</script>

<style scoped lang="scss">
.logo {
  color: white !important;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  &:hover {
    color: rgb(163, 148, 148) !important;
    text-decoration: underline !important;
  }
}
</style>
