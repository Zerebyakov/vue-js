<template>
    <div>
        <h1>{{ title }}</h1>
        <div>
            <slot>
                <p>Anda belum mengisi content nya</p>
            </slot>
        </div>

    </div>
</template>

<script setup>

const {title} = defineProps({
    title : String
})

</script>

<style scoped>

</style>