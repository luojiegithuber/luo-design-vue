import Vue from 'vue'
import App from './App.vue'
import router from './router'

import LuojieUI from '@/index'
Vue.use(LuojieUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
