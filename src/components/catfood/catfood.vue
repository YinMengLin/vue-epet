<template>
  <div>
    <div ref="foodwrapper" id="huadong" class="container-wrapper">
      <div class="content_wrapper">
        <div class="slideshow_wrapper">
          <div class="slideshow">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in petfoods.swipe">
                <a href="javascript:;">
                  <img :src="item">
                </a>
              </mt-swipe-item>
             <!-- <mt-swipe-item>
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-08/04/14/097de2a4fdf1e197c9304d9dba9a9876.jpg@!water">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-08/04/14/e924a1c2af4d577a8d06b594167648d0.jpg@!water">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-08/04/16/7666821c190eab2da6d85ce6d9bef445.png@!water">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-07/21/16/c0d1e757214e689262954a56b76b0740.jpg@!water">

                </a>
              </mt-swipe-item>-->
            </mt-swipe>
          </div>
          <ul class="pagemenu">
            <li v-for="item in petfoods.productimage">
              <a href="jacascript:;">
                <img :src="item">
              </a>
            </li>
          </ul>
        </div>
        <div class="page_line"></div>
        <div class="brandSelling_wrapper">
          <div class="brandSelling">
            <div class="brandSelling_content" v-for="item in petfoods.commend">
              <div class="content_top">
                <div class="content_text">
                  <span>{{item.title}}</span>
                  <span>{{item.subhead}}</span>
                </div>
              </div>
              <div class="content_image">
                <a href="###">
                  <img :src="item.image">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product_wrapper">
          <div class="product_nav" ref="productNav">
            <span class="active" id="1" @click="clickFoods(1)">进口猫粮</span>
            <span id="2" @click="clickFoods(2)">国产猫粮</span>
            <span id="3" @click="clickFoods(3)">拆零试吃</span>
            <span id="4" @click="clickFoods(4)">处方猫粮</span>
          </div>
          <ul class="product_list">
            <li v-for="item in proList">
              <div class="avatar">
                <img :src="item.avatar">
              </div>
              <div class="price">
                <h3>{{item.name}}</h3>
                <div class="money">
                  <span>￥{{item.price}}</span>
                  <s>{{item.oldPrice}}元/斤</s>
                </div>
                <div class="count">
                  <span>{{item.watcher}}</span>
                  <span>{{item.count}}</span>
                  <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="page_line"></div>
        <div class="page_line page_line_last"></div>
        <div class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: ['petfoods'],
    data(){
        return{
          proList: this.petfoods.proClassify[0].proList
        }
    },
    created () {
      setTimeout(()=>{
        this.$nextTick(() => {
          new BScroll(this.$refs.foodwrapper, {
            click: true,
            bounce: false
          })
        })
      },400)
    },
    methods: {
      clickFoods(id){
        let proClassify  = this.petfoods.proClassify.filter((item,index)=>{
          return item.id === id
        })
        this.proList = proClassify[0].proList

        let spans = this.$refs.productNav.getElementsByTagName('span')
        for (var i = 0; i < spans.length; i++) {
          spans[i].classList.remove('active')
        }
        let span = document.getElementById(id)
        span.classList.add('active')

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body
    height 100%;
    overflow hidden
  * .normal_title {
    width: 10rem;
    height: 1.4rem;
    position: relative;
    text-align: center;
  }

  * .normal_title img:first-child {
    width: 5rem;
    margin: 0 auto;
  }

  * .normal_title img:last-child {
    width: 1.666666666666667rem;
    position: absolute;
    right: 0.133333333333333rem;
  }
  .container-wrapper
    width 100%
    height 15.344rem
    overflow hidden
    margin-top 0
    padding-top 144px
    padding-bottom 55px
    .content_wrapper
      width 100%
      .slideshow_wrapper
        width 100%
        .slideshow
          width 100%
          height 4.266666666666667rem
          & img
            height 100%
            width 100%

  * .container-wrapper .slideshow_wrapper .pagemenu {
    width: 100%;
    display: flex;
    padding 10px 0
  }

  * .container-wrapper .slideshow_wrapper .pagemenu li {
    flex: 1;
    width 25%
  }

  * .container-wrapper .slideshow_wrapper .pagemenu li a {
    display: block;
  }

  * .container-wrapper .slideshow_wrapper .pagemenu li a img {
    width: 100%;
    display: inline-block;
  }

  * .page_line {
    width: 100%;
    background-color: #f3f4f5;
    height: 0.266666666666667rem;
  }

  * .brandSelling_wrapper {
    width: 100%;
  }

  * .brandSelling_wrapper .brandSelling_content {
    margin-top: 0.266666666666667rem;
    width: 100%;
  }

  * .brandSelling_wrapper .brandSelling_content .content_top {
    width: 100%;
    padding: 0.266666666666667rem;
  }

  * .brandSelling_wrapper .brandSelling_content .content_top .content_text {
    line-height: 0.64rem;
  }

  * .brandSelling_wrapper .brandSelling_content .content_top .content_text span:first-child {
    font-size: 0.4rem;
    color: #000;
    margin-right: 0.133333333333333rem;
  }

  * .brandSelling_wrapper .brandSelling_content .content_top .content_text span:last-child {
    font-size: 0.32rem;
    color: #999;
  }

  * .brandSelling_wrapper .brandSelling_content .content_image img {
    width: 100%;
  }
  .product_wrapper
    width 100%
    margin-top 15px
    .product_nav
      padding-bottom 10px
      border-bottom 1px solid rgb(231,231,231)
      span
        display inline-block
        font-size 13px
        line-height 20.8px
        width 76.8px
        margin-left 11px
        border-radius 3px
        background rgb(245,245,245)
        color rgb(51,51,51)
        text-align center
        &.active
          background #ff0000
          color #fff
    .product_list
      width 100%
      & li
        width 100%
        height 3.408rem
        padding 10px
        overflow hidden
        border-bottom 1px solid rgb(231, 231, 231)
        .avatar
          display inline-block
          width 2.666666666666667rem
          height 100%
          float left
          & img
            width 100%
        .price
          display inline-block
          height 100%
          width 6.186666666666667rem
          float left
          .h3
            width 100%
            font-weight normal
            font-size 14px
            line-height 16px
          .money
            margin-top 25px
            & span
              font-size 14px
              color red
              padding-right 5px
          .count
            position relative
            & img
              position absolute
              bottom 0
              right -20px
              width 30px
              height 30px

  .black_title {
    width 100%
    height 1.2rem
    position relative
    text-align center
  }

  .black_title img:first-child {
    margin: 0 auto;
    height: 1.2rem;
    width: 4.266666666666667rem;
  }

  * .commonweal_wrapper .commonweal .title img:last-child {
    position: absolute;
    height: 0.266666666666667rem;
    width: 2rem;
    right: 0.133333333333333rem;
    top: 40%;
  }

  * .commonweal_wrapper .commonweal .content .image {
    width: 100%;
    height: 3.733333333333333rem;
    background-image: url("https://img2.epetbar.com/nowater/2016-12/26/10/c59cb143b0ce0e77fbb0e6cdf7af702e.jpg");
    background-size: 100%;
    padding-top: 0.8rem;
  }

  * .commonweal_wrapper .commonweal .content .image p {
    font-size: 0.373333333333333rem;
    font-weight: bold;
    color: #fff;
    line-height: 0.666666666666667rem;
    font-family: "Microsoft Yahei", -apple-system-font, "Helvetica Neue", sans-serif;
    text-align: center;
  }

  * .commonweal_wrapper .commonweal .content .image p b {
    border-radius: 0.133333333333333rem;
    background-color: #fff;
    color: #f00;
    margin: 0 0.133333333333333rem;
    padding: 0 0.133333333333333rem;
  }

  .content .logo_list {
    wodth: 100%;
    height: 2.165333333333333rem;
    margin-left: 0.266666666666667rem;
    overflow: hidden;
    position: relative;
  }

  .content .logo_list .fixed_list {
    padding-top: 0.266666666666667rem;
    float: left;
  }

  .content .logo_list .fixed_list img {
    display: block;
    width: 1.44rem;
    height: 1.333333333333333rem;
    margin-top: 0.266666666666667rem;
  }

  .content .logo_list .slide_list {
    list-style: none;
    overflow: hidden;
    border-left: 1px solid #e7e7e7;
    width: calc(14 * 109px);
    position: absolute;
    left: 1.866666666666667rem;
  }

  .content .logo_list .slide_list li {
    float: left;
    display: block;
    width: 2.906666666666667rem;
    height: 2.165333333333333rem;
    padding: 0.133333333333333rem 0.08rem 0 0.08rem;
    margin-right: 0.133333333333333rem;
    border-right: 1px solid #e7e7e7;
  }

  .content .logo_list .slide_list li img {
    width: 2.613333333333333rem;
    height: 1.066666666666667rem;
    margin-bottom: 0.133333333333333rem;
  }

  .content .logo_list .slide_list li p {
    font-size: 0.32rem;
    border-top: 1px solid #e7e7e7;
    color: #333;
    line-height: 0.8rem;
  }

  .appraise_wrapper
    width 100%
    .appraise .title
      position relative
      & a
        position absolute
        right 10px
        top 15px
        color rgb(153, 153, 153)
        font-size 12px

    .appraise_content
      width 100%
      & ul
        width 100%
        overflow hidden
        & li
          float left
          display block
          margin-left 0.266666666666667rem
          margin-top 0.266666666666667rem
          .appraise_image
            width 4.602666666666667rem
            height 4rem
            position relative
            overflow hidden
            & img
              width 100%
            & div
              background-color rgba(0, 0, 0, 0.4)
              position absolute
              height 0.512rem
              width 100%
              bottom 0
              text-align center
              display inline-block
              color rgb(255, 255, 255)
          .user_info
            width 4.602666666666667rem
            padding 3px 3px 15px
            background-color rgb(245, 245, 245)
            display block
            overflow hidden
            .name
              float left
              line-height 23.2px
            .petname
              float right
              display inline-block
              padding 2px 3px
              margin-top 1px
              border-radius 5px
              background-color rgb(211, 211, 211)
              line-height 19.2px
            & p
              float left
              height 1.6rem
              overflow hidden
              font-size 0.346666666666667rem
              color rgb(153, 153, 153)

  .page_line_last
    margin 10px 0
  .empty
    width 100%
    height 1.206667rem
</style>
