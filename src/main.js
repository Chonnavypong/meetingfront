import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'
// import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/style.css'
import * as jquery from 'jquery'

// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1'
// axios.defaults.headers.common['Authorization'] = ksoeijwo


// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally -> จาก package vee-validate
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

// ใช้งาน jquery
Vue.prototype.jquery = jquery


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
