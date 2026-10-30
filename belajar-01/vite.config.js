import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rolldownOptions:{
      input:{
        index: "index.html",
        hello: "hello.html",
        counter : "counter.html",
        say_hello : "say-hello.html",
        style : "style.html",
      }
    }
  }
})
