<template>
    <div>
        <input type="text" v-model="profile.name" placeholder="name">
        <Profile/>
        <ProfileAddress />
        
    </div>
</template>

<script setup>
import { provide, reactive } from 'vue';
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';



const profile = reactive({
    name: "zoy",
    email: "zoy@test.com"
})

provide("profile", profile);


</script>

<style lang="scss" scoped>

</style>

<!--TODO Catatan Props Problem:
ini kadang bisa menjadi masalah ketika kode terlalu banyak yang harus dibuat, dan pastinya rentan terjadi kesalahan dalam pembuatan kodenya 
-->


<!--! PERINGATAN
-Provide dan Inject hampir mirip dengan Global Variable diParent dan Child Component, karena semua Child Component bisa mengakses data yang sama
-Berbeda dengan State yang saling terisolasi antar Component, Provide dan Inject akan mendapat data yang sama di semua Child Component
-Oleh karena itu perlu diperhatikan ketika menggunakan Provide dan Inject
-Sebisa mungkin gunakan ini jika memang sudah sulit menggunakan Props
-->