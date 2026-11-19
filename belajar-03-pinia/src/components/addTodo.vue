<template>
    <div>
        <h1>add Todo</h1>
        <input v-model="name" placeholder="input todo list">
        <button @click="addTodo">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';


const name = ref("")

const todoList = useTodoList()
const router = useRouter()

function addTodo() {
    todoList.add(name.value)
    router.push("/todolist")
    
}

</script>

<style lang="scss" scoped>

</style>