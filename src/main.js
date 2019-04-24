// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'
import Util from './lib/utils'

Vue.config.productionTip = false
Vue.use(Util)
// Vue.prototype.$money = 1000000
// let cj = {
//   install:function(vm,obj){
//     console.log(vm)
//     console.log(obj)
//   }
// }
// Vue.use(cj,{obj:1})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
