<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>

        <!--Aqui vou chamar por props, la do Usuario.vue o nome-->
        <p>Nome do Usuário: <strong>{{ inverteNome() }}</strong></p>

        <p>Idade do usuário: <strong>{{ idade }}</strong></p>

        <!--Abaixo está 2 formas de reiniciar:
        Temos comunicação:
            - Via PROPS -> do pai pro filho
            - Função CALLBACK -> do filho pro pai-->
        <button @click="reiniciarNome">Reiniciar Nome</button>

        <button @click="reiniciarFn()"
        >Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        //posso validar, dizendo que é obrigatório passar o valor como string:
        nome: {
            type: String,//pode tbm arrar [String, boolean...]
            required: true,
            //no lugar de required, poderia ser: default: 'Anônimo' -> ou seja, se não for passado nenhum nome lá, ele me retorna essa frase.
        },
        reiniciarFn: Function,
        idade: Number
        
    },
    methods: {
        inverteNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            //p mudar no elemento pai, preciso fazer isso e lá nmo arq.pai -> Usuario.vue, chamar esses param.
            //this.$emit('nomeMudou', this.nome)

            //p "comunicacao entre irmaos, embora nao exista"
            this.$emit('nomeMudou', 'Helen')
        }
    },
    //escutar o evento que foi emitido:
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
