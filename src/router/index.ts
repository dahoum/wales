import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () =>
      import("../views/Blog.vue")
  },
  
  {
    path: "/Past",
    name: "Past",
    component: () =>
      import("../views/Past.vue")
  },

  {
    path: "/Talentscouting",
    name: "Talentscouting",
    component: () =>
      import("../views/Talentscouting.vue")
  },

  {
    path: "/Test",
    name: "Test",
    component: () =>
      import("../views/Test.vue")
  },

  {
    path: "/Nurseries",
    name: "Nurseries",
    component: () =>
      import("../views/Nurseries.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
