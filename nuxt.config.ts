// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-security"],
  nitro: {
    preset: "vercel-edge",
  },
  image: {
    format: ["avif", "webp"],
  },
  security: {
    headers: {
      strictTransportSecurity: {
        preload: true,
      },
    },
  },
  runtimeConfig: {
    webhooks: {
      contact: process.env.WEBHOOK_CONTACT,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Arthur Segato | Developer",
      link: [
        {
          rel: "canonical",
          href: "https://www.arthursegato.dev",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "https://www.arthursegato.dev/favicon.ico",
        },
        {
          rel: "icon",
          sizes: "48x48",
          href: "https://www.arthursegato.dev/favicon48.ico",
        },
        {
          type: "image/svg+xml",
          rel: "icon",
          sizes: "any",
          href: "https://www.arthursegato.dev/icon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "https://www.arthursegato.dev/apple-touch-icon.png",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
        },
        {
          name: "keywords",
          content:
            "Web Developer Porto,Full-Stack Development Brazil,UI/UX Design,Game Development,Virtual Reality Enthusiast,Cybersecurity Advocate,Open-Source Initiatives Supporter,Computer Science Bachelor Brazil,Video Editing,Brazilian Tech Professional,Arthur Segato Web Development,Open Source Technology Advocate,Virtual Reality Developer Brazil,Vue 3 Freelance Developer,Nuxt 3,Vercel Deployment,PostgreSQL Database,Figma Design Integration,Qwik Framework Development,Freelance Web Developer,Vue.js Web Applications,Nuxt.js SEO Optimization,Arthur,Arthur Segato,Arthur Segatto,Segato,Segatto,Developer,Web Developer,Game Developer,VR,UX,UI,Porto",
        },
        {
          name: "author",
          content: "Arthur Segato",
        },
        {
          name: "og:title",
          content: "Arthur Segato | Developer",
        },
        {
          name: "og:description",
          content:
            "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
        },
        {
          name: "og:url",
          content: "https://www.arthursegato.dev",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site:name",
          content: "Arthur Segato | Developer",
        },
        {
          name: "og:image",
          content: "https://www.arthursegato.dev/facebook-card.jpg",
        },
        {
          name: "og:image:secure_url",
          content: "https://www.arthursegato.dev/facebook-card.jpg",
        },
        {
          name: "og:image:alt",
          content:
            "Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.",
        },
        {
          property: "og:image:width",
          content: "1240",
        },
        {
          property: "og:image:height",
          content: "650",
        },
        {
          property: "og:image:type",
          content: "image/jpg",
        },
        {
          name: "twitter:title",
          content: "Arthur Segato | Developer",
        },
        {
          name: "twitter:description",
          content:
            "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
        },
        {
          name: "twitter:site",
          content: "https://www.arthursegato.dev",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: "https://www.arthursegato.dev/twitter-card.jpg",
        },
        {
          name: "twitter:image:alt",
          content:
            "Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.",
        },
        {
          name: "twitter:site",
          content: "https://www.arthursegato.dev",
        },
        {
          name: "twitter:image:type",
          content: "image/jpg",
        },
        {
          name: "twitter:image:width",
          content: "900",
        },
        {
          name: "twitter:image:height",
          content: "470",
        },
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
          content: "#e5e6e6",
        },
        {
          name: "color-scheme",
          content: "light dark",
        },
      ],
    },
  },
});
