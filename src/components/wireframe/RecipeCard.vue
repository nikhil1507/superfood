<template>
  <div class="container">
    <div class="card">
      <div class="card-img skeleton"></div>
      <div class="card-body">
        <h2 class="card-title skeleton"></h2>
        <p class="card-intro skeleton"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(#000, 0.15);
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 1px 2px 3px 4px #e5e7eb;
}

.card-img {
  padding-bottom: 56.25%;
  position: relative;
  img {
    position: absolute;
    width: 100%;
  }
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  line-height: 1.33;
  font-weight: 700;
  &.skeleton {
    min-height: 28px;
    border-radius: 4px;
  }
}

.card-intro {
  margin-top: 0.75rem;
  line-height: 1.5;
  &.skeleton {
    min-height: 72px;
    border-radius: 4px;
  }
}

.skeleton {
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

.container {
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
