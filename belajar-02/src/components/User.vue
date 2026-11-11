<template>
    <div>
        <h1>Users</h1>
        <!-- !PERBEDAAN anchor dengan RouterLink(vue) -->
        <ul>
            <li><RouterLink :to="{name: `user-profile`}">Profile</RouterLink></li>
            <li><RouterLink :to="{name: `user-order`}">Order</RouterLink></li>
            <li><RouterLink :to="{name: `user-wishlist`}">Wishlist</RouterLink></li>
        </ul>
        <!-- ? jika menggunakan anchor halaman akan direload ulang, yang menyebabkan web menjadi lama -->
        <!-- <ul>
            <li><a href="/users/profile">Profile</a></li>
            <li><a href="/users/order">Order</a></li>
            <li><a href="/users/wishlist">Wishlist</a></li>
        </ul> -->

        <p>Put the header here</p>
        <RouterView />
        <p>Put the footer here</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.router-link-exact-active {
    color: red;
    font-weight: bold;
}
</style>