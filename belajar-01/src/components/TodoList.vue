<script setup>
const items = [{
    id: 1,
    text: "Learn Vue 3",
    done: true
}, {
    id: 2,
    text: "Learn Vue Router",
    done: false
}, {
    id: 3,
    text: "Learn API ",
    done: false
}, {
    id: 4,
    text: "Learn React then go back",
    done: false
}];


</script>
<template>
    <div>
        <h1>Todo List</h1>

        <!-- sebelum modifikasi -->
        <!-- <ul>
            <li v-for="item in items">
                {{ item.text }}
            </li>
        </ul> -->
        <!-- setelah modifikasi for didalam for -->

        <!-- directive vfor dan vif bisa langsung diintegrasikan dalam satu element -->
        <!-- directive v-if memiliki prioritas yang utama dibandingka v-for, jadi jika kondisi v-if terpenuhi, baru iterasi di v-for dilakukan -->
        <template v-for="item in items">
            <ul v-if="!item.done" :key="item.id">
                <li v-for="(value, key) in item">
                    {{ key }} : {{ value }}
                </li>
            </ul>
        </template>

        <!-- List for Range -->
        <div v-for="i in 10">
            <h1>Hello {{ i }}</h1>
        </div>
    </div>
</template>
<style scoped></style>