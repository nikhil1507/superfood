<script setup>
import { defineProps, onMounted, ref } from "vue";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faList,
  faGlobe,
  faUtensils,
  faLocationDot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

import RecipeCardWireFrame from "./wireframe/RecipeCard.vue";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "vue-router";

const props = defineProps({
  id: String,
});

const data = ref([]);
const router = useRouter();

async function loadData() {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
    );

    data.value.push(...res.data.meals);
  } catch (err) {
    console.log(err);
  }
}

const onCardClick = () => {
  router.push(`/results-trending/recipe-details/${props.id}`);
};

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <RecipeCardWireFrame v-if="data.length === 0" />
  <div
    :onclick="onCardClick"
    v-else
    class="cursor-pointer size-80 bg-gray-200 rounded-lg overflow-hidden mb-4"
  >
    <img :src="`${data[0].strMealThumb}`" class="h-1/2 w-full object-cover" />
    <div class="p-2">
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faUtensils" />
        <p class="mx-2">{{ data[0].strMeal }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faList" />
        <p class="mx-2 line-clamp-1">{{ data[0].strInstructions }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faBowlFood" />
        <p class="mx-2">{{ data[0].strCategory }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faYoutube" />
        <a
          class="mx-2 text-blue-600 visited:text-purple-600"
          :href="`${data[0].strYoutube}`"
          >Recipe Video Link</a
        >
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faGlobe" />
        <a
          class="mx-2 text-blue-600 visited:text-purple-600"
          :href="`${data[0].strSource}`"
          >Source Link</a
        >
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faLocationDot" />
        <p class="mx-2">{{ data[0].strArea }}</p>
      </span>
    </div>
  </div>
</template>
