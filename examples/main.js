import Vue from 'vue'
import App from './App.vue'
import router from './router'
window.$ = window.jQuery = require('jquery');
import LuojieUI from '@/index'
Vue.use(LuojieUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
