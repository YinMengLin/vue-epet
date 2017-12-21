<template>
  <div class="footer-nav">
    <ul class="clearfix">
      <li class="index-a"><a href="javascript:;"></a></li>
      <li class="type-a"><a href="javascript:;"></a></li>
      <li class="cart-a"><a href="javascript:;"></a></li>
      <li class="myepet-a"><a href="javascript:;"></a></li>
    </ul>
  </div>
</template>

<script>
  export default{}
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
    li
      float left
      width 25%
      height 55px
      background-size auto 40px !important
    .index-a
      background url("./main_cattab_1_sel.png") no-repeat center
    .type-a
      background url("./main_tab_2.png") no-repeat center
    .cart-a
      background url("./main_tab_3.png") no-repeat center
    .myepet-a
      background url("./main_tab_4.png") no-repeat center
</style>
