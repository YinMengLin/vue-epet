<template>
    <div class="user-wrap">
      <div class="user-bar">
        <div class="header">
          <router-link to="/myepet" class="back-page"></router-link>
          <span class="bar-title">我的E宠</span>
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
      <div class="user-content">
        <div class="user-account clearfix">
          <img class="user-avatar" src="https://img2.epetbar.com/dogs/5.jpg@!water" alt="">
          <div class="user-name">
            <p class="top">{{this.user.username}}</p>
            <p class="bott">
              <img src="https://static.epetbar.com/mpet/images/user/group_icon/9.png" alt="">
              <span>纸牌</span>
            </p>
          </div>
          <a href="" class="account-link">
            <span>账户安全管理</span>
            <Icon type="chevron-right"></Icon>
          </a>
        </div>
      </div>

      <div class="close-btn" @click="closeUser">退出</div>
    </div>
</template>

<script>
  export default{
    data(){
      return {
        user:{}
      }
    },
    data(){
      return {
        isShowHead: false,
      }
    },
    created(){
      if(this.$route.query){
        this.user = this.$route.query
        console.log(this.user)
      }
    },
    methods: {
      toggleHeadBottom(){
        this.isShowHead = !this.isShowHead
      },
      closeUser(){
        localStorage.clear('username')
        this.$router.push('/myepet')
      }
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
  .user-wrap
    .user-bar
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

    .user-content
      max-width 640px
      margin auto
      .user-account
        background-color #fff
        padding 15px
        .user-avatar
          border 5px solid #ebebeb
          border-radius 50%
          float left
          width 76px
          height 76px
        .user-name
          margin 10px 0 0 15px
          float left
          .top
            font-size 16px
            color #424242
          .bott
            margin-top 5px
            img
              width 16px
              vertical-align middle
            span
              color #999
              font-size 12px


        .account-link
          display block
          float right
          color #333
          span
            color #999
            line-height 76px
    .close-btn
      height 42px
      line-height 42px
      font-size 16px
      background #f03131
      border-radius 3px
      vertical-align middle
      padding 0 20px
      color #fff
      margin 20px 10px
      text-align center

</style>
