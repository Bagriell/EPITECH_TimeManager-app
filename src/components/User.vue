<template>
  <div class="sidenav-container">
    <button v-on:click="redirect_to('WorkingTimes')" class ="sidenav-button">WorkingTime</button>
    <button v-on:click="redirect_to('ClockManager')" class ="sidenav-button">ClockManager</button>
    <button v-on:click="redirect_to('ChartManager')" class ="sidenav-button">ChartManager</button>
    <ul>
      <div class="sidenav-elem">CreateUser</div>
      <div class="sidenav-elem">UpdateUser</div>
      <div class="sidenav-elem">getUser</div>
      <div class="sidenav-elem">DeleteUser</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  methods: {
    createUser() {
      console.log("createuser");
    },
    updateUser() {
      console.log("updateuser");
    },
    getUser() {
      console.log("getUser");
    },
    deleteUser() {
      console.log("deleteUser");
    },
    redirect_to(name_comp) {
      console.log('redirect_to: ', name_comp)
      this.$router.push({ name: name_comp, params: { userid: 0, workingtimeid: 0, username: "unknown"} })
    }
  },
  data() {
    return {
      user: {
        id: 0
      },
      userid: 0
    };
  },
};
</script>

<style scoped>
.sidenav-container {
  /* Flexbox for all root component container */
  display: flex;
  flex-direction: column;

  /* color */
  background-color: grey;

  /* sizing */
  height: 100%;
  width: auto;

  /* position */
  position: sticky;
  top: 0;
  left: 0;
}

/* .sidenav-button {
} */

ul {
  display: flex;
  flex-direction: column;
  background-color: red;
}

.sidenav-elem {
  justify-content: center;
  text-decoration: none;
  color: white;
}

.sidenav-container .sidenav-elem:hover {
  color: red;
}
</style>
