<template>
    <div>
        <h1>User Profile</h1>
    </div>
</template>

<script setup>
const {requestId} = defineProps(["requestId"])

console.log(`Request Id : ${requestId}`)

</script>

<style lang="scss" scoped>

</style>