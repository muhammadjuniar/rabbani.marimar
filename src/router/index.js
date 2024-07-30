import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MemberAreaView from "@/views/MemberAreaView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/member",
    name: "member",
    component: MemberAreaView,
  },
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

export default new createRouter ({
  history: createWebHistory(),
  routes
})