<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Options, Vue } from "vue-class-component";
import Main from "./components/Main.vue";

export default defineComponent({
  name: "webMarket",
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCart");
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to right, #10514e 0, #06e909 140%) no-repeat;
}
.btn-primary {
  color: #fff;
  background-color: #31604c !important;
  border-color: #31604c !important;
  &:focus {
    box-shadow: 0 0 0 0.25rem #31604c94 !important;
  }
}
</style>
