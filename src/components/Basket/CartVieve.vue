<template>
  <section class="h-100 h-custom" style="background-color: #eee">
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card shopping-cart" style="border-radius: 15px">
            <div class="card-body text-black">
              <div class="row">
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Your products
                  </h3>

                  <div v-if="cartRes.contents">
                    <div
                      class="d-flex align-items-center mb-5"
                      v-for="product in cartRes.contents"
                      :key="product.id_product"
                    >
                      <div class="flex-shrink-0">
                        <img
                          :src="product.img"
                          class="img-fluid"
                          style="width: 150px"
                          alt="Generic placeholder image"
                        />
                        <p class="max-text fw-bold">x{{ product.quantity }}</p>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <a href="#!" class="float-end text-black"
                          ><i class="fas fa-times"></i
                        ></a>
                        <h5 class="text-primary">{{ product.product_name }}</h5>
                        <h6 style="color: #9e9e9e" class="max-text">
                          {{ product.description }}
                        </h6>
                        <h5 class="max-text fw-bold">
                          {{ product.price * product.quantity }}$
                        </h5>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click="dellInCart(product.id_product)"
                      />
                    </div>
                  </div>

                  <hr class="mb-4" style="height: 2px; opacity: 1" />
                  <div
                    class="d-flex justify-content-between p-2 mb-2"
                    style="background-color: #e1f5fe"
                  >
                    <h5 class="fw-bold mb-0">Total:</h5>
                    <h5 class="fw-bold mb-0">{{ total() }}$</h5>
                  </div>
                </div>
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Payment
                  </h3>

                  <form class="mb-5">
                    <div class="form-outline mb-5">
                      <input
                        type="text"
                        id="typeText"
                        class="form-control form-control-lg"
                        siez="17"
                        value="1234 5678 9012 3457"
                        minlength="19"
                        maxlength="19"
                      />
                      <label class="form-label" for="typeText"
                        >Card Number</label
                      >
                    </div>

                    <div class="form-outline mb-5">
                      <input
                        type="text"
                        id="typeName"
                        class="form-control form-control-lg"
                        siez="17"
                        value="John Smith"
                      />
                      <label class="form-label" for="typeName"
                        >Name on card</label
                      >
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-5">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="typeExp"
                            class="form-control form-control-lg"
                            value="01/22"
                            size="7"
                            minlength="7"
                            maxlength="7"
                          />
                          <label class="form-label" for="typeExp"
                            >Expiration</label
                          >
                        </div>
                      </div>
                      <div class="col-md-6 mb-5">
                        <div class="form-outline">
                          <input
                            type="password"
                            id="typeText"
                            class="form-control form-control-lg"
                            value="&#9679;&#9679;&#9679;"
                            size="1"
                            minlength="3"
                            maxlength="3"
                          />
                          <label class="form-label" for="typeText">Cvv</label>
                        </div>
                      </div>
                    </div>

                    <p class="mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit
                      <a href="#!">obcaecati sapiente</a>.
                    </p>

                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                    >
                      Buy now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ProductCartRes } from "@/types/productsCart.type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartVieve",
  computed: {
    cartRes: function (): ProductCartRes {
      return this.$store.state.cartRes;
    },
  },
  methods: {
    dellInCart(id: number) {
      this.$store.dispatch("delCart", id);
    },
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
.max-text {
  margin: auto;
  max-width: 200px;
  overflow-wrap: break-word;
  margin-top: 5px;
}
hr {
  background-color: #31604c !important;
}
</style>
