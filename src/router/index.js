import Vue from 'vue'
import VueRouter from 'vue-router'
import Prize from '../views/Prize.vue'
import Ranking from '../views/Ranking.vue'
import Question from '../views/Question.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'question',
    component: Question
  },  
  {
    path: '/prizes',
    name: 'prizes',
    component: Prize
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
