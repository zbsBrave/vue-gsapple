import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/main.css'
import './assets/fonts/iconfont.css' //导入字体图标

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:9001/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
