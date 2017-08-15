<template>
  <div class="wrap" ref="catsalewrap">
    <div class="catsale-wrap" >
      <div class="catsale-bar">
        <div class="header">
          <router-link to="/cat" class="back-page"></router-link>
          <span class="bar-title">品牌特卖</span>
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
      <div class="banner">
        <img :src="sale.banner.image" alt="">
      </div>
      <div class="content-wrap">
        <div class="tabs" ref="tabs">
          <ul class="tab-list clearfix" >
            <li class="tab-item active" id="1" @click.stop="changeItem(1)">
              <span class="icons yicon1"></span>
              <div class="navtit">
                <p class="text-top">最新上架</p>
                <p class="text-bott">New arrival</p>
              </div>
            </li>
            <li class="tab-item" id="2" @click.stop="changeItem(2)">
              <span class="icons wicon2"></span>
              <div class="navtit">
                <p class="text-top">最热活动</p>
                <p class="text-bott">The hottest</p>
              </div>
            </li>
            <li class="tab-item" id="3" @click.stop="changeItem(3)">
              <span class="icons wicon3"></span>
              <div class="navtit">
                <p class="text-top">主粮</p>
                <p class="text-bott">Cat Food</p>
              </div>
            </li>
            <li class="tab-item" id="4" @click.stop="changeItem(4)">
              <span class="icons wicon4"></span>
              <div class="navtit">
                <p class="text-top">零食</p>
                <p class="text-bott">Cat Snacks</p>
              </div>
            </li>
            <li class="tab-item" id="5" @click.stop="changeItem(5)">
              <span class="icons wicon5"></span>
              <div class="navtit">
                <p class="text-top">医疗&保健</p>
                <p class="text-bott">Health Protection</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="content">
          <ul class="arrival" >
            <li class="item" v-for="item in brands">
              <a href="javascript:;">
                <img :src="item" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import axios from 'axios'
  export default{
    props:['sale'],
    data(){
      return {
        isShowHead: false,
        address:{},
        brands: this.sale.salenav[0].brands
      }
    },
    created(){
      this.$nextTick(() => {
        // 创建Bscroll对象或者刷新此对象
        if(!this.scroll) {
          this.scroll = new Bscroll(this.$refs.catsalewrap,{
            click: true,
            bounce: false
        })
        } else {
          this.scroll.refresh()
        }

        this.tabScroll = new Bscroll(this.$refs.tabs,{
          click: true,
          bounce: false,
          scrollX: true
        })
      })
    },
    computed: {

    },
    methods: {
      toggleHeadBottom(){
        this.isShowHead = !this.isShowHead
      },
      changeItem(id){
        let salenav = this.sale.salenav.filter((item,index)=>{
            return item.id === id
        })
        this.scroll.refresh()
        this.brands = salenav[0].brands

        let lis = this.$refs.tabs.getElementsByClassName('tab-item')
        let spans = this.$refs.tabs.getElementsByClassName('icons')
        for (let i = 0; i < lis.length; i++) {
          lis[i].classList.remove('active')
        }
        for (let i = 0; i < spans.length; i++) {
          let wiconClass = `wicon${i+1}`
          let yiconClass = `yicon${i+1}`
          spans[i].classList.remove(yiconClass)
          spans[i].classList.add(wiconClass)
        }
        let li = document.getElementById(id)
        let span = li.getElementsByClassName('icons')[0]
        li.classList.add('active')

        let wiconClass = `wicon${id}`
        let yiconClass = `yicon${id}`

        span.classList.remove(wiconClass)
        span.classList.add(yiconClass)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position absolute
    top 0
    bottom 0
    .catsale-wrap
      .catsale-bar
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

      .banner
        img
          max-width 100%
          height auto
          display block
      .content-wrap
        .tabs
          overflow hidden
          width 100%
          .tab-list
            width 200%
            background rgb(106, 30, 159)
            min-width 100%
            .tab-item
              float left
              width 150px
              padding-left 4%
              text-align center
              position relative
              outline 0
              height 40px
              overflow hidden
              color #fff
              border-bottom 3px solid #6a1e9f
              &.active
                border-bottom 3px solid #fef842
                color #fef842
              .icons
                display inline-block
                width 25px
                height 28.2px
                vertical-align middle
                position absolute
                top 50%
                margin -11.75px
                left 25%
                background url(./icons.png)
                background-size 200.4px 28.2px
                &.yicon1
                  background-position -151px 0
                &.wicon1
                  background-position -176px 0
                &.yicon2
                  background-position -101px 0
                &.wicon2
                  background-position -125px 0
                &.yicon3
                  background-position 0 0
                &.wicon3
                  background-position -25px 0
                &.yicon4
                  background-position 0 0
                &.wicon4
                  background-position -25px 0
                &.yicon5
                  background-position 0 0
                &.wicon5
                  background-position -25px 0


              .navtit
                .text-top
                  font-size 12px
                  line-height 16px
                  margin-top 10px
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
                  font-weight 400
                .text-bott
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  display inline-block
                  font-size 10px
                  -webkit-transform scale(0.84)
                  position relative
                  top -4px
                  font-weight 400
                  line-height 1



        .content
          padding-top  15px
          .arrival
            width 100%
            height auto
            .item
              margin 10px 0 0 0
              img
                max-width 100%
                height auto
                display block
</style>
