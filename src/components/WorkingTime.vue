<template>
  <div class="main-container">
      <h1>Working time(singular) is here</h1>
      <div>
        <button type="button" v-on:click="getAll()"> GET ALL USERS WORKING TIMES </button>
      </div>
  </div>
</template>

<script>
import {getAllWorkingTimes, getWorkingTime, getAllWorkingTimesFromUser, addWorkingTime, editWorkingTime, deleteWorkingTime} from './workingTimeRequest'
import moment from 'moment' //-> Lib to use for managing Date Format
import {Role} from './userRole'

export default {
  name: "WorkingTime",
  components: {},
  methods: {
    async getAll() {
      await getAllWorkingTimes().then(
        response => {
          for (let index = 0; index < response.data.data.length; index++) {
            this.users.id[index] = response.data.data[index].id;
            this.users.username[index] = response.data.data[index].username;
            this.users.email[index] = response.data.data[index].email;
            this.users.role[index] = response.data.data[index].role;

            console.log("USERNAME : " + this.users.username[index]);
            console.log("EMAIL : " + this.users.email[index]);
            console.log("ID : " + this.users.id[index]);
          }
        }
      );
    },
    async get() {
        await getWorkingTime(this.workingTime.id).then(
          response => {
            this.workingTime.id = response.data.data.id;
            this.workingTime.startDate = response.data.data.startDate;
            this.workingTime.endDate = response.data.data.endDate;
          }
        )
    },
    async getUserAll() {
        await getAllWorkingTimesFromUser(this.user.id).then(
          response => {
          for (let index = 0; index < response.data.data.length; index++) {
            this.workingTimes.id[index] = response.data.data[index].id;
            this.workingTimes.startDate[index] = response.data.data[index].startDate;
            this.workingTimes.endDate[index] = response.data.data[index].endDate;

            console.log("ID : " + this.workingTimes.id[index]);
            console.log("START DATE : " + this.workingTimes.startDate[index]);
            console.log("END DATE : " + this.workingTimes.endDate[index]);
          }
          }
        )
    },
    async add() {
      await addWorkingTime(this.user.id, this.workingTime.startDate, this.workingTime.endDate);
    },
    async edit() {
      await editWorkingTime(this.workingTime.id, this.user.id, this.workingTime.startDate, this.workingTime.endDate);
    },
    async delete() {
      await deleteWorkingTime(this.workingTime.id);
      this.workingTime.reset();
    },
  },
  data() {
    return {
      user: {
        id: this.$route?.params?.userid ? this.$route.params.userid : 0,
        role: Role.User
      },
      workingTime: {
        id: this.$route?.params?.workingtimeid ? this.$route.params.userid : 0,
        startDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
        endDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
        reset() {this.id = 0; this.startDate = moment().format('MMMM Do YYYY, h:mm:ss a'); this.endDate = moment().format('MMMM Do YYYY, h:mm:ss a') }
      },
      workingTimes: {
        id: [],
        startDate: [],
        endDate: []
      },
      users: {
        id: [],
        username: [],
        email: [],
        role: []
      }
    };
  },
  mounted(){
    if (localStorage.userID)
      this.user.id = localStorage.getItem("userID");

  },
};


</script>

<style scoped>
.main-container {
  /* color */
  background-color: whitesmoke;
}
</style>
