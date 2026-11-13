<template>
    <div>
        <h1>Counter {{ counterStore.counter }}</h1>
        <button @click="handleClick">Increment</button>
    </div>
</template>

<script setup>
import { useCounter } from '../store';


const counterStore = useCounter()

function handleClick(){
    counterStore.counter++;
}

</script>

<style lang="scss" scoped>

</style>