import Vue from 'vue'
import VueRouter from 'vue-router'
import Reward from '../views/Reward.vue'
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
    path: '/rewards',
    name: 'rewards',
    component: Reward
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '*',
    component: Question
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
