<template>
  <div class="hello">
    <div class="row">
      <div class="col-12 mt-5">
        <img class="ribbon" src="~@/assets/img_ribbon_1.svg" alt="..." />
      </div>
      <div class="col-12">
        <img class="logo-marimar" src="~@/assets/img_logo_marimar.png" alt="..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ribbon {
  width: 100%;
  height: auto;
}

.logo-marimar {
  padding: 0 10px;
  width: 100%;
  height: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>./HomePage.vue
