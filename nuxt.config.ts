import axios from "./plugins/axios";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  components: [
    {
        path: '~/components/pages',
        pathPrefix: false,
     },
      {
        path: '~/components/pages/libraries',
        pathPrefix: false,
     },
   
      '~/components'
  ],
 
  nitro: {
    devProxy: {
        "/devApi": {
            target:'http://192.168.7.235:8080/api',
            changeOrigin: true,
            prependPath: true,
        }
    }
  },
  //  runtimeConfig: {
  //   public: {
  //      apiBase: 'http://192.168.7.235:8080/api',
  //     // apiBase: 'http://192.168.7.148:8080/api',
  //    },
  // },
})