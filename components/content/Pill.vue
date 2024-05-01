<script setup lang="ts">
defineProps({
    items: Array,
})

</script>

<template>
    <ul class="flex flex-row gap-2 flex-wrap">
        <li v-for="item in items" class="px-2 py-1 rounded-3xl w-fit text-sm border">
            {{ item }}
        </li>
    </ul>
</template>