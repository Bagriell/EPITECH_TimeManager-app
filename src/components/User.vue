<template>
<div class="display-info display-flex-direction">
    <div class="display-info">
      <q-card dark bordered class="bg-secondary my-card margin-add">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
          {{ lorem }}
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card dark bordered class="bg-secondary my-card margin-add">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
          {{ lorem }}
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
    <div class="delete-button">
      <q-btn class="glossy" rounded color="deep-orange" label="Delete Account" @click="confirm = true" />
    </div>
  </div>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete" color="secondary" text-color="white" />
        <span class="q-ml-sm">Are you sure you want delete this account ?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="secondary" v-close-popup />
        <q-btn flat label="Confirme" color="secondary" v-close-popup @click="deleteUser()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {createUser, updateUser, getAllUsers, deleteUser, getUserByUsernameAndEmail} from './usersRequest'
import { ref } from 'vue';

export default {
  name: "User",
  components: {},
  methods: {
    // CREATE a new User, using username + email combo. THEN it store the id,email,username in the data of the component
    async create() {
      await createUser(this.user.username, this.user.email).then(
        response => {
          this.user.id = response.data.data.id;
          this.user.username = response.data.data.username;
          this.user.email = response.data.data.email;
        }
      );
    },
      // UPDATE the current User, using username + email combo. THEN it update the email,username in the data of the component
    async update() {
      await updateUser(this.user.username, this.user.email, this.user.id).then(
        response => {
          this.user.username = response.data.data.username;
          this.user.email = response.data.data.email;

          // DEBUG LOG - For testing
          console.log(response);
        }
      )
    },
    // GET the current user, using Username and Email combo. THEN it update the id,username,email in the data of the component AND STORE the ID value of the response to the Local Storage.
    async get() {
      await getUserByUsernameAndEmail(this.user.username, this.user.email).then(
        response => {
          
          this.user.username = response.data.data[0].username;
          this.user.email = response.data.data[0].email;
          this.user.id = response.data.data[0].id;
          
          localStorage.userID = response.data.data[0].id;
          
          // DEBUG LOG - For testing
          console.log("USERNAME : " + response.data.data[0].username);
          console.log("EMAIL : " + response.data.data[0].email);
          console.log("ID : " + response.data.data[0].id);
          console.log(response);
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

              // DEBUG LOG - For testing
              console.log("USERNAME : " + this.users.username[index]);
              console.log("EMAIL : " + this.users.email[index]);
              console.log("ID : " + this.users.id[index]);
              console.log(response);
            }
        }
      )
    },
    // Simply SHOW / HIDE Input fields for updating the current Username and Email of the User
    showEditWindow() {this.editUserInfo = !this.editUserInfo},
    // DELETE ACTIVE/NEWLY CREATED USER using the correct ID, AND REMOVE LOCAL STORAGE KEY
    async deleteActiveUser() {
        await deleteUser(this.user.id);
        localStorage.removeItem("userID");
    },
    // SWITCH BETWEEN COMPONENTS (Working Times, Clock...)
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
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
      confirm: ref(false),
    };
  },
};
</script>

<style scoped>


.display-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
}

.display-flex-direction {
  flex-direction: column;
}

.margin-add {
  margin: 10px
}

.my-card {
  width: 100%;
  max-width: 400px;
}

.delete-button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
}


</style>
