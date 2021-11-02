<template>
  <div class="sidenav-container">
    <button v-on:click="redirect_to('WorkingTimes')" class ="sidenav-button">WorkingTime</button>
    <button v-on:click="redirect_to('ClockManager')" class ="sidenav-button">ClockManager</button>
    <button v-on:click="redirect_to('ChartManager')" class ="sidenav-button">ChartManager</button>
    <ul>
      <div class="sidenav-elem" v-if="this.user.id == 0">
        <input type="text" name="username" v-model="user.username" placeholder="Username" />
        <input type="text" name="password" v-model="user.email" placeholder="Email" />
        <button type="button" v-on:click="create()">Register</button>
      </div>
      <div class="sidenav-elem" v-else-if="this.user.id != 0">
        <div class="profile-info">
          <button>
            Welcome {{ this.user.username }}!
          </button>
          <div>----------------</div>
          <div>
              User Info :
            <div>
                <button>
                  Email: {{ this.user.email }}
                </button>
            </div>
            <div>
              <button>
                ID: {{ this.user.id }}
              </button>
            </div>
              ----------------
          </div>
        </div>
      </div>
      <div class="sidenav-elem" @click="showEditWindow()">UpdateUserInfo</div>
      <div class="sidenav-elem" v-if="this.editUserInfo == true">
        <input type="text" name="username" v-model="user.username" placeholder="Username" />
        <input type="text" name="password" v-model="user.email" placeholder="Email" />
        <button type="button" v-on:click="update()">Update</button>
      </div>
      <div class="sidenav-elem" @click="get()">getUser</div>
      <div class="sidenav-elem" @click="deleteActiveUser()">DeleteUser</div>
    </ul>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import {createUser, updateUser, getUser, getAllUsers, deleteUser} from './usersRequest'

export default {
  name: "User",
  components: {},
  methods: {
    async create() {
      await createUser(this.user.username, this.user.email).then(
        response => {
          this.user.id = response.data.data.id;
          this.user.username = response.data.data.username;
          this.user.email = response.data.data.email;
        }
      );
    },
    async update() {
      await updateUser(this.user.username, this.user.email, this.user.id).then(
        response => {
          this.user.username = response.data.data.username;
          this.user.email = response.data.data.email;
        }
      )
    },
    async get() {
      await getUser(this.user.id).then(
        response => {
          console.log("USERNAME : " + response.data.data.username);
          console.log("EMAIL : " + response.data.data.email);
          console.log("ID : " + response.data.data.id);

          this.user.username = response.data.data.username;
          this.user.email = response.data.data.email;
        }
      );
    },
    async getAll() {
      await getAllUsers().then(
        response => {
            for (let index = 0; index < response.data.data.length; index++) {
              this.users.id[index] = response.data.data[index].id;
              this.users.username[index] = response.data.data[index].username;
              this.users.email[index] = response.data.data[index].email;

              console.log("USERNAME : " + this.users.username[index]);
              console.log("EMAIL : " + this.users.email[index]);
              console.log("ID : " + this.users.id[index]);
            }
        }
      )
    },
    showEditWindow() {this.editUserInfo = !this.editUserInfo},
    async deleteActiveUser() {
        await deleteUser(this.user.id);
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
      editUserInfo: false,
      userid: 0,
      queries: {
        baseURL: "http://localhost:4000/api/users",
      },
      users: {
        id: [],
        username: [],
        email: [],
      },
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
