import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入路由
import router from './router'

new Vue({
  render: h => h(App),

  // 装配router
  router
}).$mount('#app')
