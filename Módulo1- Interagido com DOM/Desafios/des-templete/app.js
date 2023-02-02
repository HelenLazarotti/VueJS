new Vue({

    el: '#desafio',
    data: {
        name: 'Helen Lazarotti',
        age: 21,
        link: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg'
    },
    methods: {
        newAge: function () {
            return this.age * 3
        },
        number: function() {
           return parseInt(Math.random() * (0, 10) + 0);
        }
    }
})