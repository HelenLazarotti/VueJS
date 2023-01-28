new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        alerta(){
            alert('Você clicou nesse botão')
        },
        alterarValor(e){
            this.valor = e.target.value
        }
    }
})