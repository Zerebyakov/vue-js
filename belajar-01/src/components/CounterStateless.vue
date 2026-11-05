<template>
    <div>
        <h1>Counter {{ name }} : {{ counter }}</h1>
        <button @click="buttonEmits">Increment : {{ name }}</button>
    </div>
</template>

<script setup>


const {name, counter, increment} = defineProps({
    counter: Number,
    name: String,
    increment: Number
})
const emits = defineEmits(["click"]);

function buttonEmits(){
    emits("click", increment)
}

</script>

<style scoped>

</style>