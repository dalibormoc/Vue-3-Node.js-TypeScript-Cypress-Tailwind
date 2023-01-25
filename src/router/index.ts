import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:page?",
      name: "home",
      component: () => import("../views/PageHome.vue"),
    },
  ],
});

export default router;
