import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../components/Main.vue";
import ProductPage from "../components/Product/ProductPage.vue";
import CartPage from "../components/Basket/CartPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
