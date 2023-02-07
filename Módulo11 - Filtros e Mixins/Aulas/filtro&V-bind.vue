<!template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!--p chamar/color o filtro local, uso pipe '|' e o nome da funcao-->
		<p>{{ cpf | cpfFuncao  | inverter}}</p>

		<!--Posso usar o v-bind aqui tbm, passando a mesma lógica que o <p> -->
		<input type="text" :value="cpf | cpfFuncao  | inverter">
	</div>
</template>

