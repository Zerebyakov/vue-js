<template>
    <div>
        <label for="productId">
            Product Id :
            <select v-model="productId">
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                <option value="product3">Product 3</option>
            </select>
        </label>
        <div v-for="product in products" :key="product.id">
            <h1>Product</h1>
            <p>Id : {{ product.id }}</p>
            <p>Name : {{ product.name }}</p>
            <p>Price : {{ product.price }}</p>
        </div>

    </div>
</template>

<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from 'vue';



const productId = ref("product1")
const products = ref(null);

// watch(productId, async (newVal, oldVal) => {
//     console.log("Call watch callback")
//     const response = await fetch(`/${newVal}.json`);
//     products.value = await response.json();
// },{
//     immediate: true,
//     //once:true jika ingin hanya dipanggil sekali saja
// })

//alternatif atau shortcut jika menggunakan watch include immediate:true
watchEffect(async () => {
    onWatcherCleanup(()=>{
        console.log("Clean Up")
    })
    console.log("Call the watch callback")
    const response = await fetch(`/${productId.value}.json`);
    products.value = await response.json()
})

</script>

<style scoped></style>s