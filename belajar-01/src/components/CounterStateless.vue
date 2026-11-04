<template>
    <div>
        <h1>Counter {{ name }} : {{ counter }}</h1>
    </div>
</template>

<script setup>


const {name, counter} = defineProps(["name", "counter"])
 
</script>

<style scoped>

</style>