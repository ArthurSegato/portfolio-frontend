<script setup lang="ts">
defineProps({
    items: String,
})

</script>

<template>
    <div class="flex flex-row gap-2 flex-wrap">
        <p v-for="item in items" class="px-2 py-1 rounded-3xl w-fit text-sm border">
            {{ item }}
        </p>
    </div>
</template>