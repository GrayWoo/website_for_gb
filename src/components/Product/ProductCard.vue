<template>
  <div class="card" style="width: 18rem">
    <router-link :to="`/product/${product?.id_product}`">
      <img :src="product?.img" class="card-img-top" alt="product_img" />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{ product?.product_name }}</h5>
      <p class="card-text">
        {{ stripString(product?.description) }}
      </p>
      <h5 class="max-text fw-bold">{{ product?.price }}$</h5>
      <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/types/product.type";
import { CartRequest } from "@/types/cartRequest";
import { ProductCartRes, ProductCart } from "@/types/productsCart.type";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "productCard",
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },

  computed: {
    productsInCart: function (): ProductCartRes {
      return this.$store.state.cartRes;
    },
  },

  methods: {
    addToCart() {
      if (!this.product) return;

      const searchProd = this.productsInCart.contents.find(
        (el) => el.id_product === this.product?.id_product
      );

      const sendObj: ProductCart = { ...this.product, quantity: 1 };
      if (searchProd) {
        const props: CartRequest = { body: sendObj, id: sendObj.id_product };
        this.$store.dispatch("putCart", props);
      } else {
        this.$store.dispatch("addInCart", sendObj);
      }
    },
    stripString(s: string | undefined) {
      if (!s) return "description not find";
      return s.length > 22 ? s.slice(0, 22) + "..." : s;
    },
  },
});
</script>

<style scoped lang="scss">
.card-img-top {
  width: 100%;
  height: 300px;
}
</style>
