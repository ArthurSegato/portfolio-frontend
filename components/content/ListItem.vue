<script setup>
defineProps({
    path: String,
    text: String,
})
</script>

<template>
    <li class="my-1">
        <NuxtLink :to="path" class="relative group flex w-fit">
            {{ text }}
            <div
                class="absolute left-0 bottom-0 w-full h-1 bg-current transition-all ease-in group-hover:translate-y-1 group-hover:translate-x-2">
            </div>
        </NuxtLink>
    </li>
</template>