// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '',
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['nuxt-purgecss', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
    googleFonts: {
        families: {
            Inter: [100, 300, 400, 600, 700, 900],
        },
        display: 'fallback',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
