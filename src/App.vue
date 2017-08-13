<template>
  <div>
    <place v-if="isShow" :show-place="showPlace" :path="path"></place>
    <router-view :show-place="showPlace" v-if="isShowHome"
                 :address="address" :getSale="getSale" :sale="sale"></router-view>
  </div>
</template>

<script>
  import place from './components/place/place.vue'
  import footer from './components/footer/footer.vue'
  export default{
    data(){
      return {
        isShow: false,
        isShowHome: true,
        path: '',
        address: '',
        sale:{}
      }
    },
    created(){
      this.path = this.$route.path
    },
    watch: {
      $route(){
        this.path = this.$route.path
      }
    },
    methods: {
      showPlace(address){
        this.isShow = !this.isShow
        this.isShowHome = !this.isShowHome
        this.address = address

        console.log(sale)
      },
      getSale(sale){
        this.sale = sale
      }
    },
    components: {
      place,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
