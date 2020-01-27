<template>
  <div id="app">
    <div id="nav" class="container">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'register'}">Register</router-link>
        </li>
        <li>
          <router-link :to="{name: 'login'}">Login</router-link>
        </li>
        <li>
          <router-link :to="{name: 'test'}">Test</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
li {
  display: inline;
  margin-right: 8px;
}

input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}
</style>>
