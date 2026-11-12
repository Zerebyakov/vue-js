<template>
    <div>
        <h1>{{title}}</h1>
        <p>This is home page!</p>
        <RouterLink to="/users">Users</RouterLink>
    </div>
</template>

<script setup>

const {title} = defineProps({
    title:String
})

</script>

<style lang="scss" scoped>

</style>