import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/main.css'

Vue.config.productionTip = false
Vue.use(Vant)

// 该实例的在 _init 时声明的 _uid 为 0
// App 的实例 uid 为 1
new Vue({
  render: (h) => h(App)
}).$mount('#app')
