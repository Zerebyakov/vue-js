<template>
    <div>
        <button @click="currentPage = `about`">About</button>
        <button @click="currentPage = `blog`">Blog</button>
        <button @click="currentPage = `contact`">Contact</button>
        <component :is="pages[currentPage]"></component>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import About from './About.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';

const currentPage = ref('about')

const pages = {
    about: About,
    blog:Blog,
    contact: Contact
}


</script>

<style scoped>

</style>