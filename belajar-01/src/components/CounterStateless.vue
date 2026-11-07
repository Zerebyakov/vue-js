<template>
    <div>
        <h1>Counter {{ name }} : {{ counter }}</h1>
        <button @click="$emit('click', increment)">Increment : {{ name }}</button>
    </div>
</template>

<script setup>


const {name, counter, increment} = defineProps({
    counter: Number,
    name: String,
    increment: Number
})
// const emits = defineEmits(["click"]);

// function buttonEmits(){
//     emits("click", increment)
// }

defineOptions({
    inheritAttrs:false
})
</script>

<style scoped>

</style>


<!--! INFORMASI TAMBAHAN
ketika saat klik muncul objek pointer dan kenapa ini terjadi ?
ini terjadi disebabkan oleh event propagation, nah kenapa terjadi?
event propagation adalah ketika kita nambahin event dia juga ditambahin eventnya diatasnya juga diatasnya ada event yang sama.
kebetulan ada event button diatasnya ada di bungkus dengan div, sedangkan div punya event onclick, karena div membungkus dalam satu element atau yang disebut single element artinya semua yang dikirimkan attributs maka akan di forward ke dalam elementnya atau bisa disebut sebagai fallthrough attributess, jadi yang klik dalam component lain(MultipleComponent) otomatis akan ada juga di div(component ini) ini. 

solusi: definisikan defineOption() dengan inheritAttrsnya false 

-->