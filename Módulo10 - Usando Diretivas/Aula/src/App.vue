<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-text="'Aprendendo usar diretivas'"></p>

		<p v-html="'Olá sou <strong>Helen</strong>'"></p>
	
		<hr>
	
		<!--Criei uma diretiva lá no main.js (obs: explicação no Diretivas.txt)-->
		<p v-destaque>Usando Diretiva Personalida do main.js dos param (el)</p>

		<p v-destaque="'pink'">Usando Diretiva Personalida  dos param (el, binding)</p>

		<p v-destaque="cor">Usando Diretiva Personalida  dos param (el, binding) e objeto criado aqui</p>

		<!--Temos a diretiva, argumento, modificadores e o valor</-->
		<p v-teste:argumento.mod1.mod2.mod3="'valor'"></p>

		<p v-destaque:fundo="'lightblue'">Usando modficadores no main é o if/else</p>

		<hr>

		<p v-destaque:fundo.atrasar="'lightblue'">Usando modficadores pra mostrar cor dps de 3seg</p>

		<hr>

		<h2>Posso fazer DIRETIVAS LOCAIS</h2>

		<p v-destaque-local:fundo="'lightblue'">Usando modficadores no main é o if/else</p>

		<p v-destaque-local:fundo.atrasar="'lightblue'">Usando modficadores pra mostrar cor dps de 3seg</p>
	</div>
</template>

<script>
export default {
	components: {},
	directives: {
		'destaque-local': {
			bind(el, binding){
			el.style.backgroundColor = 'purple'
			//el.style.backgroundColor = binding.value

			let atraso = 0

			if(binding.modifiers['atrasar']) atraso = 3000

			setTimeout(() => {
				if(binding.arg === 'fundo'){
					el.style.backgroundColor = 'green'
				} else {
					el.style.color = binding.value
				}
			}, atraso)
		}
	},
	data(){
		return {
			cor: 'orange'
		}
	}
}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
