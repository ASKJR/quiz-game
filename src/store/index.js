import Vue from 'vue'
import Vuex from 'vuex'
import question from './question'
import game from './game'
import ranking from './ranking'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    question,
    game,
    ranking
  }
})
