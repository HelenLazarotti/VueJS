<template>

    <div class="newTaks">
        <input type="text" v-model="name" @keydown.enter="add" class="inputTask" placeholder="Digite sua tarefa...">

        <button class="btnAdd" @click="add">+</button>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            name: ''
        }

    },
    methods: {
        add(){
            this.$emit('taskAdded', { name: this.name})
            this.name = ''
        }
    }
}
</script>

<style>
    .newTask {
        margin: 35px;
    }

    .inputTask, .btnAdd {
        outline: none;
        font-size: 20px;
        border: none;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    .inputTask {
        width: 20em;
        background: rgba(255, 255, 255, 0.411);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        margin-bottom: 1.5em;
    }

    .btnAdd {
        border-left: none;
        background-color: #fba002;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .btnAdd:hover{
        background-color: #ffb536;
    }
</style>