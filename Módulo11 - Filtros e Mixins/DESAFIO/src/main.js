import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('eachWord', function(value) {

	return value.split(' ').map(p => `${p} (${p.length})`).join(' ')
	//separo por espaços em branco.fiz map pra pegar a palvra mais o tamanho dela. e juntei all again.
})

new Vue({
	render: h => h(App),
}).$mount('#app')
