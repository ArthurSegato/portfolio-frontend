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
          href: "https://arthursegato.dev",
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
  devtools: { enabled: false },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "@nuxtjs/tailwindcss",
    "nuxt-link-checker",
    "nuxt-security",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "Arthur Segato | Developer",
      short_name: "Arthur Segato",
      description:
        "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
      lang: "en-US",
      start_url: "https://arthursegato.dev",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: "#181A1B",
      background_color: "#f5f5f4",
      display: "standalone",
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 600, 700, 900],
    },
    display: "fallback",
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
      "w-[320px]",
    ],
  },
  site: {
    url: "https://arthursegato.dev",
  },
});
