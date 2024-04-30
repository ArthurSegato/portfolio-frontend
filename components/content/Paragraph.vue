<script setup>
defineProps({
    items: String,
})
</script>

<template>
    <p v-for="item in items" class="leading-relaxed my-1 text-balance">
        {{ item }}
    </p>
</template>