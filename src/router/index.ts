import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../components/Main.vue";
import Preview from "../components/Preview/Preview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
