import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { server } from '@/services/constants'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    user: null
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.token != null
    }
  },
  mutations: {
    authUser (state, userData) {
      state.token = userData.token
    },
    storeUserId ( state, userData ){
      state.userId = userData.user.id
    },
    storeUser (state, userData) { 
      state.user = userData.user 
    },
    clearAuthData ( state ) {
      state.token = null
      state.user = null
      state.userId = null
    }
  },
  actions: {
    async login ({commit, dispatch}, authData){
      const result = await axios.post('/api/v1/users/login', {
        email: authData.email,
        password: authData.password
      })
      if ( result.data.status === 'success') {
        // console.log(result.data)
        commit('authUser', result.data)
        commit('storeUserId', result.data.doc)
        commit('storeUser', result.data.doc)
        localStorage.setItem(server.TOKEN_KEY, result.data.token)
      }
    },
    logout ({commit}) {
      console.log('Action Store Logout')
      commit('clearAuthData')
      localStorage.removeItem('token')
      router.replace({name: 'login'})
    }
  },
  modules: {}
})