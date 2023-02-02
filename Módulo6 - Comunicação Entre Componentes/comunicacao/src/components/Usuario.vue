<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>

        <p>Idade é <strong>{{ idade }}</strong></p>

        <!--Btn que vai usar de props, pra alterar nome:-->
        <button @click="alterarNome">Alterar Nome</button>

        <hr>
        <div class="componentes">

            <!-- Troco v:bind:nome POR :nome -> mesma coisa
            
            Chamei o nomeMudou do filho, pra alterar aqui tbm que é pai p conseguir alterar + filhos caso tenha..-->
            <AppUsuarioInfo :nome="nome"
            :idade ="idade"
            @nomeMudou="nome = $event"
            :reiniciarFn="reiniciarNome"/>
            <AppUsuarioEditar :idade ="idade"
            @idadeReiniciou="idade = $event"/>
            <!--Acima eu quis passar idade tanto pras 2 tags -> oq seria a falsa "comunicação" entre irmãos"-->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return {
            nome: 'Helen',
            idade: 21
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Dora'
        },
        reiniciarNome(){
            this.nome ='Helen'
        },
        reiniciarIdade(){
            this.idade = 21
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
