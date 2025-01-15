import Tailwind from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxt/eslint', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      Tailwind()
    ]
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})