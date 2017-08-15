<template>
    <div class="register-wrap">
      <div class="register">
        <form action="###" method="post">
          <ul class="inp-list">
            <li class="inp-item">
              <span class="icon-tel"></span>
              <input type="text" placeholder="请输入手机号码" class="text-tel" v-model="tel" @input="changeInput">
            </li>
            <li class="inp-item" v-show="isShow">
              <span class="icon-auth"></span>
              <input type="text" placeholder="图片验证码" class="text-tel" v-model="authText">
              <div id="v_container" ref="vContainer"></div>
            </li>
            <li class="inp-item" v-if="isShow">
              <span class="verification"></span>
              <input type="text" placeholder="验证码" class="text-tel" v-model="inputCode" @input="changeInput">
              <Button type="warning" shape="circle" class="verification-btn" @click="sendSMS">获取短信验证码</Button>
            </li>
            <li class="inp-item" v-if="isShow">
              <span class="icon-email"></span>
              <input type="text" placeholder="你的昵称/用户名" class="text-tel" v-model="username" @input="changeInput">
            </li>
            <li class="inp-item" v-if="isShow">
              <span class="icon-password"></span>
              <input type="password" placeholder="请设置密码" class="text-tel" v-model="password" @input="changeInput">
            </li>
            <li class="inp-item" v-if="isShow">
              <span class="icon-password"></span>
              <input type="password" placeholder="请确认密码" class="text-tel" v-model="rPassword" @input="changeInput">
            </li>
          </ul>
          <div class="res-btn" @click="nextClick">
            <Button type="warning" shape="circle" :long="true" :disabled="true" ref="resBtn">下一步</Button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import GVerify from '../../tools/gVerify'
  export default{
    data(){
      return{
        tel: '',
        authText: '',
        inputCode: '',
        resCode: '',
        username: '',
        password: '',
        rPassword: '',
        isShow: false
      }
    },
    created(){
       this.$nextTick(()=>{
         this._foundAuth()
       })
    },
    methods: {
      changeInput(){
        if(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.tel)){
          this.$refs.resBtn.$el.disabled = false
        }else {
          this.$refs.resBtn.$el.disabled = true
        }
      },
      _foundAuth(){
        this.verifyCode = new GVerify({
          id: "v_container", //容器Id
          num:4,//默认4，长度
        })
      },
      nextClick(){
        let username = this.username.trim()
        let password = this.password.trim()
        let rPassword = this.rPassword.trim()
        let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${username}&r_password=${password}&r_confirmPassword=${rPassword}`
        if(this.isShow){
          /*if(this.verifyCode.validate(this.authText)){
            if(this.inputCode === this.resCode){

            }else {
              alert("短信验证码不正确！")
            }
          }else{
            alert("请正确输入图片验证码！")
          }*/

          if(!this.verifyCode.validate(this.authText)){
            alert("请正确输入图片验证码！")
            return
          }else if (!this.inputCode === this.resCode){
            alert("短信验证码不正确！")
            return
          }else if(password === rPassword){
            axios.get(url)
              .then(res => {
                if(res.data){
                  localStorage.setItem('username',username)
                  this.$router.push('/myepet')
                }
              })
          }
        }
        this.isShow = true
      },
      sendSMS(){
        axios.get('/api2/getcode')
          .then(res => {
             this.resCode = res.data;
          })
          .catch(err => {
            if(err){
              alert("验证码发送失败，请重新发送！")
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background-color #fff
.register-wrap
  .register
    .inp-list
      margin-left 1em
      .inp-item
        border-bottom #e2e2e2 solid 1px
        padding 1.2em 0 1.2em 30px
        position relative
        .icon-tel
          float left
          display inline
          width 17px
          height 17px
          background url(./ico1.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        .icon-auth
          float left
          display inline
          width 17px
          height 17px
          background url(./ico5.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        #v_container
          position absolute
          right 20px
          top 15px
          width 85px
          height 30px
        .verification
          float left
          display inline
          width 17px
          height 17px
          background url(./ico2.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        .verification-btn
          position absolute
          right 20px
          top 10px
          width 120px
          background-color #fed171
          border-color #fed171
        .icon-email
          float left
          display inline
          width 17px
          height 17px
          background url(./ico3.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        .icon-password
          float left
          display inline
          width 17px
          height 17px
          background url(./ico4.png) no-repeat
          background-size contain
          margin 2px 0 0 -25px
        .text-tel
          border-radius 3px
          outline none
          display block
          height 21px
          width 100%
          font-size 1.4em
          border none
          padding 0
          color #b8b8b8
          background-color #fff
    .res-btn
      margin-top 2em
      padding-top 1.5em
      text-align center
      .ivu-btn
        font-size 1.2em
        width 80%
        margin 0 10%
        padding 0.5em 0
        &.ivu-btn-warning[disabled]
          background-color #d7d7d7
          color #fff
</style>
