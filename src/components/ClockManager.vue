<template>
  <div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-time 
          v-model="this.clock.time"
          mask="hh:mm A" 
          readonly
        />
        <div v-if="this.clock.status === false">
          <q-btn 
            label="Start"
            type="submit" 
            color="secondary"
            @click="setup()"
            />
        </div>
        <div v-else-if="this.clock.status === true">
          <q-btn 
            label="Stop"
            type="submit" 
            color="negative"
            @click="setup()"
            />
        </div>
      </div>
    </div>
    
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
    setup() {
      this.clock.status = !this.clock.status

      // if (this.clock.status)
        // this.add()
      
      console.log(this.clock.status? 
        "Started Working Day at: " + this.clock.time :
        "Finish worked at: " + this.clock.time);
    }
  },
  data() {
    return {
      interval:null,
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
        time: moment().format('h:mm A'),
        status: false,
        reset() {this.time = moment().format('h:mm A'); this.status = false;},
      }
    };
  },
  mounted(){
    if (localStorage.userID) {
      this.user.id = localStorage.getItem("userID");
    }
      this.clock.time = moment().format('h:mm A');
    this.interval=setInterval(() => {
      this.clock.time = moment().format('h:mm A');
      // this.get(); -- API CALL TO GET TIME EVERY SEC
    }, 1000)
  },
   unmounted(){
    clearInterval(this.interval)
   },
};
</script>

<style>
</style>