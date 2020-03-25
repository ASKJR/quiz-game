import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from "axios"
import { money } from "./helper/money"

axios.defaults.baseURL = 'https://opentdb.com/api.php'

Vue.filter('money', (value) => {
    return money(value);
});

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
