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
    path: "/AmsterdamFest",
    name: "AmsterdamFest",
    component: () =>
      import("../views/AmsterdamFest.vue")
  },

  {
    path: "/NorthWestTour",
    name: "NorthWestTour",
    component: () =>
      import("../views/NorthWestTour.vue")
  },

  {
    path: "/DahoumIn2019",
    name: "DahoumIn2019",
    component: () =>
      import("../views/DahoumIn2019.vue")
  },

  {
    path: "/NorthWesternTour",
    name: "NorthWesternTour",
    component: () =>
      import("../views/NorthWesternTour.vue")
  },


  {
    path: "/Talentscouting",
    name: "Talentscouting",
    component: () =>
      import("../views/Talentscouting.vue")
  },

  {
    path: "/DefinitionOfTalent",
    name: "DefinitionOfTalent",
    component: () =>
      import("../views/DefinitionOfTalent.vue")
  },

  {
    path: "/Test",
    name: "Test",
    component: () =>
      import("../views/Test.vue")
  },

  {
    path: "/TheBeggining",
    name: "TheBeggining",
    component: () =>
      import("../views/TheBeggining.vue")
  },

  {
    path: "/StoryTellingWithScratch",
    name: "StoryTellingWithScratch",
    component: () =>
      import("../views/StoryTellingWithScratch.vue")
  },

  {
    path: "/RaspberryPi",
    name: "RaspberryPi",
    component: () =>
      import("../views/RaspberryPi.vue")
  },

  {
    path: "/Scratch",
    name: "Scratch",
    component: () =>
      import("../views/Scratch.vue")
  },

  {
    path: "/LordOfTheFlies",
    name: "LordOfTheFlies",
    component: () =>
      import("../views/LordOfTheFlies.vue")
  },

  {
    path: "/DeepInspectionOfQuality",
    name: "DeepInspectionOfQuality",
    component: () =>
      import("../views/DeepInspectionOfQuality.vue")
  },

  {
    path: "/AssociatedNurseries",
    name: "AssociatedNurseries",
    component: () =>
      import("../views/AssociatedNurseries.vue")
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
