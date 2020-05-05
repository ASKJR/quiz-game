import Vue from 'vue'
//font-awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFrown, faTimes, faCheck, faRedoAlt, faAngleDoubleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFrown, faTimes, faCheck, faRedoAlt, faAngleDoubleRight, faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('appError', () => import('./components/Error.vue'))