import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    routes:[
        {
            path: "/",
            component: Home
        },
        {
            path:"/about",
            component: About
        },
        {
            path:"/products/:id(\\d+)", // !Matching Syntax - menggunakan Regex pada route param, sehingga bisa melakukan validasi karakter-karakter apa yang bisa digunakan, contoh : (\\d+) artinya hanya menerima digits atau number selain itu not found
            component: ProductDetail
        },
        {
            path:"/:notfound*",
            component: NotFound
        }
    ],
    history:createWebHistory()
})


createApp(App).use(router).mount('#app')
