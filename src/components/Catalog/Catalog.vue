<template>
  <div class="row catalog">
    <div class="col">
      <ProductCard />
    </div>
    <div class="col">Column</div>
    <div class="col">Column</div>

    <div v-if="products.length">{{ products }}</div>
  </div>
</template>

<script lang="ts">
import ProductCard from "../Product/ProductCard.vue";
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",

  components: {
    ProductCard: ProductCard,
  },

  methods: {
    setProducts() {
      this.$store.dispatch("getProducts");
    },
  },

  computed: {
    products: function (): Product[] {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
});
</script>

<style scoped lang="scss">
.catalog {
  padding: 40px 0;
}
</style>
