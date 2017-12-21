<template>
  <div class="place-wrap" ref="placeWarp">
    <div class="place" >
      <div class="bar-top">
        <div class="head-top">
          <div>
            <a class="back-page" href="javascript:;" @click="hidPlace"></a>
            <span class="bar-title">选择收货地区</span>
            <span class="pull-right" @click="toggleHeadBottom"></span>
          </div>
        </div>
        <div class="head-bottom" v-show="isShowHead">
          <router-link :to="this.path" @click.native="hidPlace">
            <span class="icon1"></span>
            <p>首页</p>
          </router-link>
          <router-link :to="`/category${this.path}`" @click.native="hidPlace">
            <span class="icon2"></span>
            <p>商品分类</p>
          </router-link>
          <router-link to="/shopcart" @click.native="hidPlace">
            <span class="icon3"></span>
            <p>购物车</p>
          </router-link>
          <router-link to="/myepet" @click.native="hidPlace">
            <span class="icon4"></span>
            <p>我的e宠</p>
          </router-link>
        </div>
      </div>
      <div class="address-wrap">
        <div class="cat-dog clearfix">
          <router-link ref="cat" to="/cat" @click.native="hidPlace" tag="div" class="btn">
            猫站
          </router-link>
          <router-link ref="dog" to="/dog" @click.native="hidPlace" tag="div" class="btn">
            狗站
          </router-link>
          <router-link ref="fish" to="/fish" @click.native="hidPlace" tag="div" class="btn">
            水族站
          </router-link>
        </div>
        <div class="pagetop" ref="pagetop">
          <div class="yselect">
            选择地址
          </div>
        </div>
        <ul class="citis-list">
          <li class="city" v-for="item in 25">北京</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default{
    data(){
      return {
        isShowHead: false,
      }
    },
    created(){
      this.$nextTick(()=>{
        this._initScroll()
      })
    },
    props: ['showPlace','path'],
    methods: {
      hidPlace(){
        this.showPlace();
      },
      toggleHeadBottom(){
        this.isShowHead = !this.isShowHead
      },
      _initScroll(){
        this.scroll = new Bscroll(this.$refs.placeWarp,{
          click: true,
          bounce: false,
          probeType: 3
        })
        this.scroll.on('scroll', (pos) => {
          if(pos.y < -10){
            this.$refs.pagetop.classList.add('floathearder')
          }else if(pos.y >= -109){
            this.$refs.pagetop.classList.remove('floathearder')
          }
        })
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.place-wrap
  width 100%
  position absolute
  top 0
  bottom 0
  .place
    background-color #fff
    .bar-top
      .head-top
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

    .address-wrap
      background-color #F5F5F5
      .cat-dog
        padding 10px
        .btn
          width 98px
          float left
          background-color #b9b9b9
          color #666
          border-radius 5px
          font-size 15px
          padding 6px 0
          margin 0 10px
          text-align center
          &.active
            background #ff0000
            color #fff
      .pagetop
        &.floathearder
          position fixed
          top 0
          left 0
          background #fff
          width 100%
          z-index 1000
          box-shadow 2px 2px 2px #e9e9e9
        .yselect
          border-bottom 1px solid #e7e7e7
          background #ffe6d9
          font-size 14px
          padding 10px
          color #333
      .citis-list
        background-color #fff
        .city
          border-bottom 1px solid #e7e7e7
          font-size 14px
          padding 10px
          color #000
          font-weight 200
</style>
