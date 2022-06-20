<template>
  <Header></Header>
  <CartVieve />
  <Footer></Footer>
</template>

<script lang="ts">
import { Product } from "@/types/product.type";
import { defineComponent } from "vue";
import Header from "../Header/Header.vue";

import Footer from "../Footer/Footer.vue";
import CartVieve from "./CartVieve.vue";

export default defineComponent({
  name: "productImage",
  components: {
    Header,
    Footer,
    CartVieve,
  },
});
</script>

<style scoped lang="scss"></style>
