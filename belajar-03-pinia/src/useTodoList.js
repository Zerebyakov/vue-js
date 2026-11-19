import { defineStore } from "pinia";
import { reactive } from "vue";



let id = 0;
export const useTodoList = defineStore(`todoList`, () => {
    
    const todos = reactive([]);

    function add(name){
        todos.push({
            id: id++,
            name : name
        })
    }

    function get(id){
        return todos.find(todo => todo.id === id)
    }

    function remove(id){
        const index = todos.findIndex(todo => todo.id === id)
        if (index !== -1) {
            todos.splice(index, 1)
        }
    }
    function update(id, name) {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos[index].name = name
            
        }
    }

    return {
        todos,
        add,
        get,
        remove,
        update
    }
})