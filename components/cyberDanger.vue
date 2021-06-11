<template>
  <div class="b-1">
    <div class="animate-1 center">
      <i class="fa fa-exclamation icon-1"></i>
    </div>
  </div>
</template>

<style scopped>
.b-1 {
  width: 64px;
  height: 64px;
  border: 3px dashed var(--orange);
}

.animate-1 {
  width: 58px;
  height: 58px;
  background-color: var(--orange);
  animation: animate-1 2s infinite;
}

.animate-1 > i {
  color: var(--darkblue);
  font-size: 25px;
}

.center {
  line-height: 58px;
  height: 58px;
  background-color: var(--orange);
  text-align: center;
}

.center i {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}

@keyframes animate-1 {
  0% {
    background-color: var(--orange);
    height: 0;
    color: var(--orange);
  }
  to {
    background-color: var(--orange);
    color: var(--darkblue);
  }
}
</style>
