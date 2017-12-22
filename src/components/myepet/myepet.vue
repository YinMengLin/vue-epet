<template>
    <div class="myepet-wrap">
      <div class="hint-wrap" v-if="showHint">
        <div class="hint-bar">
          <div class="header">
            <router-link to="/cat" class="back-page"></router-link>
            <span class="bar-title">提示信息</span>
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
        <div class="hint-content">
          <img src="//static.epetbar.com/mpet/images/worning.png" width="28.5%" class="tip-img"/>
          <p class="msg-content">验证登录中...</p>
          <p class="tip-oneline">如果没有自动跳转，请手动点击！</p>
          <a href="javascript:;" class="target-btn">立即跳转</a>
        </div>
      </div>
      <login v-if="showLogin"></login>
    </div>
</template>

<script>
  import login from '../login/login.vue'
    export default{
      data(){
        return {
          showHint: true,
          showLogin: false,
          isShowHead: false
        }
      },
      created(){
        setTimeout(()=>{
          this.showHint = false;
          this.showLogin = true;
        },2000)
      },
      methods: {
        toggleHeadBottom(){
          this.isShowHead = !this.isShowHead
        },
      },
      components: {
        login
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
    .myepet-wrap
      .hint-wrap
        .hint-bar
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

        .hint-content
          text-align center
          .tip-img
            margin-top 50px
          .msg-content
            font-size 1.4em
            margin-top 30px
          .tip-oneline
            margin-top 30px
            font-size 1.2em
            color #898989
          .target-btn
            margin-top 1.4em
            text-align center
            display inline-block
            border-radius 5px
            border 1px solid #999
            height 35px
            line-height 35px
            width 100px
            color #999
            font-size 1.2em
</style>
