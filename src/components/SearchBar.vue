<script setup>
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

defineProps({
  onInput: Function,
  onClick: Function,
});
</script>

<template>
  <div class="flex bg-gray-200 p-3 items-center m-4 rounded-lg">
    <input placeholder="Search" v-on:input="onInput" autofocus />
    <button>
      <div class="rounded-full overflow-hidden p-2">
        <FontAwesomeIcon :icon="faMagnifyingGlass" v-on:click="onClick" />
      </div>
    </button>
  </div>
</template>

<style scoped>
input {
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 25px;
}

button {
  padding-left: 10px;
}
</style>
