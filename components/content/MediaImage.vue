<script setup>
defineProps({
    path: String,
    alt: String,
})
</script>

<template>
    <figure>
        <NuxtImg :src="path" :alt="alt" :title="alt" class="w-full lg:max-w-2xl" />
        <figcaption class="border-l-4 pl-4 my-4 border-current font-light">
            <i>
                <slot />
            </i>
        </figcaption>
    </figure>
</template>