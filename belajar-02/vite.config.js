import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'users',
              test: /src\/components\/(User|UserProfile|UserHeader|UserOrder|UserOrderFooter|UserWishlist|UserWishlistFooter)\.vue$/,
            }
          ]
        }
      }
    }
  }
})


// TODO CATATAN untuk saya
// saat menggunakan vite , semua component akan di build menjadi single Javascript file, hal ini menjadi tidak terlalu berguna lazy loading yang sudah dilakukan, karena tetap saja file nya akan di load secara keseluruhannya.
// untuk menangani ini, kita bisa minta vite untuk memsiahkan component yang memang perlu buat lazy, di compile menjadi file yang terpisah
// kita bisa lakukan code splitting pada konfigurasi vite.config.js

// Lazy Loading adalah teknik untuk memuat component hanya ketika dibutuhkan
// Code Splitting adalah teknik untuk memisahkan kode aplikasi menjadi beberapa file JavaScript (chunk).
// Vite sudah mendukung Code Splitting secara otomatis, terutama ketika menggunakan Dynamic Import.
// Jika ingin mengatur pengelompokan component secara manual, kita bisa menggunakan konfigurasi codeSplitting pada vite.config.js.

// !Kesimpulan:
// Lazy Loading = Mengatur kapan component dimuat.
// Code Splitting = Mengatur bagaimana kode dipisahkan menjadi beberapa file.