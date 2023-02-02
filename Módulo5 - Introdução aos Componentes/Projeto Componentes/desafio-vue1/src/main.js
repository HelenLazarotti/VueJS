import Vue from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'

Vue.config.productionTip = false
Vue.component('app-menu', Menu)
new Vue({
  render: h => h(App),
}).$mount('#app')
