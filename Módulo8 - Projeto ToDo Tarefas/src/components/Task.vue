<template>
    <div @click="$emit('taskStateChanged', task)"
        class="div" :class="stateClass">

        <!--O xis que fica ali pra tirar tarefa,
        quando eu clicar osbre o X, para tudo, e oq ele emitir, determina que ta deletado-->
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>

        <p>{{  task.name }}</p>
    </div>
    
</template>

<script>

export default {
    props: {
        //cada tarefa é um obj e obriogatório.
        task: { type: Object, required: true}
    },
    computed: {
        stateClass(){
            return {
                //criando classes p por estilo conforme a ação do usuário
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .div{
        position: relative;
        box-sizing: border-box;
        width: 20em;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em;

    }
    .pending {
        border-left: 12px solid #6e6e6e;
        background-color: #dedede;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }
    .pending .close {
        background-color: #dc0f00;
        color: #fff;
    }

    .done .close {
        background-color: #0A8F08;
    }
    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>