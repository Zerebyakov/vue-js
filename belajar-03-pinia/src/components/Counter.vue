<template>
    <div>
        <h1>Counter {{ counterStore.counter }}</h1>
        <button @click="handleClick">Increment</button>
        <button @click="handleReset">Reset</button>
    </div>
</template>

<script setup>
import { useCounter } from '../store';


const counterStore = useCounter()
counterStore.$subscribe((mutations, state)=>{
    console.info(mutations);
    console.info(state);
})

function handleClick(){
    counterStore.counter++;
}

function handleReset(){
    counterStore.$patch({
        counter: 0
    })
}

</script>

<style lang="scss" scoped>

</style>

<!-- Mengubah State
 
Store sendiri menyediakan method bernama $patch(object), yang bisa kita gunakan untuk mengubah State. Kelebihan menggunakan $patch adalah kita bisa mengubah beberapa State sekaligus karena parameternya adalah Object

sebagai contoh kita membuat tombol reset untuk mengubah counter menjadi NOL

-->