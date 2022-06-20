<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://cdn-front.kwork.ru/pics/t3/97/320245-1.jpg"
          class="d-block w-100"
          alt="first"
        />
      </div>
      <div
        v-for="product in products"
        :key="product.id_product"
        class="carousel-item"
      >
        <router-link :to="`/product/${product?.id_product}`">
          <img :src="product.img" class="d-block w-100" alt="prev_img"
        /></router-link>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CatalogItems",

  computed: {
    products: function (): Product[] {
      return this.$store.state.products;
    },
  },
});
</script>

<style scoped lang="scss">
.d-block {
  height: 700px;
}
</style>
