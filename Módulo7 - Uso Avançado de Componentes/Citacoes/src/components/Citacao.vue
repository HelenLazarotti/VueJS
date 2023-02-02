<template>
    <div class="citacao">
        <!--Não importa a ordem-->
        <slot name="fonte"></slot>
        <slot>Citação:</slot>
        <slot name="texto"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
