<template>
  <div class="dropdown">
    <div class="btn-group dropstart">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <i class="bi bi-cart"></i>

        <font-awesome-icon icon="fa-solid  fa fa-shopping-cart" />
      </button>
      <div class="dropdown-menu">
        <ul v-if="cartRes.contents" aria-labelledby="Cart">
          <span v-if="!cartRes.contents.length" class="dropdown-item">
            Cart empty
          </span>
          <CartMinEl
            v-for="product in cartRes.contents"
            :key="product.id_product"
            :product="product"
          />
        </ul>
        <hr />
        <div class="d-flex align-items-center justify-content-center">
          <h5 class="fw-bold mb-1">Total: {{ total() }}$</h5>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <router-link to="/cart">
            <button
              type="button"
              class="btn btn-primary btn-block btn-lg"
              data-v-1c6b9e08=""
            >
              Go to cart
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductCartRes } from "@/types/productsCart.type";
import { defineComponent } from "vue";
import CartMinElVue from "./CartMinEl.vue";

export default defineComponent({
  name: "CatalogItems",

  components: {
    CartMinEl: CartMinElVue,
  },

  computed: {
    cartRes: function (): ProductCartRes {
      return this.$store.state.cartRes;
    },
  },

  methods: {
    total() {
      let total = 0;
      if (this.cartRes.contents?.length) {
        for (let i = 0; i < this.cartRes.contents.length; i++) {
          total +=
            this.cartRes.contents[i].quantity * this.cartRes.contents[i].price;
        }
      }
      return total;
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

.dropdown-menu {
  width: 300px;
}
</style>
