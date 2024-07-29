<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import RecipeCard from "../components/RecipeCard.vue";

defineProps({
  data: Array,
});

const isResultLoading = ref(false);
const results = ref([]);

async function getResults() {
  try {
    isResultLoading.value = true;
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.data}`
    );

    results.value.push(...res.data.meals);
  } catch (err) {
    console.log(err);
  }
}

onMounted(() => {
  getResults();
});

const route = useRoute();
</script>

<template>
  <Navbar />
  <p class="px-5 py-4 text-4xl">Results based on "{{ route.params.data }}"</p>
  <div class="grid grid-cols-3 gap-2 place-items-center">
    <RecipeCard v-for="meal in results" :id="meal.idMeal" :key="meal.idMeal" />
  </div>
</template>
