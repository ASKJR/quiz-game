import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from './Buefy';
import 'buefy/dist/buefy.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import 'animate.css/animate.min.css'
import VueGtag from "vue-gtag";
import './filters'
import './components'

Vue.use(Buefy);

Vue.use(VueGtag, {
    config: { id: "G-VLNZ5DF9HL" }
}, router);
  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
