<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const theme = useColorMode()

const route = useRoute()

const runtimeConfig = useRuntimeConfig()

const { data: project } = await useFetch(`${runtimeConfig.public.apiBase}projects/${route.params.id}`)

useHead({
    meta: [
        {
            name: 'thumbnail',
            content: 'https://arthursegato.dev/images/google-card.jpg'
        }
    ]
})

useSeoMeta({
    title: `Arthur Segato | ${project.name}`,
    description: `${project.description}`,
    keywords: 'arthur,segato,arthursegato,arthur segato,segatto,arthursegatto,arthur segatto, developer, game developer, web developer,computer science,steam,games,Game Development, Video Games, Game Design, Game Programming, Game Engines, Game Mechanics, Game Art, Level Design, Game Monetization, Game Testing, Virtual Reality (VR) Gaming, Augmented Reality (AR) Gaming, Indie Game Development, Mobile Game Development, Console Game Development, PC Game Development, Game Marketing, Esports, Game Audio, Game Storytelling, Character Design, Game Production, Game Publishing, Game Analytics, Game Community Management, Game Monetization Strategies, Game Development Tools, Game Industry Trends, Game Industry Conferences, Game Quality Assurance (QA),Web Development, Front-end Development, Back-end Development, Full-stack Development, Web Design, HTML, CSS, JavaScript, Responsive Web Design, User Experience (UX), User Interface (UI), Web Frameworks, API Integration, Cross-browser Compatibility, Web Performance Optimization, Content Management Systems (CMS), E-commerce Development, Mobile Web Development, Progressive Web Apps (PWAs), Web Security, Web Accessibility, Version Control (e.g., Git), Web Hosting, SEO (Search Engine Optimization), Web Analytics, Web Prototyping, Web Testing, Web Deployment, Web Standards, JavaScript Libraries (e.g., jQuery), Front-end Frameworks, Vue.js, Back-end Technologies Node.js',
    ogTitle: `Arthur Segato | ${project.name}`,
    ogDescription: `${project.description}`,
    ogType: 'website',
    ogUrl: `https://arthursegato.dev/projects/${route.params.id}`,
    ogSiteName: 'Arthur Segato',
    ogImage: {
        url: 'https://arthursegato.dev/gifs/facebook-card.gif',
        secureUrl: 'https://arthursegato.dev/gifs/facebook-card.gif',
        alt: 'Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.',
        width: '1240',
        height: '650',
        type: 'image/gif'
    },
    twitterTitle: `Arthur Segato | ${project.name}`,
    twitterDescription: `${project.description}`,
    twitterCard: 'summary_large_image',
    twitterImage: {
        url: 'https://arthursegato.dev/videos/twitter-card.gif',
        type: 'image/gif',
        alt: 'Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.',
        width: '900',
        height: '470'
    },
    twitterSite: `https://arthursegato.dev/projects/${route.params.id}`,
    author: 'Arthur Segato',
    colorScheme: 'dark light',
    viewport: {
        userScalable: 'yes'
    }
})
</script>

<template>
    <section
        class="box-border w-full overflow-hidden bg-stone-100 font-['Inter'] text-[#181A1B] selection:bg-[#181A1B] selection:text-stone-100 dark:bg-[#181A1B] dark:text-stone-100 dark:selection:bg-stone-100 dark:selection:text-[#181A1B]">
        <header id="hero" class="relative flex h-screen w-full items-center justify-center">
            <h1
                class="z-20 text-4xl font-thin text-stone-100 transition-all duration-200 ease-in-out md:text-6xl xl:text-8xl">
                {{ project.name }}
            </h1>
            <video autoplay muted loop class="absolute top-0 h-full w-full select-none object-cover object-center"
                v-if="project.cover === null">
                <source src="/videos/cover.mp4" type="video/mp4" />
            </video>
            <img class="absolute top-0 h-full w-full select-none object-cover object-center"
                v-else-if="project.cover.mimetype === 'image/avif'" :src="project.cover.url" />
            <video autoplay muted loop class="absolute top-0 h-full w-full select-none object-cover object-center" v-else>
                <source :src="project.cover.url" :type="project.cover.mimetype" />
            </video>
            <NuxtLink to="/"
                class="group absolute left-4 top-4 z-20 h-9 w-9 transition-all duration-200 ease-in-out md:left-8 md:top-4 md:h-7 md:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full fill-stone-100 group-hover:fill-stone-300"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </NuxtLink>
            <NuxtLink :to="{ hash: '#info' }" class="absolute bottom-10 z-20 h-11 w-11 animate-bounce md:h-7 md:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full fill-stone-100 group-hover:fill-stone-300"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </NuxtLink>
        </header>
        <main id="info" class="flex w-full flex-col gap-7 p-7 md:p-12 xl:px-24 2xl:px-48">
            <ul class="flex flex-col gap-7">
                <li>
                    <h3 class="text-xl font-bold">Description</h3>
                    <p class="whitespace-pre-wrap text-sm">{{ project.long_description }}</p>
                </li>
                <li>
                    <h3 class="text-xl font-bold">Links</h3>
                    <div class="flex flex-wrap gap-2 text-sm">
                        <a class="underline" :href="link.url" v-for="link in project.links">{{ link.name }}</a>
                    </div>
                </li>
            </ul>
            <ul class="flex flex-wrap justify-between gap-7 md:-order-1">
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Category</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                        <path
                            d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                    </svg>
                    <p class="text-sm">{{ project.category }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Visits</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <p class="text-sm">{{ project.visits === null ? 'N/A' : new Intl.NumberFormat().format(project.visits)
                    }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Downloads</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.downloads === null ? 'N/A' : new Intl.NumberFormat().format(project.downloads) }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Revenue/Donations</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path
                            d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.revenue === null ? 'N/A' : `$ ${new Intl.NumberFormat().format(project.visits)}` }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Views</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.youtube.views === null ? 'N/A' : new Intl.NumberFormat().format(project.youtube.views) }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Likes</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.youtube.likes === null ? 'N/A' : new Intl.NumberFormat().format(project.youtube.likes) }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Comments</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path
                            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.youtube.comments === null ? 'N/A' : new
                            Intl.NumberFormat().format(project.youtube.comments) }}
                    </p>
                </li>
            </ul>
            <ul class="flex flex-wrap justify-between gap-7">
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Tech Stack</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                        <path
                            d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <div class="flex flex-wrap gap-2 text-sm">
                        <p v-for="tech in project.tech_stack">{{ tech }}</p>
                    </div>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Release</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <p class="text-sm">{{ project.github.created_at === null ? 'N/A' : project.github.created_at }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Modified</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <p class="text-sm">{{ project.github.updated_at === null ? 'N/A' : project.github.updated_at }}
                    </p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Licenses</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                    </svg>
                    <div class="flex flex-wrap gap-2 text-sm">
                        <p v-if="project.github.licenses === null">N/A</p>
                        <a class="underline" v-else :href="license.url" v-for="license in project.github.licenses">{{
                            license.name }}</a>
                    </div>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Size</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438V7.5z" />
                        <path
                            d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    </svg>
                    <p class="text-sm">{{ project.github.size === null ? 'N/A' : project.github.size }} {{
                        project.github.size_unit }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Starts</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden"
                        viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <p class="text-sm">
                        {{ project.github.stars === null ? 'N/A' : new Intl.NumberFormat().format(project.github.stars) }}
                    </p>
                </li>
            </ul>
            <ul class="flex w-full flex-col flex-wrap items-center justify-center gap-7 md:flex-row md:justify-evenly">
                <li v-for="asset in project.assets" v-motion-pop-visible-once>
                    <img class="aspect-video w-full rounded-lg object-cover object-center lg:w-80" :src="asset.url"
                        :alt="asset.alt" v-if="asset.mimetype === 'image/avif'" />
                    <video autoplay muted loop class="aspect-video w-full rounded-lg lg:w-80" v-else>
                        <source :src="asset.url" :type="asset.mimetype" />
                    </video>
                </li>
            </ul>
        </main>
    </section>
</template>