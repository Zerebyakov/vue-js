<template>
    <div>
        <!-- Component sama dipanggil berapa kalipun memiliki state yang berbeda-->
        <!-- <h1>Counter Mas </h1> -->
        <Counter :name="counter1" />
        <!-- jadi tidak perlu khawatir apabila state akan bentrok antar component -->
        <!-- <h1>Counter Mba </h1> -->
        <Counter v-bind:name="counter2"/>
    </div>
</template>

<script setup>
import Counter from './Counter.vue';


const counter1 = "Mas"
const counter2 = "Mba"

</script>

<style scoped>

</style>

<!-- catatan :  
component bisa memiliki properties, sehingga saat memanggil Component kita bisa menambahkan value pada property menggunakan seperti attribute pada element

fungsi yang digunakan adalah defineProps

-->

