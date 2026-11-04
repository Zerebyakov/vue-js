<template>
    <div>
        <!-- Component sama dipanggil berapa kalipun memiliki state yang berbeda-->
        <h1>Counter Mas </h1>
        <Counter />
        <!-- jadi tidak perlu khawatir apabila state akan bentrok antar component -->
        <h1>Counter Mba </h1>
        <Counter />
    </div>
</template>

<script setup>
import Counter from './Counter.vue';


</script>

<style scoped>

</style>