<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  title: String,
  imgUrl: String,
  onClick: Function,
});
</script>

<template>
  <div class="flex flex-col justify-center items-center cursor-pointer">
    <div
      class="flex items-center justify-center relative overflow-hidden size-20 bg-gray-200 p-3 mx-2 rounded-lg"
    >
      <img :src="`${imgUrl}`" />
    </div>
    <p :onclick="onClick" class="text-lg py-2">{{ title }}</p>
  </div>
</template>
