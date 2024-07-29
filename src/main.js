import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import LandingPage from "./Pages/LandingPage.vue";
import SearchPage from "./Pages/SearchPage.vue";
import ResultsTrending from "./Pages/ResultsTrending.vue";
import ResultsCategories from "./Pages/ResultsCategories.vue";
import ResultsSearch from "./Pages/ResultsSearch.vue";
import Page404 from "./Pages/Page404.vue";
import RecipeDetails from "./Pages/RecipeDetails.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/search", component: SearchPage },
  { path: "/results-trending/:data", component: ResultsTrending },
  { path: "/results-categories/:data", component: ResultsCategories },
  { path: "/results-search/:data", component: ResultsSearch },
  { path: "/404", component: Page404 },
  { path: "/results-trending/recipe-details/:id", component: RecipeDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
