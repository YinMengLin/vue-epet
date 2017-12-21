import Vue from 'vue'
import Router from 'vue-router'
import cat from '../components/cat/cat.vue'
import dog from '../components/dog/dog.vue'
import fish from '../components/fish/fish.vue'
import category from '../components/category/category.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import myepet from '../components/myepet/myepet.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', // 指定选中的路由链接的class
  mode: 'history',  // 路由路径不带#
  routes: [
    {
      path: '/',
      redirect: '/cat'
    },
    {
      path: '/cat',
      component: cat,
    },
    {
      path: '/dog',
      component: dog
    },
    {
      path: '/fish',
      component: fish
    },
    {
      path: '/category/:type',
      component: category
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/myepet',
      component: myepet
    },
    {
      path: '/category/category/:type',
      redirect: '/category/:type'
    }
  ]
})
