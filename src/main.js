import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from './Buefy';
import 'buefy/dist/buefy.css'
import { money } from "./helper/money"
import { timestamp } from "./helper/date"
import 'vue2-animate/dist/vue2-animate.min.css'
import 'animate.css/animate.min.css'
import VueGtag from "vue-gtag";
//font-awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFrown, faTimes, faCheck, faRedoAlt, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFrown, faTimes, faCheck, faRedoAlt, faAngleDoubleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy);

Vue.filter('money', (value) => {
    return money(value);
});

Vue.filter('timestamp', (value) => {
    return timestamp(value);
});


Vue.use(VueGtag, {
    config: { id: "G-VLNZ5DF9HL" }
}, router);
  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
