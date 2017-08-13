<template>
  <div class="footer-nav clearfix">
    <router-link :to="{path:getHomePath}" class="index-a"></router-link>
    <router-link :to="{path:homePath}" class="type-a"></router-link>
    <router-link to="/shopcart" class="cart-a"></router-link>
    <router-link to="/myepet" class="myepet-a"></router-link>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        homePath: '',
        path: ''
      }
    },
    created(){
      this.path = this.$route.path
      let path = this.$route.path
      let homePath = this.path
      let hPath = '/category' + this.path
      if(path === hPath){
        this.homePath = path
      }else {
        this.homePath = hPath
      }
    },
    computed: {
      getHomePath(){
        let path = '/' + this.path.split('/')[2]
        if(path === '/undefined'){
          path = this.path
        }
        return path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-nav
    position fixed
    left 0
    bottom 0
    border-top 1px solid #e7e7e7
    height 55px
    width 100%
    line-height 45px
    z-index 100
    background-color #fff
    a
      float left
      width 25%
      height 55px
      background-size auto 40px !important
      &.index-a
        background url("./main_tab_1.png") no-repeat center
        &.active
          background url("./main_cattab_1_sel.png") no-repeat center
      &.type-a
        background url("./main_tab_2.png") no-repeat center
        &.active
          background url("./main_cattab_2_sel.png") no-repeat center
      &.cart-a
           background url("./main_tab_3.png") no-repeat center
      &.myepet-a
           background url("./main_tab_4.png") no-repeat center


</style>
