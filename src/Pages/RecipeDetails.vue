<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";
import Spinner from "../components/Spinner.vue";

const route = useRoute();
const router = useRouter();
const data = ref([]);

async function getData() {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    );
    data.value.push(...res.data.meals);
  } catch (err) {
    console.log(err);
  }
}

const onPrevClick = () => {
  router.back();
};

onMounted(async () => {
  await getData();
});
</script>
<template>
  <div
    v-if="data.length === 0"
    class="flex justify-center items-center bg-green-400 h-screen"
  >
    <Spinner />
  </div>
  <div v-else class="h - screen">
    <div :onclick="onPrevClick" class="icon">
      <FontAwesomeIcon :icon="faChevronLeft" />
    </div>
    <img class="h-96 w-full object-cover" :src="`${data[0].strMealThumb}`" />
    <h1 class="text-4xl px-4 py-2">Ingredients</h1>
    <ul class="list-disc px-4 py-2 text-lg ml-2">
      <li>{{ data[0].strIngredient1 }}</li>
      <li>{{ data[0].strIngredient2 }}</li>
      <li>{{ data[0].strIngredient3 }}</li>
      <li>{{ data[0].strIngredient4 }}</li>
    </ul>
    <h1 class="text-4xl px-4 py-2">Recipe Details</h1>
    <p class="text-xl px-4 py-2">{{ data[0].strInstructions }}</p>
  </div>
</template>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
}
</style>
