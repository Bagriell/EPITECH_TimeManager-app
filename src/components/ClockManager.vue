<template>
  <div>
    <h1>Clock Manager</h1>
  </div>
</template>
<script>
export default {
  name: "ClockManager",
  components: {},
  methods: {
    refresh() {
      console.log('refresh() ClockManager')
    },
    clock() {
      console.log('clock()ClockManager')
    }
  },
  data() {
    return {
      startDateTime: "",
      clockIn: false,        // True if work period in progress
    };
  },
};
</script>
<style>
</style>