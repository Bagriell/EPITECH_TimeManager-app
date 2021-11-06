<template>
    <div>
        <q-card class="my-card bg-secondary text-white">
            <q-card-section>
                <div class="text-h6">{{user.username}}</div>
                <div class="text-subtitle2">{{user.email}}</div>
            </q-card-section>

            <q-card-section>
                <div class="text-subtitle2">Team: TeamName</div>
                <div class="text-subtitle2">Role: Role</div>
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <delete-user :id='user.id'></delete-user>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import DeleteVue from '../Delete.vue'
export default {
    name:"UserCard",
    emits:['adminDeleteUser'],
    props: {
        user: Object
    },
    components: {
        'delete-user': DeleteVue
    },
    methods: {
        emitEvent() {
            this.$emit('adminDeleteUser', {message: "Success"})
        }
    }
}
</script>

<style>

</style>