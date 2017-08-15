<template>
    <div ref="detailList" style="height: 550px">
      <div class="sort-recom">
        <div class="hot-recom" v-for="cate in cateList">
          <a href="javascript:;" class="hot-recom-link">{{cate.title}}</a>
          <ul class="clearfix">
            <li class="hot-recom-item" v-for="item in cate.list">
              <a href="javascript:;" class="item-link">
                <img :src="item.photo" class="item-img">
                <p class="text">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default{
    data(){
      return{
        cateList:[]
      }
    },
    props: ['clickItem'],
    created(){
      this.$nextTick(()=>{
        this.scroll = new Bscroll(this.$refs.detailList,{
          click: true,
          bounce: false
        })
      })
    },
    watch:{
      clickItem(val){
        //console.log(val.cate_list)
        this.cateList = val.cate_list
        this.scroll.refresh()
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort-recom
    background-color #fff
    .hot-recom
      padding 15px 5px 20px
      border-top 1px solid #f3f4f5
      .hot-recom-link
        text-indent 10px
        font-size 14px
        color #999
        display block
      ul
        .hot-recom-item
          margin-top 10px
          width 33.33%
          padding 0 5px
          float left
          .item-link
            .item-img
              width 100%
            .text
              margin-top 10px
              color #333
              font-size 12px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              height 20px
              text-align center

</style>
