<template>
  <div class="cat-content">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="./swipe-cat-1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swipe-cat-2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swipe-cat-3.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swipe-cat-4.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swipe-cat-5.png" alt="">
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
  </div>
</template>

<script>
  import split from '../split/split.vue'
  export default{
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/bass.styl"
.cat-content
  padding-top 144px
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
</style>
