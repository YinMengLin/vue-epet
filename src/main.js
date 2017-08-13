// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import {Swipe, SwipeItem} from 'mint-ui'
import iview from 'iview'

import app from './app.vue'
import router from './router'
import './mock/mockServer'

import 'iview/dist/styles/iview.css'
import './common/stylus/index.styl'

Vue.use(iview)
Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
