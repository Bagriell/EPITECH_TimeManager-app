<template>
  <div class="main-container">
      <h1>Working time(singular) is here</h1>
  </div>
</template>

<script>
export default {
  name: "WorkingTime",
  components: {},
  methods: {
    createWorkingTime() {
      console.log("createWorkingTime");
    },
    updateWorkingTime() {
      console.log("updateWorkingTime");
    },
    deleteWorkingTime() {
      console.log("deleteWorkingTime");
    },
  },
  data() {
    return {
      userId: this.$route?.params?.userid ? this.$route.params.userid : "",
      workingTimeId: this.$route?.params?.workingtimeid ? this.$route.params.userid : "",
      workingTime: {}
    };
  },
};


</script>

<style scoped>
.main-container {
  /* color */
  background-color: whitesmoke;
}
</style>
