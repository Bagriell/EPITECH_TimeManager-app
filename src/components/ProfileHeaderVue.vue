<template>
    <q-form
      @submit="changeUserData"
    >
        <div class="position-item">
            <label class="margin-px">Username</label>
            <q-input filled outlined v-model="username" :placeholder="user.username"/>
        </div>
        <div class="position-item">
            <label class="margin-px">Email</label>
            <q-input filled outlined v-model="email" :placeholder="user.email"/>
        </div>
        <div class="position-item">
            <q-btn color="secondary" label="Update Profile" type="submit"/>
        </div>
    </q-form>
</template>

<script>
import { updateUser } from './usersRequest';

export default {
    name:"ProfileHeader",
    emits: ["updateUSer"],
    props: {
        user: Object,
    },
    data() {
        return {
            username: "",
            email:""
        }
    },
    methods: {
        async changeUserData() {
            console.log(this.username)
            console.log(this.email)
            await updateUser(
                this.username != "" ? this.username : this.user.username,
                this.email != "" ? this.email : this.user.email,
                localStorage.userID
            ).then(
                response => {
                    console.log(response);
                    this.$emit('updateUSer', {message: 'Updated'})
                }       
            )
        }
    }
}
</script>


<style scoped>

.position-item {
    margin: 10px;
}
.margin-px {
    margin: 0 0 0 10px;
    font-size: 14px;
}
 
</style>