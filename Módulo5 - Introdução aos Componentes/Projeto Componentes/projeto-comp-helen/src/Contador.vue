<template>
    <div class="contador">
        <span>{{ contador}}</span>

        <button @click="add">+</button>

        <button @click="less">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contador: 0
        }
    },
    methods: {
        add(){
            this.contador++
        },
        less(){
            this.contador--
        }
    }
}
</script>

<style scoped>
    span{
        border-bottom: 1px;
        height: 30px;
        padding: 5px 20px;
        font-size: 35px;
    }

    button[data-v-6cbbf471] {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #5b0077;
        color: #fff;
        margin-left: 10px;
        outline: none;
        border: none;
        font-size: 25px;
    }
</style>