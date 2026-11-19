<template>
    <div>
        <h1>add Todo</h1>
        <input v-model="name" type="name" placeholder="Enter todo name">
        <button @click="updateTodo">Update</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';

const {id} = defineProps(["id"])
const todoList = useTodoList();
const todo = todoList.get(Number(id))
const name = ref(todo.name)
const router = useRouter()

function updateTodo() {
    todoList.update(Number(id), name.value)
    router.push("/todolist")
    
}

</script>

<style lang="scss" scoped>

</style>