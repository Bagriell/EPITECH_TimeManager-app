<template>
    <div class="q-pa-md" style="max-width: 400px">

        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >
            <q-input
                filled
                v-model="name"
                label="Your Username"
                hint="Username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                v-model="age"
                label="email"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type your email'
                ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Login",

    data () {
        
        return {
            age: ref(null),
            accept: ref(false),
            name: ref(null),
        }
    },
    methods: {
        showData() {
            console.log(this.name, this.age)
        },
        onSubmit () {
            if (this.accept !== true) {
                return (this.onReset())
            }
            console.log(this.name, this.age);
        },
        onReset () {
            this.name = null
            this.age = null
            this.accept = false
        }
    }

}
</script>

<style>

</style>