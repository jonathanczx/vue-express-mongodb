// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import api from './axios'
Vue.prototype.$api = api

import 'base-flex/dist/base.min.css'
import 'element-ui/lib/theme-default/index.css'
import './font.less'

import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
