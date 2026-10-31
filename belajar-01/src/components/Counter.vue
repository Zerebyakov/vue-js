
<script setup>
    // mengubah counter secara manual menggunakan manipulasi DOM. Sebenarnya hal ini tidak direkomendasikan jika menggunakan vue, dikarenakan Vue menyediakan fitur bernama Reactive State, fungsinya sama untuk menyimpan state (data)
    // let count = 0
    // function Increment(){
    //     console.info(`increment counter : ${count}`)
    //     count++;
    //     document.getElementById("count").innerText = `Counter : ${count}`;
    // }

    import { nextTick, ref } from 'vue';

    console.info("Counter Component Loaded")
    let counter = ref({
        count : 0,
        name : "Zoy"
    });

    async function increment(){
        console.info(`Increment counter : ${counter.value.count}`);
        counter.value = {
            name: counter.value.name,
            count: counter.value.count + 1
        }
        
        await nextTick();
        counter.value.count++;
        
        await nextTick();
        counter.value.count++;
        
        await nextTick();
        counter.value.count++;

        await nextTick();
        console.log("Increment count after nextTick")
    }

</script>

<template>
    <div>
        <h1 id="count">Counter {{ counter.name }} : {{ counter.count }}</h1>
        <button v-on:click="increment">increment</button>
    </div>
</template>

<style scoped>

</style>