<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | change | eachWord}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | eachWord}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseVirgula }}</p>
		<p>{{ fraseTamanho }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
export default {
	filters: {
		//Exercício 1
		change(value){
			return value.replace(/ /g, ',')
			//significa que vai substituir all espaços por virgula
		}
	},
	data(){
		return {
			frase : 'Eu sou bacana'
		}
	},
	computed: {
		fraseVirgula() {
			return this.frase.replace(/ /g, ',')
		},
		fraseTamanho(){
			return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
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
