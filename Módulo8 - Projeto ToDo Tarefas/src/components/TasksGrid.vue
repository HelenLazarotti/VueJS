<template>
    <div class="div-task">
        <!---->
        <template v-if="tasks.length">

            <Task v-for="(task, i) in tasks" :key="task.name"
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged', i)"
            :task="task"></Task>
        </template>

        <p v-else class="no-tasks">Você se superou, todas tarefas concluidas!</p>

    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    
    components: { Task },
    //precisa receber uma lista de tarefas:
    props: {
        tasks: {//vai ser do tipo array, é obrigatório>
            type: Array, required: true}
    },
    
}
</script>

<style>
    .div-task{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .div-task .task {
        margin: 10px;
    }
    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>