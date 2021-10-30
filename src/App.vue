<template>
  <User></User>
  <router-view></router-view>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },
};
</script>


<style>
#app {
  /* Global style variables for layout, positioning, colors, font, viewport...*/

  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  background-color: #21618C;
}

h1 {
    font-size: calc(1.5rem + 3vw);
}
</style>
