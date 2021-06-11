<template>
  <div>
    <div class="load-text text-center">Loading</div>
    <div class="load mt-2">
      <div class="load-animate"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.load {
  height: 40px;
  width: 100%;
  border: 3px dashed var(--orange);
}

.load-animate {
  width: 100%;
  height: 34px;
  background-color: var(--orange);
  animation: load-animate-1 10s infinite;
}

.load-text {
  font-family: var(--roboto-mono);
  color: var(--gray);
  font-weight: bold;
  font-size: 25px;
}

@keyframes load-animate-1 {
  from {
    background-color: var(--orange);
    width: 0;
    color: var(--orange);
  }
  to {
    background-color: var(--orange);
    color: var(--darkblue);
    width: 100%;
  }
}
</style>
