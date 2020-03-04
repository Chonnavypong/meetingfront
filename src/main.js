import Vue from 'vue'

// import axios from 'axios'

import App from './App.vue'
import store from './store'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/style.css'
import * as jquery from 'jquery'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faTrash, faBeer, faAddressBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faAddressBook, faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1'
// axios.defaults.headers.common['Authorization'] = ksoeijwo

Vue.config.productionTip = false

// ใช้งาน jquery
Vue.prototype.jquery = jquery

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
