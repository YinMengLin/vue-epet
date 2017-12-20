<template>
  <div>
    <epet-header></epet-header>
    <place></place>
    <router-view></router-view>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import place from './components/place/place.vue'
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  export default{
    components: {
      place,
      'epet-header': header,
      'epet-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
