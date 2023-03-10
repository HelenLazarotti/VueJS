import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//filtro global:
Vue.filter('inverter', function(valor) {
	
	//separa cada item do valor.inverte.junto em novo array
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
