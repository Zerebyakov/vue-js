import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import NotFound from './components/NotFound.vue'
import ProductSearch from './components/ProductSearch.vue'
import User from './components/User.vue'
import UserProfile from './components/UserProfile.vue'
import UserOrder from './components/UserOrder.vue'
import UserWishlist from './components/UserWishlist.vue'
import UserHeader from './components/UserHeader.vue'
import UserOrderFooter from './components/UserOrderFooter.vue'
import UserWishlistFooter from './components/UserWishlistFooter.vue'

const router = createRouter({
    routes: [
        {
            path: "/",
            component: Home,
            props:{
                title: "Home Page"
            }
        },
        // contoh redirect ke home
        {
            path: "/home",
            redirect: '/'
        },
        {
            path: "/about",
            component: About,
            sensitive: true // secara default route path itu case insensitive artinya jika buat route /about, maka bisa diakses dengan /About atau /ABOUT v00.39.10
        },
        {
            path: "/products/search",
            component: ProductSearch,
            name: "product-search",
            props: route=>({
                product: route.query.product
            })
        },
        {
            path: "/products/search/:keyword",
            redirect: route => {
                return {
                    name:"product-search",
                    query:{
                        product : route.params.keyword
                    }
                }
            }
        },
        {
            path: "/products/:id(\\d+)?", // !Matching Syntax - menggunakan Regex pada route param, sehingga bisa melakukan validasi karakter-karakter apa yang bisa digunakan, contoh : (\\d+) artinya hanya menerima digits atau number selain itu not found
            // TODO Optional Param - kita bisa buat route param menjadi optional(tidak wajib diisi), caranya kita bisa tambahkan (?) dibelakang Route Params
            component: ProductDetail,
            props:true
            // props: route =>({
            //     id: route.params.id
            // })
        },
        // ! Lazy Loading Route
        // saat membuat halaman yang lumayan banyak, mungkin ada baiknya komponen diload secara lazy (ketika dikunjungi, baru diload), secara default seluruh komponen akan diload diawal karena kita lakukan import dimain js 
        {
            path: "/users",
            component: () => import('./components/User.vue'),
            children: [
                {
                    path: "",
                    name: "user",
                    components: {
                        header: () => import('./components/UserHeader.vue'),
                        default: () => import('./components/UserProfile.vue')
                    }
                },
                {
                    path: "profile",
                    name: "user-profile",
                    components: {
                        header: () => import(`./components/UserOrder.vue`),
                        default: () => import(`./components/UserProfile.vue`)
                    }
                },
                {
                    path: "order",
                    name: "user-order",
                    components: {
                        header: () => import(`./components/UserOrder.vue`),
                        default: () => import(`./components/UserOrder.vue`),
                        footer: () => import(`./components/UserOrderFooter.vue`)
                    }
                },
                {
                    path: "wishlist",
                    name: "user-wishlist",
                    components: {
                        header: () => import(`./components/UserHeader.vue`),
                        default: () => import(`./components/UserWishlist.vue`),
                        footer: () => import(`./components/UserWishlistFooter.vue`)
                    }
                }
            ]
        },
        {
            path: "/:notfound*",
            component: NotFound
        }
    ],
    // vue menyediakan 3 mode history : 
    history: createWebHistory() // TODO - HTML5 Mode -> ketika menggunakan mode ini, URL akan terlihat normal seperti http://domain/users/profile, tetapi perlu hati hati karena sebenarnya kita mengakses file index.html yang artinya semua req yang masuk harus diterima oleh file index.html
    // history:createWebHashHistory() // TODO - Hash Mode -> ketika menggunakan hash mode, maka kketika mengakses URL path kita akan menggunakan hash, misal http://nama-domain/#/users/profile
    // history:createMemoryHistory() // TODO - Memory Mode -> ketika menggunakan Memory mode , maka tidak akan ada perubahan URL pada browser artinya perpindahan halaman harus dilakukan menggunakan RouterLink atau secara manual menggunakan router.push()
})


createApp(App).use(router).mount('#app')
