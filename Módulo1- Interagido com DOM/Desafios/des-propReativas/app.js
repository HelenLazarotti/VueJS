new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        results(){
            return this.valor !== 37 ? 'Valor diferente' : 'Valor Igual'
        }
    },
    watch: {
        //se eu por valor() vai sempre atualizar, se eu por results() vai atualizar só quando der true.
        results(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});