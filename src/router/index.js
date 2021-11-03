import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/workingTimes/:userid', // display all workingtimes
    name: 'WorkingTimes',
    component: () => import('../components/WorkingTimes.vue')
  },
  {
    path: '/workingTime/:userid',  // create one working time
    name: 'WorkingTime',
    component: () => import('../components/WorkingTime.vue')
  },
  {
    path: '/workingTime/:userid/:workingtimeid',     // edit one working time
    name: 'WorkingTime_editing',
    component: () => import('../components/WorkingTime.vue')
  },
  {
    path: '/clock/:username',
    name: 'ClockManager',
    component: () => import('../components/ClockManager.vue')
  },
  {
    path: '/chartManager/:userid',
    name: 'ChartManager',
    component: () => import('../components/ChartManager.vue')
  },
  {
    path: '/user/:userid',
    name: 'User',
    component: () => import ('../components/User.vue')
  },
  {
    path: '/',
    name: 'User',
    component: () => import('../components/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
