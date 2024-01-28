<template>
    <LazyLayoutHeader />
    <main class="flex flex-col min-h-screen w-full items-center justify-center bg-base-300 px-2 py-28">
        <slot />
    </main>
    <LazyLayoutFooter />
    <LazyLayoutDialog />
</template>