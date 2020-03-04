<template>
  <div id="container-fluid p-0">
    <vue-header />
    <router-view class="routerview" />
    <vue-footer />
  </div>
</template>

<script>
import VueHeader from '@/components/core/VueHeader'
import VueFooter from '@/components/core/VueFooter'
export default {
  components:{
    VueHeader,
    VueFooter
  }
}
</script>

<style scoped>
  .routerview {
    margin: 2rem auto;
  }
</style>

