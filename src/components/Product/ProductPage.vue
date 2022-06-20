<template>
  <Header></Header>
  <section class="h-100 h-custom" style="background-color: #eee">
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card shopping-cart" style="border-radius: 15px">
            <div class="card-body text-black">
              <div class="row">
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    {{ searchProduct()?.product_name }}
                  </h3>
                  <p class="max-text fw-bold text-left">
                    {{ searchProduct()?.description }}
                  </p>
                  <h4 class="max-text fw-bold text-center">Specifications</h4>
                  <div v-if="searchProduct()">
                    <div class="d-flex align-items-center mb-5">
                      <div class="flex-shrink-0">
                        <ol>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                          <li>Very cool</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="not_found" v-else>NOT FOUND</div>
                  <hr class="mb-4" style="height: 2px; opacity: 1" />
                  <button
                    type="button"
                    class="btn btn-primary btn-block btn-lg"
                    data-v-1c6b9e08=""
                    @click="addToCart(searchProduct())"
                  >
                    Add to cart
                  </button>
                </div>
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Based on 250 Review
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                  </h3>
                  <img class="mb-5 product_img" :src="searchProduct()?.img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script lang="ts">
import { Product } from "@/types/product.type";
import { defineComponent, PropType } from "vue";
import Header from "../Header/Header.vue";

import Footer from "../Footer/Footer.vue";
import { ProductCart, ProductCartRes } from "@/types/productsCart.type";
import { CartRequest } from "@/types/cartRequest";

export default defineComponent({
  name: "productImage",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      type: Object as PropType<Product>,
    };
  },

  computed: {
    products: function (): Product[] {
      return this.$store.state.products;
    },
    productsInCart: function (): ProductCartRes {
      return this.$store.state.cartRes;
    },
  },

  methods: {
    searchProduct() {
      return this.products.find(
        (el) => el.id_product === +this.$route.params.id
      );
    },
    addToCart(product?: Product) {
      if (!product) return;

      const searchProd = this.productsInCart.contents.find(
        (el) => el.id_product === product.id_product
      );

      const sendObj: ProductCart = { ...product, quantity: 1 };
      if (searchProd) {
        const props: CartRequest = { body: sendObj, id: sendObj.id_product };
        this.$store.dispatch("putCart", props);
      } else {
        this.$store.dispatch("addInCart", sendObj);
      }
    },
  },
});
</script>

<style scoped lang="scss">
.not_found {
  height: 50vh;
}
.product_img {
  width: 400px;
  height: 400px;
}
.fa-star {
  color: goldenrod;
}
.revieve {
  margin-right: 10px;
}
hr {
  background-color: #31604c !important;
}
</style>
