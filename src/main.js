import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

// createApp(App).use(VueChartkick).use(router).mount('#app')

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')