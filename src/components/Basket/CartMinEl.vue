<template>
  <li class="line">
    <div class="container">
      <div class="row row-cols-4" v-if="product">
        <div class="col">
          <router-link :to="`/product/${product?.id_product}`">
            <img class="img_min" :src="product?.img" alt="prev_min" />
          </router-link>
        </div>
        <div class="col">
          <div>{{ product.product_name }}</div>
          <span class="fw-bold">{{ product.price }}$</span>
        </div>
        <div class="col">
          <div>x{{ product.quantity }}</div>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="dellInCart()"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { ProductCartRes, ProductCart } from "@/types/productsCart.type";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "cartMinEl",
  props: {
    product: {
      type: Object as PropType<ProductCart>,
    },
  },

  computed: {
    productsInCart: function (): ProductCartRes {
      return this.$store.state.cartRes;
    },
  },

  methods: {
    dellInCart() {
      this.$store.dispatch("delCart", this.product?.id_product);
    },
  },
});
</script>

<style scoped lang="scss">
.line {
  display: flex;
  padding: 10px;
}
.row {
  align-items: center !important;
  flex-wrap: nowrap !important;
}
.img_min {
  height: 40px;
  width: 40px;
}
.col {
  text-align: center;
}
</style>
