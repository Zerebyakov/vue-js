<template>
    <div>
        <h1> Contact Us</h1>
        <ContactForm  v-model="contact"/>
        <h1>Preview</h1>
        <div>
            <p>Name : {{ contact.name }}</p>
            <p>Email : {{ contact.email }}</p>
            <p>Age : {{ contact.age }}</p>
            <p>Type : {{ contact.type }}</p>
            <p>Complain : {{ contact.complain }}</p>
            <p>Message : {{ contact.message }}</p>
        </div>

    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ContactForm from './ContactForm.vue';


const contact = reactive({
    name: "",
    email: "",
    age: 0,
    type: "",
    complain: false,
    message: ""
})

</script>

<style scoped>


</style>