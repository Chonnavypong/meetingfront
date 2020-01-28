<template>
  <div id="hearder">
      <ul>
        <vue-header/>
      </ul>
    <router-view />
  </div>
</template>

<script>
import VueHeader from './components/core/VueHeader'
export default {
  components:{
    VueHeader
  }
}
</script>

