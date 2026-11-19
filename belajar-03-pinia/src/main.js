import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import {createRouter, createWebHistory} from 'vue-router'
import Counter from './components/Counter.vue'
import MultipleCounter from './components/MultipleCounter.vue'
import ListTodo from './components/ListTodo.vue'
import AddTodo from './components/addTodo.vue'
import UpdateTodo from './components/updateTodo.vue'

const pinia = createPinia();

const router = createRouter({
    routes:[
        {
            path:"/counter",
            component:MultipleCounter
        },
        {
            path: "/todolist",
            children:[
                {
                    path:"",
                    component: ListTodo
                },
                {
                    path: "add",
                    component:AddTodo
                },
                {
                    path:":id/edit",
                    name:"todo-edit",
                    component:UpdateTodo,
                    props: true
                }
            ]
        }
    ],
    history: createWebHistory()
})

createApp(App).use(pinia).use(router).mount('#app')
