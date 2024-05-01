<script setup>
defineProps({
    items: Array,
})
</script>

<template>
    <p v-for="item in items" class="my-3">
        {{ item }}
    </p>
</template>