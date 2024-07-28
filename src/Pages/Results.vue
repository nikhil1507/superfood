<script setup>
import Navbar from "../components/Navbar.vue";
import RecipeCard from "../components/RecipeCard.vue";
</script>

<template>
  <Navbar />
  <p class="px-5 py-3 text-4xl">Results based on...</p>
  <div class="p-4">
    <RecipeCard
      imgUrl="https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
    />
  </div>
</template>
