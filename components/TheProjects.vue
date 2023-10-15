<script setup lang="ts">
const { data: projectsList } = await useFetch('/api/projects', {
    lazy: true
});
</script>

<template>
    <section id="projects" class="flex w-full items-center justify-center p-7 md:p-14 lg:py-28">
        <div class="flex w-full flex-col flex-wrap content-evenly justify-evenly gap-8 md:flex-row xl:w-4/5 2xl:w-3/4">
            <LazyTheProjectsCard v-for="project in projectsList" :project="project" />
        </div>
    </section>
</template>
