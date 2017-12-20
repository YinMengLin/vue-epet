<template>
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
      <div class="location">
        <span>猫站|北京</span>
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
    <div class="tabs" ref="tabs-wrap">
      <Tabs :animated="false" ref="tabs">
        <Tab-pane label="首页"></Tab-pane>
        <Tab-pane label="猫粮"></Tab-pane>
        <Tab-pane label="特卖"></Tab-pane>
        <Tab-pane label="罐头超市"></Tab-pane>
        <Tab-pane label="潮品视频"></Tab-pane>
        <Tab-pane label="新瞄课堂"></Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      .ivu-tabs-bar
        margin-bottom 0
      .ivu-tabs-ink-bar
        background-color #e73f85
      .ivu-tabs-nav .ivu-tabs-tab-active
        color #e73f85
</style>
