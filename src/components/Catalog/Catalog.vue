<template>
  <div class="row catalog">
    <div class="col">
      <ProductCard />
    </div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ProductCard from "../Product/ProductCard.vue";

@Options({
  components: {
    ProductCard,
  },
})
export default class Catalog extends Vue {}
</script>

<style scoped lang="scss">
.catalog {
  padding: 40px 0;
}
</style>
