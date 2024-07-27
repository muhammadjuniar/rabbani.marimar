<template>
  <div class="row justify-content-center m0">
    <div class="col-12 col-lg-3 content-body">
      <router-view />
    </div>
  </div>
</template>

<style>
.content-body {
  background: url('~@/assets/img_background.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.m0 {
  margin: 0 !important;
}
</style>
