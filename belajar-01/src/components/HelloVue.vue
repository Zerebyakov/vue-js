<script setup>

    console.info("HelloVue");
    const hello = "<h1> Hello Vue</h1>"

    const data = {
        class: "hello",
        id:"hello"
    };

    const buttonDisable = false;

    function helloFunction(){
        return "Hello World";
    }

</script>


<template>
    <h1 v-bind="data">{{ hello.toUpperCase() }}</h1>

    <h2>{{ 200*100 }}</h2>
    <h2>{{ helloFunction() }}</h2>

    <div :class="data.class" v-html="hello"></div>

</template>
<style scoped>
    .hello {
        color: green;
    }
</style>