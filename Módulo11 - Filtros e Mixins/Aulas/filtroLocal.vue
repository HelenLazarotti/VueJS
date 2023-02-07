<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!--p chamar/color o filtro, uso pipe '|' e o nome da funcao-->
		<p>{{ cpf | cpfFuncao}}</p>
	</div>
</template>

<script>
export default {
	//filtros
	filters: {
		cpfFuncao(valor){

			//peço p separar cada item, ou seja, fica [0, 0, 0, 1, 1....]
			const arr = valor.split('')

			//peço p na 3° posiçao, nao remover nada, add um '.'
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')

			//retorno novo valor de array
			return arr.join('')
		}
	},
	data(){
		return {
			cpf: '00011122233'
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
