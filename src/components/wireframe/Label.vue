<template>
  <div class="bg-gray-200 w-10 h-5 p-1 rounded-lg cursor-pointer">
    <span></span>
  </div>
</template>

<style scoped>
div {
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #e5e7eb;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>
