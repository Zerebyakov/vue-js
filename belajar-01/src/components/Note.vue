<template>
    <div>
        <h1>Buat Note</h1>
        <div>
            <input type="text" ref="noteInput" v-model="note" placeholder="Tulis Note disini">
            <button @click="addNote">Tambah note</button>
        </div>

        <h1>Daftar Note</h1>
        <ul>
            <li v-for="note in notes" ref="noteList">{{ note }}</li>
        </ul>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated, reactive, ref, useTemplateRef } from 'vue';


const notes = reactive([])
const note = ref("")
const noteInput = useTemplateRef("noteInput")
const noteList = useTemplateRef("noteList")


function addNote(){
    notes.push(note.value);
    note.value = "";
    noteInput.value.focus();
    if(noteList.value){
        noteList.value.forEach((li)=>{
            console.info(li.textContent)
        })
    }
}
// sebelum Vue membuat dan memasang DOM komponen ke halaman
onBeforeMount(()=>{
    console.info(`onBeforeMount`)
})
// kondisi ketika komponen sudah dipasang ke halaman HTML (DOM)
onMounted(()=>{
    console.info(`onMounted`)
})
// ketika data reaktif berubah dan Vue selesai memperbarui DOM
onUpdated(()=>{
    console.info(`onUpdated`)
})

</script>

<style scoped>

</style>