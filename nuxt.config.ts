// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '',
        },
    },
    devtools: { enabled: false },
    modules: [
        'nuxt-purgecss',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt',
        'nuxt-simple-sitemap',
        "@nuxtjs/tailwindcss"
    ],
    googleFonts: {
        families: {
            Inter: [100, 300, 400, 600, 700, 900],
        },
        display: 'fallback',
        download: true,
    },
    purgecss: {
        enabled: true,
        safelist: [
            "font-['Inter']", 
            "text-[#181A1B]",
            "selection:bg-[#181A1B]",
            "dark:bg-[#181A1B]",
            "dark:selection:text-[#181A1B]",
            "h-[250px]",
            "w-[350px]",
            "rounded-bl-[20px]",
            "rounded-tr-[20px]",
            "duration-[.25s]",
            "w-[320px]"
        ]
    },
    site: {
        url: 'https://arthursegato.dev',
    },
})