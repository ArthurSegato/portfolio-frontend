// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "canonical",
          href: "https://arthursegato.com",
        },
        {
          href: "favicon.ico",
          rel: "icon",
          sizes: "32x32",
        },
        {
          type: "image/svg+xml",
          href: "icon.svg",
          rel: "icon",
          sizes: "any",
        },
        {
          href: "apple-touch-icon.png",
          rel: "apple-touch-icon",
        },
        {
          href: "manifest.webmanifest",
          rel: "manifest",
        },
      ],
      meta: [
        {
          name: "google",
          content: "notranslate",
        },
        {
          name: "robots",
          content: "",
        },
        {
          name: "revisit-after",
          content: "1 day",
        },
        {
          name: "theme-color",
          content: "#181A1B",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/tailwindcss",
  ],
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 600, 700, 900],
    },
    display: "fallback",
    download: true,
  },
  purgecss: {
    enabled: false,
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
      "w-[320px]",
    ],
  },
  site: {
    url: "https://arthursegato.dev",
  },
});
