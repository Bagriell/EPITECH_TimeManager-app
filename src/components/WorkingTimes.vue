<template>
  <div>
      <h1>Working times (plural) is here</h1>
  </div>
</template>

<script>
export default {
  name: "WorkingTimes",
  components: {},
  methods: {
    getWorkingTimes() {
      // Request get working time + save data in component state
      console.log("");
    },
  },
  data() {
    return {
      userId: this.$route?.params?.userid ? this.$route.params.userid : "",
      workingTimes: []
    };
  },
};
</script>

<style scoped>
/* style */
</style>
