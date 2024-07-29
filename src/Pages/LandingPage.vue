<script setup>
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();

const onClick = () => {
  router.push("/search");
};
</script>

<template>
  <div class="pageContainer">
    <Navbar additionalClasses="fixed top-0 left-0 right-0" />
    <h1 class="text-7xl font-medium text-zinc-800 py-2">
      Discover. Create. Eat.
    </h1>
    <div
      class="cursor-pointer mt-3 flex bg-gray-200 p-3 rounded-3xl items-center justify-between w-3/5"
      :onclick="onClick"
    >
      <p class="text-zinc-400 text-xl">Search</p>
      <div class="rounded-full p-2">
        <FontAwesomeIcon :icon="faMagnifyingGlass" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pageContainer {
  background: url("../assets/img/spices.jpg");
  background-size: cover;
  height: 100dvh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
