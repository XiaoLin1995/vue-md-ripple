import Vue from 'vue'
import App from './App.vue'
import vueRipple from './directives/ripple'

Vue.config.productionTip = false
Vue.use(vueRipple)

new Vue({
  render: h => h(App)
}).$mount('#app')
