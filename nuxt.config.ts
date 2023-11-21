// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    eastereggWebhook: "",
    contactWebhook: "",
    githubKey: "",
    youtubeKey: "",
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
          href: "https://www.arthursegato.dev/favicon.ico",
          rel: "icon",
          sizes: "32x32",
        },
        {
          type: "image/svg+xml",
          href: "https://www.arthursegato.dev/icon.svg",
          rel: "icon",
          sizes: "any",
        },
        {
          href: "https://www.arthursegato.dev/apple-touch-icon.png",
          rel: "apple-touch-icon",
        },
        {
          href: "https://www.arthursegato.dev/manifest.webmanifest",
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
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "keywords",
          content:
            "arthur,segato,arthursegato,arthur segato,segatto,arthursegatto,arthur segatto,developer,game developer,web developer,computer science,steam,games,Game Development,Video Games,Game Design,Game Programming,Game Engines,Game Mechanics,Game Art,Level Design, Game Testing,Virtual Reality (VR) Gaming,Augmented Reality (AR) Gaming,Indie Game Development, Mobile Game Development, Console Game Development, PC Game Development, Game Marketing, Esports, Game Audio, Game Storytelling, Character Design, Game Production, Game Publishing, Game Analytics, Game Community Management, Game Monetization Strategies, Game Development Tools, Game Industry Trends, Game Industry Conferences, Game Quality Assurance (QA),Web Development, Front-end Development, Back-end Development, Full-stack Development, Web Design, HTML, CSS, JavaScript, Responsive Web Design, User Experience (UX), User Interface (UI), Web Frameworks, API Integration, Cross-browser Compatibility, Web Performance Optimization, Content Management Systems (CMS), E-commerce Development, Mobile Web Development, Progressive Web Apps (PWAs), Web Security, Web Accessibility, Version Control (Git), Web Hosting, SEO (Search Engine Optimization), Web Analytics, Web Prototyping, Web Testing, Web Deployment, Web Standards, JavaScript Libraries (e.g., jQuery), Front-end Frameworks, Vue.js, Back-end Technologies Node.js",
        },
        {
          property: "og:site:name",
          content: "Arthur Segato",
        },
        {
          name: "author",
          content: "Arthur Segato",
        },
        {
          name: "color-scheme",
          content: "dark light",
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
          content: "image/gif",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image:type",
          content: "image/gif",
        },
        {
          name: "twitter:image:width",
          content: "900",
        },
        {
          name: "twitter:image:height",
          content: "470",
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-link-checker",
    "@vite-pwa/nuxt",
  ],
  image: {
    format: ["avif"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
    },
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 600, 700, 900],
    },
    display: "fallback",
    download: true,
  },
  site: { url: "https://example.com" },
  pwa: {
    manifest: {
      name: "Arthur Segato | Developer",
      short_name: "Arthur Segato",
      description:
        "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
      lang: "en-US",
      start_url: "arthursegato.dev",
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
        {
          src: "/icon-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      theme_color: "#181A1B",
      background_color: "#f5f5f4",
      display: "standalone",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
