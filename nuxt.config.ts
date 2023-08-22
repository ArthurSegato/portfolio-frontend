// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt"
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 600, 900],
    },
    display: "fallback",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
