import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/pages/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/pages/AuthLogin.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./components/pages/AuthRegister.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("./components/pages/ProductView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("./components/pages/ProductsList.vue"),
    meta: {
      needsAuth: true 
    }
  },
  {
    path: "/create",
    name: "productCreate",
    component: () => import("./components/pages/ProductCreate.vue"),
    meta: {
      needsAuth: true 
    }
  },
  {
    path: "/edit",
    name: "productEdit",
    component: () => import("./components/pages/ProductEdit.vue"),
    meta: {
      needsAuth: true 
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    next("/login");
  } else {
    next();
  }
})

export default router;
