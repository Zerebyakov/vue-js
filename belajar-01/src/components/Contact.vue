<template>
    <div>
        <h1> Contact Us</h1>
        <ContactForm  v-model="contact"/>
        <ContactList v-model:name="contact.name"
                     v-model:email="contact.email"
                     v-model:age="contact.age"
                     v-model:type="contact.type"
                     v-model:complain="contact.complain"
                     v-model:message="contact.message"/>


    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ContactForm from './ContactForm.vue';
import ContactList from './ContactList.vue';


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