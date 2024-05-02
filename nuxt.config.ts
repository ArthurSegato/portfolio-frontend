// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/seo",
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
});
