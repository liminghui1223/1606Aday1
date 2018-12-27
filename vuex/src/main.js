import Vue from 'vue'
import App from './App'
import router from './router'

//引入store实例
import store from './store/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
