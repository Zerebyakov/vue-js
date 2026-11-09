<template>
    <div>
        <h1>Not Found : {{route.path}}</h1>
        <p>Sorry, the page <b>{{ route.path }}</b> are you looking for does not exist!</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();

</script>

<style lang="scss" scoped>

</style>