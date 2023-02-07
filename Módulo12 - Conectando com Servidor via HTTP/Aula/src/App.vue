<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<!--Para mensagens de alerta, o dismissible é pra por o 'x', p caso eu queira fechar essa msg-->
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<!--Msg vai ter 2 atributos: o texto e o tipo da mensagem(danger, warning, sucess, etc...)-->

		<!--essa tag vem do bootsrapVue -> instaladoi via plugin, então via terminal add -> vue add bootsrapVue -->
		<b-card>
			<!--Campo para NOME-->
			<b-form-group label="Nome:">

				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Digite seu nome"></b-form-input>

			</b-form-group>

			<!--Campo para EMAIL-->
			<b-form-group label="E-mail:">

				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Digite seu e-mail"></b-form-input>

			</b-form-group>

			<hr>

			<!--Botão para enviar form-->
			<b-button @click="salvar" variant="success" size="lg">Salvar</b-button>

			<!--Pra mostrar usuários do banco-->
			<b-button variant="primary" size="lg" class="ml-4" @click="mostraUser">Mostrar Usuários</b-button>

		</b-card>

		<hr>

		<!--Para listar meus usuários que possuo no banco
			obs: usuarios não é array é um OBJETO:-->
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">

				<strong>Nome: </strong>{{ usuario.nome }}
				<br>
				<strong>E-mail: </strong>{{ usuario.email }}
				<br>
				<strong>ID: </strong>{{ id }}

				<br>

				<!--Pego o id que estou percorrendo ali no v-for-->
				<b-button @click="carregar(id)" variant="warning" size="lg">Carregar</b-button>

				<!--Btn pra excluir ús-->
				<b-button @click="excluir(id)" variant="danger" size="lg" class="ml-4">Deletar</b-button>

			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
export default {
	data(){
		return {
			mensagens: [],//pra avisos
			usuarios: [],//array p liostar meus users
			id: null,//representar ús selecionado
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		//criar alguns métodos p submeter esse form
		
		//esse vai servir tabdo pra publicar quanto editar:
		salvar(){
			//vejo o método, se o id já existir, entao atualiza : se nao cria novo ús:
			const metodo = this.id ? 'patch' : 'post'

			//final da url tbm muda, então se tiver setado, o final vai ter ...'/.' : se n coloco o .json
			const finalUrl = this.id ? `/${this.id}.json` : '.json'

			//atribuo aqui
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(() => {
				this.limparCampos()

				//exibo mensagem de sucesso:
				this.mensagem.push({
					texto: 'Usuário adicionado com sucesso',
					tipo: 'success'
				})
			})
		},
		
		//pegar e mostrar usuarios que tenho no banco
		mostraUser(){
			this.$http.get('usuarios.json').then(res => {
				//pego a res e atribuo os valores dela ao meu array
				this.usuarios = res.data
			})
		},
		//limpar campos input depois de preenchidos
		limparCampos(){
			this.usuario.nome = '',
			this.usuario.email = '',
			this.id = null,
			this.mensagens = []
		},
		carregar(id){
			this.id = id //a partir do id que eu recebi aqui
			this.usuario = { ...this.usuarios[id]}//pego de dentro de usuarios, por id, criando um novo objeto pra n alterar a instancia q esta sendo referenciada pela lista de elementos
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.try(() => this.limparCampos())
			.catch(() => {
				this.mensagem.push({
					texto: 'Problema ao tentar deletar usuário!',
					tipo: 'danger'
				})
			})
		}
	}


	/*created(){
		this.$http.post('usuarios.json', {
			nome: 'Helen',
			email: 'helen@email.com'
		})
	}*/
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
