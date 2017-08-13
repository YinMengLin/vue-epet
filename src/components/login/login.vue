<template>
    <div class="iogin-wrap">
      <div class="login-header">
        <div class="head-top">
          <router-link to="/cat" class="back-page"></router-link>
          <div class="text">
            <router-link to="/register">注册</router-link>
          </div>
        </div>
        <div class="mlogo">
          <img src="./logo.png" alt="">
        </div>
        <div class="es_por">
          <ul class="clearfix login_style">
            <li class="selectTag">
              <a href="javascript:;">普通登录</a>
              <span ></span>
            </li>
            <li>
              <a href="javascript:;">手机动态密码登录</a>
              <span class="no-active"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-content">
        <div class="form-warp">
          <div class="common-login">
            <form action="###" class="form1">
              <div class="username">
                <span class="us"></span>
                <input type="text" name="username" placeholder="手机号/邮箱/用户名" v-model="username">
              </div>
              <div class="password">
                <span class="pw"></span>
                <input type="password" name="password" placeholder="输入密码" v-model="password">
              </div>
            </form>
          </div>
          <div class=" note-login" style="display: none">
            <form action="###" class="form1">
              <div class="username">
                <span class="us"></span>
                <input type="text" name="username" placeholder="手机号/邮箱/用户名">
              </div>
              <div class="password">
                <span class="pw"></span>
                <input type="password" name="password" placeholder="输入密码">
              </div>
            </form>
          </div>
        </div>
        <div class="forget">
          <a href="javascript:;">
            忘记密码？
          </a>
        </div>
        <div class="login-btn" @click="login">
          <a href="javascript:;">登录</a>
        </div>
        <div class="other-login">
          <div class="partners">合作网站登录</div>
          <ul class="list clearfix">
            <li class="zfb">
              <img src="./login_ico4.png" alt="">
            </li>
            <li class="qq">
              <img src="./login_ico2.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login(){
        let username = this.username.trim();
        let password = this.password.trim();
        let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}`
        axios.get(url)
          .then(response => {
            if(response.data){
              let username = response.data.NickUserName;
              localStorage.setItem('username',username);
              this.$router.push({
                path: `/user:${username}`,
                query: {username:username}
              })
            }else {
                alert('密码或用户名错误')
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.iogin-wrap
  .login-header
    background url(./login-bg.png) no-repeat
    background-size 100% 100%
    .head-top
      height 50px
      line-height 50px
      position relative
      padding 0 1em
      text-align center
      .back-page
        background url(./personal-bico3.png) no-repeat
        background-size 12px 17px
        display block
        width 22px
        height 20px
        position absolute
        margin-top 16px
      .text
        position absolute
        right 1.2em
        top 0
        a
          color #fff
          font-size 1.3em
    .mlogo
      padding 1em 0 2em 0
      img
        display block
        margin auto
        width 20%
    .es_por
      background-color rgba(255,255,255,0.3)
      .login_style
        li
          float left
          width 50%
          text-align center
          height 44px
          line-height 44px
          position relative
          a
            font-size 1.2em
            color #fff
            display block
          .no-active
            display none
          span
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            position absolute
            bottom 0
            left 0
            right 0
            margin auto

  .login-content
    background #fff
    .form-warp
      background #fff
      border-radius 0.5em
      margin 0 4% 1em 4%
      padding 0 1.6%
      .common-login
        .form1
          div
            border-bottom #e2e2e2 solid 1px
            padding 1.2em 0 1.2em 30px
            position relative
            span
              float left
              display inline
              width 17px
              height 21px
              margin 0px 0 0 -25px
              &.us
                background url(./ico3.png) no-repeat
                background-size contain
              &.pw
                background url(./ico4.png) no-repeat
                background-size contain
            input
              display block
              height 21px
              width 100%
              font-size 1.2em
              border none
              padding 0
              color #666
              font-family "Microsoft Yahei",tahoma,arial
              outline none
              border-radius 3px

    .forget
      padding 0 2em
      overflow hidden
      a
        color #898989
        font-size 1.1em
        float right
    .login-btn
      padding-top 0.5em
      text-align center
      a
        color #fff
        display block
        letter-spacing 5px
        margin 0 4%
        border-radius 5px
        background #2ec975
        font-size 1.4em
        padding .6em 0
        text-align center
    .other-login
      margin-top 10em
      .partners
        font-weight normal
        font-size 1.3em
        color #d7d7d7
        margin-top 0.5em
        text-align center
      .list
        padding 1.5em 0
        li
          width 33.3%
          padding 0 1.2em
          float left
          display inline
          img
            width 60%
            height auto
            display block
            margin auto
            max-width 176px

</style>
