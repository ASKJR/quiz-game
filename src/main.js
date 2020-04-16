import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { money } from "./helper/money"
import 'vue2-animate/dist/vue2-animate.min.css'
import 'animate.css/animate.min.css'
import VueMoment from 'vue-moment'
import VueGtag from "vue-gtag";

Vue.filter('money', (value) => {
    return money(value);
});

Vue.use(Buefy)

Vue.use(VueMoment)

Vue.use(VueGtag, {
    config: { id: "G-VLNZ5DF9HL" }
}, router);
  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
