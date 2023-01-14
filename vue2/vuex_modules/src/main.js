import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入
import store from './store'

new Vue({
  render: h => h(App),

  // 装配store
  store
}).$mount('#app')
