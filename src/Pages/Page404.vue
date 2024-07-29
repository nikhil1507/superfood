<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = () => {
  router.replace("/");
};
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-4xl">Sorry! Result not found</h1>
    <p
      :onclick="onClick"
      class="text-xl cursor-pointer p-4 text-blue-600 visited:text-purple-600"
    >
      Redirect to homepage
    </p>
  </div>
</template>
