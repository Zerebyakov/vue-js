<template>
    <div>
        <h1>Counter {{ counterStore.counter }}</h1>
        <button @click="counterStore.increment()">Increment</button>
        <button @click="counterStore.reset()">Reset</button>
    </div>
</template>

<script setup>
import { useCounter } from '../store';


const counterStore = useCounter()
counterStore.$subscribe((mutations, state)=>{
    console.info(mutations);
    console.info(state);
})

counterStore.$onAction((action)=>{
    console.info(action)
})
</script>

<style lang="scss" scoped>

</style>

<!-- Mengubah State
 
Store sendiri menyediakan method bernama $patch(object), yang bisa kita gunakan untuk mengubah State. Kelebihan menggunakan $patch adalah kita bisa mengubah beberapa State sekaligus karena parameternya adalah Object

sebagai contoh kita membuat tombol reset untuk mengubah counter menjadi NOL

-->

<!-- Mutation 
perubahan terhadap nilai sebuah data, misalnya mengubah nama, menambah jumlah, atau mengubah status.

-->

<!-- Subscribe Action
selain state , subscribe juga bisa diaction.
ketika action dipanggil kita mendapat informasi itu,Kita bisa Subscribe Action menggunakan method $onAction(action, state)
-->
