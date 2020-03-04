import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Test from '../views/Test'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
    path: '/home', name: 'home', component: Home},
  { path: '/login', name: 'login', component: Login},
  { path: '/signup', name: 'signup', component: SignUp},
  { path: '/test', name: 'test', component: Test, meta: {auth: true}}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// ตรวจสอบสิทธ์การเข้าถึงหน้า
router.beforeEach( (to, from, next) => {
  console.log('beforEach', to.meta.auth)
  if (!to.meta.auth) {
    return next()
  } else if ( store.state.token ) {
    console.log( store.state.user )
    console.log('router.app.$store.state.user ',router.app.$store.state.user )
    //router.app.$store.dispatch('') // Actions ในStore สำหรับ get User
    //.then( () => next () )
    //.catch( () => next({ name: 'login' }))
    next()
  } else {
    next('/login')
  }
})

export default router