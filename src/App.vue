<template>
  <router-view>
    <HelloWorld/>
  </router-view>

</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
  name: 'App',
  components: {
  HelloWorld
  },
  data () {
  return {
  //
  }
  }
  }
</script>