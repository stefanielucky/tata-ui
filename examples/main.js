import Vue from 'vue'
import App from './App.vue'
import TataUi from '../packages'
Vue.config.productionTip = false
Vue.use(TataUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
