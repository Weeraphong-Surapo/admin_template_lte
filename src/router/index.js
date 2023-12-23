import { createRouter, createWebHistory } from "vue-router";
import Layouts from "@/layouts/DefaultLayout.vue";

const adminRoutes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "admin",
      component: Layouts,
      redirect: "/",
      children: adminRoutes,
      meta: {
        requiresAuth: true,
        isAdmin: true,
      },
    }
  ],
});


export default router;
