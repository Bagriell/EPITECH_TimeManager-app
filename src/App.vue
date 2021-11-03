<template>
  <div v-if="!isLogin">
    <login-view></login-view>
  </div>
  <div v-else>

    <router-view></router-view>
  </div>
</template>

<script>
import LoginVue from './components/Login.vue';

export default {
  name: "App",
  components: {
    "login-view": LoginVue
  },
  data() {
    return {
      isLogin: false,
    }
  },
  watch: {
    checkLocalStorage() {
      if (localStorage.getItem("userID")) {
        this.isLogin = true
      }
      else {
        this.isLogin = false
      }
    },
  },
  methods: {
    
  }
};
</script>


<style>
#app {
  /* Global style variables for layout, positioning, colors, font, viewport...*/

  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-size: calc(1.5rem + 3vw);
}
</style>
