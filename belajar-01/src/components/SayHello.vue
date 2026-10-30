<script setup>
    import { computed, reactive, ref } from 'vue';
    const person = reactive({
        firstName: "",
        lastName: ""
    })

    function sayHello(){
        person.firstName = document.getElementById("firstName").value;
        person.lastName = document.getElementById("lastName").value;
    }

    //! masalah terjadi ketika isi function kompleks ketika function lain dieksekusi pada funcion ini ikut terpanggil padahal tidak ada perubahan data
    // function fullName(){ 
    //     console.log("fullName Called");
    //     return `${person.firstName} ${person.lastName}`
    // }


    //? solusinya menggunakan metode computed,jika tidak terdapat perubahan pada metode ini, maka tidak akan terpanggil, metode ini akan berubah ketika terdapat data yang diubah atau diupdate
    //oldName untuk mengetahui nilai lama sebelum nilai diupdate/diperbarui
    const fullName = computed((oldName)=>{
        console.log(`change old name ${oldName}`);
        return `${person.firstName} ${person.lastName}`;
    })

    const counter = ref(0)

    function increment(){
        console.log("increment called");
        counter.value++;
    }
</script>

<template>
    <div>
        <button v-on:click="increment">increment {{ counter }}</button> <br>
        <input placeholder="First Name" type="text" id="firstName"> <br>
        <input placeholder="Last Name" type="text" id="lastName"> <br>
        <button v-on:click="sayHello">Say Hello</button>
    </div>
    <h1>Hello {{ fullName }}</h1>

</template>

<style scoped>

</style>