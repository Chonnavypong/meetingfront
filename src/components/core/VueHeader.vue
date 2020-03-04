<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <ul class="navbar-nav mr-auto">
          <li v-if="isAuth" class="nav-item active">
            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
          </li>
          <li v-if="!isAuth" class="nav-item active">
            <router-link :to="{name: 'signup'}" class="nav-link">SignUp</router-link>
          </li>
          <li v-if="!isAuth" >
            <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
          </li>
          <li v-if="isAuth" >
            <router-link :to="{name: 'test'}" class="nav-link">Test</router-link>
          </li>
        </ul>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <font-awesome-icon @click="onLogout()" :icon="['fas', 'sign-out-alt']" />
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "navbar",
  data() {
    return {
      user: null,
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated // ไม่ต้องใส่ isAuthenticated()
      // console.log('computed auth',this.$store.getters.isAuthenticated)
    }
  },
  methods: {
    ...mapActions(['logout']),
    onLogout() {
      axios.post('/api/v1/users/logout')
        .then( () => this.logout())
        .catch( error => console.log(error))
    }
  },
};
</script>

<style>
  svg.svg-inline--fa.fa-sign-out-alt.fa-w-16 {
    margin-left: 2rem;
    color: #17A2B8;
    font-size: 3rem;
    padding: 0.5rem;
    cursor: pointer;
  }
</style>