import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//pra criar uma diretiva personalizada:
Vue.directive('destaque', {
	bind(el, binding){
		el.style.backgroundColor = 'lightgreen'
		//el.style.backgroundColor = binding.value

		let atraso = 0

		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = 'red'
			} else {
				el.style.color = binding.value
			}
		}, atraso)

		
		//do 7º paragrafo
		if(binding.arg === 'fundo'){
			el.style.backgroundColor = 'red'
		} else {
			el.style.backgroundColor = binding.value
		}
	}

})

new Vue({
	render: h => h(App),
}).$mount('#app')


