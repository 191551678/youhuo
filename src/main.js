import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import axios from 'axios'
Vue.prototype.$http=axios
import router from './assets/js/router.js'

import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/store/store.js'

import './assets/css/clear.css'

router.beforeEach((to, from, next) => {
document.body.scrollTop = 0
document.documentElement.scrollTop = 0
window.pageYOffset = 0
next()
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
