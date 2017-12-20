import Vue from 'vue'
import Router from 'vue-router'
import cat from '../components/cat/cat.vue'
import dog from '../components/dog/dog.vue'
import fish from '../components/fish/fish.vue'

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
      component: cat
    },
    {
      path: '/dog',
      component: dog
    },
    {
      path: '/fish',
      component: fish
    }

  ]
})
