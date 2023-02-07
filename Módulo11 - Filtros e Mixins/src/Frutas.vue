<template>
    <div>
        <ul>
            <!--percorro meu array-->
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>

        <!--Mostro o item, toda vez q apartar tecla enter-->
        <input type="text" v-model="fruta" @keydown.enter="addFruta"/>
    </div>
</template>

<script>
export default {
	data(){
        return {
            fruta: '',
            frutas: ['Morango', 'Kiwi']
        }
    },
    methods: {
        addFruta(){
            this.frutas.push(this.fruta)
            this.fruta =''
        }
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
