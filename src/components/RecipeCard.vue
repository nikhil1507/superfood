<script setup>
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faList,
  faGlobe,
  faUtensils,
  faLocationDot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

defineProps({
  imgUrl: String,
  meal: String,
  tags: String,
  category: String,
  youtube: String,
  source: String,
  area: String,
});
</script>

<template>
  <div class="size-80 bg-gray-200 rounded-lg overflow-hidden">
    <img :src="`${imgUrl}`" class="h-1/2 w-full object-cover" />
    <div class="p-2">
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faUtensils" />
        <p class="mx-2">{{ meal }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faList" />
        <p class="mx-2">{{ tags }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faBowlFood" />
        <p class="mx-2">{{ category }}</p>
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faYoutube" />
        <a
          class="mx-2 text-blue-600 visited:text-purple-600"
          :href="`${youtube}`"
          >Recipe Video Link</a
        >
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faGlobe" />
        <a
          class="mx-2 text-blue-600 visited:text-purple-600"
          :href="`${source}`"
          >Source Link</a
        >
      </span>
      <span class="flex items-center">
        <FontAwesomeIcon :icon="faLocationDot" />
        <p class="mx-2">{{ area }}</p>
      </span>
    </div>
  </div>
</template>
