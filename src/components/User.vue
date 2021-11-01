<template>
  <div class="sidenav-container">
    <button v-on:click="redirect_to('WorkingTimes')" class ="sidenav-button">WorkingTime</button>
    <button v-on:click="redirect_to('ClockManager')" class ="sidenav-button">ClockManager</button>
    <button v-on:click="redirect_to('ChartManager')" class ="sidenav-button">ChartManager</button>
    <ul>
      <div class="sidenav-elem">CreateUser
        <input type="text" name="username" v-model="user.username" placeholder="Username" />
        <input type="text" name="password" v-model="user.email" placeholder="Email" />
        <button type="button" v-on:click="createUser()">Register</button>
      </div>
      <div class="sidenav-elem" @click="updateUser()">UpdateUser</div>
      <div class="sidenav-elem" @click="getAllUsers()">getUser</div>
      <div class="sidenav-elem" @click="deleteUser()">DeleteUser</div>
    </ul>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "User",
  components: {},
  methods: {
    createUser() {
      axios.post(this.queries.baseURL, {
        users: {
          username: this.user.username,
          email: this.user.email,
          },
        }
        ).then(function( response ){
                this.users = response.data;
                this.getUser()

            }.bind(this));
    },
    updateUser() {
      console.log("updateuser");
    },
    getUser() {
      axios.get(this.queries.baseURL + "?username=" + this.user.username + "&email=" + this.user.email)
        .then(function( response ){
          this.users = response.data;

          // DEBUG CREATED USER
          for (let index = 0; index < this.users.data.length; index++) {
            console.log("USERNAME : " + this.users.data[index].username);
            console.log("EMAIL : " + this.users.data[index].email);
            console.log("ID : " + this.users.data[index].id);
            this.user.id = this.users.data[index].id;
          }
            }.bind(this));
    },
    getAllUsers() {
      axios.get(this.queries.baseURL)
        .then(function( response ){
          this.users = response.data;

          // DEBUG CREATED USERS
          for (let index = 0; index < this.users.data.length; index++) {
            console.log("USERNAME : " + this.users.data[index].username);
            console.log("EMAIL : " + this.users.data[index].email);
            console.log("ID : " + this.users.data[index].id);
          }
            }.bind(this));
    },
    deleteUser() {
        axios.delete(this.queries.baseURL + "/" + this.user.id
        ).then(function( response ){
                this.users = response.data;
            }.bind(this));
    },
    redirect_to(name_comp) {
      console.log('redirect_to: ', name_comp)
      this.$router.push({ name: name_comp, params: { userid: 0, workingtimeid: 0, username: "unknown"} })
    }
  },
  data() {
    return {
      user: {
        id: 0,
        username: "",
        email: ""
      },
      userid: 0,
      queries: {
        baseURL: "http://localhost:4000/api/users",
        get getUserByNameAndEmail() { return (this.queries.baseURL+ "?" + "username=" + this.user.username + "&" + "email=" + this.user.email)
      }},
      users: {},
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

/* test loading animated icon */
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>
