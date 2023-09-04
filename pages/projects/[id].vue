<script setup lang="ts">
import { reactive } from 'vue'
import { useFetch, useColorMode } from '@vueuse/core'

const route = useRoute()

const theme = useColorMode()

const runtimeConfig = useRuntimeConfig()

const projectData = reactive({
    name: undefined,
    description: undefined,
    category: undefined,
    visits: undefined,
    downloads: undefined,
    revenue: undefined,
    stars: undefined,
    techStack: undefined,
    license: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    size: undefined,
    links: undefined,
})

const { data, onFetchResponse } = useFetch(`${runtimeConfig.public.apiBase}/projects/${route.params.id}`).get().json()

onFetchResponse(() => {
    projectData.name = data.value.name
    projectData.description = data.value.description
    projectData.category = data.value.category
    projectData.visits = data.value.visits
    projectData.downloads = data.value.downloads
    projectData.revenue = data.value.revenue
    projectData.stars = data.value.stars
    projectData.techStack = data.value.techStack
    projectData.license = data.value.license
    projectData.createdAt = data.value.createdAt.split('T')[0]
    projectData.updatedAt = data.value.updatedAt.split('T')[0]
    projectData.size = data.value.size
    projectData.links = data.value.links
})
</script>

<template>
    <span class="fixed top-0 z-20 h-2 w-screen bg-red-500 transition-colors duration-200 ease-in-out sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500"></span>
    <section class="box-border w-full scroll-smooth bg-stone-100 font-['Inter'] text-[#181A1B] selection:bg-[#181A1B] selection:text-stone-100 dark:bg-[#181A1B] dark:text-stone-100 dark:selection:bg-stone-100 dark:selection:text-[#181A1B]">
        <header class="relative flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat" style="background-image: url(https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg)">
            <h1 class="text-4xl font-thin text-stone-100 md:text-6xl xl:text-8xl">{{ projectData.name }}</h1>
            <NuxtLink to="/" class="group absolute left-8 top-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11 fill-stone-100 transition-all duration-200 ease-in-out group-hover:fill-stone-300 md:h-7 md:w-7" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-10 h-11 w-11 animate-bounce fill-stone-100 md:h-7 md:w-7" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
        </header>
        <main class="flex w-full flex-col gap-7 p-7 md:p-12 xl:px-24 2xl:px-48">
            <ul class="flex flex-col gap-7">
                <li>
                    <h3 class="text-xl font-bold">Description</h3>
                    <p class="text-sm">{{ projectData.description }}</p>
                </li>
                <li>
                    <h3 class="text-xl font-bold">Links</h3>
                    <div class="flex flex-wrap gap-2 text-sm">
                        <a class="underline" :href="link.url" v-for="link in projectData.links">{{ link.name }}</a>
                    </div>
                </li>
            </ul>
            <ul class="flex flex-wrap justify-between gap-7 md:-order-1">
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Category</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                    </svg>
                    <p class="text-sm">{{ projectData.category }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Visits</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <p class="text-sm">{{ projectData.visits }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Downloads</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    <p class="text-sm">{{ projectData.downloads }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Revenue/Donations</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                    <p class="text-sm">$ {{ projectData.revenue }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Starts</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <p class="text-sm">{{ projectData.stars }}</p>
                </li>
            </ul>
            <ul class="flex flex-wrap justify-between gap-7">
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Tech Stack</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <p class="text-sm">{{ projectData.techStack }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Release</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <p class="text-sm">{{ projectData.createdAt }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Modified</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <p class="text-sm">{{ projectData.updatedAt }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">License</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                    </svg>
                    <p class="text-sm">{{ projectData.license }}</p>
                </li>
                <li class="flex flex-col items-center md:items-start">
                    <h3 class="hidden text-xl font-bold md:inline">Size</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 fill-[#181A1B] dark:fill-stone-100 md:hidden" viewBox="0 0 16 16">
                        <path d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438V7.5z" />
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    </svg>
                    <p class="text-sm">{{ projectData.size }}</p>
                </li>
            </ul>
            <ul class="flex w-full flex-col flex-wrap justify-center gap-7 md:flex-row md:justify-evenly">
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
                <li>
                    <img class="aspect-video w-full rounded-lg lg:w-80" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" />
                </li>
            </ul>
        </main>
    </section>
</template>
