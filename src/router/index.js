import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Marvel - Home",
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    },
  },
  {
    path: "/character",
    name: "character",
    component: () => import("@/views/Character.vue"),
  },
  {
    path: "/character/:id",
    name: "characterShow",
    component: () => import("@/views/CharacterDetail.vue"),
  },
  {
    path: "/comics",
    name: "comics",
    component: () => import("@/views/ComicsView.vue"),
  },
  {
    path: "/comics/:id",
    name: "comics.show",
    component: () => import("@/views/ComicDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
