<template>
    <q-btn class="glossy" rounded color="deep-orange" label="Delete Account" @click="confirm = true" />
    <q-dialog v-model="confirm" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <q-avatar icon="delete" color="secondary" text-color="white" />
                <span class="q-ml-sm">Are you sure you want delete this account ?</span>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Cancel" color="secondary" v-close-popup />
                <q-btn flat label="Confirme" color="secondary" v-close-popup @click="deleteActiveUser()" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue';
import {deleteUser} from './usersRequest'


export default {
    name: 'Delete',
    emits:['deleteUser'],
    props:{
        id: Number
    },
    methods: {
        async deleteActiveUser() {
            deleteUser(this.id).then(
                response => {
                    console.log(response)
                    this.$emit('deleteUser', {message: 'deleted'})
                    this.$forceUpdate()
                },
                err => {
                    console.log(err);
                }
            )
        },
    },
    data () {
        return {
            confirm: ref(false),

        }
    }
}
</script>

<style>

</style>