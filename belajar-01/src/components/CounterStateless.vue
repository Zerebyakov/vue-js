<template>
    <div>
        <h1>Counter {{ name }} : {{ counter }}</h1>
        <button @click="buttonEmits">Increment : {{ name }}</button>
    </div>
</template>

<script setup>


const {name, counter} = defineProps(["name", "counter"])
const emits = defineEmits(["click"]);

function buttonEmits(){
    emits("click")
}

</script>

<style scoped>

</style>