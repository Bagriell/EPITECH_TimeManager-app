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
  padding: 0vh 1vw 1vh 0vw;
  display: flex;
  flex-direction: row;
  background-color: rosybrown;
}

h1 {
    font-size: calc(1.5rem + 3vw);
}
</style>
