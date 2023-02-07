<template>
    <div>
        <Rotulo nome="Nome">
			<input type="text" @input="nomeElemento" :value="value.nome">
		</Rotulo>

		<Rotulo nome="Sobrenome">
			<input type="text" @input="sobrenomeElemento" :value="value.sobrenome">
		</Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue';

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: {Rotulo},
    methods: {
        nomeElemento(evento){
            this.$emit('input', {
                nome: evento.target.value,
                sobrenome: this.value.sobrenome
            })
        },
        sobrenomeElemento(evento){
            this.$emit('input', {
                nome:this.value.nome,
                sobrenome: evento.target.value
            })
        }
    }
}
</script>

<style>

</style>