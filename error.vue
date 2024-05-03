<script setup lang="ts">
useHead({
    title: 'Well, fuck.',
})
</script>

<template>
    <main class="flex flex-col min-h-screen w-full bg-black/80 text-[#eadac0] justify-center items-center select-none">
        <h1 class="text-9xl font-black">nuh uh</h1>
        <p class="text-xl">You know you should not be here...</p>
        <NuxtLink to="/"
            class="my-2 py-2 flex w-full select-none items-center gap-1 rounded-md border px-4 transition-all ease-in hover:gap-0 lg:w-fit border-current">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10"
                    stroke-linecap="round" stroke-width="2" d="M8 12L15 5M8 12L15 19">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" />
                </path>
            </svg>
            <p> but I got u back homie
            </p>
        </NuxtLink>
        <div class="fixed inset-0 w-full h-full -z-10">
            <NuxtImg src="/img/cat.gif" class="w-full h-full object-cover object-top" />
        </div>
    </main>
</template>
