<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import CardLabel from "../components/CardLabel.vue";
import Label from "../components/Label.vue";
import PopularCategories from "../components/wireframe/PopularCategories.vue";
import TrendingCuisines from "../components/wireframe/TrendingCuisines.vue";

const categories = ref([]);
const trending = ref([]);
const isCategoryLoading = ref(false);
const isTrendingLoading = ref(false);
const searchQuery = ref("");

const router = useRouter();

async function loadCategories() {
  isCategoryLoading.value = true;
  isTrendingLoading.value = true;
  const categoryResponse = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const trendingResponse = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  categories.value.push(...categoryResponse.data.categories);
  trending.value.push(...trendingResponse.data.meals);
  isTrendingLoading.value = false;
  isCategoryLoading.value = false;
}

onMounted(async () => {
  await loadCategories();
});

// Function to handle input from search box
const handleInput = (e) => {
  searchQuery.value = e.target.value;
};

// Function to handle search event
const handleSearch = () => {
  // const res = await axios.get(
  //   `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`
  // );

  router.push(`/results-search/${searchQuery.value}`);
  // console.log(res.data);
};

// Function to handle clicks of card labels
const handleCardLabelClick = async (e) => {
  router.push(`/results-categories/${e.srcElement.outerText}`);
};

// Function to handle clicks of label tags
const handleLabelClick = (event) => {
  router.push(`/results-trending/${event.srcElement.outerText}`);
};
</script>

<template>
  <SearchBar :onInput="handleInput" :onClick="handleSearch" />
  <p class="px-2 py-4 text-xl font-semibold">Popular Categories🔥</p>
  <PopularCategories v-if="isCategoryLoading" />
  <div v-else class="px-2 py-1 flex overflow-x-auto">
    <CardLabel
      v-for="category in categories"
      :key="category.id"
      :title="category.strCategory"
      :imgUrl="category.strCategoryThumb"
      :onClick="handleCardLabelClick"
    />
  </div>

  <p class="px-2 py-4 text-xl font-semibold">Trending Cuisines📈</p>
  <TrendingCuisines v-if="isTrendingLoading" />
  <div v-else class="grid grid-cols-9 gap-4 px-2 py-1">
    <Label
      v-for="trend in trending"
      :key="trend.strArea"
      :title="trend.strArea"
      :onClick="handleLabelClick"
    />
  </div>
</template>
