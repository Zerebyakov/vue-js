<script setup>
const items = [{
    id:1,
    text: "Learn Vue 3"
},{
    id:2,
    text: "Learn Vue Router"
},{
    id:3,
    text: "Learn API "
},{
    id:4,
    text: "Learn React then go back"
}
];


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
        <ul v-for="item in items" :key="item.id">
            <li v-for="(value, key) in item">
                {{ key }} : {{ value }}
            </li>
        </ul>

        <!-- List for Range -->
        <div v-for="i in 10">
            <h1>Hello {{ i }}</h1>
        </div>
    </div>
</template>
<style scoped>

</style>