<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

defineProps({
  additionalClasses: {
    type: String,
    default: "",
  },
});

const router = useRouter();

const onClick = () => {
  router.push("/search");
};
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
      <div :onclick="onClick" class="icon">
        <FontAwesomeIcon class="cursor-pointer" :icon="faMagnifyingGlass" />
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
