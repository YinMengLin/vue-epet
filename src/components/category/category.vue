<template>
    <div class="category-wrap">
      <div class="category">
        <div class="header" @click="toggle" ref="header">
          <div class="head-l head">
            <span class="acitve">分类</span>
          </div>
          <div class="head-r head">
            <span>品牌</span>
          </div>
          <a class="head-img">
            <img src="./search.png" alt="">
          </a>
        </div>
        <div class="sort-list" ref="sortList" v-if="showSort">
          <ul ref="sortUl">
            <li v-for="(item,index) in sortItems" class="sort-item" @click="clickSortItem(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="sort-detail-list" v-if="showSort">
          <sortRecom :clickItem="clickItem"></sortRecom>
        </div>

        <div v-if="showBrand">
          <scroller>
            <div class="brand-list" >
              <div class="recom" v-for="brand in brands">
                <div class="r-title">
              <span class="title">
                <img class="line-left" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="">
                  <span class="text">{{brand.title}}</span>
                <img class="line-right" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="">
              </span>
                </div>
                <div class="r-list">
                  <ul class="clearfix ul-list">
                    <li class="r-item" v-for="item in brand.list">
                      <a href="javascript:;">
                        <div class="img">
                          <img :src="item.logo" alt="">
                        </div>
                        <span></span>
                        <span></span>
                        <p class="name">{{item.name}}</p>
                        <p class="add">{{item.address}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </scroller>
        </div>

        <epet-footer></epet-footer>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Bscroll from 'better-scroll'
  import sortRecom from '../sortrecom/sortrecom.vue'
  import footer from '../footer/footer.vue'
  export default{
    data(){
      return{
        showSort: true,
        showBrand: false,
        sortItems:[],
        clickItem:{},
        brands: []
      }
    },
    created(){
      this.$nextTick(()=>{
        let url = `/api${this.$route.path}`
        axios.get(url)
          .then(res => {
            this.sortItems = res.data.data.categorys
            this.brands = res.data.data.brand
            this.clickItem = this.sortItems[0]
            setTimeout(()=>{
              let lis = this.$refs.sortUl.getElementsByClassName('sort-item');
              lis[0].style.backgroundColor = '#f3f4f5';
              lis[0].style.color = '#ed4044';
              new Bscroll(this.$refs.sortList,{
                click:true,
                bounce: false
              })
            },400)
          })

      })

    },
    methods: {
      clickSortItem(index){
        let lis = this.$refs.sortUl.getElementsByClassName('sort-item');
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.backgroundColor = '';
          lis[i].style.color = '';
        }
        lis[index].style.backgroundColor = '#f3f4f5';
        lis[index].style.color = '#ed4044';

        this.clickItem = this.sortItems[index]
      },
      toggle(event){
        if(event.target.nodeName === 'SPAN'){
          let spans = this.$refs.header.getElementsByTagName('span')
          for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
          }
          event.target.className = 'acitve'

          if(event.target.innerHTML === '分类'){
            this.showSort = true
            this.showBrand = false
          }else if (event.target.innerHTML === '品牌'){
            this.showSort = false
            this.showBrand = true
          }

        }
      }
    },
    components: {
      sortRecom,
      'epet-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background: #f3f4f5
  .category-wrap
    .category
      .header
        padding 0 15px
        border-bottom 1px solid #cbcbcb
        position fixed
        left 0
        right 0
        top 0
        height 40px
        z-index 11
        background-color #fff
        .head
          .acitve
            color #ed4044
            border-bottom 2px solid #ed4044
        .head-l
          text-align right
          padding-right 5%
          width 50%
          height 40px
          line-height 40px
          float left
          font-size 14px
          font-weight 800
          span
            display inline-block
            height 40px
            padding 0 4px
            cursor pointer
        .head-r
          padding-left 5%
          width 50%
          height 40px
          line-height 40px
          float left
          font-size 14px
          font-weight 800
          span
            display: inline-block
            height: 40px
            padding: 0 4px
            cursor: pointer
        .head-img
          color #333
          img
            position absolute
            top 13px
            right 15px
            width 14px
            height 14px
      .sort-list
        position fixed
        top 45px
        left 0
        bottom 50px
        overflow-y hidden
        background-color #fff
        ul
          display block
          width 70px
          color #797979
          text-align center
          .sort-item
            padding 15px 0
            border-bottom 1px solid #f3f4f5
            width 70px
            height 50px
            cursor pointer

      .sort-detail-list
        padding 45px 0 50px
        margin: 0 5px 0 75px
      .brand-list
        background #f3f4f5
        padding 45px 0 60px
        .recom
          margin-top 10px
          padding-bottom 20px
          background-color #fff
          .r-title
            color #999
            text-align center
            padding-top 20px
            font-size 12px
            .line-left
              margin-right 6px
              height 1px
            .line-right
              margin-left 5px
              height 1px

          .r-list
            padding 0 5px
            .r-item
              float left
              position relative
              margin-top 20px
              width 33.33%
              padding 0 5px
              a
                color #333
                display block
                .img
                  height 50px
                  border 1px solid #e7e7e7
                  img
                    display block
                    max-width 90%
                    margin 5px auto
                    height 40px

              .name
                font-size 13px
                margin-top 5px
                text-align center
                height 20px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .add
                font-size 13px
                color #999
                text-align center
                height 20px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap


</style>
