<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      <q-btn flat round dense icon="menu" v-if="isLogin" />
      <q-space />

      <q-btn v-if="isLogin" color="secondary" label="Dashboard" v-on:click="redirect_to('User')"/>
      <q-space />
      <q-btn v-if="isLogin && admin" color="secondary" label="Users" v-on:click="redirect_to('Users')"/>
      <q-space />
      <q-btn v-if="isLogin && admin" color="secondary" label="Teams" v-on:click="redirect_to('Teams')"/>

      <q-space />
      <div v-if="isLogin">
        <q-btn-dropdown stretch flat :label='user.username ? user && user.username : 0 '>
          <q-list>
            <q-item v-on:click="redirect_to('WorkingTimes')" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Dashboard</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label @click="layout = true">Parametre</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="disconnectFunc()">
              <q-item-section>
                <q-item-label>Deconnection</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>

    <q-dialog v-model="layout">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        
        <q-header class="bg-secondary">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title>{{user.username}}</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-drawer bordered v-model="drawer" :width="200" :breakpoint="600" class="bg-grey-3 q-pa-sm">
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
          >
            <q-tab name="Profile" label="Profile" />
            <q-tab name="Changes"  label="Changes" />
            <q-tab name="Team" label="Team" />
          </q-tabs>
        </q-drawer>

        <q-page-container>
          <q-page padding>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="Profile">
                  <div class="text-h4 q-mb-md">Public profile</div>
                  <q-separator />
                  <profile-header @updateUSer="updateUserData" :user='user'></profile-header>
                </q-tab-panel>

                <q-tab-panel name="Changes">
                  <div class="text-h4 q-mb-md">Alarms</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="Team">
                  <div class="text-h4 q-mb-md">Movies</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>
              </q-tab-panels>
          </q-page>

        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
  <div v-if="!isLogin">
    <login-view @custon-event-name="handelEventFromChild"></login-view>
  </div>
  <div v-else class="page-sizer">
    <router-view @deleteAccountEvent="handelDeleteEvent" ></router-view>
  </div>
</template>

<script>
import LoginVue from './components/Login.vue';
import { ref } from 'vue';
import { getUserByID } from './components/usersRequest'
import ProfileHeaderVue from './components/ProfileHeaderVue.vue';

export default {
  name: "App",
  components: {
    "login-view": LoginVue,
    "profile-header": ProfileHeaderVue,
},
  data() {
    return {
      isLogin: false,
      drawerLeft: ref(false),

    }
  },
  setup () {
    return {
      layout: ref(false),

      drawer: ref(false),
      userId: ref(null),

      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
      tab: ref('mails'),
      fab2: ref(false),
      user: ref(null),
      admin: ref(true),

    }
  },
  methods: {
    redirect_to(name_comp) {
      console.log('redirect_to: ', name_comp)
      this.$router.push({ name: name_comp, params: { userid: 0, workingtimeid: 0, username: "unknown"} })
    },
    async handelEventFromChild(payload) {
      console.log("payload")
      if (payload.message === "success")
        this.isLogin = true;
      await this.getUserInfo()
    },
    disconnectFunc() {
      localStorage.removeItem('userID')
      this.isLogin = false;
      this.$forceUpdate();
    },
    checkIfUserExist() {
      if (!localStorage.getItem('userID'))
        this.isLogin = false
    },
    handelDeleteEvent(payload) {
      console.log(payload);
      if (payload.message === "deleted") {
        this.isLogin = false
      }
    },
    async getUserInfo() {
      getUserByID(localStorage.userID).then(
        response => {
          this.user = response.data.data
          console.log(this.user)
        },
        err => console.log(err)
      )
    },
    async updateUserData(payload) {
      if (payload.message === "Updated") {
        await this.getUserInfo();
      }
    },
    activeDrawer() {
      this.drawerLeft = !this.drawerLeft
    }
  }
};
</script>


<style>
#app {
  /* Global style variables for layout, positioning, colors, font, viewport...*/

  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-size: calc(1.5rem + 3vw);
}

.page-sizer {
  display: flex;
  justify-content: center;
}

</style>
