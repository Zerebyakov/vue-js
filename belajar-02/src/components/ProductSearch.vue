<template>
    <div>
        <h1>Products</h1>
        <form>
            <input type="text" name="product" v-model="search" placeholder="search product">
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const products = ref([])
const route = useRoute();

const search = ref(route.query.product || '');
const router = useRouter();

watchEffect(() => {
    router.replace({
        name: 'product-search',
        query: {
            product: search.value
        }
    })
    fetch("/api/products.json")
        .then(response => response.json())
        .then(products => products.filter(product => product.name.includes(search.value)))
        .then(data => products.value = data)
})

console.log(search)
</script>

<style lang="scss" scoped></style>