<script setup>
defineProps({
    title: String,
    date: String,
})
</script>

<template>
    <div class="my-4">
        <div class="w-full flex items-end justify-between">
            <h1 class="break-words text-5xl font-black transition-all ease-in break-all w-full">
                {{ title }}
            </h1>
            <time :datetime="date" class="text-lg font-thin border-r-4 pr-2 ">
                <i>
                    {{ date }}
                </i>
            </time>
        </div>
        <hr class="h-1 m-1 bg-current w-1/4">
    </div>
</template>