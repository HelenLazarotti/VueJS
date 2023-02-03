<template>
    <div class="progress">
        <span class="progressValue">{{ progress }}%</span>

        <div class="progressBox" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: { type:Number, default: 0}
    }
}
</script>

<style>
    .progress{
        position: relative;
        width: 80%;
        color: #FFF;
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .progressValue{
        z-index: 1;
        font-size: 1.5rem;
    }
    .progressBox{
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #46fd4c;
        align-self: flex-start;
    }
</style>