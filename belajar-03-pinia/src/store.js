import { defineStore } from "pinia";
import { ref } from "vue";


export const useCounter = defineStore("counter", () => {
    const counter = ref(0)
    return {
        counter
    }
})


// catatan : 
// biasanya kita membuat state dalam komponen
// di Store kita juga bisa membuat State. caranya sama seperti membuat state di Vue. State yang kita buat di Store, artinya bisa kita akses dimanapun lewat Store tersebut. Cara membuat State kita bisa buat dalam Store lalu State yang ingin kita ekspose keluar, kita returnkan dalam objek.