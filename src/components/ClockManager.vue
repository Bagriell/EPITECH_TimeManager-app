<template>
  <div>
    <h1 @click="clock">Clock Manager</h1>
    <h1 v-if="clockIn">Clock Started</h1>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: "ClockManager",
  components: {},
  methods: {
    refresh() {
      // fetch(query);
    },
    clock() {
      console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
      this.startDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.clockIn = true;
    }
  },
  data() {
    return {
      startDateTime: null,
      clockIn: false,
      localTime: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      query: '',
    };
  },
};
</script>
<style>
</style>