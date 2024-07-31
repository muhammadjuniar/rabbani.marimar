import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MemberAreaView from "@/views/MemberAreaView.vue";
import VotingView from "@/views/VotingView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

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
  {
    path: "/voting",
    name: "voting",
    component: VotingView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
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