<template> 
    <div class="sizer">
        <div class="q-pa-md margin">
            <div class="q-gutter-md">
                <q-carousel
                    v-model="slide"
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    swipeable
                    animated
                    control-color="white"
                    prev-icon="arrow_left"
                    next-icon="arrow_right"
                    navigation-icon="radio_button_unchecked"
                    navigation
                    padding
                    arrows
                    height="400px"
                    width="600px"
                    class="bg-secondary text-white shadow-1 rounded-borders"
                >
                    <q-carousel-slide v-for="user in users" :key="user.username" :name="user.id" class="column no-wrap flex-center">
                        <div class="q-mt-md">
                            <user-card @adminDeleteUser="deleteUserByAdmin" :user="user"></user-card>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getAllUsers } from '../usersRequest'
import UserCardVue from './UserCard.vue'

export default {
    name:"Users",
    components: {
        'user-card': UserCardVue,
    },
    setup () {
        return {
            slide: ref(1),
        }
    },
    data () {
        return {
            users: ref(null)
        }
    },
    methods: {
        async getUsers() {
            await getAllUsers().then(
                response => {
                    console.log(response)
                    this.users = response.data.data
                },
                err => console.log(err)
            )
        },
        async deleteUserByAdmin(payload) {
            if (payload.message === "Success")
                await this.getUsers()
        }
    },
    async beforeMount() {
        await this.getUsers();
        console.log(this.users)
    }
}
</script>

<style scoped>

.margin {
    margin: 10px;
}

.sizer {
    max-width: 1000px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    justify-content: center;
}

</style>