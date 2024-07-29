import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import LandingPage from "./Pages/LandingPage.vue";
import SearchPage from "./Pages/SearchPage.vue";
import Results from "./Pages/Results.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/search", component: SearchPage },
  { path: "/results", component: Results },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
