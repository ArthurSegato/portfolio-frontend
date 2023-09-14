<script setup lang="ts">
const props = defineProps<{
    project: any
}>()
</script>

<template>
    <NuxtLink :to="`/projects/${project.id}`" v-motion-pop-visible-once class="group flex select-none flex-col items-center">
        <div class="h-[250px] w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]">
            <img class="h-full w-full object-cover object-center transition-all duration-[.25s] ease-in-out group-hover:scale-110" :src="project.card.url" v-if="project.card.mimetype === 'image/avif'" />
            <video width="250" height="350" autoplay muted loop class="h-full w-full object-cover object-center transition-all duration-[.25s] ease-in-out group-hover:scale-110" v-else>
                <source :src="project.card.url" :type="project.card.mimetype" />
            </video>
        </div>
        <div class="z-10 -mt-12 w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]">
            <h2 class="text-lg font-semibold">{{ project.name }}</h2>
            <p class="text-sm leading-normal">{{ project.description }}</p>
        </div>
    </NuxtLink>
</template>
