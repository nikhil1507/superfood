<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav>
    <RouterLink to="/" />
    <RouterLink to="/search" />
    <RouterLink to="/results" />
  </nav>
  <RouterView />
</template>
