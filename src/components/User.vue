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

import { ref } from 'vue'

export default {
  name: "User",
  components: {},
  methods: {
    createUser() {
      console.log("createuser");
    },
    updateUser() {
      console.log("updateuser");
    },
    getUser() {
      console.log("getUser");
    },
    deleteUser() {
      console.log("deleteUser");
    },
    redirect_to(name_comp) {
      console.log('redirect_to: ', name_comp)
      this.$router.push({ name: name_comp, params: { userid: 0, workingtimeid: 0, username: "unknown"} })
    }
  },
  data() {
    return {
      user: {
        id: 0
      },
      userid: 0,
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
