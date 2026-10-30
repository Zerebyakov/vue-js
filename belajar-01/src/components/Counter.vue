
<script setup>
import { ref } from 'vue';


    console.info("Counter Component Loaded")
    let count = ref(0);

    function increment(){
        console.info('Increment counter', count.value)
        count.value++;
    }

</script>

<template>
    <div>
        <h1 id="count">Counter : {{ count }}</h1>
        <button v-on:click="increment">increment</button>
    </div>
</template>

<style scoped>

</style>