<template>
    <div>
        <div v-if="$slots.header">
            <slot name="header" :counter="counter">
                <p>Default Header</p>
            </slot>
        </div>
        <div v-if="$slots.default">
            <slot name="default" :counter="counter">
                <p>Anda belum mengisi content nya</p>
            </slot>
        </div>
        <div v-if="$slots.footer">
            <slot name="footer" :counter="counter">
                <p>Default Footer</p>
            </slot>
        </div>
        <div>
            <button @click="counter++">Increment Counter</button>
        </div>

    </div>
</template>

<script setup>
import { ref, useSlots } from 'vue';


const {title} = defineProps({
    title : String
})
// jika ingin melakukan pengecekan apakah slot tersedia atau tidak, jika tidak kita memang tidak ingin menampilkan element apapun, dengan menggunaka useSlot() cek nya menggunaakn directive v-if
// const slots = useSlots();


const counter = ref(0)
</script>

<style scoped>

</style>


<!--TODO INFORMASI TAMBAHAN
bisa menggunakan slots tanpa harus menggunakan useSlots() dengan alternatif '$'
-->