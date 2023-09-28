<script setup lang="ts">
const { isError } = defineProps(['isError'])
</script>

<template>
    <div
        class="fixed bottom-0 m-3 rounded-md border border-[#181A1B] px-3 py-4 backdrop-blur-xl dark:border-stone-100 md:m-5 md:px-10">
        <div v-if="isError" class="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[32px] w-[32px] fill-[#181A1B] dark:fill-stone-100"
                viewBox="0 0 16 16">
                <path
                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <p class="text-sm md:text-base">Something went wrong trying to send your message, try again in a few
                minutes.</p>
        </div>
        <div v-else class="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[32px] w-[32px] fill-[#181A1B] dark:fill-stone-100"
                viewBox="0 0 16 16">
                <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            <p class="text-sm md:text-base">I've received your message, thanks for getting in touch!</p>
        </div>
    </div>
</template>