<template>
    <div class="category-wrap">
      <div class="category">
        <div class="header">
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
        <div class="sort-list">
          <ul ref="sortUl">
            <li v-for="(item,index) in sortItems" class="sort-item" @click="clickSortItem(index)">{{item}}</li>
          </ul>
        </div>
        <div class="sort-detail-list">
          <sortRecom></sortRecom>
        </div>
        <epet-footer></epet-footer>
      </div>
    </div>
</template>

<script>
  import sortRecom from '../sortrecom/sortrecom.vue'
  import footer from '../footer/footer.vue'
  export default{
    data(){
      return{
        sortItems:['为您推荐','狗狗主粮','狗狗零食',
          '狗狗日用','狗狗玩具','狗狗保健',
          '狗狗医疗','狗狗美容','狗狗周边',
          '狗狗定制','轻奢零食']
      }
    },
    created(){
      this.$nextTick(()=>{
        let lis = this.$refs.sortUl.getElementsByClassName('sort-item');
        lis[0].style.backgroundColor = '#f3f4f5';
        lis[0].style.color = '#ed4044';
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
        overflow-y auto
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
        padding: 45px 0 50px;
        margin: 0 5px 0 75px;
</style>
