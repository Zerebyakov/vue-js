<template>
    <div>
        <div>
            <slot name="header">
                <p>Default Header</p>
            </slot>
        </div>
        <div>
            <slot name="default">
                <p>Anda belum mengisi content nya</p>
            </slot>
        </div>
        <div>
            <slot name="footer">
                <p>Default Footer</p>
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