// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-security"
  ],
  site: {
    url: "https://www.arthursegato.dev",
    name: "Arthur Segato",
    description:
      "Sup? I have to write a fancy text here, probably using keywords like 'Arthur Segato' or 'Developer' so I can get a nice SEO score from daddy google",
    defaultLocale: "en",
  },
  app: {
    head: {
      titleTemplate: "%siteName %separator %s",
      templateParams: {
        separator: "|",
      },
    },
  },
  schemaOrg: {
    identity: "Person",
  },
  ogImage: {
    fonts: [
      "Inter:100",
      "Inter:300",
      "Inter:400",
      "Inter:500",
      "Inter:700",
      "Inter:900",
    ],
  },
  nitro: {
    preset: "cloudflare-pages",
  },
});