<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { defineProps } from "vue";

defineProps({
  additionalClasses: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :class="`flex justify-between px-10 py-3 rounded-3xl items-center ${additionalClasses} m-10 bg-green-500`"
  >
    <h1 class="font-bold text-2xl text-stone-100">Superfood!</h1>
    <div class="flex space-x-4 items-center">
      <p class="font-medium text-stone-100">Home</p>
      <p class="font-medium text-stone-100">Recipes</p>
      <p class="font-medium text-stone-100">About Us</p>
      <div class="icon">
        <FontAwesomeIcon :icon="faMagnifyingGlass" />
      </div>
    </div>
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
}
</style>
