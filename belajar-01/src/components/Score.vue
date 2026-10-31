
<script setup>
import { ref } from 'vue';
const score = ref(10);

</script>

<template>
    <div>
        <h1> Score App</h1>
        <div v-show="score > 50">
            Score is {{ score }}
        </div>
        <div v-if="score > 90">
            Yayy cool score homie {{ score }}
        </div>
        <div v-else-if="score > 70">
            Good score by the wy {{ score }}
        </div>
        <div v-else>
            Upss, bad luck i guess {{ score }}
        </div>
    </div>
</template>

<style scoped>

</style>