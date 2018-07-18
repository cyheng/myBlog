// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store/index'
import 'vue2-animate/dist/vue2-animate.min.css'
import {LoadingBar} from 'iview'
import 'iview/dist/styles/iview.css'

import Highlight from './highlight.js'
Vue.use(Highlight)


Vue.config.productionTip = false

/**
 * 使用加载进度条
 */
LoadingBar.config({
  color: '#52bf8d',
  failedColor: '#f0ad4e',
  height: 5
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  template: '<App/>',
  components: { App }
})
