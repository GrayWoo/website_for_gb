<template>
  <Header></Header>
  <main>
    <div class="container">
      <Preview />
      <Catalog />
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Header from "./Header/Header.vue";
import Preview from "./Preview/Preview.vue";
import Catalog from "./Catalog/Catalog.vue";
import Footer from "./Footer/Footer.vue";

@Options({
  components: {
    Header,
    Preview,
    Catalog,
    Footer,
  },
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
main {
  border-radius: 24px;
  background-color: var(--bs-body-bg);
}
.container {
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  padding: 60px 0;
}
</style>
