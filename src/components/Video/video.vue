<template>
  <div ref="videowrapper" class="video-wrapper">
    <scroller>
    <ul class="video_content">
      <li v-for="item in videoDate" class="video-item">
        <div class="video">
          <img :src="item.image">
          <span class="icon"></span>
          <span class="watcher">{{item.watcher}}</span>
          <span class="time">{{item.duration}}</span>
        </div>
        <span>{{item.description}}</span>
        <span class="topic">{{item.topic}}</span>
      </li>
    </ul>
    </scroller>
  </div>
</template>

<script>
  export default {
    props: ['videoDate'],
    created(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .video-wrapper
    width 100%
    height 100%
    overflow hidden
    .video_content
      width 100%
      overflow hidden
      padding 144px 9px 55px
      .video-item
        float left
        width 50%
        padding 10px 3px
        .video
          position relative
          & img
            width 100%
          .icon
            position absolute
            width 10px
            height 9px
            left 6px
            top 6px
            display block
            background url("https://static.epetbar.com/static_wap/epetapp/pages/index/images/view.png")
            background-size 10px 9px
          .watcher , .time
            font-size 12px
            color white
            position absolute
          .watcher
            top 3px
            left 20px
          .time
            top 3px
            right 5px
        .topic
          color red
</style>
