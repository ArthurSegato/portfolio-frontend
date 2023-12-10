// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-link-checker",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  nitro: {
    preset: "vercel-edge",
  },
  routeRules: {
    "/": {
      headers: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
      },
    },
  },
  site: {
    url: "https://www.arthursegato.dev",
  },
  runtimeConfig: {
    eastereggWebhook: "",
    contactWebhook: "",
    githubKey: "",
    youtubeKey: "",
  },
  css: ["@/assets/css/main.css"],
  image: {
    format: ["avif"],
  },
});
