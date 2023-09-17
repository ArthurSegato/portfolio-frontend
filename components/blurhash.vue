<!-- Based on https://github.com/ledermann/blurhash-vue -->
<script setup lang="ts">
import { decode } from 'blurhash'

const container = ref(null)
const canvas = ref(null)
const image = ref(null)

const isLoaded = ref(false)

const props = defineProps<{
    src: string
    width: number
    height: number
    alt?: string
    loading: string
    blurhash: string
}>()

onMounted(() => {
    const pixels = decode(props.blurhash, props.width, props.height)
    const imageData = new ImageData(pixels, props.width, props.height)
    const context = canvas.value.getContext('2d')
    context.putImageData(imageData, 0, 0)

    image.value.onload = () => (isLoaded.value = true)
})
</script>

<template>
    <div ref="container">
        <div class="relative h-full w-full">
            <canvas
                ref="canvas"
                class="absolute inset-0 left-0 top-0 z-10 h-full w-full"
                :width="width"
                :height="height"
                :class="isLoaded ? 'opacity-0' : 'opacity-100'"
            ></canvas>
            <img
                ref="image"
                :src="src"
                :width="width"
                :height="height"
                :alt="alt"
                :loading="loading"
                class="absolute left-0 top-0 z-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out"
                :class="isLoaded ? 'opacity-100' : 'opacity-0'"
            />
        </div>
    </div>
</template>
