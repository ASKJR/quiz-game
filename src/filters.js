import Vue from 'vue'
import { money } from "./helper/money"
import { timestamp } from "./helper/date"

Vue.filter('money', (value) => {
    return money(value);
});

Vue.filter('timestamp', (value) => {
    return timestamp(value);
});
