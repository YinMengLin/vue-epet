<template>
  <div>
<!--
    <epet-header :show-place="showPlace" :typeName="typeName" :bgColor="bgColor"></epet-header>
-->
    <div class="header">
      <div class="app-down">
      <span class="close-btn">
        <img src="./closebtn_03.png">
      </span>
        <div class="app-img">
          <a href="javascript:;">
            <img src="./down-app.png" alt="down-app">
          </a>
        </div>
      </div>
      <div class="search clearfix">
        <div class="location" @click="clickShowPlace">
          <span>{{this.typeName}}|北京</span>
          <Icon type="arrow-up-b"></Icon>
        </div>
        <div class="search-input">
          <a href="javascript:;">
            <i-input placeholder="搜索商品和品牌" icon="search"></i-input>
          </a>
        </div>
        <a href="javascript:;" class="mydope">
          <img src="./mydope.png" alt="">
        </a>
      </div>
      <div class="tabs" ref="tabsWrap">
        <Menu mode="horizontal"  active-name="1">
          <Menu-item name="1">
            首页
          </Menu-item>
          <Menu-item name="2">
            狗粮
          </Menu-item>
          <Menu-item name="3">
            特卖
          </Menu-item>
          <Menu-item name="4">
            潮品视频
          </Menu-item>
          <Menu-item name="5">
            新汪课堂
          </Menu-item>
        </Menu>
      </div>
    </div>
    <scroller>
      <div class="cat-content" ref="catContent">
        <div class="swipe">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./swipe-dog-1.png" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./swipe-dog-2.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./swipe-dog-3.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./swipe-dog-4.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./swipe-dog-5.jpg" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="activity">
          <div class="activity-top">
            <img src="./activity.gif" alt="">
          </div>
          <div class="activity-bottom">
            <ul class="pagemenu clearfix">
              <li class="item">
                <a href="javascript:;">
                  <img src="./pagemenu-1.png" alt="">
                </a>
              </li>
              <li class="item">
                <a href="javascript:;">
                  <img src="./pagemenu-2.png" alt="">
                </a>
              </li>
              <li class="item">
                <a href="javascript:;">
                  <img src="./pagemenu-3.png" alt="">
                </a>
              </li>
              <li class="item">
                <a href="javascript:;">
                  <img src="./pagemenu-4.png" alt="">
                </a>
              </li>
              <li class="item">
                <a href="javascript:;">
                  <img src="./pagemenu-5.png" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <split></split>
        <div class="surprise-wrap">
          <div class="surprise">
            <div class="surprise-title clearfix">
              <div class="titimg fix">
                <img src="./suprice.png" alt="">
              </div>
              <span class="text fix">距本场结束</span>
              <div class="time fix">
              <span class="time-1">
                <span class="time-text">00</span><!--
                --><span class="time-text-2">:</span><!--
                --><span class="time-text">00</span><!--
                --><span class="time-text-2">:</span><!--
                --><span class="time-text">00</span>
              </span>
              </div>
              <div class="more fix">
                <a href="javascript:;">
                  <img src="./more.png" alt="">
                </a>
              </div>
            </div>
            <div class="surprise-pro" ref="surprisePro">
              <ul class="pro-list clearfix" ref="proList">
                <li class="pro-item" v-for="item in 8">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="./catfood-1.jpg" alt="">
                    </div>
                    <div class="cred">
                      <span class="rmb">￥</span><!--
                      --><span class="num">16.80</span>
                    </div>
                    <p class="saving">
                      省￥11.20
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <split></split>
        <div class="hotcolumn-warp">
          <div class="hotcolumn">
            <div class="clum-tit">
              <div class="titimg">
                <a href="javascript:;">
                  <img src="./clum-tit-d.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="clum-content">
              <div class="content-l">
                <a href="javascript:;">
                  <img src="./clum-cat-3.png" alt="">
                </a>
              </div>
              <div class="content-r">
                <a href="javascript:;">
                  <img src="./clum-cat-1.jpg" alt="">
                </a>
                <a href="javascript:;">
                  <img src="./clum-cat-2.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <split></split>
        <div class="fsvideo">
          <div class="fs-tit">
            <div class="fs-img">
              <img src="./fs-video.png" alt="">
            </div>
            <div class="more">
              <img src="./more.png" alt="">
            </div>
          </div>
        </div>
        <div class="cmVideoList-wrap">
          <ul class="cmVideoList">
            <li class="cmVideoItem" v-for="item in 1">
              <a href="javascript:;">
                <div class="videoimg">
                  <img src="./video-dog-1.jpg" alt="">
                  <span class="play"></span>
                  <span class="time">01:13</span>
                </div>
                <div class="videotext">
                  <div class="textover">
                    神奇饮水除口臭
                    <span class="textred">#猫咪保健</span>
                  </div>
                  <div class="eye-num">
                    <span class="eye"></span>
                    <span class="num">15734</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <split></split>
        <div class="fsvideo">
          <div class="fs-tit">
            <div class="fs-img">
              <img src="./experience.png" alt="">
            </div>
            <div class="more">
              <img src="./more.png" alt="">
            </div>
          </div>
        </div>
        <div class="experience-wrap">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./experience-cat-1.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./experience-cat-2.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img src="./experience-cat-3.jpg" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <split></split>
        <div class="fsvideo" style="border-bottom: 1px solid #999999;">
          <div class="fs-tit">
            <div class="fs-img">
              <img src="./brand-cat.png" alt="">
            </div>
            <div class="more">
              <img src="./more.png" alt="">
            </div>
          </div>
        </div>
        <div class="lower-price-wrap" v-for="item in 2">
          <div class="lower-price">
            <div class="pad">
              <span class="pad-l">我的日期不完美</span>
              <span class="pad-r">大牌临期1折起</span>
            </div>
            <div class="soleimg">
              <a href="javasrcipt:;">
                <img src="./lower-pri-cat.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="community-wrap">
          <div class="community">
            <div class="community-tit">
              <div class="community-img">
                <img src="./community.jpg" alt="">
              </div>
              <div class="community-more">
                <img src="./know-community.png" alt="">
              </div>
            </div>
            <div class="data">
              <img src="./community-data.jpg" alt="">
              <div class="data-text">
                <p class="mt5">
                  <span>截止今日，TA公益已联合E宠商城和</span>
                  <b class="cred">13</b>
                  <span>家品牌</span>
                </p>
                <p class="mt5">
                  <span>累积捐赠</span>
                  <b>855,546.56</b>
                  <span>元</span>
                </p>
                <p class="mt5">
                  <span>已合作</span>
                  <b class="cred">7</b>
                  <span>家公益组织，举办参与</span>
                  <b class="cred">2</b>
                  <span>场公益活动,助养</span>
                  <b class="cred">32</b>
                  <span>位领养人</span>
                </p>
              </div>
            </div>

            <div class="ta-barnds clearfix">
              <div class="barnds-names">
                <img src="./barnds-names.png" alt="">
              </div>
              <div class="barnds-srcoll">
                <ul class="barnds-list">
                  <li class="barnds-item" v-for="item in 10">
                    <a class="barnds-item-link" href="javascript:;">
                      <div class="barnds-item-img">
                        <img src="./epet_brand_logo.png" alt="">
                      </div>
                      <div class="text">已捐助¥213408.68</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <split></split>
        <div class="point">
          <div class="point-tit">
            <div class="point-img">
              <img src="https://img2.epetbar.com/nowater/2017-02/09/14/fbcacf13ccc5748295fe0e6124fbec5d.png" alt="">
            </div>
            <div class="point-more">
              <a href="javascript:;">好评率99.64%</a>
            </div>
          </div>
          <div class="point-content">
            <ul class="point-list clearfix">
              <li class="point-item" v-for="item in 4">
                <a href="javascript:;">
                  <div class="item-inner">
                    <div class="item-top">
                      <div class="item-img">
                        <img src="./point-cat-1.jpg" alt="">
                      </div>
                      <span class="text">加入E宠2年0月</span>
                    </div>
                    <div class="item-center clearfix">
                      <span class="username">红*****ω</span>
                      <span class="pet-name">中华田园猫</span>
                    </div>
                    <div class="item-bottom">
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <split></split>
      </div>
    </scroller>
    <div class="go-dog">

    </div>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import split from '../split/split.vue'
  //import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  export default{
    props:['showPlace'],
    data(){
      return {
        typeName: '狗站',
        bgColor: '#459d36'
      }
    },
    created(){
      this._creatProList();
    },
    methods: {
      _creatProList(){
        this.$nextTick(()=>{
          let lis = this.$refs.proList.getElementsByTagName('li');
          let liLength = lis.length;
          this.$refs.proList.style.width = liLength*108 + 'px';
          new Bscroll(this.$refs.surprisePro,{
            click: true,
            scrollX: true
          })
        })
      },
      clickShowPlace(){
        this.showPlace()
      },

    },
    components: {
      split,
      //'epet-header': header,
      'epet-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    width 100%
    position fixed
    top 0
    z-index 100
    background-color #fff
    .app-down
      position relative
      background rgba(61,61,61,1)
      height 55px
      .close-btn
        position absolute
        left 2%
        top 20%
        width 5%
        margin-right 2%
        vertical-align middle
        img
          width 100%
          height  100%
      .app-img
        width 100%
        height 100%
        img
          width 100%
          height 55px
    .search
      padding 13px 10px
      display flex
      text-align center
      align-items center
      .location
        margin-right 20px
        color  #333
        font-size 14px
        font-family 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
      .search-input
        height 27px
        flex 2
        input
          height 27px
          background-color #f6f6f6
          border none
          border-radius 4px
          text-indent 10px
        input[type="text"]::-webkit-input-placeholder
          color #5a5a5a
        .ivu-input-icon
          height 27px
          color #c4c4c4
      .mydope
        width 35px
        height 27px
        padding 2px 0 0 10px
        img
          width 25px
          height 25px
    .tabs
      width 100%
      height 35px
      min-width 320px
      .ivu-menu
        height 35px
        white-space nowrap
        .ivu-menu-item
          height 35px
          line-height 35px
          width 74.5px
          text-align center
          padding 0 10px
          &.ivu-menu-item-active
            border-bottom 2px solid #459d36
          &.ivu-menu-item-selected
            color #459d36
  .cat-content
    padding-top 144px
    padding-bottom 65px
    .swipe
      width 100%
      height 160px
      img
        width 100%
        height 100%
    .activity
      width 100%
      .activity-top
        width 100%
        img
          width 100%
      .activity-bottom
        width 100%
        .pagemenu
          .item
            width 20%
            height 90px
            float left
            img
              width 100%
    .surprise-wrap
      .surprise
        .surprise-title
          padding 10px
          position relative
          height 64px
          .titimg
            img
              height 24px
              margin-left -20px
          .text
            margin-left 10px
            font-size 13px
            margin-top 1px
          .time
            margin 2px 0 0 10px
            .time-1
              text-align center
              font-size 14px
              .time-text-2
                margin 0 3px
                font-weight bold
              .time-text
                font-size 13px
                border 1px solid #ddd
                padding 1px 2px
                text-align center
          .more
            position absolute
            right -60px
            top 0px
            img
              margin 0 5px 0 auto
              width 50%
        .surprise-pro
          margin-bottom 10px
          padding-left 5px
          width 100%
          .pro-list
            .pro-item
              margin-right 10px
              float left
              width 98px
              .pro-img
                img
                  width 100%
              .cred
                color red
                text-align center
                .rmb
                  font-size 12px
                .num
                  font-size 16px

              .saving
                color #999
                text-align center
    .hotcolumn-warp
      width 100%
      .hotcolumn
        .clum-tit
          .titimg
            text-align center
            img
              display block
              width 100%
              max-height 73px
        .clum-content
          border-top 1px solid #e7e7e7
          display flex
          .content-l
            width 40%
            img
              width 100%
          .content-r
            width 60%
            img
              width 100%

    .fsvideo
      width 100%
      .fs-tit
        padding-top 10px
        margin-bottom 5px
        text-align center
        position relative
        .fs-img
          img
            max-width 50%
            max-height 73px
            margin 0 auto
        .more
          position absolute
          right 0
          top 15px
          text-align right
          img
            max-width 50%
            margin: 0 5px 0 auto
    .cmVideoList-wrap
      .cmVideoList
        .cmVideoItem
          width 100%
          .videoimg
            position relative
            overflow hidden
            padding-top 40%
            img
              width 100%
              position absolute
              top 0
              left 0

            .play
              background url("./play.png") 0 0 no-repeat
              background-size contain
              position absolute
              left 50%
              top 50%
              width 20px
              height 20px
              margin-left -10px
              margin-top -10px
            .time
              position absolute
              top 0
              right 0
              color #fff
              font-size 12px
              padding 0 5px
          .videotext
            color #333
            display flex
            padding 10px 15px
            .textover
              flex 1
              overflow hidden
              white-space nowrap
              word-wrap normal
              text-overflow ellipsis
            .textred
              color red
            .eye-num
              .eye
                display inline-block
                width 10px
                height 9px
                background url("./view-black.png") 0 0 no-repeat
                background-size: contain;
                margin-right: 3px;
              .num
                font-size 14px
                color #333

    .experience-wrap
      width 100%
      height 155px
      img
        width 100%
        height 100%
    .lower-price-wrap
      .lower-price
        .pad
          padding 10px
          .pad-l
            font-size 15px
            color #333
          .pad-r
            color #999
            font-size 12px
            margin-left 10px
        .soleimg
          img
            width 100%
    .community-wrap
      .community
        .community-tit
          position relative
          text-align center
          .community-img
            img
              height: 45px;
              width: auto;
          .community-more
            position absolute
            top 7px
            right 0px
            z-index 0
            img
              width 75px
              height auto
              margin 10px 5px 0 0
        .data
          padding-top 37%
          position relative
          img
            position absolute
            top 0
            left 0
            width 100%
          .data-text
            position: absolute
            top 20%
            left 0
            width 100%
            color #fff
            font-size 14px
            font-weight 700
            text-align center
            .mt5
              margin-top 5px
              .cred
                border-radius 5px
                background #fff
                color red
                margin 0 5px
                padding 0 5px
                font-weight bold

        .ta-barnds
          padding-left 10px
          .barnds-names
            width 60px
            padding-top 10px
            float left
            img
              width 90%
              margin-top 10px
          .barnds-srcoll
            margin-left 70px
            padding 5px 0 0 5px
            border-left 1px solid #e7e7e7
            .barnds-list
              width 100%
              height 100%
              position relative
              overflow hidden
              display flex
              .barnds-item
                position relative
                width 109.6px
                margin-right 10px
                border-right 1px solid #e7e7e7
                text-align center
                flex-shrink 0
                .barnds-item-link
                  display block
                  margin-right 10px
                  color #333
                  .barnds-item-img
                    background url(./default-epet.png) no-repeat center #f4f4f4
                    background-size: 120px auto;
                    img
                      display block
                      width 100%
                      height 40px
                      margin-top 5px
                  .text
                    border-top: 1px solid #e7e7e7
                    margin-top: 5px
                    padding: 3px 0
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    font-size 12px

    .point
      .point-tit
        position relative
        text-align center
        .point-img
          img
            height: 45px
            width: auto
            margin: 0 auto
        .point-more
          position absolute
          top 14px
          right 4px
          padding-right 10px
          background url(./index_icon_comment_sanjiao.png) no-repeat right
          background-size 8px 9px
          a
            color #999
            font-size 12px
      .point-content
        padding 0 10px 10px 0
        .point-list
          .point-item
            width 50%
            float left
            a
              color #333
              .item-inner
                background-color #f5f5f5
                padding-bottom 15px
                margin 10px 0 0 10px
                .item-top
                  height 150px
                  overflow hidden
                  position relative
                  .item-img
                    position relative
                    padding-top 100%
                    img
                      width 100%
                      position absolute
                      top 0
                      left 0

                  .text
                    position absolute
                    bottom 0
                    left 0
                    width 100%
                    background rgba(0,0,0,0.4)
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    color #fff
                    text-align center
                    font-size 12px

                .item-center
                  font-size 12px
                  margin 5px 5px 0 5px
                  .username
                    float left
                  .pet-name
                    float right
                    background #ddd
                    border-radius 5px
                    padding 0 5px

                .item-bottom
                  color #999
                  font-size 13px
                  padding 0 5px
                  margin-top 5px
                  height 60px
                  overflow hidden

  .go-dog
    background url(./godog.png) no-repeat
    width 49px
    height 61px
    background-size 97px auto
    position fixed
    bottom 15%
    right 0
    z-index 1
    -webkit-animation nnh 2.5s steps(2) infinite
    animation nnh 2.5s steps(2) infinite
</style>
