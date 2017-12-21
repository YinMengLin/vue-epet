<template>
    <div class="shopcart-wrap">
      <div class="shopcart-bar">
        <div class="header">
          <router-link to="/cat" class="back-page"></router-link>
          <span class="bar-title">购物车</span>
          <span class="pull-right" @click="toggleHeadBottom"></span>
        </div>
        <div class="head-bottom" v-show="isShowHead">
          <router-link to="/cat" >
            <span class="icon1"></span>
            <p>首页</p>
          </router-link>
          <router-link to="/category/cat">
            <span class="icon2"></span>
            <p>商品分类</p>
          </router-link>
          <router-link to="/shopcart">
            <span class="icon3"></span>
            <p>购物车</p>
          </router-link>
          <router-link to="/myepet">
            <span class="icon4"></span>
            <p>我的e宠</p>
          </router-link>
        </div>
      </div>
      <div class="mycart">
        <div class="emptycart">
          <div class="emptycart-img">
            <span>&nbsp;</span>
          </div>
          <div class="emptycart-text">购物车是空的</div>
          <div class="emptycart-btn">
            <a href="javascript:;" class="btn-l">去逛逛</a>
            <a href="javascript:;">我的收藏</a>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <div class="footer">
          <div class="footer-top">
            <span class="f-active">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <div class="copy">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
      data(){
        return {
          isShowHead: false,
        }
      },
      methods: {
        toggleHeadBottom(){
          this.isShowHead = !this.isShowHead
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  padding-bottom 60px
  background #f5f5f5
  color #333
  line-height 20px
  min-width 320px
  .shopcart-wrap
    background-color
    .shopcart-bar
      .header
        color #333
        height 50px
        line-height 50px
        position relative
        padding 0 1em
        border-bottom 1px solid #f3f3f3
        background-color #fff
        text-align center
        .back-page
          background: url(./personal-bico1.png) no-repeat;
          background-size: 9px 17px;
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 17px;
        .bar-title
          width 90%
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          display block
          margin 0 auto
          font-size 18px
        .pull-right
          float right
          background url(./imgtk-new.png) no-repeat
          background-size 20px 20px
          position absolute
          top 15px;
          right 1em
          width: 20px
          height: 20px

      .head-bottom
        width 100%
        background #fff
        border-bottom 1px solid #d7d7d7
        overflow hidden
        padding 10px 0
        a
          display inline-block
          width 25%
          text-align center
          float left
          color #333
          span
            display block
            height 30px
            &.icon1
              background: url(./head_icon1.png) 50% 0 no-repeat;
              background-size: auto 100%;
            &.icon2
              background: url(./head_icon2.png) 50% 0 no-repeat;
              background-size: auto 100%;
            &.icon3
              background: url(./head_icon4.png) 50% 0 no-repeat;
              background-size: auto 100%;
            &.icon4
              background: url(./head_icon5.png) 50% 0 no-repeat;
              background-size: auto 100%;
          p
            color #666
            font-size 14px
            text-align center

    .mycart
      .emptycart
        padding-bottom 50px
        background-color #fff
        text-align center
        .emptycart-img
          span
            margin 50px auto 20px
            display inline-block
            width 100px
            height 100px
            background url(./cart-ico.png) no-repeat 0 -160px
            background-size 105px auto

        .emptycart-text
          color #dbdbdb
          font-size 1.4em
          text-align center
        .emptycart-btn
          margin-top 1.4em
          text-align center
          a
            display inline-block
            border-radius 5px
            border 1px solid #999
            height 40px
            line-height 40px
            width 100px
            color #999
            font-size 1.4em
            &.btn-l
              margin-right 0.2em
    .footer-bar
      .footer
        margin 1em 0 0
        padding-bottom 36px
        background #fff
        clear both
        .footer-top
          padding 15px 0 5px 0
          text-align center
          font-size 14px
          span
            padding-right 10px
            &.f-active
              color red
        .copy
          text-align center
          margin 0 10px 0 10px
          padding-bottom 25px
          font-size 12px
</style>
