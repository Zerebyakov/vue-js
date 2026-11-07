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