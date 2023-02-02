import Vue from 'vue'

export default new Vue({
    methods: {
        setUserSelecionado(usuario){
            this.$emit('userSelecionado', usuario)
        },
        onUserSelecionado(callback){
            this.$on('userSelecionado', callback)
        }
    }
})