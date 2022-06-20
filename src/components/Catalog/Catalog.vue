<template>
  <div v-if="products.length">
    <div class="myrow catalog">
      <div v-for="product in products" :key="product.id_product">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from "../Product/ProductCard.vue";
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CatalogItems",

  components: {
    ProductCard: ProductCard,
  },

  computed: {
    products: function (): Product[] {
      return this.$store.state.filteredProducts;
    },
  },
});
</script>

<style scoped lang="scss">
.myrow {
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  justify-content: space-between;
  align-items: center;
}
.myrow > * {
  padding-top: 40px;
  flex-shrink: 0;
}
</style>
