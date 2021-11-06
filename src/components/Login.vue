<template>
    <div class="display-elements">

        <div class="q-pa-md" style="max-width: 600px; width: 600px">
            <h3>Login</h3>
            <q-form
                @submit="logInUser"
                class="q-gutter-md"
            >
                <q-input
                    filled
                    v-model="usernameLogin"
                    label="Your Username"
                    hint="Username"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                    filled
                    v-model="emailLogin"
                    label="email"
                    lazy-rules
                    :rules="[
                    val => val !== null && val !== '' || 'Please type your email'
                    ]"
                />
                <div>
                    <q-btn label="Submit" type="submit" color="secondary"/>
                </div>
            </q-form>

        </div>
        <q-separator vertical inset />
        <div class="q-pa-md" style="max-width: 600px; width:600px">
            <h3>Sign In</h3>
            <q-form
                @submit="signInUser"
                class="q-gutter-md"
            >
                <q-input
                    filled
                    v-model="usernameSignIn"
                    label="Your Username"
                    hint="Username"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                    filled
                    v-model="emailSignIn"
                    label="email"
                    lazy-rules
                    :rules="[
                    val => val !== null && val !== '' || 'Please type your email'
                    ]"
                />
                <div>
                    <q-btn label="Submit" type="submit" color="secondary"/>
                </div>
            </q-form>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import {getUserByUsernameAndEmail, createUser} from './usersRequest'

export default {
    name: "Login",

    data () {
        
        return {
            emailLogin: ref(null),
            usernameLogin: ref(null),
            
            emailSignIn: ref(null),
            usernameSignIn: ref(null),
        }
    },
    methods: {
        async logInUser() {
            await getUserByUsernameAndEmail(this.usernameLogin, this.emailLogin).then(
                response => {
                    console.log(response);
                    localStorage.userID = response.data.data[0].id;
                    this.emitToRefresh();
                },
                err => console.log("haroun error: " +err)
            );
        },
        async signInUser() {
            await createUser(this.usernameSignIn, this.emailSignIn).then(
                response => {
                    console.log(response)
                },
                err => console.log(err)
            );
        },
        emitToRefresh() {
            this.$emit('custon-event-name', { message: 'success' })
        }
    }

}
</script>

<style>

.display-elements {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    
}

.div-size {
    width: 90%;
}

</style>