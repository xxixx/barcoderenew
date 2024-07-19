import path from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  assets: {
    dir: 'assets'
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", '~/assets/styles/print.css'],
  vite: {
    resolve: {
      alias: {
       '~bootstrap': path.resolve(__dirname, "node_modules/bootstrap"),
       '~bootstrap-icons': path.resolve(__dirname, "node_modules/bootstrap-icons")
      }
    }
  }, 
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon'
    
    // 'jsonwebtoken'
    // '@pinia-plugin-persistedstate/nuxt', 
    // '@nuxtjs/cookie'
  ],
 
  plugins: [
    // '~/plugins/piniaPersistedState.client.ts', // Other plugins...
    '~/plugins/piniaPersistedState.client.ts',

   
  ],
  build: {
    transpile: ['jspdf-plugin-png'],
  },
  pinia: {
    autoImports: ['defineStore'],
  },
  
  
})
