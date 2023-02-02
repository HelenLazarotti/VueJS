<template>
    <div class="contadores">
        <!--Peço pra exibir 3x-->
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>

import Contador from './Contador.vue'

export default {
    components: {
        'app-contador': Contador
    }
}
</script>

<style>

</style>