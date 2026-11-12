<template>
    <div>
        <h1>Users</h1>
        <RouterView name="header"/>
        <!-- RouterView mendukng Slot, bahkan sebenarnya saat kita menggunakan RouterView, sebenarnya kita sudah menggunakan slot-->
         <!-- Penggunaan Slot pada RouterView ini berguna ketika ingin mengirim Props secara manual melalui component -->
        <RouterView v-slot="{Component}">
            <component :is="Component" :request-id="$route.query.requestId" />
        </RouterView>
        <RouterView name="footer"/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>