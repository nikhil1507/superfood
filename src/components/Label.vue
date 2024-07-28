<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  onClick: Function,
});
</script>

<template>
  <span class="bg-gray-200 w-min p-1 rounded-lg cursor-pointer">
    <p :onclick.prevent="onClick">{{ title }}</p>
  </span>
</template>
