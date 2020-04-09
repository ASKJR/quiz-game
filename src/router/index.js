import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'question',
    component: () => import('../views/Question.vue')
  },   
  {
    path: '/rewards',
    name: 'rewards',
    component: () => import('../views/Reward.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../views/Ranking.vue')
  },
  {
    path: '*',
    component: () => import('../views/Question.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
