<template>
  <div>
    <h1 @click="clock">Clock Manager</h1>
    <h1 v-if="clockIn">Clock Started</h1>
  </div>
</template>

<script>
import moment from 'moment' //-> Lib to use for managing Date Format
import {getClockFromUser, addClock} from './clockManagerRequest'
import {Role} from './userRole'

export default {
  name: "ClockManager",
  components: {},
  methods: {
    async add() {
      await addClock(this.user.id, this.clock.time, this.clock.status);
    },
    async get() {
      await getClockFromUser(this.user.id).then(
        response => {
          this.clock.time = response.data.data.time;
          this.clock.status = response.data.data.status;
        }
      )
    },
  },
  data() {
    return {
      localTime: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      query: '',

      user: {
        id: 0,
        role: Role.User
      },
      clock: {
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        status: false,
        reset() {this.time = moment().format('MMMM Do YYYY, h:mm:ss a'); this.status = false;},
      }
    };
  },
  mounted(){
    if (localStorage.userID)
      this.user.id = localStorage.getItem("userID");

  },
};
</script>

<style>
</style>