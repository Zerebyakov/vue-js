<template>
    <div>
        <!-- Component sama dipanggil berapa kalipun memiliki state yang berbeda-->
        <!-- <h1>Counter Mas </h1> -->
        <Counter :name="counter1" initial-count="10" />
        <!-- jadi tidak perlu khawatir apabila state akan bentrok antar component -->
        <!-- <h1>Counter Mba </h1> -->
        <Counter v-bind:name="counter2" initial-count="20"/>
        <CounterStateless name="Ki Joko" :counter="counter"/>
        <CounterStateless name="Bodo" :counter="counter"/>
        <button @click="counter++">Increment Counter</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';


const counter1 = "Mas"
const counter2 = "Mba"

const counter = ref(0)
</script>

<style scoped>

</style>

<!-- catatan part 1:  
component bisa memiliki properties, sehingga saat memanggil Component kita bisa menambahkan value pada property menggunakan seperti attribute pada element

fungsi yang digunakan adalah defineProps

-->

<!-- catatan part 2:
keduanya berubah karena counterStateless memagang data state dari "counter", sedangkan diparentnya yaitu MultipleCounter datanya diubah, secara otomatis si counterStateless akan dilakukan render ulang karena dia memegang data si statenya

-->

