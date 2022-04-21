import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import skills from "./components/skills.vue";
import Achievement from "./components/Achievement.vue";
import Experience from "./components/Experience.vue";
const routes = [
  { path: "/", component: About },
  { path: "/About", component: About },
  { path: "/skills", component: skills },
  { path: "/Projects", component: Projects },
  { path: "/Experience", component: Experience },
  { path: "/Achievement", component: Achievement },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
