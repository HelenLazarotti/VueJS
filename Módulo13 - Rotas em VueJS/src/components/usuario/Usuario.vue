<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>

        <p><strong>Código: </strong>{{ id }}</p>

        <button sucesso @click="voltarInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    /*data(){
        return {
            id: this.$route.params.id //pego pram a partir da rota
        }
    },
    //quero monitorar p ver se houve mudança ou n
    watch: {
        //mostra p (qual rota está indo, e de qual ele veio)
        $route(to, from) {
            this.id = to.params.id

        }
    },*/
    methods: {
        voltarInicio(){
            this.$router.push({ path: '/' })
        }
    }
}
</script>

<style>

</style>