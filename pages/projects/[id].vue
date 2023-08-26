<script setup lang="ts">
import { useFetch } from '@vueuse/core'

const runtimeConfig = useRuntimeConfig()

const fetchProjectsList = useFetch(`${runtimeConfig.public.apiBase}/projects/`).get().json()
</script>

<template>
    <span class="fixed top-0 z-20 h-2 w-screen bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500"></span>
    <section class="box-border min-h-screen w-full scroll-smooth bg-stone-100 font-['Inter'] text-[#181A1B] dark:bg-[#181A1B] dark:text-stone-100">
        <header class="relative flex h-80 w-full items-center justify-center bg-cover bg-center bg-no-repeat" style="background-image: url(https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg)">
            <h1 class="text-4xl font-thin text-stone-100">Project Name</h1>
            <NuxtLink to="/" class="group absolute left-7 top-7">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11 fill-stone-100 transition-all duration-200 ease-in-out group-hover:fill-stone-300 md:h-7 md:w-7" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </NuxtLink>
        </header>
        <main class="flex h-full w-full items-center justify-center bg-transparent p-7">
            <div class="flex w-full sm:w-5/6 lg:w-2/3">
                <div class="flex w-full flex-col">
                    <div>
                        <h3 class="text-xl font-bold">Description</h3>
                        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula volutpat rhoncus. Praesent non ultrices nulla. Curabitur faucibus vestibulum arcu, id commodo ex faucibus ac. Pellentesque sed egestas enim. Aliquam purus nulla, cursus at lacus et, pharetra ullamcorper lectus. Pellentesque malesuada eu massa et vestibulum. Vestibulum id felis in est placerat vestibulum. Donec rhoncus, dui at placerat aliquam, libero metus feugiat libero, eget vestibulum nunc ante et odio.</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">Links</h3>
                        <ul class="flex flex-wrap gap-2 text-sm">
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                            <li><a href="http://">Github.com</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-wrap gap-7">
                        <div>
                            <h3 class="text-xl font-bold">Category</h3>
                            <p class="text-sm">Games</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Visits</h3>
                            <p class="text-sm">10</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Downloads</h3>
                            <p class="text-sm">10</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Revenue/Donations</h3>
                            <p class="text-sm">$ 5.00</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-7">
                        <div>
                            <h3 class="text-xl font-bold">Tech Stack</h3>
                            <p class="text-sm">Vue 3 - Prisma - Nestjs</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">License</h3>
                            <p class="text-sm">MIT</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Release</h3>
                            <p class="text-sm">1999-09-28</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Modified</h3>
                            <p class="text-sm">2023-08-23</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Size</h3>
                            <p class="text-sm">1.4 kB</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Starts</h3>
                            <p class="text-sm">4</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Media</h3>
                    <ul class="flex flex-col gap-2 md:gap-7">
                        <li>
                            <img class="w-100 aspect-video rounded-lg md:w-72" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" srcset="" />
                        </li>
                        <li>
                            <img class="w-100 aspect-video rounded-lg md:w-72" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" srcset="" />
                        </li>
                        <li>
                            <img class="w-100 aspect-video rounded-lg md:w-72" src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg" alt="" srcset="" />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </section>
</template>
