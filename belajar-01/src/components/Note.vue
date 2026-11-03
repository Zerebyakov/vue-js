<template>
    <div>
        <h1>Buat Note</h1>
        <div>
            <input type="text" ref="noteInput" v-model="note" placeholder="Tulis Note disini">
            <button @click="addNote">Tambah note</button>
        </div>

        <h1>Daftar Note</h1>
        <ul>
            <li v-for="note in notes">{{ note }}</li>
        </ul>
    </div>
</template>

<script setup>
import { reactive, ref, useTemplateRef } from 'vue';


const notes = reactive([])
const note = ref("")
const noteInput = useTemplateRef("noteInput")


function addNote(){
    notes.push(note.value);
    note.value = "";
    noteInput.value.focus();
}

</script>

<style scoped>

</style>