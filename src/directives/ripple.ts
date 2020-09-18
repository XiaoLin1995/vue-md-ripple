import { VueConstructor } from 'vue'
import { Ripple } from './ripple/index'

const RippleDirective = {
  install (Vue: VueConstructor) {
    Vue.directive('ripple', Ripple)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RippleDirective)
}

export default RippleDirective
