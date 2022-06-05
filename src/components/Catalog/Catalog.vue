<template>
  <div class="row catalog">
    <div class="col">
      <ProductCard />
    </div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <!-- <div>{{ store.products }}</div> -->
    <!-- <div v-if="products">....</div>
    <div v-if="products">CCCC</div> -->
    <!-- <div>{{ store.state.products }}</div> -->
  </div>
</template>

<script lang="ts">
import ProductCard from "../Product/ProductCard.vue";
import { onMounted } from "vue";
import store from "@/store";
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",

  components: {
    ProductCard: ProductCard,
  },

  // data() {
  //   return {
  //     products: <any[]>[],
  //   };
  // },
  methods: {
    setProducts() {
      store.dispatch("getProducts");
      console.log(store.state.products);
      // if (store.state.products) this.products = store.state.products;
    },
  },

  computed: {
    // g(){
    //   this.$store
    // }
  },
  // computed: {
  //   currentUser() {
  //     return this.$store.state.auth.user;
  //   }
  // },

  mounted() {
    this.setProducts();
  },
});
</script>

<style scoped lang="scss">
.catalog {
  padding: 40px 0;
}
</style>
